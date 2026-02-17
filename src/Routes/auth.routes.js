const express = require("express")
const authcontroller = require("../controllers/auth.controllers")
const authRouter = express.Router()

authRouter.post("/register",authcontroller.registerController)
authRouter.post("/login",authcontroller.loginController)

module.exports = authRouter