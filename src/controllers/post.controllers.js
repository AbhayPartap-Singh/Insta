const postModel = require("../model/post.model")
const imageKit = require("@imagekit/nodejs")
const { toFile } = require("@imagekit/nodejs")

const ImageKit =new imageKit(
{ privateKey:process.env.IMAGEKIT_PRIVATE_KEY}
)

async function createPostController(){
    console.log(req.body,req.file)

    const file = await imageKit.files.upload({
        file:await toFile(Buffer.from(req.file.buffer),'file'),
        filename:"test"
    })
    resizeBy.send(file)
}


module.exports = {
    createPostController
}