import styles from "../../styles/boardAppointment.module.css"
import EditButton from "../Edit/editbutton"

export default function BoardAppointment({clientName, date, service, time}){
    return(
        <div className={styles.bAppointmentDiv}>
            <div className={styles.container1}>
                <h1 className={styles.appointmentClientName}>{clientName} - {service}</h1>
                <h2 className={styles.date}>{date}, {time}</h2>                
            </div>

            <div className={styles.container2}>
                <EditButton />                
            </div>
        </div>
    )
}