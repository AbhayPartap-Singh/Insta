const express = require("express")
const postcontroller = require("../controllers/post.controllers")
const postRouter = express.Router()
const multer = require("multer")
const upload = multer({storage:multer.memoryStorage})

postRouter.post("/",upload.single("image"),postcontroller.createPostController)


module.exports = postRouter