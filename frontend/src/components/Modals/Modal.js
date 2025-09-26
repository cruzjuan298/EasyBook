import AddUI from "./Modal-AddUI/AddUI"
import Login from "./Modal-AuthUI/Login";
import Logout from "./Modal-AuthUI/Logout";
import DeleteConfirmation from "./Modal-DeleteUI/DeleteUI";
import ErrorUI from "./Modal-ErrorUI/ErrorUI";
import styles from "@/styles/modal.module.css"

//isOpen is the current state from page.js and onClose is the event that determines what
// to do after the state has changed. Children is the elements passed

export default function Modal({ isOpen, onClose, onAdd, modal, onDelete, appointmentFocus, handleLogin, handleLogout }){
    if (!isOpen) return null;
    const renderComponent = () => {
        switch (modal) {
            case "add" :
                return <AddUI onCloseAUI={onClose} onAddAppointment={onAdd} />;
            case "delete":
                return <DeleteConfirmation onCloseUI={onClose} onDelete={onDelete} appointmentId={appointmentFocus} />
            case "login" :
                return <Login onClose={onClose} handleLogin={handleLogin}/>
            case "logout" :
                return <Logout onClose={onClose} handleLogout={handleLogout} />
            case "error" :
                return <ErrorUI /> 
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
