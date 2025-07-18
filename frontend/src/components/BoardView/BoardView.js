import styles from "../../styles/boardview.module.css"
import Board from "./Board" 

export default function BoardView( { onDeleteClick, onAddBookingClick, boardAppointments }) {
    
    return (
        <div className={styles.boardViewDiv}>
            <h1 className={styles.title}>Appointment Pipeline</h1>
            <div className={styles.boards}>
                <Board title={"New Bookings"} onDeleteClick={onDeleteClick} addBookingUI={onAddBookingClick} loadedAppointments={boardAppointments} className={styles.newAppointments} buttonColor="blueButton" />
                <Board title={"Confirmed"} onDeleteClick={onDeleteClick} addBookingUI={onAddBookingClick} className={styles.confirmedAppointments} buttonColor="greenButton"/>
                <Board title={"Completed"} onDeleteClick={onDeleteClick} addBookingUI={onAddBookingClick} className={styles.completedAppointments} buttonColor="greyButton"/>
            </div>
        </div>
    )
}