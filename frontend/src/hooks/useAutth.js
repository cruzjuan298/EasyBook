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

    const login = useCallback(async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(`${API_CONFIG.baseURL}${API_CONFIG.endpoints.login}`, {
                method: "GET",
                credentials : "include"
            })

            if (!response.ok) {
                const errorData = await response.json().catch(() => response.text());
                throw new Error(`Failed to initiate login: ${response.status} - ${errorData.message}`);
            }

            const data = await response.json();
            const authUrl = data.authUrl; 

            window.location.href = authUrl;
        } catch (error) {
            setError(error)
            setIsAuthenticated(false)
        } finally {
            setLoading(false)
        }
    }, [])

    const logout = useCallback(async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(`${API_CONFIG.baseURL}${API_CONFIG.endpoints.logout}`, {
                method: "GET",
                credentials : "include"
            })

            if (!response.ok) {
                const errorData = await response.json().catch(() => response.text());
                throw new Error(`Failed to initiate login: ${response.status} - ${errorData.message}`);
            }

            const data = await response.json();
            const redirecthUrl = data.redirectRoute; 

            window.location.href = redirecthUrl;
        } catch (error) {
            setError(error)
            setIsAuthenticated(false)
        } finally {
            setLoading(false)
        }
    }, [])

    useEffect(()=> {
        checkAuthStatus();
    }, [checkAuthStatus])

    return {user, isAuthenticated, loading, error, checkAuthStatus, login, logout}

}