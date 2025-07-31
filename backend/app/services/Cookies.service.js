import dotenv from "dotenv"

dotenv.config({ path: "../../.env"});

export default class CookiesService {
    static getBaseCookieOptions(maxAgeMs = null, path="/") {
        const options = {
            domain : process.env.COOKIE_DOMAIN,
            httpOnly : true,
            secure: process.env.NODE_ENV === 'production',
            sameSite : "lax",
            path : path
        }
            if (maxAgeMs !== null) {
                options.maxAge = maxAgeMs;
            }
            return options
        }
    
    static APP_JWT = {
        name : "app_jwt",
        cookie: CookiesService.getBaseCookieOptions(60 * 60 * 1000, "/")
    }

    static OAUTH_STATE = {
        name : "oauth_state",
        cookie : CookiesService.getBaseCookieOptions(5 * 60 * 1000, "/api/auth/callback")
    }

    static GOOGLE_REFRESH_TOKEN = {
        name : "google_refresh_token",
        cookie: CookiesService.getBaseCookieOptions(5 * 365 * 24 * 60 * 60 * 1000, "/api/auth/refresh" )
    }

    static GOOGLE_ID_TOKEN = { 
        name: "google_id_token",
        cookie: CookiesService.getBaseCookieOptions(5 * 60 * 1000, "/" )
    };

    static APP_JWT_LOGOUT = {
        name : CookiesService.APP_JWT.name,
        cookie: CookiesService.getBaseCookieOptions(0, CookiesService.APP_JWT.cookie.path)
    }

    static GOOGLE_REFRESH_TOKEN_LOGOUT = {
        name : CookiesService.GOOGLE_REFRESH_TOKEN.name,
        cookie: CookiesService.getBaseCookieOptions(0, CookiesService.GOOGLE_REFRESH_TOKEN.cookie.path)
    }
}