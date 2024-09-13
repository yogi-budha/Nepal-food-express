import jwt from 'jsonwebtoken'

export const generatJWTtoken = (email,res)=>{

    if(!email){
        res.status(400).json("email is not exist")
    }

 const token  =    jwt.sign({email},"yogesh")

 res.cookie("token",token)

 return token

}