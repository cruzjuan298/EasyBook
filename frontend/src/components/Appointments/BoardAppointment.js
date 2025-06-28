import styles from "../../styles/boardAppointment.module.css"

export default function BoardAppointment({clientName, date, service, time}){
    return(
        <div className={styles.bAppointmentDiv}>
            <h1 className={styles.appointmentClientName}>{clientName} - {service}</h1>
            <h2 className={styles.date}>{date}, {time}</h2>
        </div>
    )
}