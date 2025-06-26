import express from "express"
import { db } from "../../db/connection.js"

const router = express.Router()

router.get("/appointments", async function getAppointments(req, res, next){

})

router.get("/staffMembers", async function getStaffMembers(req, res, next) {

})

export const retrieveRoutes = router;