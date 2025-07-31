import AuthService from "../services/Auth.service.js";
import CookiesService from "../services/Cookies.service.js";
import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config({ path: "../../.env"});

export async function authMiddleware(req, res, next) {
    const appJWT = req.cookies[CookiesService.APP_JWT.name];
    console.log(appJWT, req.cookies)
    if (!appJWT) return res.sendStatus(401);

    try {
        const decodedAppJWT = jwt.verify(appJWT, process.env.JWT_SECRET)
        req.user = decodedAppJWT;
        return next()
    } catch (error) {
        console.log("Invalid ID token", error);
        res.clearCookie(CookiesService.APP_JWT.name, CookiesService.APP_JWT.cookie);
        return res.sendStatus(401).json({message : "Unauthorized"});
    }
}