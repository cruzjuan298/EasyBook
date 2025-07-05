import { ObjectId } from "mongodb";
import { db } from "../../db/connection.js"
import express from "express"

router = express.Router()

router.post("/modify:appointment", async function modifyAppointment(req, res, next) {
    try {
        const appointmentIdData = req.parms.id;
        
        if (!ObjectId.isValid(appointmentIdData)) {
            console.warm("Attempting to modify appointment with invalid object id format");
            res.status(400).json({
                message : "Invalid appointment ID format",
                success : false
            })
        }

        const appointmentId = ObjectId(appointmentIdData);
        const modifyInfo = req.body;
        // change only the neccessary info

        const result = db.collection("appointment").updateOne({_id : appointmentId}, {$set: {clientName : modifyInfo}})
        

    } catch (error) {
        console.error("Error in trying to modify this appointment: ", error);
        next(error);
    }
})

