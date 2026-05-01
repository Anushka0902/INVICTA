import React from "react";

// import Login from "../../components/login";
import { Link } from "react-router-dom";





export default function Cta() {
  return (
    <div className="w-screen h-[400px] gradient text-center">
      <h2 className="  text-6xl font-bold text-white pt-20">What are you waiting for register with  us</h2>
      <p className="text-3xl text-white pt-15 pb-4"> Login to Connect </p>
    
       <a href="/">
        <button className="rounded-full bg-black py-2 px-4 text-lg font-bold">
          Login 
        </button>
      </a>
 {/* <Link to="/Signup">
  < div className="rounded-full bg-black py-2 px-4 text-lg font-bold">
            register</div>
            </Link> */}
     
    




    </div>
  );
}
