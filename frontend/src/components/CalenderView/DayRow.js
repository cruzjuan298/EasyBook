import styles from "@/styles/dayRow.module.css"
import DayTile from "./DayTile"

export default function DayRow() {
    return(
        <div className={styles.DayRowDiv}>
            <DayTile day={1} />
            <DayTile day={2} />
        </div>
    )
}