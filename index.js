const express = require('express');
const cors = require("cors")
const app = express();

app.use(cors({ origin: "*" }))
app.use(express.json())
app.get("/", (req, res) => {
    try {
        return res.status(200).json({ time: `${new Date().toLocaleTimeString()}` })
    } catch (er) {
        return res.status(200).json({ time: "failed" })
    }
})

app.post("/time", (req, res) => {
    try {
        return res.status(200).json({ time: `${new Date().toLocaleTimeString()}` })
    } catch (er) {
        return res.status(200).json({ time: "failed" })
    }
})

app.listen(3100, console.log("Server started"));