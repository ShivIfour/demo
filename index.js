const express = require('express');
const cors = require("cors")
const app = express();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded())
app.get("/", (req, res) => {
    try {
        return res.status(200).json({ time: `${new Date().toLocaleTimeString()}` })
    } catch (er) {
        return res.status(200).json({ time: "failed" })
    }
})

app.post("/time", (req, res) => {
    try {
        console.log("req.body", req.body);
        // console.log("req", req);
        return res.status(200).json({ time: `${new Date().toLocaleTimeString()}` })
    } catch (er) {
        return res.status(200).json({ time: "failed" })
    }
})

app.listen(3100, console.log("Server started"));