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