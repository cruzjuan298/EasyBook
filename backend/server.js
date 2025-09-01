import express from 'express'
import "dotenv/config"
import cors from "cors"
import cookieParser from 'cookie-parser'
import CookiesService from './app/services/Cookies.service.js'
import { connectToDatabase, closeDatabaseConnection, db } from './app/db/connection.js'
import { addCollection } from "./app/db/createCollection.js"
import { authMiddleware } from './app/middleware/Auth.middleware.js'
// import all app routes below
import { bookRoute} from "./app/api/routes/Book.route.js"
import { retrieveRoutes } from './app/api/routes/Retrieve.route.js'
import { deleteRoutes } from './app/api/routes/Delete.route.js'
import { authRoutes } from './app/api/routes/Auth.route.js'
import { googleCalendarRouter } from './app/api/routes/GoogleCalendar.route.js'

const app = express()

app.use(cookieParser())
app.use(express.json())
const PORT = process.env.PORT;

app.use(cors({
    origin: process.env.FRONTEND_BASE_URL,
    methods: ['GET', 'POST', 'DELETE', 'PUT', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization', "Cookie"],
    credentials: true
}));

app.use("/api", bookRoute);
app.use("/api", retrieveRoutes);
app.use("/api", deleteRoutes);
app.use("/api/auth", authRoutes);

app.use("/api", authMiddleware);
app.use("/api", googleCalendarRouter);

async function startApplication() {
    try {
        await connectToDatabase();
        await addCollection("appointment");
        await addCollection("staffMembers");
        await addCollection("services");

        app.listen(PORT, () => {
            console.log(`Server has successfully started and App is listening on port ${PORT}`);
        })
    } catch (error) {
        console.log("Application failed to start due to unhandled error: ", error);
        process.exit(1);
    }
}

startApplication()

const gracefulShutdown = async (signal) => {
    console.log(`${signal} signal receieved: Initiating graceful shutdown...`)
    await closeDatabaseConnection();
    process.exit(0);
}

process.on("SIGINT", () => gracefulShutdown("SIGINT"));
