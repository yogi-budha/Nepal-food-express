import mongoose from "mongoose";

export const connectDB = async ()=> {
        
    await mongoose.connect("mongodb://127.0.0.1:27017/food-Del-App").then((res)=>{
        console.log("Successfully Connected the mongoose")
    }).catch((err)=>{
        console.log("error--->",err)
    })
}