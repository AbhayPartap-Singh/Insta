const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        unique:[true,"it al;ready exsits"],
        required:[true,"it is required"]
    },
    email:{
        type:String,
        unique:[true,"it al;ready exsits"],
        required:[true,"it is required"]
    },
    password:{
        type:String,
        required:[true,"it is required"]
    },
    bio:String,
    ProfileImage:{
        type:String,
        default:"https://ik.imagekit.io/uxl1bm5cd/7494a27824f83290d51d65b731b0e716.jpg"
    },
   
    
})

const userModel = mongoose.model('users',userSchema)

module.exports = userModel