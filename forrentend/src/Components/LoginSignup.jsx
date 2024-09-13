import  { useContext, useEffect, useState } from "react";

import axios, { Axios, AxiosError } from 'axios'
import { StoreContext } from "../Contex/storeContex";
import { useNavigate } from "react-router-dom";


function LoginSignup() {
  const [curState, setCurState] = useState("signup");
  const  navigate = useNavigate();

  const {url,userData,setUserData,token,setToken } = useContext(StoreContext)

  let newUrl = url 
  const [data,setData] = useState({name:"",email:"",password:"",gender:""})

  if(curState=="signup"){

    newUrl = `${url}/api/user/signup`

  }else{
    newUrl =`${url}/api/user/login`
  }



  const onchangeHandler = (e)=>{

    setData((prev)=>({...prev,[e.target.name]:e.target.value}))

  }

  const fetchLogin = (data)=>{


    axios.post(newUrl,data).then((res)=>{
      setUserData(res.data)
      localStorage.setItem("token",res.data.token)
      setToken(res.data.token)

      

      
    })
  }


  const submitHandler = (e)=>{

    e.preventDefault()
    fetchLogin(data)

  }

  return (
    <>

      <div className="w-full h-screen flex items-center justify-center ">
        <div className="border w-96  border-zinc-400 rounded-md overflow-hidden px-4 py-5 shadow-xl">
          <h1
            className="text-2xl font-semibold
            pb-5"
          >
            {curState == "signup" ? "Sign up" : "Login"}
          </h1>
          <form action={`${

    token ? navigate("/") :""
}`} method="">
            <div className="w-full h-full flex flex-col gap-3">
              {curState == "signup" ? (

                <>
                      <input
                  className="w-full py-2 border outline-none px-3 rounded border-zinc-500 text"
                  type="text"
                  name="name"
                  placeholder="name"
                  value={data.name}
                  onChange={onchangeHandler}
                />
              <select name="gender" value={data.gender} 
              onChange={onchangeHandler} id=""  className="w-full  border outline-none px-3 rounded border-zinc-500 text">
                <option hidden>Select your Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
                </>
          
              ) : (
                ""
              )}

              <div>
                <input
                  type="email"
                  value={data.email}
                  name="email"
                  onChange={onchangeHandler}
                  className="w-full py-2 border outline-none px-3 rounded border-zinc-500 text"
                  placeholder="email"
                />
              </div>
              <div>
                <input
                  type="password"
                  value={data.password}
                  name="password"
                  onChange={onchangeHandler}
                  className="w-full py-2 border outline-none px-3 rounded mb-2 border-zinc-500 text"
                  placeholder="password"
                />
                {curState == "signup" ? (
                  <p className="text-red-600 text-sm  ">
                    All field is required !!!
             
                  </p>
                ) : (
                  <p className="text-red-600 text-sm  ">
                    Email or the field is required !!!
   
                  </p>
                )}
              </div>

          

              {curState == "signup" ? (
                <input
                  className="bg-green-600 py-2 mb-4 rounded text-white font-semibold cursor-pointer"
                  type="submit"
                  value="Create an account"
                  onClick={submitHandler}

                />
              ) : (
                <input
                  className="bg-green-600 py-2 mb-4 rounded text-white font-semibold cursor-pointer"
                  type="submit"
                  value="Login"
                  
                  onClick={submitHandler}
                />
              )}
            </div>
          </form>

          <div className="text-center font-semibold">
            {curState == "signup" ? (
              <p>
                If you have already have an account?{" "}
                <span
                  onClick={() => setCurState("Login")}
                  className="text-green-500 cursor-pointer"
                >
                  Login
                </span>{" "}
              </p>
            ) : (
              <p>
                If Not registered yet?{" "}
                <span
                  onClick={() => setCurState("signup")}
                  className="text-green-500 cursor-pointer"
                >
                  Create_an_account
                </span>{" "}
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginSignup;