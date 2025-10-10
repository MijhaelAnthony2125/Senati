// userLogin.js (Middleware)

const userLogin=(req,res,next)=>{
  let IsLogin=true
  if(!IsLogin){
    return res.status(401).json({'message':"usuario no logueado"})
  }

  next()
}

module.exports=userLogin