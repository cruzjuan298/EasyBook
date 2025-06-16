import AppUI from "./AddUI"
import styles from "@/styles/modal.module.css"

//isOpen is the current state from page.js and onClose is the event that determines what
// to do after the state has changed. Children is the elements passed

export default function Modal({ isOpen, onClose, children}){
    if (!isOpen) return null;
    
    return(
            <div onClick={onClose} className={styles.modalOuterDiv}>
                <div className={styles.modalInnerDiv}>
                    {children}
                </div>
            </div>
    )
}