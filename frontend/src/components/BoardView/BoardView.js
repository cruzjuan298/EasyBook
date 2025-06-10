import styles from "./boardview.module.css"
import Board from "./Board" 

export default function BoardView() {
    
    return (
        <div className={styles.boardViewDiv}>
            <h1 className={styles.title}>Appointment Pipeline</h1>
            <div className={styles.boards}>
                <Board title={"Upcoming"} />
                <Board title={"Confirmed"} />
                <Board title={"Completed"} />
            </div>
        </div>
    )
}