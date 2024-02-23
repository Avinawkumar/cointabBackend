const mongoose = require("mongoose")

const usersSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    website: { type: String, required: true },
    city: { type: String, required: true },
    company: { type: String, required: true },
    userId:{type:Number ,required: true }
}, {
    versionKey: false
})

const UsersModel = mongoose.model("user", usersSchema)

module.exports = { UsersModel }