import { useState } from "react"
import styles from "../../styles/board.module.css"
import BoardAppointment from "../Appointments/BoardAppointment"

export default function Board({ title, addBookingUI, loadedAppointments = [] }){
    return (
        <div className={styles.boardDiv}>
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.appointments}>
                {loadedAppointments.map((appointment) => {
                    return <BoardAppointment key={appointment._id} clientName={appointment.clientName} date={appointment.date} service={appointment.service} time={appointment.time}/>
                })}
            </div>
            <button className={styles.addBookingButton} onClick={addBookingUI}>
            + Add Booking
            </button>
        </div>
    )
}