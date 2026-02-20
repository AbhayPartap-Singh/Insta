const followModel = require("../model/follow.model")
const userModel = require("../model/user.model")

async function followUserController(req,res){
   const followername = req.user.id
   const followeeusername = req.params.id

   if(followername == followername){
    return res.status(400).json({
        message:"you can not follow yourself"
    })
   }


   const isFollowerExsists = await userModel.findOne({
    username:followeeusername
   })
    if(!isFollowerExsists){
        return res.status(404).json({
            message:"user you are trying to follow doesnot exsists"
        })
    }



   const isAlreadyFollowing = await followModel.findOne({
    follower:followername,
    followee:followeeusername
   })
   if(isAlreadyFollowing){
    return res.status(200).json({
        message:`you are already following ,${followeeusername}`,
        follow:"is Already following"
    })
   }


   const followRecord = await followModel.create({
    follower:followername,
    followee:followeeusername
   })
   res.status(201).json({
    meassage:`you are following ,${username}`,
    follow:followRecord

   })
}

async function unfollowUsercontroller(req,res){
    const followername = req.user.id
   const followeeusername = req.params.id

   const isUserfollowing = await followModel.findOne({
    follower:followername,
    followee:followeeusername
   })

   if(!isUserfollowing){
    return res.status(200).json({
        message:`you are not following ,${followeeusername}`
    })
   }
   await followModel.findByIdAndDelete(isUserfollowing._id)
   res.status(200).json({
    message:`you have unfollowed ,${followeeusername}`
   })

}
module.exports = {followUserController,
    unfollowUsercontroller
}