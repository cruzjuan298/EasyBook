import styles from "../../styles/calenderView.module.css"
import DayRow from "./DayRow"

export default function CalenderView() {
    return(
        <div className={styles.calenderViewDiv}>
            <div className={styles.calenderDaysTitle}> 
                <div>Sun</div>
                <div>Mon</div>
                <div>Tue</div>
                <div>Wed</div>
                <div>Thu</div>
                <div>Fri</div>
                <div>Sat</div>
            </div>
            <div className={styles.DayTilesDiv}>
                <DayRow />
            </div>
        </div>
    )
}