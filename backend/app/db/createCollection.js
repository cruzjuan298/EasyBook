import { connectToDatabase, db } from "./connection.js"

async function addCollection(collectionName) {
    try {
        const collection = await db.listCollections({name : collectionName}).toArray();
        if (collection.length > 0) {
            console.log("Collection already inserted");
            return
         } else await db.createCollection(collectionName); 
    } catch (error) {
        console.log("Error in trying to insert into the db: ", error)
    }
}

export {addCollection};