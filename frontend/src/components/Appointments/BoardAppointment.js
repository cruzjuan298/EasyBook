import styles from "../../styles/boardAppointment.module.css"

export default function BoardAppointment({title, date, description}){
    return(
        <div className={styles.bAppointmentDiv}>
            <h1 className={styles.appointmentTitle}>Client John Doe - consulation</h1>
            <h2 className={styles.date}>June 8, 10:00 AM</h2>
        </div>
    )
}