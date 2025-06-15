import { useState } from "react"
import styles from "../../styles/board.module.css"
import BoardAppointment from "./BoardAppointment"

export default function Board({ title, addBookingUI }){
    let initialAppointments = [];
    const [appointments, setAppointments] = useState(initialAppointments)

    // key is only for testing purposes
    function addBooking({title, date, description}){
        setAppointments([
            ...appointments,
            <BoardAppointment title={title} date={date} description={description} key={appointments.length}/>
        ])
    }

    return (
        <div className={styles.boardDiv}>
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.appointments}>
                {appointments}
            </div>
            <button className={styles.addBookingButton} onClick={addBookingUI}>
            + Add Booking
            </button>
        </div>
    )
}