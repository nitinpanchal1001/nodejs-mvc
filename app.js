const express = require("express")
const mongoose = require("mongoose")
const userRouter = require("./routes/user.js")
module.exports = app = express();
const dotenv = require("dotenv")
dotenv.config({
    path : "./data/config.env"
})

//using middleware
app.use(express.json())
app.use("/users",userRouter)



app.get("/" , (req ,res) => {
    res.send("nice working")
})


