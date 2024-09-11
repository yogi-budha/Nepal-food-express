import NavBar from "./Components/NavBar"
import 'remixicon/fonts/remixicon.css'
import Home from "./pages/Home"
import OnyourMind from "./Components/WhatOnyourMind"
import { Outlet } from "react-router-dom"
import Footer from "./Components/Footer"

function App() {

  return (
    <>
<NavBar/>
<Outlet />
<Footer/>
    </>
  )
}

export default App
