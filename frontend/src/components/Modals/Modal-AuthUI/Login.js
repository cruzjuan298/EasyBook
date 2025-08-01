import styles from "@/styles/authUser.module.css"

export default function Login({ onClose, handleLogin }) {
    return(
        <div className={styles.authDiv}>
            <h1 className={styles.authTitle}> Login </h1>
            <div className={styles.authButtonsDiv}>
                <button type="button" onClick={onClose} className={styles.button}> Cancel </button>
                <button type="button" onClick={handleLogin} className={styles.button}> Login </button>
            </div>

        </div>
    )
}