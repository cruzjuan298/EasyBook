import styles from "@/styles/dayRow.module.css"
import DayTile from "./DayTile"

export default function DayRow() {
    return(
        <div className={styles.DayRowDiv}>
            <DayTile day={1} />
            <DayTile day={2} />
            <DayTile day={3} />
            <DayTile day={4} />
            <DayTile day={5} />
            <DayTile day={6} />
            <DayTile day={7} />
        </div>
    )
}