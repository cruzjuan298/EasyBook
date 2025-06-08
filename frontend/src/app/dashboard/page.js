'use client'

import { useRouter } from "next/navigation"
import styles from "./page.module.css"
import BoardView from "../../components/BoardView/BoardView.js"
import CalenderView from "../../components/CalenderView/CalenderView.js"
import ListView from "../../components/ListView/ListView.js"

export default function DashboardPage(){
    const router = useRouter()
    
    
    return(
        <div className="dashboard-div" id="navbar">
            <h1 id={styles.title}>Juan's Schedule</h1>
            <button type="button" class={styles.button}>
                <svg></svg>
            </button>
        </div>
    )
}