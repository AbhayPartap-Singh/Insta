const express = require("express")
const cookieParser = require("cookie-parser")
const app = express()
app.use(express.json())
app.use(cookieParser())

const authRouter = require("./Routes/auth.routes")
const postRouter = require("./Routes/post.routes")
const userRouter = require("./Routes/user.routes")

app.use("/api/auth",authRouter)
app.use("/api/post",postRouter)
app.use("/api/users",userRouter)

module.exports = app