import styles from "../../list.module.css"
import { getTime } from "@/utils/Time/DateUItil";

export default function List({ appointments, time }){
    const dateTitle = time.toDateString();
    return(
        <div className={styles.listDiv}>
            <h2 className={styles.listTitle}>{dateTitle}</h2>
        </div>
    )
}