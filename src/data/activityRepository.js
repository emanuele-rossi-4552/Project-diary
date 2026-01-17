import { dbPromise } from "./db";

export async function getAllActivities() {
	const db = await dbPromise;
	return db.getAll("activities");
}

export async function addActivity(activity) {
	const db = await dbPromise;
	await db.put("activities", activity);
}

export async function deleteActivity(id) {
	const db = await dbPromise;
	await db.delete("activities", id);
}
