import { useState } from "react"
import styles from "../../styles/calenderView.module.css"
import DayGrid from "./DayGrid"

export default function CalenderView({ onAddBookingClick }) {
    let currentDate = new Date();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();

    const [currentYearState, setCurrentYearState] = useState(currentYear);
    const [currentMonthState, setCurrentMonthState] = useState(currentMonth);

    function monthToStr(num) {
        let months = ["January" , "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        return months[num];
    }

    const handleChangeMonthNext = () => {
        if (currentMonthState === 11) {
            setCurrentYearState(currentYearState + 1);
            setCurrentMonthState(0);
        } else setCurrentMonthState(currentMonthState + 1)
    }

    const handleChangeMonthBack = () => {
        if (currentMonthState === 0) {
            setCurrentYearState(currentYearState - 1)
            setCurrentMonthState(11);
        } else setCurrentMonthState(currentMonthState - 1)
    }

    return(
        <div className={styles.calenderViewDiv}>
            <div className={styles.changeMonthButton}>
                <button className={styles.changeMonthButton} onClick={handleChangeMonthBack}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
                </button>
                <h1 className={styles.monthText}>{monthToStr(currentMonthState)} {currentYearState}</h1>
                <button className={styles.changeMonthButton} onClick={handleChangeMonthNext}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
                </button>
            </div>
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
                <DayGrid year={currentYearState} month={currentMonthState} addBooking={onAddBookingClick} />
            </div>
        </div>
    )
}