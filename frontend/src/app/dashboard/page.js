'use client'

import { useRouter } from "next/navigation"
import { useState, useRef } from "react"
import styles from "./page.module.css"
import BoardView from "../../components/BoardView/BoardView.js"
import CalenderView from "../../components/CalenderView/CalenderView.js"
import ListView from "../../components/ListView/ListView.js"
import Modal from "@/components/Modal-AddUI/Modal"
import AddUI from "@/components/Modal-AddUI/AddUI"
import { getTime } from "@/utils/Time/DateUItil"
import useAppointment from "@/hooks/useAppointments.js"

export default function DashboardPage(){
    const { loading, error, appointments } = useAppointment();
    var currentDate = getTime();
    var currentMonth = currentDate.getMonth();
    var currentYear = currentDate.getFullYear(); 

    const [view, setView] = useState("calender");

    const [showAddAppointment, setShowAddAppointment] = useState(false)

    const handleOpen= () => {
        setShowAddAppointment(true)
    }

    const handleClose= () => {
        setShowAddAppointment(false)
    }

    console.log(appointments)
    const renderView = (view) => {
        switch (view) {
            case "calender":
                return <CalenderView onAddBookingClick={handleOpen} date={currentDate} month={currentMonth} year={currentYear} />
            case "list":
                return <ListView time={currentDate} />
            case "board":
                return <BoardView onAddBookingClick={handleOpen} boardAppointments={appointments}/>
            default:
                return <CalenderView onAddBookingClick={handleOpen}/>
        }
    };

    if (loading) {
        return <p>Loadin appointments...</p>
    }

    if (error) {
        return <p>Error: {error}</p>
    }
    return(
        <div className={styles.dashboardDiv}>
            <header className={styles.dashboardHeader}>
                <div className={styles.titleDiv}>
                    <h1 className={styles.title}>Juan's Schedule</h1>
                </div>
                <div className={styles.iconDiv}>
                    <button type="button" className={styles.button}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 0 24 24" width="40px" fill="#3b82f6"><path d="M0 0h24v24H0z" fill="none"/><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
                    </button>
                    <button type="button" className={styles.button}>
                      <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 20 20" height="40px" viewBox="0 0 20 20" width="40px" fill="#3b82f6"><g><rect fill="none" height="20" width="20"/></g><g><g><path d="M10 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 3.5c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 11c-2.05 0-3.87-.95-5.07-2.44 1.45-.98 3.19-1.56 5.07-1.56s3.62.58 5.07 1.56c-1.2 1.49-3.02 2.44-5.07 2.44z"/></g></g></svg>
                    </button>
                </div>
            </header>
                <div className={styles.dashboardToggle} id={styles.dashboardView}>
                    <button type="button" className={styles.toggleButton} onClick={() => setView("calender")}>Calender</button>
                    <button type="button" className={styles.toggleButton} onClick={() => setView("list")}>List</button>
                    <button type="button" className={styles.toggleButton} onClick={() => setView("board")}>Board</button>
                </div>
                <div className={styles.viewDiv}>
                        {renderView(view)}
                        {<Modal isOpen={showAddAppointment} children={<AddUI onCloseAUI={handleClose} />} />} 
                </div>
        </div>
    )
}