const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
    admin: {
        type: Boolean,
        require: true
    },
    username: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require:true
    },
    blocked: {
        type: Boolean,
        require: true
    }
})

const User = mongoose.model("FoodLogin", userSchema)
module.exports = User
