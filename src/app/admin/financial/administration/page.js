"use client"

import React, { useEffect, useRef } from "react";

import NavLink from '../navlink/navlink';
import { useNavbarTextStore } from "../../state/navbar-state";



function Administration() {

  const setNavbarText = useNavbarTextStore((state) => state.setNavbarText);
	setNavbarText("Financial");
 


  return (
    <div className="px-7 h-full">
      <div className="flex items-center justify-start ">
        <NavLink />
        {/* <CouponLabel /> */}
      </div>

      
      <div className='w-full h-[50%] flex  justify-center items-center'>Website under development</div>
          



      
    </div>
  )
}

export default Administration