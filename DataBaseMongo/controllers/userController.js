const UserService = require('../services/userService')
const userService = new UserService()


exports.getAllUsers = async(req, res) => {
    //console.log('Accediendo a todos los usuarios')
    const users = await userService.getAll()
    res.status(200).json(users)
}

exports.getUser = async(req, res) => {
    const id = req.params.id
    const user = await userService.filterById(id)
    if (!user) {
        return res.status(400).json({
            "message": "Usuario no encontrado"
        })
    }
    res.status(200).json(user)

}
exports.createUser = async(req, res) => {
    try {
        let data = req.body
        await userService.create(data)
        res.status(201).send('usuarios registrados')
    } catch (error) {
        res.status(500).send('usuarios registrados')
    }
    // const { nombre, apellido, email, telefono } = data
    // console.log(nombre, apellido, email, telefono)
    // res.send("creado exitosamente")
}

exports.updateUser = async(req, res) => {
    let data = req.body
    const id = req.params.id
    const user = await userService.filterById(id)
    if (!user) {
        // Si no existe el usuario con ese id
        return res.status(400).json({
            'message': "Usuario no encontrado "
        })
    }
    await userService.update(id, data)
    res.status(200).send('Se modifico el Usuario correctamente')
}
exports.deleteUser = async(req, res) => {
    const id = req.params.id
    const user = await userService.filterById(id)
    if (!user) {
        return res.status(400).json({
            'message': "Usuario no encontrado"
        })
    }
    await userService.delete(id)
    res.status(200).send('se elimino el usuario correctamente')


}