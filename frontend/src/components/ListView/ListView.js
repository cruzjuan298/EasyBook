import styles from "../../styles/listview.module.css"

export default function ListView({ time }) {
    
    return(
        <div className={styles.listViewDiv}>
            <h1 className={styles.listTitle}>Upcoming Appointments</h1>
        </div>
    )
}