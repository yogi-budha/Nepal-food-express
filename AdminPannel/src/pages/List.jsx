import axios from "axios"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"


function List() {

  const url  = 'http://localhost:3000'

  const [list , setList] = useState([])

async function fetchitem(){
  axios.get(`${url}/api/foods`).then((res)=>{
    // console.log(res.data)
    setList(res.data.food)

    console.log(res.data.food)
  })
}  

 async function removeItem(foodId){


  await axios.post(`http://localhost:3000/api/food/${foodId}`,{id:foodId}).then((res)=>{
   
    toast.success("successuflly deleted")
    fetchitem()
  }).catch((err)=>{
    toast.error("Error")
  })
}

useEffect(()=>{
  fetchitem()
},[])
  return (
    <div className="w-[80%] px-4 pt-9 ">
      <h1>All Food List</h1>

      
      <div className="  flex justify-between items-center border py-2 px-5">
        <p>Image</p>
        <p>Name</p>
        <p>Catagory</p>
        <p>Price</p>
        <p>Action</p>
      </div>

      <hr />
      <div className=" flex flex-col justify-between  border px-6"> 
         {
        
        list?.map((data)=>{
          return <div key={data._id}>
          <div  className="flex justify-between items-center gap-5">
        <img className="w-20" src={`${url}/image/${data.image}`} alt="" />
        <p>{data.name}</p>
        <p>{data.catagory}</p>
        <p>{data.price}</p>
        <p className="cursor-pointer" onClick={()=>removeItem(data._id)}>X</p>
      </div>
      <hr className="my-2" />
          
          </div>
        })
        
      }
      </div>

     
      
    </div>
  )
}

export default List