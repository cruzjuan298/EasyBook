const express = require("express")
const router = express.Router()

router.get("/book", (req, res, next) => {
    res.send("Testing api endpoint")
})

module.exports = router 
