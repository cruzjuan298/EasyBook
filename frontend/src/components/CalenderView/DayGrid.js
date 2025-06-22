import styles from "@/styles/dayGrid.module.css"
import DayTile from "./DayTile"
import { getSpecificDay } from "@/utils/Time/DateUItil";

export default function DayGrid({ year, month, addBooking }) {
    const lastDay = getSpecificDay(year, month + 1, 0);
    const lastDayDate = lastDay.getDate();

    const firstDay = getSpecificDay(year, month, 1);
    const firstDayDate = firstDay.getDay();

    let dayLists = [];

    for (let i = 0; i < firstDayDate; i++) {
        dayLists.push(null);
    }

    for (let i = 1; i <= lastDayDate; i++ ){
        dayLists.push(i);
    }

    const totalTiles = 35;
    const padding = 35 - dayLists.length;

    for (let i = 0; i < padding; i++) {
        dayLists.push(null);
    }

    return(
        <div className={styles.DayGridDiv}>
            {dayLists.map( (dayNumber, index) => (
                <DayTile day={dayNumber}  key={index} padding={dayNumber === null} addBookingModal={addBooking} />
            ))}
        </div>
    )
}