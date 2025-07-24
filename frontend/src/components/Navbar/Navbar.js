import styles from "@/styles/navbar.module.css"

export default function Navbar({ leftSideChildren, rightSideChildren }) {
    return(
        <div className={styles.navbarDiv}>
            <header className={styles.dashboardHeader}>
                <div className={styles.leftSideDiv}>
                    {leftSideChildren}
                </div>
                <div className={styles.rightSideDiv}>
                    {rightSideChildren}
                </div>
            </header>
        </div>
    )
}