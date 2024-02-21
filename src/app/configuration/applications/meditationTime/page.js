"use client"

import React from 'react'
import NavLink from '../../navlink/navlink'
import NavLinkApp from '../NavlinkApp/navlinkApp'
// import MeditationTimeConfigTable from '@/app/components/configTable/configMeditationTimeTable'


function MeditationTime() {
  return (
    <div className="px-7 h-full">
      <div className="w-[60%] flex items-center justify-between ">
        <NavLink />
      </div>
      <div className='w-[50%]'>
        <NavLinkApp />
      </div>
      <div className='w-full h-[50%] flex  justify-center items-center'>Website under development</div>

    </div>
  )
}

export default MeditationTime