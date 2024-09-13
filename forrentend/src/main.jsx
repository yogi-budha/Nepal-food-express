
import './index.css'
import App from './App.jsx'
import Cart from './pages/Cart.jsx';
import Home from './pages/Home.jsx';
import { createRoot } from 'react-dom/client'
import DetailsCard from './pages/DetailsCard.jsx'
import LoginSignup from './Components/LoginSignup.jsx'
import { StoreContextProvider } from './Contex/storeContex.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path: "/",
    element: <Home/>,
    },
      {
        path: "/detail/:id",
    element: <DetailsCard/>,
    },
      {
        path: "/cart",
    element: <Cart/>,
    },
  ]
  },
  {
    path:'/loginorSignup',
    element:<LoginSignup/>
  }

]);

createRoot(document.getElementById('root')).render(
  <StoreContextProvider>
 <RouterProvider router={router} />
  </StoreContextProvider>,
)
