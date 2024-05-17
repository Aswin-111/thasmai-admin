"use client"
import React from "react";
import { useNavbarTextStore } from '../../admin/state/navbar-state'
import { useRouter } from "next/navigation";
import { useLoginStore } from "@/app/admin/loginstate/loginState";
useLoginStore

function Navbar() {
  const state = useLoginStore(function(state){{
    return state
  }})
const router = useRouter()

  const nav_text  = useNavbarTextStore(state => state.navbar_text);
  
  return (
    <nav className="navbar w-full h-10 px-10 bg-white flex justify-between">
      
    <h1>{nav_text}</h1>
   <button
   className='w-[80px] h-[30px]  bg-[#d34b4b] text-white flex items-center justify-center rounded'
    onClick={()=>{
    localStorage.removeItem('userdata')
    state.setIsloggedin(false)
    router.push('/admin/login')

}}>Logout</button>
</nav>
  );
}

export default Navbar;
