"use client"

import React from 'react'
import NavLink from '../navlink/navlink'
import { useNavbarTextStore } from '../../state/navbar-state';

function ApplicationFeedback() {

  const setNavbarText = useNavbarTextStore((state) => state.setNavbarText);
	setNavbarText("Feedback views");

  return (
    <div className="px-7 h-full">
    <div className="w-[60%] flex items-center justify-between ">
      <NavLink />
    </div>
    <div className='w-full mt-2 h-[500px]  bg-white rounded-[8px] shadow drop-shadow-md overflow-scroll'>
      Website under development📍📌
       jshgfsdbnakldnjb
    </div>

  </div>
  )
}

export default ApplicationFeedback