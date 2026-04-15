const express = require("express");
const cors = require ("cors");
require("dotenv").config()
const connection = require("./config/db")

const App =express();
const PORT = process.env.PORT
App.use(cors());
App.use(express.json());

App.get("/", (req, res)=>{
    res.send("welcome to the home page");
});

App.listen(PORT, async ()=>{
    try {
    await connection;
    console.log(`Server is running on port:${PORT} and connection is made successfully...`)
    } catch (error) {
        res.status(400).json({
            message:"Error found while making connection."
        })
    }
})
