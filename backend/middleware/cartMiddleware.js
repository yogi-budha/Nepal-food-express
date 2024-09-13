import jwt from 'jsonwebtoken'

const cartMidleware = (req,res,next)=>{

    try {
            const token = req.headers["token"]

    // console.log(token)

    if(!token){
        res.json({"success":false,message:"token is misssing"})
    }else{
       const decode_data =  jwt.verify(token,process.env.JWT_SECREATKEY)

     req.body.userId = decode_data.userId
     next()

    }
    } catch (error) {

        return res.json({message:"error occurs on middleware fun"})
        
    }



}


export default cartMidleware