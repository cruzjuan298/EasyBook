import styles from "../../styles/addui.module.css"
import { API_CONFIG } from "@/config/api";
import { useState } from "react";

export default function AddUI({ onCloseAUI }){
    const [formData, setFormData] = useState({
        title: "",
        service: "Haircut",
        date: "",
        time: "",
        staffMember: ""
    });

    const baseURL = API_CONFIG.baseURL;
    const bookEndpoint = API_CONFIG.endpoints.book;
    const fullUrl = `${baseURL}${bookEndpoint}`;

    const handleValueChange = (event) => {
        const { name, value } = event.target;

        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value,
        }))
    }

    const createAppointment = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(fullUrl, {
                method : 'POST',
                headers: API_CONFIG.headers,
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error(`HTTP error. Status: ${response.status}`)
            }

            const data = await response.json()
            console.log(data);
            onCloseAUI();

        } catch (error) {
            console.error("Error Creating Appointment: ", error)
        } 
    } 

    return(
        <div className={styles.addDiv}>
            <h1 className={styles.newTitle}>Create New Appointment</h1>
                       
                <div className={styles.titleDiv}>
                    <label htmlFor="title">Title: </label>
                    <input type="text"className={styles.clientInput} id="title" name="title" value={formData.title} onChange={handleValueChange} />
                </div>

                <div className={styles.serviceDiv}>
                    <label htmlFor="service">Service: </label>
                    <select type="text" className={styles.ServiceInput}  id="service" name="service" value={formData.service} onChange={handleValueChange} >
                        <option value="Haircut" >Haircut</option>
                        <option value="Consultation" >Consultation</option>
                        <option value="Massage" >Massage</option>
                    </select>
                </div>

                <div className={styles.timeElementsDiv}>
                    <div className={styles.dateDiv}>
                        <label htmlFor="date">Date: </label>
                        <input type="date" className={styles.dateInput} id="date" name="date" value={formData.date} onChange={handleValueChange} />
                    </div>
                    <div className={styles.timeDiv}>
                        <label htmlFor="time">Time: </label>
                        <input type="time" className={styles.timeInput} id="time" name="time" value={formData.time} onChange={handleValueChange} />
                    </div>
                </div>

                <div className={styles.staffMemberDiv}>
                    <label htmlFor="staffMember">Staff Member: </label>
                    <input type="text" className={styles.StaffMemberInput} id="staffMember" name="staffMember" value={formData.staffMember} onChange={handleValueChange} />
                </div>

                <div className={styles.confirmDiv}>
                    <button className={styles.cancelButton} type="button" onClick={onCloseAUI}> Cancel </button>
                    <button className={styles.createButton} type="submit" onClick={createAppointment}> Create </button>
                </div>
        </div>
    )
}