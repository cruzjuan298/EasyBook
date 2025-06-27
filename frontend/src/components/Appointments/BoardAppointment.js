import styles from "../../styles/boardAppointment.module.css"

export default function BoardAppointment({title, date}){
    return(
        <div className={styles.bAppointmentDiv}>
            <h1 className={styles.appointmentTitle}>{title}</h1>
            <h2 className={styles.date}>{date}</h2>
        </div>
    )
}