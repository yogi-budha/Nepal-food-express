
import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.jpeg'
import { useContext } from 'react'
import { StoreContext } from '../Contex/storeContex'
import avatar from '../assets/avatar.png'
import axios from 'axios'

function NavBar() {

    const {cartItemval,userData,url,token,setToken}  = useContext(StoreContext)

    const  navigate = useNavigate();

const fetchLogout = ()=>{
        localStorage.removeItem("token")
        setToken("")
        navigate("/")
  
}


  return (
    <>
    <div className='w-full h-20'>
        <div className='flex justify-between items-center
        px-72 shadow-xl py-2  '>

            <Link to={"/"}>
                        <div className='flex gap-4 items-center cursor-pointer'>
                <img className='w-16' src={logo} alt="" />
                <p className='font-bold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-green-600 to-green-400'>Nepal Food Express</p>
            </div>
            </Link>


            <div  className='flex gap-16 text-xl font-semibold text-green-700 items-center'>

                <a href={"/"}><p>Home</p></a>
                <a href={"#TopDises"}><p>Menu</p></a>
                <a href={"#Footer"}><p>Contact Us</p></a>
             
              
            </div>

            <div  className='flex gap-20 items-center text-green-800  '>
                <Link to={'/cart'}>
                <div className='relative flex gap-3 '>
                    <div className={`w-2 h-2 ${cartItemval() ? "bg-red-600":""} rounded-full absolute -top-0.5 right-0.5`}></div>
                <i className="text-3xl ri-shopping-cart-2-line cursor-pointer"></i>
                </div>
                </Link>

                <div className='flex items-center justify-between gap-6'>
                {
                   token ? <>
                   <img className='w-10 rounded-full' src={avatar} alt="" />
                   <div onClick={fetchLogout} className='flex gap-5 text-lg font-semibold text-green-700 cursor-pointer
                   logout'>
                   <i className="ri-logout-circle-line"></i>
                   logout
                   </div>
                   </> :    <Link to={'/loginorSignup'}>
                   <p className='flex items-center gap-2 cursor-pointer text-sm'><i className=" text-3xl ri-login-circle-line"></i><span className='text-base cursor-pointer'>login</span></p>
                   </Link>
                }
                </div>
             
                
            </div>
        </div>
    </div>
    </>
  )
}

export default NavBar