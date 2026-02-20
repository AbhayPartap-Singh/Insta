const express = require("express")
const cookieParser = require("cookie-parser")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    credentials:true,
    origin:'http://localhost:5173'
}))

const authRouter = require("./Routes/auth.routes")
const postRouter = require("./Routes/post.routes")
const userRouter = require("./Routes/user.routes")

app.use("/api/auth",authRouter)
app.use("/api/post",postRouter)
app.use("/api/users",userRouter)

module.exports = app