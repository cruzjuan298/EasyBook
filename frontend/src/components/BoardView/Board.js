import { useState } from "react"
import styles from "../../styles/board.module.css"
import BoardAppointment from "../Appointments/BoardAppointment"

export default function Board({ title, addBookingUI, loadedAppointments }){
    const [appointments, setAppointments] = useState(loadedAppointments || []) // on loading, this is undefined so using an empty array makes this run smoothly


    return (
        <div className={styles.boardDiv}>
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.appointments}>
                {appointments.map((appointment) => {
                    return <BoardAppointment key={appointment._id} title={appointment.title} date={appointment.date} />
                })}
            </div>
            <button className={styles.addBookingButton} onClick={addBookingUI}>
            + Add Booking
            </button>
        </div>
    )
}