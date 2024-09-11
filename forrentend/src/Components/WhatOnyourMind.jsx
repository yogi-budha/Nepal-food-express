import React from 'react'
import { menu_list } from '../assets/assets'

function OnyourMind() {
  return (
    <div className='mt-7 px-72'>
        <h1 className='text-2xl font-semibold space-x-4 '>What's on your mind?</h1>

        <div className='mt-6 flex gap-16 items-center '>
            {menu_list.map((image,i)=>{
                return <div className='flex flex-col items-center gap-2 cursor-pointer ' key={i}>
                  

              <img className='w-28' src={image.menu_image} alt="" />
               <p className='font-semibold text-zinc-500'>{image.menu_name}</p>
                </div>
          
            })}
        </div>


    </div>
  )
}

export default OnyourMind