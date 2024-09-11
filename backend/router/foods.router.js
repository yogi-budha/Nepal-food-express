import express from 'express'
import multer  from 'multer'
import { fooditemsgetController,fooditemgetController,fooditemspostController,fooditemdeleteController } from '../controller/food.controller.js'

const router = express.Router()

const storage = multer.diskStorage({
    destination:'uploads',
    filename: function (req, file, cb) {
      
     return cb(null,`${Date.now()}${file.originalname}`)
    }
  })
  
  const upload = multer({ storage: storage })
    

router
.get("/foods",fooditemsgetController)
.get("/food/:id",fooditemgetController)
.post("/food",upload.single('image'),fooditemspostController)
.post("/food/:id",fooditemdeleteController)


export default router