import { useEffect, useState } from 'react'
import axios from 'axios'
import { createContext } from 'react'



 const  StoreContext = createContext(null)

 const StoreContextProvider = (props)=>{

   const [cartItem,setCartItem] = useState({})
    const [foodList , setfoodList] = useState([])
    
  const [userData ,setUserData] = useState({})
  
  const [token,setToken ] = useState('')

    
  const url = 'http://localhost:3000';



  function add_to_cart(itemId){

    if(!cartItem[itemId]){
      setCartItem((prev)=>({...prev,[itemId]:1}))
    }else{
      setCartItem((prev)=>({...prev,[itemId]:cartItem[itemId]+1}))
    }

  }

  function remove_from_cart(itemId){

    setCartItem((prev)=>({...prev,[itemId]:cartItem[itemId]-1}))
  }

  function getTotalAmount(){

    let totalAmount = 0

    for(const item in cartItem){
      if(cartItem[item]>0){
      let foodinfo =   foodList.find((data)=> data._id === item)

        totalAmount += foodinfo.price * cartItem[item]
      }
    }

    return totalAmount

  }
  
  function cartItemval(){
    for (const item in cartItem) {
      console.log(item)

      return item
    }
}

  const fetchFoodList = async()=>{

  await axios.get(`${url}/api/foods`).then((res)=>{

    setfoodList(res.data.food)
    })

  }


  useEffect(()=>{
// getTotalAmount()
    fetchFoodList()
  },[])

    const contextValue = {

        url,
      add_to_cart,
      remove_from_cart,
        foodList, 
        cartItem,
        setfoodList,
        cartItemval,
        getTotalAmount,
        userData,
        setUserData,token,setToken


    }

    return (
        <StoreContext.Provider value={contextValue}>

          

            {props.children}

        </StoreContext.Provider>
    )
}


export {StoreContext,StoreContextProvider}

