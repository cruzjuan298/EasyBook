import styles from "../../styles/boardview.module.css"
import Board from "./Board" 

export default function BoardView( { onDeleteClick, onAddBookingClick, boardAppointments }) {
    
    return (
        <div className={styles.boardViewDiv}>
            <h1 className={styles.title}>Appointment Pipeline</h1>
            <div className={styles.boards}>
                <Board title={"New Bookings"} onDeleteClick={onDeleteClick} addBookingUI={onAddBookingClick} loadedAppointments={boardAppointments} />
                <Board title={"Confirmed"} onDeleteClick={onDeleteClick} addBookingUI={onAddBookingClick}/>
                <Board title={"Completed"} onDeleteClick={onDeleteClick} addBookingUI={onAddBookingClick} />
            </div>
        </div>
    )
}