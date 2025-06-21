import styles from "@/styles/daytile.module.css"

export default function DayTile({ day, padding, addBookingModal }) { 

    return(
        <div className={styles.dayTileDiv}  style={padding ? {background: "rgb(249 250 251)", borderWidth: "0"} : {}}>
            <div>
            { day }
            </div>
            {!padding && <button className={styles.addIcon} onClick={addBookingModal}>
                <svg className={styles.addSvg} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
            </button> }
        </div>
    )
}