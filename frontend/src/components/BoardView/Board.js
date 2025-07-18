import { useState } from "react"
import styles from "../../styles/board.module.css"
import BoardAppointment from "../Appointments/BoardAppointment"

export default function Board({ onDeleteClick, title, addBookingUI, loadedAppointments = [], className, buttonColor }){
    return (
        <div className={className}>
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.appointments}>
                {loadedAppointments.map((appointment) => {
                    return <BoardAppointment onDeleteClick={onDeleteClick} key={appointment._id} appointmentId={appointment._id} clientName={appointment.clientName} date={appointment.date} service={appointment.service} time={appointment.time}/>
                })}
            </div>
            <button className={`${styles.addBookingButton} ${buttonColor ? styles[buttonColor] : ''}`} onClick={addBookingUI}>
            + Add Booking
            </button>
        </div>
    )
}