import styles from "@/styles/daytile.module.css"

export default function DayTile({ day }) { 
    return(
        <div className={styles.dayTileDiv}>
            { day }
        </div>
    )
}