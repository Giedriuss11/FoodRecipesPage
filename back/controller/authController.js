const userDb = require("../schema/userSchema")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const sendRes = require("../modules/sendRes")

module.exports = {
    register: async (req, res) => {
        const {username, password} = req.body

        const hash = await bcrypt.hash(password,3)
        const regUser = new userDb ({
            username,
            password: hash,
            admin: false,
            blocked: false
        })

        await regUser.save()

        sendRes(res, true)
    },
    login: async (req, res) => {
        const {username, password} = req.body

        const user = await userDb.findOne({username})
        if(!user) return sendRes(res, false)

        const samePassword = await bcrypt.compare(password, user.password)
        if (!samePassword) return sendRes(res, false, "bad password")

        const newUser = {
            _id: user._id,
            username: user.username,
            admin: user.admin,
            blocked: user.blocked
        }

        const token = jwt.sign({...newUser}, process.env.ACCESS_SECRET)

        sendRes(res, true, {user: newUser, token})
    },
    autoLogin: async (req, res) => {

        const {user} = req.body

        sendRes(res, true, user)
    }
}