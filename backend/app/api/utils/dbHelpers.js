import { db } from "../../db/connection.js"

export async function retrieveFromAllCollection(collectionName) {
    if (!db) {
        throw new Error("Database connection is not ready");
    }

    const document = await db.collection(collectionName).find().toArray();
    return document;
}
