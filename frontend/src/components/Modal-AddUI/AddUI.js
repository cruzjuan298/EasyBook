import styles from "../../styles/addui.module.css"
import { API_CONFIG } from "@/config/api";
import { useState } from "react";
import { getNewDate, getTime } from "@/utils/Time/DateUItil";

export default function AddUI({ onCloseAUI, onAddAppointment }){
    const [error, setError] = useState({});
    const [formData, setFormData] = useState({
        clientName: "",
        service: "Haircut",
        date: "",
        time: "",
        staffMember: ""
    });

    const baseURL = API_CONFIG.baseURL;
    const bookEndpoint = API_CONFIG.endpoints.book;
    const fullUrl = `${baseURL}${bookEndpoint}`;

    const unpackErrors = () => {
        var errorMessage = ""
        for(var key in error) {
            var missingField = error[key] + " ";
            errorMessage += missingField;
        }
        return errorMessage;
    }

    const handleValueChange = (event) => {
        const { name, value } = event.target;

        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value,
        }))
    }

    const validateInput = () => {
        const newErrors = {};

        if (!formData.clientName.trim()) {
            newErrors.clientName = "Title is required."
        }
        if (!formData.service) {
            newErrors.service = "Service is required."
        }
        if (!formData.date) {
            newErrors.date = "Date is required."
        } else {
            try {
                const selectedDate = getNewDate(formData.date);
                const today = getTime();
                today.setHours(0, 0, 0, 0);
                if (selectedDate < today) {
                    newErrors.date = "Date cannot be in the past.";
                }
            } catch (error) {
                console.error("Error in trying to parse date data")
            }
        }
        if (!formData.time) {
            newErrors.time = "Time is required.";
        }
        if (!formData.staffMember.trim()) {
            newErrors.staffMember = "Staff Member is required.";
        } 
        // change if neccessary for different requirements or implement option to select from an option of staff members
        else if (formData.staffMember.trim().length < 2) {
            newErrors.staffMember = "Staff Memeber name must be at least 2 characters.";
        } 
        setError(newErrors);
        return Object.keys(newErrors).length === 0;

    }

    const createAppointment = async (event) => {
        event.preventDefault();

        if(!validateInput()) {
            console.error("Client-side validation failed. Please check inputs.")
            return;
        }

        try {
            const response = await fetch(fullUrl, {
                method : 'POST',
                headers: API_CONFIG.headers,
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error(`HTTP error. Status: ${response.status}`)
            }

            const data = await response.json();
            onAddAppointment(formData);
            onCloseAUI();

        } catch (error) {
            console.error("Error Creating Appointment: ", error)
        } 
    } 

    return(
        <div className={styles.addDiv}>
            <h1 className={styles.newTitle}>Create New Appointment</h1>
                       
                    <div className={styles.clientNameDiv}>
                    <label htmlFor="clientName">Client Name: </label>
                    <input type="text"className={styles.clientInput} id="clientName" name="clientName" value={formData.clientName} onChange={handleValueChange} />
                    {error.clientName && <p className={styles.fieldErrorMessage}>{error.title}</p>}
                </div>

                <div className={styles.serviceDiv}>
                    <label htmlFor="service">Service: </label>
                    <select type="text" className={styles.ServiceInput}  id="service" name="service" value={formData.service} onChange={handleValueChange} >
                        <option value="Haircut" >Haircut</option>
                        <option value="Consultation" >Consultation</option>
                        <option value="Massage" >Massage</option>
                    </select>
                    {error.service && <p className={styles.fieldErrorMessage}>{error.service}</p>}
                </div>

                <div className={styles.timeElementsDiv}>
                    <div className={styles.dateDiv}>
                        <label htmlFor="date">Date: </label>
                        <input type="date" className={styles.dateInput} id="date" name="date" value={formData.date} onChange={handleValueChange} />
                        {error.date && <p className={styles.fieldErrorMessage}>{error.date}</p>}
                    </div>
                    <div className={styles.timeDiv}>
                        <label htmlFor="time">Time: </label>
                        <input type="time" className={styles.timeInput} id="time" name="time" value={formData.time} onChange={handleValueChange} />
                        {error.time && <p className={styles.fieldErrorMessage}>{error.time}</p>}
                    </div>
                </div>

                <div className={styles.staffMemberDiv}>
                    <label htmlFor="staffMember">Staff Member: </label>
                    <input type="text" className={styles.StaffMemberInput} id="staffMember" name="staffMember" value={formData.staffMember} onChange={handleValueChange} />
                    {error.staffMember && <p className={styles.fieldErrorMessage}>{error.staffMember}</p>}
                </div>

                <div className={styles.confirmDiv}>
                    <button className={styles.cancelButton} type="button" onClick={onCloseAUI}> Cancel </button>
                    <button className={styles.createButton} type="submit" onClick={createAppointment}> Create </button>
                </div>

        </div>
    )
}