"use client"
import React from 'react'
import NavLink from '../../navlink/navlink'
import NavLinkFeedback from '../NavLinkFeedback/NavLinkFeedback'

function GeneralFeedback() {
  return (
    <div className="px-7 h-full">
      <div className="w-[60%] flex items-center justify-between ">
        <NavLink />
      </div>
      <div className='w-[50%]'>
        <NavLinkFeedback />
      </div>
      <div className='w-full h-[50%] flex  justify-center items-center'>Website under development khuyetuwihoiuytugihojiuh</div>

    </div>
  )
}

export default GeneralFeedback