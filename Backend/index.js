const express = require("express");
const cors = require ("cors");
require('dotenv').config();
const connection = require("./src/config/db");
const userRouter = require('./src/routes/user.route');
// const ServiceRouter = require('./src/routes/service.route');


const App =express();
const PORT = process.env.PORT || 8085;
App.use(cors());
App.use(express.json());
App.use('/user',userRouter);
// App.use('/service', ServiceRouter);

App.get("/", (req, res)=>{
    res.send("welcome to the home page");
});

App.listen(PORT, async ()=>{
    try {
    await connection;
    console.log(`Server is running on port:${PORT} and connection is made successfully...`)
    } catch (error) {
        console.log(`error while connecting to DB:${error.message}`);
    }
})
