export default class CookiesService {
    static REFRESH_TOKEN_COOKIE = {
        name : "REFRESH_TOKEN_COOKIE",
        cookie : {
            domain : process.env.COOKIE_DOMAIN,
            httoOnly : true,
            secure: true,
            sameSite : "lax",
            path : "/api/auth/refresh",
            // 5 years
            maxAge : 5 * 365 * 24 * 60 * 60 * 1000
        }
    };
    static REFRESH_TOKEN_COOKIE_LOGOUT = {
            name : "REFRESH_TOKEN_COOKIE",
            cookie : {
            domain : process.env.COOKIE_DOMAIN,
            httoOnly : true,
            secure: true,
            sameSite : "lax",
            path : "/api/auth/logout",
            // 5 years
            maxAge : 5 * 365 * 24 * 60 * 60 * 1000
        }
    };

    static ID_TOKEN_COOKIE ={ 
            name : "ID_TOKEN_COOKIE",
            cookie : {
            domain : process.env.COOKIE_DOMAIN,
            httoOnly : true,
            secure: true,
            sameStze : "lax",
            path : "/",
            // 5 years
            maxAge : 60 * 60 * 1000
        }
    }
}