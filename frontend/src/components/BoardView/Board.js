import { useState } from "react"
import styles from "../../styles/board.module.css"
import BoardAppointment from "./BoardAppointment"
import AddUI from "./AddUI"

export default function Board({ title }){
    let initialAppointments = [];
    const [appointments, setAppointments] = useState(initialAppointments)
    const [addUI, setAddUIState] =useState(false)

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
            <button className={styles.addBookingButton} onClick={() => setAddUIState(true)}>
            + Add Booking
            </button>
        </div>
    )
}