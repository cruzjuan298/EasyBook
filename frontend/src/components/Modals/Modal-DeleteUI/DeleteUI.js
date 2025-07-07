import styles from "@/styles/deleteUI.module.css"

export default function DeleteConfirmation({ onCloseUI, onDelete, appointmentId }) {
    
    const handleOnDelete = () => {
        onDelete(appointmentId)
    }    
    return(
        <div className={styles.confirmationDiv}>
            <h1 className={styles.title} >Delete Confirmation</h1>
            <h2 className={styles.messageHighlight} >Are you sure you want to delete this appointment? Confirmed Appointments will be refunded and your reliabilty score will go down.</h2>
            <div className={styles.buttonsDiv}>
                <button type="button" className={styles.cancelButton} onClick={onCloseUI} >Cancel</button>
                <button type="submit" className={styles.deleteButton} onClick={handleOnDelete} >Delete</button>
            </div>
        </div>
    )
}