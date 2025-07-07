import styles from "@/styles/listappointment.module.css"
import EditButton from "../Edit/editButton"
import DeleteButton from "../Edit/deleteButton"

export default function ListAppointment({ time, client, service, staffMember, onDeleteClick, appointmentId }) {
    const handleDeleteEvent = () => {
        onDeleteClick(appointmentId);
    }
    return(
        <div className={styles.appointmentDiv}>
            <div className={styles.border}></div>
            <div className={styles.appointmentText}>
                <p className={styles.headerText}>{time} - {client}</p>
                <p className={styles.subsectionText}>{service} with {staffMember}</p>
            </div>
            <div className={styles.statusEdit}>
                <DeleteButton onDelete={handleDeleteEvent} />
                <EditButton  />
            </div>
        </div>
    )
}