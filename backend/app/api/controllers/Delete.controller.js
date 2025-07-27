import { db } from "../../db/connection.js";
import { ObjectId } from "mongodb";

export async function deleteAppointment(req, res, next){
    try{
    const appointmentIdData = req.params.id

    if (!ObjectId.isValid(appointmentIdData)) {
        console.warn("Attempting to modify appointment with invalid object id format");
        return res.status(400).json({                
            message : "Invalid appointment ID format",
            success : false
        })
    }
    
    const appointmentId = new ObjectId(appointmentIdData)
    const result = await db.collection("appointment").deleteOne({ "_id" : appointmentId})
    
    if (result.deletedCount === 0) {
        return res.status(404).json({
            message : "Appointment not found",
            succes: false
        })
    }
    
    return res.status(204).json({
        message : "Item has been deleted successfully",
        succes: result
    })


    } catch (error) {
        console.error("Error in deleteAppointment route:", error);
        next(error);
    }

}