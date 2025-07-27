import express from "express";
import { bookAppointment } from "../controllers/Book.controller.js";

const router = express.Router()

router.post("/book", bookAppointment )

export const bookRoute = router
