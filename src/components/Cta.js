import React from "react";

// import Login from "../../components/login";
import { Link } from "react-router-dom";





export default function Cta() {
  return (
    <div className="w-screen h-[400px] gradient text-center">
      <h1 className="  text-6xl font-bold text-white pt-20">What are you waiting for    </h1>
      <p className="text-3xl text-black pt-15 pb-4">Click For here to register</p>
    
       <a href="/Signup">
        <button className="rounded-full bg-black py-2 px-4 text-lg font-bold">
          Register
        </button>
      </a>
 {/* <Link to="/Signup">
  < div className="rounded-full bg-black py-2 px-4 text-lg font-bold">
            register</div>
            </Link> */}
     
    




    </div>
  );
}
