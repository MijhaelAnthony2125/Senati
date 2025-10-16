const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserAuthSchema = new Schema({
    email: String,
    password: String,
    rol: { type: String, required: true } 
})

const UserAuth = mongoose.model('UserAuth', UserAuthSchema) 
module.exports = UserAuth