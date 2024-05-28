  "use client"

import React, { useState } from 'react'
import NavLink from '../../navlink/navlink'
import NavLinkApp from '../NavlinkApp/navlinkApp'
import { useNavbarTextStore } from '@/app/state/navbar-state'
import MeditationTimeConfigTable from '@/app/components/configTable/configMeditationTimeTable'
import dummyData from "./dummy"
import MeditationTimeForm from '@/app/components/configTable/MeditationTimeForm'
import EditMeditationTimePopUp from '@/app/components/configTable/EditMeditationTimePopUp'

function MeditationTime() { 

  const [editMeditationTimePopUp, setEditMeditationTimePopUp] = useState(false)

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
      <div className='w-full h-[85%] mt-4 p-4 bg-white rounded-[8px] shadow drop-shadow-md overflow-y-auto'>
        <MeditationTimeForm/>
          <MeditationTimeConfigTable  setEditMeditationTimePopUp={setEditMeditationTimePopUp}/>
          {/* <div className='w-full h-[10%] pe-10 flex justify-end'>
            <button className='w-[120px] h-[35px] bg-[#66A2FA] text-[14px] text-white rounded me-3'>Back</button>
            <button className='w-[120px] h-[35px] bg-[#66A2FA] text-[14px] text-white rounded'>Next</button>
          </div> */}
      </div>
      {
       editMeditationTimePopUp && <EditMeditationTimePopUp  setEditMeditationTimePopUp={setEditMeditationTimePopUp}/>
      }
    </div>
  )
}

export default MeditationTime