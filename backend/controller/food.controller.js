import { foodModel } from "../models/food.model.js"



const fooditemspostController = async(req,res)=>{

    try {
    const {name,image,price,description,calories,category,vitamins,protins} = req.body

  let image_filename = req.file.filename

    const foodList =  new foodModel({
        name,image:image_filename,price,description,calories,category,vitamins,protins
    })

   await foodList.save()
    res.status(200).json({
        success:true,
        message:"successfully created",
        foodList
    })
    } catch (error) {

        console.log("eror",error)

        res.status(400).json({
            success:false,
            message:"internal server error"
        })
        
    }

}

const fooditemsgetController = async (req,res) =>{

    try {
        const food = await foodModel.find()

        res.status(200).json({success:true , food})
        
    } catch (error) {

        res.status(400).json({success:false,message:"internal server error"})
        
    }


}


const fooditemgetController =async (req,res) =>{

    try {
    const {id} = req.params
    console.log(id)

    

    const food = await foodModel.findById(id)

    if(!food){
        res.status(400).json({success:false,message:"food is not present"})
    }

    res.status(200).json({success:true,message:"succefully get the food items",food})
    
   } catch (error) {
    console.log(error)
    res.status(400).json({success:false,message:"internal server Error"})
    
   }
}


const fooditemdeleteController = async (req,res) =>{

    const food = await  foodModel.findOne({email})

    fs.unlink( `uploads/${food.image}`, (err) => {
        if (err) {
          console.error('Error deleting file:', err);
        } else {
          console.log('File deleted successfully');
        }
      })
      await foodModel.findByIdAndDelete(req.body.id)
   
      try {
       res.json({message:"sucessfully deleted"})
       
      } catch (error) {
   
       res.json({message:"error"})
       
      }
}




export {fooditemsgetController,fooditemgetController,fooditemspostController,fooditemdeleteController}