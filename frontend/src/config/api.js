export const API_CONFIG = {
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    timeout: 15000, // in ms
    headers: {
        "Content-Type" : "application/json",
        "Accept" : "application/json",
    },
    endpoints: {
        book: "/api/book",
        retrieveAppointments: "/api/appointments",
        retrieveStaffMembers: "/api/staffMembers",
        appointmentById: "/api/appointments/:id",
        login: "/api/auth/login",
        logout: "/api/auth/logout",
        verifyAuthStatus: "/api/auth/verify",
        googleCalendarInfo : "/api/google-calendar-info/events"
    },
    apiVersion: "v0.1",
};