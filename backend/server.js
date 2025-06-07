const express = require("express")
// import all app routes below
const bookRoute = require("./app/api/routes/Book.js")

const app = express()

// backend will use port 8000
const PORT = 8000


app.use("/", bookRoute)
app.listen(PORT, (error) => {
    if (!error) { 
        console.log("Server has successfully started and App is listening on port " + PORT);
    } else console.log("Error has occurred, server failed to start", error);
} )
