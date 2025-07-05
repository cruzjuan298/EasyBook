import styles from "../../styles/boardAppointment.module.css"
import EditButton from "../Edit/editButton"
import DeleteButton from "../Edit/deleteButton"
import DeleteConfirmation from "@/components/Modals/Modal-DeleteUI/DeleteUI"

export default function BoardAppointment({ onDeleteClick, clientName, date, service, time, appointmentId}){
    return(
        <div className={styles.bAppointmentDiv}>
            <div className={styles.container1}>
                <h1 className={styles.appointmentClientName}>{clientName} - {service}</h1>
                <h2 className={styles.date}>{date}, {time}</h2>                
            </div>

            <div className={styles.container2}>
                <DeleteButton onDeleteClick={onDeleteClick} appointmentId={appointmentId} />
                <EditButton />                
            </div>
        </div>
    )
}