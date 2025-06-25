import { MongoClient, ServerApiVersion } from "mongodb"
import dotenv from "dotenv"

dotenv.config({ path: "../../.env"});
const uri = process.env.URI;
const dbName = process.env.DB_NAME;

if (!uri) {
  console.error("CRITICAL ERROR: MongoDB URI is not defined. Please define it and try again.");
  process.exit(1);
}

if (!dbName) {
  console.error("CRITICAL ERROR: MongoDB database could not be found based on the name provided. Please change it and try again.");
  process.exit(1);
}

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

let _db;
let _client;

async function connectToDatabase(){
    if (_db){
      console.log("Already connected to Mongodb.");
      return _db;
    }
    
    try {
    _client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      }
    });

    await _client.connect();
    _db = _client.db(dbName);
    return _db;

  } catch (error) {
    console.error("There has been a problem trying to connect to the database: ", error);
    process.exit(1);
  }
}


async function closeDatabaseConnection() {
  if (_client) {
    await _client.close();
    _db = null;
    _client = null;
  }
}

export {connectToDatabase, closeDatabaseConnection, _db as db};