import React, { useContext } from 'react'

import food1 from '../assets/food_1.png'
import { StoreContext } from '../Contex/storeContex'
import { Link, NavLink, useNavigate } from 'react-router-dom'

function Cart() {

    const {foodList,cartItem,remove_from_cart,url} = useContext(StoreContext)
    const {navigate}=useNavigate()
  return (

    <>
       <div className='w-full px-48 mx-10 mt-8  '>

    

        <div className='flex justify-between w-full py-8 pt-10 text-green-700 '>
            <p className='w-36 items-center'>Image</p>
            <p>Name</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Remove</p>
        </div>
        <hr className='pb-4'/>

        {
            foodList.map((data)=>(

                
                cartItem[data._id] ? <>

                      <div className='flex justify-between w-[97%] py-2 items-center text-green-700'>



                        <Link to={`/detail/${data._id}`} ><img className='w-20 rounded-lg' src={`${url}/image/${data.image}`} alt="" /></Link>
                
            <p>{data.name}</p>
            <p>{data.price*cartItem[data._id]}</p>
            <p>{cartItem[data._id]}</p>
            <p className='cursor-pointer' onClick={()=>remove_from_cart(data._id)} >X</p>
            
        </div>

        <hr />
                </> : ""

            ))
        }
<div className='flex justify-between items-center mt-16'>
            <div className='flex flex-col gap-4 w-1/2'>
            <h1 className='text-3xl font-semibold text-green-600 mb-2 mt-4'>Cart Total</h1>

            <div className='flex justify-between flex-col'>
                <div className='flex justify-between mb-1 text-sm text-zinc-500'>
                   <p>SubTotal</p>
                <p>RS 12</p> 
                </div>
                <hr className='bg-green-400 text-2xl font-bold h-0.5'/>
                
               
            </div>
            <div className='flex justify-between flex-col'>
                <div className='flex justify-between mb-1 text-sm text-zinc-500'>
                   <p>Delivery Fee</p>
                <p>RS 12</p> 
                </div>
                <hr className='bg-green-400 text-2xl font-bold h-0.5'/>
                
               
            </div>
            <div className='flex justify-between flex-col'>
                <div className='flex justify-between mb-1 text-sm text-zinc-500'>
                   <p>Total</p>
                <p>RS 12</p> 
                </div>
                <hr className='bg-green-400 text-2xl font-bold h-0.5'/>
                
               
            </div>
        
         

            <button className='bg-green-500 rounded-lg text-white py-1 cursor-pointer'>PROCEED TO CHECKOUT</button>
        </div>

        <div className='w-1/2 flex flex-col gap-3  items-center justify-end'> 
            <h1 className='text-green-600 text-sm'>If you have promo Code. Enter it..</h1>
            <div className='w-full flex items-center justify-center flex-col
            gap-5'>
          <input type="text" placeholder='promo code ' className='text-mb bg-transparent border px-2 py-1 rounded-lg border-green-900 text-black bg-zinc-400  w-[40%]' />
            <button className='bg-green-600 w-[40%] px-2 py-1 rounded-lg cursor-pointer text-white text-sm'>Submit</button>
            </div>
  
        </div>

        
</div>


        

    </div>
    <hr className='bg-green-600  mt-5' />

    </>
 
  )
}

export default Cart