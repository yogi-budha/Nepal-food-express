import React from "react";
import banner from "../assets/banner.jpeg";

function Banner() {
  return (
    <div className="w-full flex items-center justify-center mt-16 ">
      <div className="w-[60%] rounded-3xl relative">
        <img className="w-full h-[500px] rounded-xl" src={banner} alt="" />
        <div className="absolute top-0 px-6 py-16 ">
          <p className="text-4xl font-semibold mb-4 text-green-800">
            Fresh Food...
          </p>
          <p className="text-6xl font-semibold mb-4 text-green-800">
            Order Now !!!
          </p>
         <p className="text-green-800 tracking-tighter">Choose from a diverse menu featuring a delectable array of dishes <br />crafted with the finestingredient and culinary <br /> and elevate your dining experience, one delicious meal <br /> at a time</p>
          <button className="px-3 py-2 bg-green-400 rounded-full mt-6 text-green-200">View Menu</button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
