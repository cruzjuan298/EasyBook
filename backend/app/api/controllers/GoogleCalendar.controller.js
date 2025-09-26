import { google } from "googleapis"
import AuthService from "../../services/Auth.service.js"
import CookiesService from "../../services/Cookies.service.js"

export async function getCalendarInfo(req, res, next)  {
    const refreshToken = req.cookies[CookiesService.GOOGLE_REFRESH_TOKEN.name];
    
    if (!refreshToken) {
        return res.status(401).json({messgae : "invalid token"});
    }
    console.log(`refresh token: ${refreshToken}`)
    try {
        const authService = new AuthService();

        authService.setCredentialsOptionalTokens({refreshToken : refreshToken })        

        const access_token = await authService.getAccessToken();
        authService.handleSetCredentialsWAccessToken({access_token : access_token});
        
        const calendar = google.calendar({version : "v3", auth : authService});
        const calendarListResponse = await calendar.calendarList();

        const calendars = calendarListResponse.data.items;

        if (!calendars || calendars.length === 0) {
            return res.status(200).json({ message : "No calendars found for this user", calendars: []});
        }

        let allEvents = []

        for (const cal of calendars) {
            try {
                const eventsResponse = await calendar.events.list({
                    calendarId : cal.id,
                    timeMin: (new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)).toISOString(), // Events from 30 days ago; Optional: change values here 
                    timeMax: (new Date(Date.now() + 365 * 24 * 60 * 60 * 1000)).toISOString(), // Events up to 1 year from now
                    singleEvents: true,
                    orderBy: "startTime"
                })

                const events = eventsResponse.data.items;

                if (events || events.length > 0) {
                    allEvents = allEvents.concat(events.map(event => ({
                        calendarId : cal.id,
                        calendarSummary : cal.summary,
                        ...event
                    })));
                }

             } catch (error) {
                console.warn("Could not retrieve events for one calendar.")
             }
        }

        res.status(200).json({
            messgae : "Successfully retrieved all calendar events",
            events : allEvents
        })
    } catch (error) {
        return res.status(401).json({messgae : `Error trying to retrrieve calendar information. ${error}`})
    }
}
