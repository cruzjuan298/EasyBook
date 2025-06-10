import styles from "./board.module.css"

export default function Board({ title }){
    return (
        <div className={styles.boardDiv}>
            <h1 className={styles.title}>{title}</h1>
        </div>
    )
}