"use client"
import React from 'react'
import NavLink from '../navlink/navlink';
import { useNavbarTextStore } from '../../state/navbar-state'
import FinancialConfigTable from '../../components/configTable/configFinancialTable'
import dummyData from './dummy.json'
import axios from 'axios'

function Financial() {

  const setNavbarText = useNavbarTextStore((state) => state.setNavbarText);
	setNavbarText("Configuration parameters");
  
  return (
    // <div className="px-7 h-full">
    <div className="w-full h-[85vh] px-7 overflow-y-auto">

      <div className="w-[60%] flex items-center justify-between ">
        <NavLink />
      </div>
      <div className='w-full h-[90%] mt-2 p-4 bg-white rounded-[8px] shadow drop-shadow-md'>
          <FinancialConfigTable dummyData={dummyData} />
        
          <div className='w-full pe-10 flex justify-end'>
            <button className='w-[120px] h-[35px] bg-[#005DB8] text-[14px] text-white rounded me-3'>Back</button>
            <button className='w-[120px] h-[35px] bg-[#005DB8] text-[14px] text-white rounded'>Next</button>
          </div>
      </div>
    </div>
  )
}

export default Financial