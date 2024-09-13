import express from 'express'
import authMiddleware from '../middleware/auth.js'
import { addController, getController, removeController } from '../controller/cart.controller.js'


const cartRouter = express.Router()

cartRouter.get("/get",authMiddleware,getController)
.post("/addcart",authMiddleware,addController)
.post("/removecart",authMiddleware,removeController)

export default cartRouter