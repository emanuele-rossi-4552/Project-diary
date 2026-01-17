import { dbPromise } from "./db";

export async function getCommentsByActivity(activityId) {
	const db = await dbPromise;
	return db.getAllFromIndex("comments", "by-activity", activityId);
}

export async function addComment(comment) {
	const db = await dbPromise;
	await db.put("comments", comment);
}

export async function deleteComment(commentId) {
	const db = await dbPromise;
	await db.delete("comments", commentId);
}

export async function deleteCommentsByActivity(activityId) {
	const db = await dbPromise;
	const tx = db.transaction("comments", "readwrite");
	const index = tx.store.index("by-activity");
	for await (const cursor of index.iterate(activityId)) {
		cursor.delete();
	}
	await tx.done;
}
