import express from "express"
import { sendAuthUrl, oauthRedirect, oauthRefreshToken } from "../controllers/Auth.controller.js"

const router = express.Router()

router.get("/auth/login", sendAuthUrl )
router.get("/auth/callback", oauthRedirect)
router.get("/auth/refresh", oauthRefreshToken)

export const authRoutes = router