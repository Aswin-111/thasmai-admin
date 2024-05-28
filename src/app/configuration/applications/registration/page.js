"use client"

import React from 'react'
import NavLink from '../../navlink/navlink'
import NavLinkApp from '../NavlinkApp/navlinkApp'
import { useNavbarTextStore } from '@/app/state/navbar-state'
// import RegPageConfigTable from '@/app/components/configTable/configRegPageTable'
import ConfigurationTable from "@/app/components/configTable/configurationTable"
import dummyData from './dummy'

function RegPageConfiguration() {

  const setNavbarText = useNavbarTextStore((state) => state.setNavbarText);
	setNavbarText("Configuration parameters");

  return (
    <div className="w-full h-[85vh] px-7 overflow-y-auto">

      <div className="w-[60%] flex items-center justify-between ">
        <NavLink />
      </div>
      <div className='w-[80%]'>
        <NavLinkApp />
      </div>
      <div className='w-full h-[85%] mt-4 p-4 bg-white rounded-[8px] shadow drop-shadow-md'>
          {/* <RegPageConfigTable /> */}
          <ConfigurationTable dummyData={dummyData}/>
          <div className='w-full h-[10%] pe-10 flex justify-end'>
            <button className='w-[120px] h-[35px] bg-[#66A2FA] text-[14px] text-white rounded me-3'>Back</button>
            <button className='w-[120px] h-[35px] bg-[#66A2FA] text-[14px] text-white rounded'>Next</button>
          </div>
      </div>
    </div>
  )
}

export default RegPageConfiguration