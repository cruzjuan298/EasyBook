import styles from "./list.module.css"

export default function List({ appointments }){
    const currentDate = new Date();
    const dateTitle = currentDate.toDateString();
    return(
        <div className={styles.listDiv}>
            <h2 className={styles.listTitle}>dateTitle</h2>
        </div>
    )
}