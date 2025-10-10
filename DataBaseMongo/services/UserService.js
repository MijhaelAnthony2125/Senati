const User = require('../models/userModel')

class UserService {
    constructor() {}

    async getAll() {
        const users = await User.find({})
        return users
    }

    async filterById(id) {
        // Mongoose usa findOne para buscar por _id
        const user = await User.findOne({ _id: id })
        return user
    }

    async create(data) {
        const user = new User(data)
        return await user.save()
    }
    
    // ⬇️ LÓGICA DE ACTUALIZACIÓN CORREGIDA ⬇️
    async update(id, data) {
        // Utilizamos findByIdAndUpdate, que es el método correcto para actualizar por _id.
        // { new: true } es CRÍTICO para que Mongoose devuelva el documento DESPUÉS de la actualización.
        const updatedUser = await User.findByIdAndUpdate(
            id, 
            data, 
            { new: true } // Opcional: añade runValidators: true si usas validaciones
        )
        return updatedUser
    }
    // ⬆️ FIN DE CORRECCIÓN ⬆️

    async delete(id) {
        return await User.deleteOne({
            _id: id
        });
    }
}
module.exports = UserService