
const UserService=require(`../services/UserService`)
const userService=new UserService()

exports.getAllUsers = async (req, res) => {
    const users = await userService.getAll() 
    res.status(200).json(users)
}


exports.getUser=async(req,res)=>{
  const id= req.params.id
  const user=await userService.filterById(id)
  if(!user){
    return res.status(404).json({message:"Usuario no encontrado"})
  }
  res.status(200).json(user)
}
exports.createUser = async (req, res) => {
    try{
        let data = req.body
        await userService.create(data)
        res.status(201).send('Usuario creado exitosamente')
    }catch(error){
        console.error(error)
        res.status(500).send('Error al crear usuario')
    }
}

exports.updateUser = (req, res) => {
    let data = req.body
    const {nombre, apellido, email, telefono} = data
    
    console.log(nombre, apellido, email, telefono)
    console.log(req.params.id)
    
    // Usa res.json() para enviar datos estructurados
    res.json({message: `Usuario ${req.params.id} actualizado`, data: {nombre, apellido, email, telefono}})
}

exports.deleteUser = (req, res) => {
    res.send(req.params.id)
}

// **¡Middleware 'userLogin' eliminado de aquí para mantener la separación!**