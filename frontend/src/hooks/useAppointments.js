import { useCallback, useEffect, useState } from "react";
import { API_CONFIG } from "@/config/api";

export default function useAppointments() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)
    const [appointments, setAppointments] = useState([])

    const appointmentUrl = API_CONFIG.baseURL + API_CONFIG.endpoints.retrieveAppointments

    const fetchAppointments = useCallback(async () => {
        try{
            setLoading(true);
            setError(null);

            const response = await fetch(appointmentUrl, {
                method: 'GET',
                headers: API_CONFIG.headers,
                credentials: "include"
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`HTTP error. Status: ${response.status} - ${errorText}`);
            }

            const result = await response.json();

            setAppointments(result.appointments);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }, [appointmentUrl])

    const updateAppointments = useCallback((newAppointment) => {
        if (!newAppointment) {
            return
        }
        setAppointments(prev => [...prev, newAppointment])
    }, [])

    const deleteAppointmentOptims = useCallback((appointmentId) => {
        if (!appointmentId) {
            return;
        }
        setAppointments(prevAppointments => {
            return prevAppointments.filter(
                appointment => appointment._id !== appointmentId
            )
        })
    }, [])

    useEffect(() => {
        fetchAppointments();
    }, [fetchAppointments]);

    return { appointments, loading, error, fetchAppointments, updateAppointments, deleteAppointmentOptims };
}