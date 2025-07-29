import AuthService from "../services/Auth.service.js";
import CookiesService from "../services/Cookies.service.js";

export async function authMiddleware(req, res, next) {
    const idToken = req.cookies[CookiesService.ID_TOKEN_COOKIE.name];

    if (!idTokem) return res.sendStatus(401);

    try {
        const authService = new AuthService();

        const userData = authService.getUserData(idToken);
        res.local.user = userData;
        return next()
    } catch (error) {
        console.log("Invalid ID token", error);
        res.clearCookie(CookiesService.ID_TOKEN_COOKIE.name, CookiesService.ID_TOKEN_COOKIE.cookie);
        return res.sendStatus(401);
    }
}