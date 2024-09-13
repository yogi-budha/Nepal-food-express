import { useContext } from "react"
import { StoreContext } from "../Contex/storeContex"


function Order() {

    const {cartItemval,getTotalAmount} = useContext(StoreContext)
  return (
<>
<div className="w-full px-48 py-24 flex  justify-between items-center gap-16">
        <div className="w-1/2">

        <h1 className="text-xl text-green-600 mb-4 font-semibold">Delivery Information</h1>

        <form className="flex flex-col gap-3 " action="">

            <div className="w-full flex  gap-6 ">
                <input className=" border border-green-400 px-2 py-2 text-mb  rounded-lg outline-none  w-1/2" type="text" placeholder="first name" />
                <input  className=" border border-green-400 px-2 py-2 text-mb  rounded-lg outline-none  w-1/2" type="text" placeholder="last name" />
            </div>
            <div>
                <input className=" border border-green-400 px-2 py-2 text-mb  rounded-lg outline-none  w-full" type="text" placeholder="email"/>
            </div>

            <div>
                <input  className=" border border-green-400 px-2 py-2 text-mb  rounded-lg outline-none  w-full" type="text" placeholder="street"/>
            </div>

            <div className="w-full flex  gap-6  ">
                <input type="text" className=" border border-green-400 px-2 py-2 text-mb  rounded-lg outline-none  w-1/2" placeholder="city" />
                <input type="text" className=" border border-green-400 px-2 py-2 text-mb  rounded-lg outline-none  w-1/2" placeholder="state" />
            </div>
           
            <div>
                <input type="text" className=" border border-green-400 px-2 py-2 text-mb  rounded-lg outline-none  w-full" placeholder="phone number" />
            </div>

        </form>

        </div>
        <div className="w-1/2">

        <div className='flex flex-col gap-4 '>
            <h1 className='text-3xl font-semibold text-green-600 mb-2 mt-4'>Cart Total</h1>

            <div className='flex justify-between flex-col'>
                <div className='flex justify-between mb-1 text-sm text-zinc-500'>
                   <p>SubTotal</p>
                <p>{cartItemval()?` RS.${getTotalAmount()}` : ""}</p> 
                </div>
                <hr className='bg-green-400 text-2xl font-bold h-0.5'/>
                
               
            </div>
            <div className='flex justify-between flex-col'>
                <div className='flex justify-between mb-1 text-sm text-zinc-500'>
                   <p>Delivery Fee</p>
                <p>{cartItemval()?` RS.2` : ""}</p> 
                </div>
                <hr className='bg-green-400 text-2xl font-bold h-0.5'/>
                
               
            </div>
            <div className='flex justify-between flex-col'>
                <div className='flex justify-between mb-1 text-sm text-zinc-500'>
                   <p>Total</p>
                <p> {cartItemval()?` RS.${getTotalAmount()+2}` : ""}  </p> 
                </div>
                <hr className='bg-green-400 text-2xl font-bold h-0.5'/>
                
               
            </div>
        
         

            <button className='bg-green-500 rounded-lg text-white py-1 cursor-pointer'>PROCEED TO CHECKOUT</button>
        </div>

        </div>


    </div>

    <hr />
</>


  )
}

export default Order