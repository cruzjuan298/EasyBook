import express from "express"
import { getAppointments, getAppointment, getStaffMembers } from "../controllers/Retrieve.controller.js"


const router = express.Router()

router.get("/appointments", getAppointments )

router.get("/appointments/:id", getAppointment)

router.get("/staffMembers", getStaffMembers )

export const retrieveRoutes = router;