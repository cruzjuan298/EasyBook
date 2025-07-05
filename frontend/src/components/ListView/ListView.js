import styles from "../../styles/listview.module.css"
import ListAppointment from "../Appointments/ListAppointment"

export default function ListView({ appointments, onDeleteClick }) {
    
    return(
        <div className={styles.listViewDiv}>
            <h1 className={styles.listTitle}>Upcoming Appointments</h1>
            <div>
            {appointments.map((appointment) => {
                return <ListAppointment onDeleteClick={onDeleteClick} key={appointment._id} appointmentId={appointment._id} client={appointment.clientName} time={appointment.time} service={appointment.service} staffMember={appointment.staffMember} />
            })}
            </div>
        </div>
    )
}