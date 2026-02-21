const express = require("express")
const authcontroller = require("../controllers/auth.controllers")
const identifyUser = require("../midleware/auth.midleware")

const authRouter = express.Router()

authRouter.post("/register",authcontroller.registerController)
authRouter.post("/login",authcontroller.loginController)
authRouter.get("/get-me",identifyUser,authcontroller.getMeController)

module.exports = authRouter