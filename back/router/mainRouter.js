const express = require("express")
const router = express.Router()

const {register, login} = require("../controller/authController")

const registerValidation = require("../modules/registerValidation")
const loginValidation = require("../modules/loginValidation")


router.post("/registration", registerValidation, register)
router.post("/login", loginValidation, login)

module.exports = router