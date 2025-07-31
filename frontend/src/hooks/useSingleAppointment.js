import { useCallback, useEffect, useState } from "react";
import { API_CONFIG } from "@/config/api";

export default function useSingleAppointment() {
    const [error, setError] = useState(null);
    const appointmentBaseUrl = `${API_CONFIG.baseURL}${API_CONFIG.endpoints.retrieveAppointments}`;

    // fetchAppointment and deleteAppoinment uses the useCallback hook to prevent a new function reference from being rendered after 
    // this hook is called. The appointmentBaseUrl should not change in order for this to be true.
    const fetchAppointment = useCallback(async (appointmentId) => {
        try {  
            setError(null);
            
            const url = `${appointmentBaseUrl}/${appointmentId}`
            const response = await fetch(url, {
                method : "GET",
                headers: API_CONFIG.headers,
                credentials : "include"
            })

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Failed to fetch appointment: ${response.status} - ${errorText}`);
            }

            const data =  await response.json();
            return data.appointment;

        } catch (error) {
            setError(error);
        }
    }, [appointmentBaseUrl] )
    
    const deleteAppointment = useCallback(async (appointmentId) =>{
        try {
            setError(null)

            const url = `${appointmentBaseUrl}/${appointmentId}`
            
            const response = await fetch(url, {
                method: "DELETE",
                headers: API_CONFIG.headers,
                credentials : "include"
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Failed to fetch appointment: ${response.status} - ${errorText}`);
            }
            return true;

        } catch (error) {
            setError(error);
        }
    }, [appointmentBaseUrl] )


    return { error, fetchAppointment, deleteAppointment }

}
