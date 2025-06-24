import express from 'express'
// import all app routes below
import { bookRoute } from "./app/api/routes/Book.js"
import "dotenv/config"
import cors from "cors"

const app = express()

app.use(express.json())

const PORT = process.env.PORT;

app.use(cors({
    origin: process.env.FRONTEND_BASE_URL,
    methods: ['GET', 'POST', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use("/api", bookRoute)

app.listen(PORT, (error) => {
    if (!error) { 
        console.log("Server has successfully started and App is listening on port " + PORT);
    } else console.error("Error has occurred, server failed to start", error);
} )
