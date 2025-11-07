import styles from "@/styles/authUser.module.css"

export default function Logout({ onClose, handleLogout }) {
    return(
        <div className={styles.authDiv}>
            <h1 className={styles.authTitle}> Logout </h1>
            <div className={styles.authButtonsDiv}>
                <button type="button" onClick={onClose} className={styles.button}> Cancel </button>
                <button type="button" onClick={handleLogout} className={styles.button}> Logout </button>                
            </div>

        </div>
    )
}
