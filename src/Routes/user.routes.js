const express = require("express");
const { followUserController, unfollowUsercontroller } = require("../controllers/user.controllers");
const identifyUser = require("../midleware/auth.midleware")

const userRouter = express.Router();

userRouter.post("/follow/:username",identifyUser,followUserController);
userRouter.post("/unfollow/:username",identifyUser,unfollowUsercontroller)

module.exports = userRouter;
