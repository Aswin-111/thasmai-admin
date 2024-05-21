"use client"

import React from 'react'
import NavLink from '../navlink/navlink'
import { useNavbarTextStore } from '../../state/navbar-state'
import CouponLabel from '@/app/components/couponlabel/couponLabel'

function Mahadhanam() {

  const setNavbarText = useNavbarTextStore((state) => state.setNavbarText);
  setNavbarText("Users");


  return (
    <>
    <div className='flex items-center mx-5 justify-between'>
      <NavLink/>
      <CouponLabel/>
    </div>
    <div className='w-full h-[50%] flex  justify-center items-center'>Website under development</div>

    </>
  )
}

export default Mahadhanam