import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Add from './pages/Add.jsx';
import List from './pages/List.jsx';
import Order from './pages/Order.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children :[
      {
        path:'/add',
        element:<Add/>
      },
      {
        path:'/List',
        element:<List/>
      },
      {
        path:'/order',
        element:<Order/>
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>  
     <RouterProvider router={router} />
  </StrictMode>,
)
