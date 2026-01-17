import { createContext, useContext, useEffect, useState } from "react";

import {
	getAllActivities,
	addActivity,
	deleteActivity
} from "../activityRepository";

import {
	getCommentsByActivity,
	addComment,
	deleteCommentsByActivity,
	deleteComment
} from "../commentRepository";

import { dbPromise } from "../db";

const AppDataContext = createContext();

export function AppDataProvider({ children }) {

	const [activities, setActivities] = useState([]);
	const [comments, setComments] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function loadInitialData() {
			const storedActivities = await getAllActivities();
			setActivities(storedActivities);
			setLoading(false);
		}
    	loadInitialData();
	},[]);

	async function createActivity({ nome, descrizione, stato }) {
		const activity = {
			id: crypto.randomUUID(),
			nome,
			descrizione,
			stato,
			createdAt: Date.now()
		};
		await addActivity(activity);
		setActivities(prev => [...prev, activity]);
	}

	async function removeActivity(activityId) {
		await deleteActivity(activityId);
		await deleteCommentsByActivity(activityId);
		setActivities(prev => prev.filter(a => a.id !== activityId));
		setComments([]);
	}

	async function loadComments(activityId) {
		const activityComments = await getCommentsByActivity(activityId);
		setComments(activityComments);
	}

	async function createComment(activityId, text) {
		const comment = {
			id: crypto.randomUUID(),
			activityId,
			text,
			createdAt: Date.now()
		};
		await addComment(comment);
		// Aggiorniamo solo se stiamo già visualizzando quei commenti
		setComments(prev => [...prev, comment]);
  	}

	async function removeComment(commentId) {
		await deleteComment(commentId);
		setComments(prev => prev.filter(c => c.id !== commentId));
  	}

	async function updateActivityState(activityId, newState) {
		setActivities(prev => prev.map(a => a.id === activityId ? { ...a, stato: newState } : a));
		const db = await dbPromise;
		const activity = await db.get("activities", activityId);
		if (activity) {
			activity.stato = newState;
			await db.put("activities", activity);
		}
	}

	return (
	<AppDataContext.Provider value={{
		// stato
		activities,
		comments,
		loading,

		// attività
		createActivity,
		removeActivity,
		updateActivityState,

		// commenti
		loadComments,
		createComment,
		removeComment
	}}>
		{children}
	</AppDataContext.Provider>
	);
}

export function useAppData() {
	return useContext(AppDataContext);
}
