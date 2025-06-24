import express from "express"
const router = express.Router()

router.post("/book", (req, res, next) => {
    const newAppointment = req.body;
    console.log(newAppointment);

    res.status(201).json({
        message: "Appointment created successfully",
        appointment : newAppointment
    })

})

export const bookRoute = router
