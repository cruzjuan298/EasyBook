import { db } from "../../db/connection.js"
import { retrieveFromAllCollection } from "../../utils/dbHelpers.js"
import { ObjectId } from "mongodb"

export async function getAppointments(req, res, next){
    try {
        const appointmentsData = await retrieveFromAllCollection("appointment");
        res.status(201).json({
            message : "Appointments retrieved successfully",
            appointments: appointmentsData,
            success : true
        })
    } catch (error) {
        res.status(400).json({
            message: "No appointments avilable",
            errorMessge: error,
            success : false
        })
    }
}

export async function getAppointment(req, res, next) {
    try {
        const appointmentId = req.params.id;

        if (!ObjectId.isValid(appointmentId)) {
            console.warn("Attempted retrieval with invalid ObjectId format");
            return res.status(400).json({
                message : "Invalid appointment ID format",
                success : false
            });
        }

        const objectId = new ObjectId(appointmentId);
        const appointment =  await db.collection("appointment").findOne({ _id : objectId});

        if (!appointment) {
            console.log('Appointment with id not found');
            res.status(404).json({
                message : "Appointmenmt not found",
                success : false
            });
        }

        res.status(200).json({
            message : "Appointment retrieved succesfully",
            appointment : appointment,
            success : true
        });

    } catch (error) {
        res.status(400).json({
            message : "No appointment avilable",
            errorMessage : error,
            success : false
        });
    }
}

export async function getStaffMembers(req, res, next) {
    try {
        const staffMembersData = await db.collection("staffMembers")
        
        res.status(201).json({
            message: "Staff members retrieved successfully",
            staffMembers: staffMembersData,
            success : true 
        });
        
    } catch (error) {
        res.status(400).json({
            message: "No staff members avilable",
            errorMessge: error,
            success : false
        });
    }    
}