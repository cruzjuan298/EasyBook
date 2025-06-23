export const API_CONFIG = {
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    timeout: 15000, // in ms
    headers: {
        "Content-Type" : "application/json",
        "Accept" : "application/json",
    },
    endpoints: {
        book: "/book",
    },
    apiVersion: "v0.1",
};