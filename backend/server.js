const express = require("express")

const app = express()

// backend will use port 8000
const PORT = 8000

app.get('/', (req, res) => {
    res.status(200)
    res.send("Welcome to the root of the URL server");
})

app.listen(PORT, (error) => {
    if (!error) { 
        console.log("Server has successfully started and App is listening on port " + PORT);
    } else console.log("Error has occurred, server failed to start", error);
} )
