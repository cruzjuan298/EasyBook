import express from "express";
import { db } from "../../db/connection.js";

const router = express.Router();

router.delete("/appointments/:id", async function deleteAppointment(req, res, next){
    
} )

export const deleteRoutes = router