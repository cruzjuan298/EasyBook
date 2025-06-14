import styles from "../../styles/addui.module.css"

export default function AddUI(){
    return(
        <div className={styles.addDiv}>
            <h1 className={styles.newTitle}>Create New Appointment</h1>
            <input type="text"className={styles.clientInput} />
            <input type="text" className={styles.ServiceInput} />
            <div className={styles.timeDiv}>
                <input type="date" className={styles.dateInput} />
                <input type="time" className={styles.timeInput} />
            </div>
            <input type="text" className={styles.StaffMemberInput} />
        </div>
    )
}