const express = require("express")
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")
const mainRouter = require("./router/mainRouter")
require("dotenv").config()
app.use(express.json())
app.use(cors({ origin: "*", credentials: true }))
app.options("*", cors())


mongoose.connect(process.env.MONGO_KEY)
    .then(() => {
        console.log("connect success")
    }).catch(e => {
    console.log(e)
})


app.use("/", mainRouter)

app.listen(4002)