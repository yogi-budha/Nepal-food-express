import logo from '../../../forrentend/src/assets/logo.jpeg'
import profile from '../assets/profile_image.png'


function Navbar() {
  return (
<div className='w-full p-4'>
  <div className='flex justify-between items-center px-48 '>
    <div >
      <div className='flex gap-6 items-center '>
         <img  className='w-16' src={logo} alt="" />
  <p className='font-bold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-green-600 to-green-400'>Nepal Food Express</p>
      </div>
 

    </div>
  <p className='text-lg text-green-600 font-semibold'>Admin Pannel</p>
  <img src={profile} alt="" />
  </div>
</div>
  )
}

export default Navbar