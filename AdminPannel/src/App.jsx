import Sidebar from './Components/Sidebar'
import Navbar from './Components/Navbar'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
    <ToastContainer/>
    <Navbar/>
    <hr />
    <div className='flex gap-9'>
        <Sidebar/>
    <Outlet />
    </div>
  
    </>
  )
}

export default App
