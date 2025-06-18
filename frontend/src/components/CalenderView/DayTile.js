import styles from "@/styles/daytile.module.css"

export default function DayTile({ day }) { 
    const currentDate = new Date();
    const dayOfTheWeek = currentDate.getDay()
    return(
        <div className={styles.dayTileDiv}>
            { day }
        </div>
    )
}