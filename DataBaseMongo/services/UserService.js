const User = require('../models/userModel')

class UserService {
    constructor() {}

    async getAll() {
        const users = await User.find({})
        return users
    }

    async filterById(id) {
        // Corrected findOne syntax
        const user = await User.findOne({ _id: id }) 
        return user
    }

    async create(data) {
        // Corrected new User() syntax
        const user = new User(data)
        return await user.save()
    }
}

module.exports = UserService