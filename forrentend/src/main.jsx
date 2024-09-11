
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import DetailsCard from './pages/DetailsCard.jsx'
import { StoreContextProvider } from './Contex/storeContex.jsx';
import Cart from './pages/Cart.jsx';

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

]);

createRoot(document.getElementById('root')).render(
  <StoreContextProvider>
 <RouterProvider router={router} />
  </StoreContextProvider>,
)
