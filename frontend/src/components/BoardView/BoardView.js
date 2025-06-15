import styles from "../../styles/boardview.module.css"
import Board from "./Board" 

export default function BoardView( { onAddBookingClick }) {
    
    return (
        <div className={styles.boardViewDiv}>
            <h1 className={styles.title}>Appointment Pipeline</h1>
            <div className={styles.boards}>
                <Board title={"New Bookings"} addBookingUI={onAddBookingClick} />
                <Board title={"Confirmed"} addBookingUI={onAddBookingClick}/>
                <Board title={"Completed"} addBookingUI={onAddBookingClick} />
            </div>
        </div>
    )
}