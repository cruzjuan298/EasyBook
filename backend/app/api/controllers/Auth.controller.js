import express from "express"
import jwt from "jsonwebtoken"
import AuthService from "../../services/Auth.service.js"
import CookiesService from "../../services/Cookies.service.js"
import { auth } from "google-auth-library"

const router = express.Router()

export async function sendAuthUrl(req, res, next) {
    const authService = new AuthService()

    const authUrl = authService.generateAuthUrlService();
    res.redirect(authUrl);
}

export async function oauthRedirect(req, res, next) {
    const { code } = req.query
    if (!code) return res.status(400).json({message : "Authorization token not provided"})
    
    try {
        const authService = new AuthService();

        const tokens =  await authService.getTokenOnlyAuthService(code);
        authService.handleSetCredentials(tokens);

        res.cookie(CookiesService.ID_TOKEN_COOKIE.name, tokens.id_token, CookiesService.ID_TOKEN_COOKIE.cookie);
        res.cookie(CookiesService.REFRESH_TOKEN_COOKIE.name, tokens.refresh_token, CookiesService.REFRESH_TOKEN_COOKIE.cookie);
        res.cookie(CookiesService.REFRESH_TOKEN_COOKIE_LOGOUT.name, tokens.refresh_token, CookiesService.REFRESH_TOKEN_COOKIE_LOGOUT.cookie);

        const frontendSuccessRedirect = process.env.FRONTEND_DASHBOARD_URL
        res.redirect(frontendSuccessRedirect)
        
    } catch (error) {
        console.error("Error during Google OAuth callback", error)
        const frontendErrorRedirect = process.env.FRONTEND_DASHBOARD_URL
        res.redirect(frontendErrorRedirect)
    }
}

export async function oauthRefreshToken(req, res, next) {
    const refreshToken = req.cookies(CookiesService.REFRESH_TOKEN_COOKIE.name)

    if (!refreshToken) return res.status(401);

    try {
        const authService = new AuthService();
        const newIdToken = await authService.getNewTokenId(refreshToken);
        res.cookies(CookiesService.ID_TOKEN_COOKIE.name, newIdToken, CookiesService.ID_TOKEN_COOKIE.cookie);

        return res.sendStatus(200);
    } catch (error) {
        res.clearCookie(CookiesService.REFRESH_TOKEN_COOKIE.name, CookiesService.REFRESH_TOKEN_COOKIE.cookie)
        return res.sendStatus(401);
    }
}
