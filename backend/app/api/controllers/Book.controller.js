import { db } from "../../db/connection.js";

export async function bookAppointment(req, res, next) {
    try {
        const appointmentData = req.body;

        const appointmentCollection = db.collection("appointment");
        const result  = await appointmentCollection.insertOne(appointmentData);

        res.status(201).json({
            message: `Successfully added appointment`,
            resultID: result.insertedId,
            success : true
        })
        
    } catch (error) {
        console.error("Error inserting appointment: ", error);
        next(error);
    }
}
