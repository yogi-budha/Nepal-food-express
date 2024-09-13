import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        enum:["male","female"]
    },
    avatar:{
        type:String,

    },
    
    cart:{
        type:Object,
        default:{
        }
    }
},{minimize:false})

export const User = mongoose.model("User",userSchema)