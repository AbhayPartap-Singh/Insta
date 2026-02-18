const express = require("express")
const postcontroller = require("../controllers/post.controllers")
const postRouter = express.Router()
const multer = require("multer")
const upload = multer({storage:multer.memoryStorage})
const identifyUser = require("../midleware/auth.midleware")

postRouter.post("/",upload.single("image"),identifyUser,postcontroller.createPostController)
postRouter.get("/",identifyUser,postcontroller.getPostController)
postRouter.get("/details/:postid",identifyUser,postcontroller.getPostDetailscontroller)

module.exports = postRouter