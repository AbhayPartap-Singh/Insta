const postModel = require("../model/post.model")
const imageKit = require("@imagekit/nodejs")
const { toFile } = require("@imagekit/nodejs")
const likeModel = require("../model/like.model")

const ImageKit =new imageKit(
{ privateKey:process.env.IMAGEKIT_PRIVATE_KEY}
)

async function createPostController(){
    console.log(req.body,req.file)

   
     decoded = jwt.verify(token,process.env.JWT_SECRET)

    const file = await imageKit.files.upload({
        file:await toFile(Buffer.from(req.file.buffer),'file'),
        filename:"test"
    })
    

    const post = await postModel.create({
        caption:req.body.caption,
        imageUrl:file.url,
        user:req.user.id
    })

    res.status(200).json({
        meassage:'its successful',
        post
    })
}

async function getPostController(req,res){
     
    const userID = req.user.id

    const posts = await postModel.findById({
        user:userID
    })
    res.status(201).json({
        message:"fecthed succcessfully",
        posts
    })
}

async function getPostDetailscontroller(req,res){
    
   const userID = req.user.id
   const postID = req.params.postID

   const post = await postModel.findById({
    postID
   })
   if(!post){
    return res.status(404).json({
        message:"post not found"
    })
   }
   const isValidUser = post.user.toString === userID

   if(!isValidUser){
    return res.status(403).json({
        message:'forbidden content'
    })
   }
   return res.status(200).json({
     message:"post fecthed",
     post
   })
}

async function likePostControler(req,res){
    const username = req.user.username 
    const postID = req.params.postID
    const post = await postModel.findById({postID})

    if(!post){
        return res.status(404).json({
            message:"post doesn't exsist"
        })
    }
    const like = await likeModel.create({
        post:postID,
        user:username
    })
    res.status(200).json({
        message:"post liked successfully",
        like
    })
}

module.exports = {
    createPostController,
    getPostController,
    getPostDetailscontroller,
    likePostControler
}