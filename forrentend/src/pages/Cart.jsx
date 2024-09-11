import React, { useContext } from 'react'

import food1 from '../assets/food_1.png'
import { StoreContext } from '../Contex/storeContex'

function Cart() {

    const {foodList,cartItem} = useContext(StoreContext)
  return (
    <div className='w-full px-48 mx-10 '>

        <div className='flex justify-between w-full py-8 pt-10 '>
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
                      <div className='flex justify-between w-[97%] py-2 items-center'>
            <img className='w-20 rounded-lg' src={food1} alt="" />
            <p>{data.name}</p>
            <p>{data.price}</p>
            <p>{cartItem[data._id]}</p>
            <p >X</p>
            
        </div>

        <hr />
                </> : ""

            ))
        }

        

        

    </div>
  )
}

export default Cart