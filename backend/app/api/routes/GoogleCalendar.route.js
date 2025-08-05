import express from "express"
import { getCalendarInfo } from "../controllers/GoogleCalendar.controller.js"

const router = express.Router()

router.get("/google-calendar-info/events", getCalendarInfo);

export const googleCalendarRouter = router

