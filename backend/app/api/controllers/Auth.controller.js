import jwt from "jsonwebtoken"
import AuthService from "../../services/Auth.service.js"
import CookiesService from "../../services/Cookies.service.js"
import dotenv from "dotenv"

dotenv.config({ path: "../../.env"});

export async function sendAuthUrl(req, res, next) {
    const authService = new AuthService()

    const state = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    res.cookie(CookiesService.OAUTH_STATE.name, state, CookiesService.OAUTH_STATE.cookie);
    
    const authUrl = authService.generateAuthUrlService(state);
    res.status(200).json({authUrl : authUrl});
}

export async function oauthRedirect(req, res, next) {
    const { code, state } = req.query
    if (!code) return res.status(400).json({message : "Authorization token not provided"})
    
    try {
        const storedState = req.cookies[CookiesService.OAUTH_STATE.name];
        if (!storedState || storedState !== state) {
            console.warn("OAuth Callback: State mismatch or missing state. Possible CSRF attack.");
            return res.status(403).json({ message: "Authentication failed: State mismatch." });
        }

        res.clearCookie(CookiesService.OAUTH_STATE.name, CookiesService.OAUTH_STATE.cookie);
        const authService = new AuthService();

        const tokens =  await authService.getTokenOnlyAuthService(code);
        authService.handleSetCredentials(tokens);

        const ticketPayload = await authService.handleVerifyToken(tokens.id_token);

        const googleId = ticketPayload['sub'];
        const email = ticketPayload['email'];
        const name = ticketPayload['name'];

        const appToken = jwt.sign(
            {
                googleId: googleId,
                email: email,
                name: name, 
            },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        if (tokens.refresh_token) {
            res.cookie(CookiesService.GOOGLE_REFRESH_TOKEN.name, tokens.refresh_token, CookiesService.GOOGLE_REFRESH_TOKEN.cookie);

        }

        res.cookie(CookiesService.APP_JWT.name, appToken, CookiesService.APP_JWT.cookie);
        res.cookie(CookiesService.GOOGLE_ID_TOKEN.name, tokens.id_token, CookiesService.GOOGLE_ID_TOKEN.cookie);
        res.cookie(CookiesService.GOOGLE_REFRESH_TOKEN_LOGOUT.name, tokens.refresh_token, CookiesService.GOOGLE_REFRESH_TOKEN_LOGOUT.cookie);

        const frontendSuccessRedirect = process.env.FRONTEND_DASHBOARD_PROFILE_URL
        res.redirect(frontendSuccessRedirect)
        
    } catch (error) {
        console.error("Error during Google OAuth callback", error)
        res.clearCookie(CookiesService.APP_JWT.name, CookiesService.APP_JWT.cookie);
        res.clearCookie(CookiesService.OAUTH_STATE.name, CookiesService.OAUTH_STATE.cookie);
        res.clearCookie(CookiesService.GOOGLE_REFRESH_TOKEN.name, CookiesService.GOOGLE_REFRESH_TOKEN.cookie);

        const frontendErrorRedirect = process.env.FRONTEND_DASHBOARD_URL
        res.redirect(frontendErrorRedirect)
    }
}

export async function oauthRefreshToken(req, res, next) {
    const refreshToken = req.cookies[CookiesService.GOOGLE_REFRESH_TOKEN.name]

    if (!refreshToken) return res.status(401).json({message : "No refresh token provided"});

    try {
        const authService = new AuthService();
        const newIdToken = await authService.getNewTokenId(refreshToken);
        
        res.cookie(CookiesService.GOOGLE_ID_TOKEN.name, newIdToken, CookiesService.GOOGLE_ID_TOKEN.cookie);

        return res.status(200).json({message : "Token refreshed"});
    } catch (error) {
        res.clearCookie(CookiesService.GOOGLE_REFRESH_TOKEN.name, CookiesService.GOOGLE_REFRESH_TOKEN.cookie)
        console.log(error)
        return res.sendStatus(401);
    }
}

export async function authVerifyCookies(req, res, next) {
        const appJwt = req.cookies[CookiesService.APP_JWT.name];

        if (!appJwt) {
            clearAllCookies(req, res)
            return res.status(401).json({isAuthenticated : false, message  : "Error trying to validate id token"});
        }

        try {
            const decoded = jwt.verify(appJwt, process.env.JWT_SECRET)
            res.status(200).json({isAuthenticated : true, data: decoded});

        } catch (error) {
            console.error("Invalid token.". error);
            res.clearCookie(CookiesService.APP_JWT.name, CookiesService.APP_JWT.cookie)
            return res.status(401).json({isAuthenticated : false, message : `Error failed: ${error} `});
        }
}

export async function oauthLogout(req, res, next) {
    const refreshToken = req.cookies[CookiesService.GOOGLE_REFRESH_TOKEN_LOGOUT.name]

    try {
        const authService = new AuthService();
        await authService.revokeRefreshTokenAccess(refreshToken);

        clearAllCookies(req, res);
        res.clearCookie(CookiesService.GOOGLE_REFRESH_TOKEN.name, CookiesService.GOOGLE_REFRESH_TOKEN.cookie)
        return res.status(200).json({redirectRoute : process.env.FRONTEND_DASHBOARD_URL})
    } catch (error) {
        return res.status(401).json({message : "Error trying to logout"})
    }

}

function clearAllCookies(req, res) {
    const cookies = req.cookies;
    for (const cookieName in cookies){
        res.clearCookie(cookieName); 
        res.clearCookie(cookieName, { path: "/" });
        res.clearCookie(cookieName, { path: "/api/auth/callback" });
        res.clearCookie(cookieName, { path: "/api/auth/logout" });
    }
}
