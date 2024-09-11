import express from 'express'
import { connectDB } from './config/dbConnect.js'
import foodRoute from './router/foods.router.js'
import cors from 'cors'
import path from "path"
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express()

// middleware
app.use(cors())
app.use(express.json())
app.use("/image",express.static(path.join(__dirname,'uploads')))

// mongoDB connect
connectDB()


// Routes
app.use("/api",foodRoute)


app.listen(3000,()=>{
    console.log("server is started ")
})