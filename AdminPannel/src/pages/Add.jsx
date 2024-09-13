import { useState } from 'react'
import upload from '../assets/upload_area.png'
import axios from 'axios'
import { toast } from 'react-toastify'

function Add() {
    const [image,setImage] = useState(false)

    const [data,setData ] = useState({name:'',description:'' , category:"salad",price:'',calories:"",protins:"",vitamins:""})

    function onchangeHandler(e){

        setData((val)=>({...val,[e.target.name]:e.target.value}))

    }

   async function submitHandler(e){
        e.preventDefault()
        const url = 'http://localhost:3000'
       
        const formData = new FormData()

        formData.append("name",data.name)
        formData.append("description",data.description)
        formData.append("category",data.category)
        formData.append("price",Number(data.price))
        formData.append("image",image)
        formData.append("calories",data.calories)
        formData.append("protins",data.protins)
        formData.append("vitamins",data.vitamins)

     await axios.post(`${url}/api/food`,formData).then((res)=>{
        console.log("Response:", res.data)
        setData(
            {name:'' , category:'',price:'',
                
        },
    )
    setImage(false)
    toast.success(res.data.message)
     }).catch((err)=>{
        console.log("error---->",err)
     })

    }

    

    
  return (
    <div >
        <h1 className='text-2xl font-bold mb-6 py-2'>Add the items</h1>

        <form action="" onSubmit={submitHandler} >
            <div className='text-mb text-slate-600 '>
                <p className='py-2'>Upload Image</p>
                <label htmlFor="image">  <img className='w-44' src={image?URL.createObjectURL(image):upload} alt="" /></label>
                <input type="file" onChange={(e)=>setImage(e.target.files[0])} name="image" hidden required id="image" />
            </div>

            <div className='text-mb text-slate-600 mb-5 mt-5' >
                <p>Product name</p>
                <input onChange={onchangeHandler} value={data.name} className='border rounded-md border-slate-300 py-2 w-96 outline-none px-2 mt-2' type="text" name="name" id="" placeholder="Type here"/>
            </div>

            <div className='text-mb text-slate-600 mt-5 '>
                <p className='p-2'>Product description</p>
                <textarea onChange={onchangeHandler} value={data.description} name="description" id="" className='w-96 h-16 border border-slate-200   outline-none p-2 rounded-md tracking-tighter' placeholder="Write content here !!!"></textarea>
            </div>

            <div className='flex justify-between items-center gap-10'>
                  <div className='text-mb text-slate-600 mt-5 '>
                <p className='p-2'>Product Calories</p>
                <textarea onChange={onchangeHandler} value={data.calories} name="calories" id="" className='w-96 h-16 border border-slate-200   outline-none p-2 rounded-md tracking-tighter' placeholder="Write content here !!!"></textarea>
            </div>
            <div className='text-mb text-slate-600 mt-5 '>
                <p className='p-2'>Product Protins</p>
                <textarea onChange={onchangeHandler} value={data.protins} name="protins" id="" className='w-96 h-16 border border-slate-200   outline-none p-2 rounded-md tracking-tighter' placeholder="Write content here !!!"></textarea>
            </div>
            <div className='text-mb text-slate-600 mt-5 '>
                <p className='p-2'>Product Vitamins</p>
                <textarea onChange={onchangeHandler} value={data.vitamins} name="vitamins" id="" className='w-96 h-16 border border-slate-200   outline-none p-2 rounded-md tracking-tighter' placeholder="Write content here !!!"></textarea>
            </div>
            </div>
          
               

               <div className='flex gap-9 '>
                   <div className='text-mb text-slate-600 my-4 '>
                <p className='py-2'>Product category</p>
                <select name="category" id="" onChange={onchangeHandler} value={data.category} className='px-4 py-2  outline-none border border-slate-300 rounded-md ' >
                    <option value="Salad">Salad</option>
                    <option value="Rolls">Rolls</option>
                    <option value="Deserts">Deserts</option>
                    <option value="Sandwich">Sandwich</option>
                    <option value="Cake">Cake</option>
                    <option value="Pure Veg">Pure Veg</option>
                    <option value="Pasta">Pasta</option>
                    <option value="Noodles">Noodles</option>
                </select>
            </div>

            <div className='text-mb text-slate-600 my-4 '>
                <p className='py-2'>Product price</p>
                <input type="number" onChange={onchangeHandler} value={data.price} name="price"  className='px-4 py-2  outline-none border border-slate-300 rounded-md ' placeholder="Rs 200" id="" />
            </div>
               </div>
         

            <input type="submit"  className='bg-black text-white px-6  py-2 cursor-pointer rounded-md' value="ADD" />
        </form>
    </div>
  )
}

export default Add