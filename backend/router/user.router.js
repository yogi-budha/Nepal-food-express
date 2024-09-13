import express from 'express'
import { loginController, logoutController, signupController } from '../controller/user.controller.js'

const userRoute = express.Router()

userRoute.post("/login",loginController)
userRoute.post("/signup",signupController)
userRoute.post("/logout",logoutController)

export default userRoute

