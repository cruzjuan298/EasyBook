import styles from "../../styles/addui.module.css"

export default function AddUI(){
    return(
        <div className={styles.addDiv}>
            <h1 className={styles.newTitle}>Create New Appointment</h1>

            <div className={styles.titleDiv}>
                <label htmlFor="title">Title: </label>
                <input type="text"className={styles.clientInput} id="title" />
            </div>

            <div className={styles.serviceDiv}>
                <label htmlFor="service">Service: </label>
                <input type="text" className={styles.ServiceInput}  id="service" />
            </div>

            <div >
                <div className={styles.timeDiv}>
                    <label htmlFor="date">Date: </label>
                    <input type="date" className={styles.dateInput} id="date" />
                </div>
                <div className={styles.timeDiv}>
                    <label htmlFor="time">Time: </label>
                    <input type="time" className={styles.timeInput} id="time" />
                </div>
            </div>

            <div className={styles.staffMemberDiv}>
                <label htmlFor="staffMember">Staff Member: </label>
                <input type="text" className={styles.StaffMemberInput} id="staffMember" />
            </div>
            
            <input type="submit" />
        </div>
    )
}