import express from "express"
import { modifyAppointment } from "../controllers/Modify.controller.js"

router = express.Router()

router.post("/appointments/:id", modifyAppointment )

export const modifyRoutes = router

