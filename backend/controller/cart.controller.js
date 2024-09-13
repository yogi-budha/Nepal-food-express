
import { User } from "../models/user.model.js"

const getController =async (req,res)=>{

    try {
        
        const user = await User.findOne({email:req.email})

        console.log(user)
    
        res.status(200).json({success:true,message:"successfully get the item", cartData:user.cart})

    } catch (error) {

        console.log(error)

        res.status(400).json({success:false,message:"internal server error"})
        
    }


}

const addController =async (req,res)=>{

   try {

    const email = req.email

    const user = await User.findOne({email:email})

    console.log(user)

    if(!user){
        return res.status(200).json({success:false,message:"User is not found"})
    }

    const cartData = user.cart

    console.log(user.cart)


    if(!cartData[req.body.itemId]){
        cartData[req.body.itemId] = 1
    }else{
        cartData[req.body.itemId] = cartData[req.body.itemId] + 1
    }

    await User.findByIdAndUpdate(user._id,{cart:cartData})

    res.status(200).json({success:true,message:"Successfullly Added to the cart"})

    
   } catch (error) {

    console.log(error)

    res.status(400).json({success:false,message:"Internal server Error"})
    
   }



}

const removeController = async (req,res) => {

    const email = req.email

    const user = await User.findOne({email:email})

    const cartData = user.cart

    if(cartData[req.body.itemId]>0){
        
        cartData[req.body.itemId]  -= 1
    }
    
    await User.findByIdAndUpdate(user._id,{cart:cartData})

    res.status(200).json({success:true,message:"successfully remove from cart"})

}

export {getController,addController,removeController}