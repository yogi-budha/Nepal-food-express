import express from 'express'
import { connectDB } from './config/dbConnect.js'
import foodRoute from './router/foods.router.js'
import cors from 'cors'
import path from "path"
import { fileURLToPath } from 'url';
import userRoute from './router/user.router.js'
import cookieParser from 'cookie-parser'
import cartRouter from './router/cart.router.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express()

// middleware
app.use(cors())
app.use(express.json())
app.use("/image",express.static(path.join(__dirname,'uploads')))
app.use(cookieParser())

// mongoDB connect
connectDB()


// Routes
app.use("/api",foodRoute)
app.use("/api/user",userRoute)
app.use("/api/cart",cartRouter)


// listner 
app.listen(3000,()=>{
    console.log("server is started ")
})