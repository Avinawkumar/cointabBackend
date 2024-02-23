const mongoose = require("mongoose")

const postsSchema = mongoose.Schema({
    userId: { type: String, required: true },
    postId: { type: String, required: true },
    title: { type: String, required: true },
    body: { type: String, required: true },

}, {
    versionKey: false
})
const PostsModel = mongoose.model("post", postsSchema)

module.exports = { PostsModel }