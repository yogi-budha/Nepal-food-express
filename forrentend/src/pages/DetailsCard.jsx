import axios from 'axios'
import food_1 from '../assets/food_1.png'
import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { StoreContext } from '../Contex/storeContex'

function DetailsCard() {

  const { id } = useParams()
  const {add_to_cart,remove_from_cart,cartItem} = useContext(StoreContext)
  const [singleData,SetSingleData] = useState({})

  const url = 'http://localhost:3000'



  function fetchOneData(){

    axios.get(`${url}/api/food/${id}`).then((res)=>{
      console.log(res.data.food)
      SetSingleData(res.data.food)
    })


  }

  useEffect(()=>{
    fetchOneData()
  },[])


  
  return (
    <>
       <div className='w-full px-52 my-20  '>
      <div>
      
        <div className='flex items-center gap-24 mb-10 '>
        <img className='rounded-lg shadow-2xl' src={`${url}/image/${singleData.image}`} alt="" />

        <div>
        <p className='text-3xl text-green-800'>Add to Cart: <span>
          {cartItem[id]}</span></p>
        <div className='flex gap-10 p-4 '>
           <button onClick={()=>add_to_cart(id)} className='text-2xl flex items-center justify-center bg-green-600 text-white px-2 py-1 cursor-pointer hover:bg-green-500 rounded-full'><i className="ri-add-line"></i></button>
           <button onClick={()=>remove_from_cart(id)} className='text-2xl flex items-center justify-center bg-green-600 text-white px-2 py-1 cursor-pointer hover:bg-green-500 rounded-full'><i className="ri-subtract-fill"></i></button>
       
        </div>
 
        </div>
      
        </div>

        <div className='text-xl flex gap-10 m-6 text-green-700'>
          <p>NAME: {singleData.name}</p>

          <p > PRICE: RS.{singleData.price}</p>

        </div>
        <div>
          <p className='text-lg tracking-tight mb-3 text-zinc-400'><span className='block'>DESCRIPTION:</span> ->{singleData.description}</p>

        </div>

        <div className='text-lg tracking-tight mb-3 text-zinc-400 flex gap-2 flex-col'>
          <p><span className='block'>CALORIES:</span> ->{singleData.calories}</p>
          <p> <span className='block'>PROTEIN:</span> -> {singleData.protins}</p>
          <p><span className='block'> VITAMINS:</span>
         {singleData.vitamins} <br />
          </p>
          </div>

          <p className='text-mb text-green-500 mt-4'>This dish is not only nutritious but also visually stunning, making it a great choice for health-conscious diners.</p>
      </div>
    </div>
    <hr className=''/>
    </>
 
  )
}

export default DetailsCard