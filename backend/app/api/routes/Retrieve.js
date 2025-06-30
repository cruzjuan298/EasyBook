import express from "express"
import { db } from "../../db/connection.js"
import { retrieveFromAllCollection } from "../utils/dbHelpers.js"
const router = express.Router()

router.get("/appointments", async function getAppointments(req, res, next){
    try {
        const appointmentsData = await retrieveFromAllCollection("appointment");
        res.status(201).json({
        appointments: appointmentsData
        })
    } catch (error) {
        res.status(400).json({
            message: "No appointments avilable",
            errorMessge: error
        })
    }
})

router.get("/appointment", async function getAppointment(req, res, next) {
    try {
        const appointmentId = req.body;
        // the id has to equal the id of the stored apppointment. change schema such that the key == id
    } catch (error) {
        res.status(400).json({
            message : "No appointment avilable",
            errorMessage : error
        })
    }
})

router.get("/staffMembers", async function getStaffMembers(req, res, next) {
    try {
        const staffMembersData = await db.collection("staffMembers")
        res.status(201).json({
        staffMembers: staffMembersData
        })
    } catch (error) {
        res.status(400).json({
            message: "No staff members avilable",
            errorMessge: error
        })
    }    
})

export const retrieveRoutes = router;