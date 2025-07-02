import styles from "@/styles/listappointment.module.css"
import EditButton from "../Edit/editbutton"

export default function ListAppointment({ time, client, service, staffMember }) {
    return(
        <div className={styles.appointmentDiv}>
            <div className={styles.border}></div>
            <div className={styles.appointmentText}>
                <p className={styles.headerText}>{time} - {client}</p>
                <p className={styles.subsectionText}>{service} with {staffMember}</p>
            </div>
            <div className={styles.statusEdit}>
                <EditButton />
            </div>
        </div>
    )
}