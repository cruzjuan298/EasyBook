import express from "express"
import { sendAuthUrl, oauthRedirect, oauthRefreshToken, authVerifyCookies, oauthLogout } from "../controllers/Auth.controller.js"

const router = express.Router()

router.get("/login", sendAuthUrl)
router.get("/callback", oauthRedirect)
router.get("/refresh", oauthRefreshToken)
router.get("/verify", authVerifyCookies)
router.get("/logout", oauthLogout)
export const authRoutes = router