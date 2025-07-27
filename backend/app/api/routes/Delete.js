import express from "express";
import { deleteAppointment } from "../controllers/Delete.controller.js";

const router = express.Router();

router.delete("/appointments/:id", deleteAppointment )

export const deleteRoutes = router