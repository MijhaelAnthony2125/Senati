const mongoose = require('mongoose')
const Shema = mongoose.Schema
const userShema = new Shema({
    nombre: String,
    apellido: String,
    email: String,
    telefono: String
})
const User = mongoose.model('User', userShema)
module.exports = User