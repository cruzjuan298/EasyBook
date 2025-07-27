import styles from "@/styles/integrationCard.module.css"

export default function IntegrationCard({ title, icon, connectHandler, ManageHandler }) {
    return(
        <div className={styles.cardContainer}>
            <div className={styles.cardHeader}>
                <div className={styles.iconWrapper}> {icon} </div>
                <h3 className={styles.cardTitle}> {title} </h3>
            </div>
            <div className={styles.cardActions}>
                <button type="button" className={styles.connectButton} onClick={connectHandler}> Connect </button>
            </div>
        </div>
    )
}