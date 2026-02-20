const mongoose = require("mongoose")

const PostSchema = new mongoose.Schema({
    caption:{
        type:String,
        default:'',
        required:[true,"it is required"]
    },
    imgUrl:{
        type:String,
        required:[true,"it is required"]
    },
    user:{
        ref:"users",
        type:mongoose.Schema.Types.ObjectId,
        required:[true,"it is required"]
    },
    
     
    
})

const postModel = mongoose.model('posts',PostSchema)

module.exports = postModel