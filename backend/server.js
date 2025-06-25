import express from 'express'
import "dotenv/config"
import cors from "cors"
import { connectToDatabase, closeDatabaseConnection, db } from './app/db/connection.js'
// import all app routes below
import { bookRoute } from "./app/api/routes/Book.js"

const app = express()

app.use(express.json())

const PORT = process.env.PORT;

app.use(cors({
    origin: process.env.FRONTEND_BASE_URL,
    methods: ['GET', 'POST', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use("/api", bookRoute)

async function startApplication() {
    try {
        await connectToDatabase();
        
        app.listen(PORT, () => {
            console.log(`Server has successfully started and App is listening on port ${PORT}`);
        })
    } catch (error) {
        console.log("Application failed to start due to unhandled error: ", error);
        process.exit(1);
    }
}

startApplication()

process.on("SIGINT", async () => {
    console.log("SIGINT signal received: Initiating gracful shutdown...");
    await closeDatabaseConnection();
    process.exit(0);
});