import AddUI from "./Modal-AddUI/AddUI"
import DeleteConfirmation from "./Modal-DeleteUI/DeleteUI";
import styles from "@/styles/modal.module.css"

//isOpen is the current state from page.js and onClose is the event that determines what
// to do after the state has changed. Children is the elements passed

export default function Modal({ isOpen, onClose, onAdd, modal, onDelete, appointmentFocus }){
    if (!isOpen) return null;
    const renderComponent = () => {
        switch (modal) {
            case "add" :
                return <AddUI onCloseAUI={onClose} onAddAppointment={onAdd} />;
            case "delete":
                return <DeleteConfirmation onCloseUI={onClose} onDelete={onDelete} appointmentId={appointmentFocus} />
            default:
                return null;
        }
    }
    return(
            <div  className={styles.modalOuterDiv}>
                <div className={styles.modalInnerDiv}>
                    {renderComponent()}
                </div>
            </div>
    )
}