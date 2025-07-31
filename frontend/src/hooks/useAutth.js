import { useCallback, useEffect, useState } from "react";
import { API_CONFIG } from "@/config/api";

export default function useAuth() {
    const [ user, setUser ] = useState(null);
    const [ isAuthenticated, setIsAuthenticated ] = useState(false);
    const [ loading, setLoading ] = useState(false);
    const [ error, setError] = useState(null);

    const checkAuthStatus = useCallback(async () => {
        setLoading(true);
        setError(null);

        try{
            const response = await fetch(`${API_CONFIG.baseURL}${API_CONFIG.endpoints.verifyAuthStatus}`, {
                method : "GET",
                credentials: "include"
            })

            if (response.ok) {
                const data = await response.json();
                setIsAuthenticated(true);
                setUser(data)
            } else {
                setIsAuthenticated(false);
                setUser(null);
                const errorData = await response.json().catch(() => response.text())
                setError(errorData.message)
            }
        } catch (error) {
            setError(error);
            setIsAuthenticated(false);
        } finally {
            setLoading(false);
        }
    }, [])

    useEffect(()=> {
        checkAuthStatus();
    }, [checkAuthStatus])

    return {user, isAuthenticated, loading, error, checkAuthStatus}

}