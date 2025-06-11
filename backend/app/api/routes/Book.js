import express from "express"
const router = express.Router()

router.get("/book", (req, res, next) => {
    res.send("Testing api endpoint")
})

export const bookRoute = router
