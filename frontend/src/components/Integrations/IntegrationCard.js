import styles from "@/styles/integrationCard.module.css"

export default function IntegrationCard({ title, icon }) {
    return(
        <div className={styles.cardContainer}>
            <div className={styles.cardHeader}>
                {icon}  
                <h3 className={styles.cardTitle}> {title} </h3>
            </div>
            <div className={styles.cardActions}>
                <button type="button" className={styles.connectButton}> Connect </button>
            </div>
        </div>
    )
}