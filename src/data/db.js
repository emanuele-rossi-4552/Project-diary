import { openDB } from "idb";

export const dbPromise = openDB("activity-db", 1, {
	upgrade(db) {
		if (!db.objectStoreNames.contains("activities")) {
			db.createObjectStore("activities", { keyPath: "id" });
		}
		if (!db.objectStoreNames.contains("comments")) {
			const store = db.createObjectStore("comments", { keyPath: "id" });
			store.createIndex("by-activity", "activityId");
		}
	},
});

// Debug per pulire il db
export async function clearAllStores() {
	const db = await dbPromise;
	const tx = db.transaction(["activities", "comments"], "readwrite");
	await Promise.all([
		tx.objectStore("activities").clear(),
		tx.objectStore("comments").clear(),
	]);
	await tx.done;
}
