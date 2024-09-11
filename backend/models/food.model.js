import mongoose from 'mongoose'

const foodSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    image:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    calories:{
        type:String,
        required:true
    },
    protins:{
        type:String,
        
    },
    vitamins:{
        type:String
    },
    price:{
        type:Number,
        default:0
    },
    category:{
        type:String,
        required:true
    }

})

export const foodModel = mongoose.model("foodModel",foodSchema)