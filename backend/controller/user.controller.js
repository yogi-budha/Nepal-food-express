import {User} from '../models/user.model.js'
import bcrypt from 'bcrypt'
import { generatJWTtoken } from '../utils/generateJWT.js'
import jwt from 'jsonwebtoken'



const signupController = async (req,res)=>{

    try {
        
        const {name,email,gender,password} = req.body

        let user = await User.findOne({email})

        if(user){
            
        res.status(400).json({success:false,message:"user is alerady exist"})

        }

        const salt = await bcrypt.genSalt(10)

        let hashPassword = await bcrypt.hash(password,salt)

        const newUser = new User({
            name,
            email,
            gender,
            avatar : gender == "male" ? `https://avatar.iran.liara.run/public/boy?usearname=${name}` : `https://avatar.iran.liara.run/public/girl?usearname=${name}`,
            password:hashPassword
        })

        if(!newUser){
            
        res.status(400).json({success:false,message:"User is not created"})
        }

        await newUser.save()

       const token =   generatJWTtoken(newUser.email,res)

        
        res.status(200).json({success:true,message:"Successfully created the user",newUser,token})
        
    } catch (error) {
        res.status(400).json({success:false,message:"Inernal server error"})
        
    }


}



const loginController = async (req,res)=>{

    try {
        
        const {email,password , gender} = req.body 

        const user = await User.findOne({email})

        if(!user){
            res.status(400).json({success:false,message:"User is not exist"})
        }

        const result = await bcrypt.compare(password,user.password)

        if(!result){
            res.status(400).json({success:false,message:"password is wrong"})
        }

        const token = generatJWTtoken(user.email,res)

        res.status(200).json({success:true,message:"Successfully login you account",user,token})
    } catch (error) {


        res.status(400).json({success:false,message:"internal server Error"})
        
    }

}




const logoutController = (req,res)=>{

try {


    res.cookie("token","")

    res.json({success:false,message:"successfully logout your account"})
    
} catch (error) {

    console.log(error)

    res.status(400).json({success:false,message:"Internal Server Error"})
    
}

}


export {loginController,signupController,logoutController}