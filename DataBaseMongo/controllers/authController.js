const AuthService = require('../services/authService')
const bcrypt=require('bcrypt')
const authService = new AuthService()

exports.register = async (req, res) => {
    try {
        await authService.register(req.body)
        res.status(201).json({ 'message': 'Usuario del administrador registrado' })
    } catch (error) {
        res.status(500).json({ "error": error.message })
    }
}

exports.login = async(req, res) => {
    try{
        const{email,password}=req.body
        const userAuth=await authService.filterByEmail(email)
        if(!email){
            return res.status(400).json({"message":"Usuario del administrador no encontrado"})
        }
        const payload={
            email:userAuth.email,
            rol:userAuth.rol
        }
        const token=authService.generateToken(payload)
        res.status(200).send(token)

    }catch(error){
        res.status(500).json({"error":error.message})
    }


}