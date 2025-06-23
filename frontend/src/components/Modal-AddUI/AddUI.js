import styles from "../../styles/addui.module.css"
import config from "../../config"

export default function AddUI({ onCloseAUI }){
    const baseURL = config.api.baseURL;

    return(
        <div className={styles.addDiv}>
            <h1 className={styles.newTitle}>Create New Appointment</h1>
                       
                <div className={styles.titleDiv}>
                    <label htmlFor="title">Title: </label>
                    <input type="text"className={styles.clientInput} id="title" />
                </div>

                <div className={styles.serviceDiv}>
                    <label htmlFor="service">Service: </label>
                    <select type="text" className={styles.ServiceInput}  id="service">
                        <option>Haircut</option>
                        <option>Consultation</option>
                        <option>Massage</option>
                    </select>
                </div>

                <div className={styles.timeElementsDiv}>
                    <div className={styles.dateDiv}>
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

                <div className={styles.confirmDiv}>
                    <button className={styles.cancelButton} type="button" onClick={onCloseAUI}> Cancel </button>
                    <button className={styles.createButton} type="submit" > Create </button>
                </div>
        </div>
    )
}