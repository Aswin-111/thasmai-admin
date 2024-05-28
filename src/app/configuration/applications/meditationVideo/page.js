"use client"

import React, { useState } from 'react'
import NavLink from '../../navlink/navlink'
import NavLinkApp from '../NavlinkApp/navlinkApp'
import { useNavbarTextStore } from '@/app/state/navbar-state'
import { BsImage } from "react-icons/bs";
import Playlist from '@/app/components/configuration/playlist/Playlist'
import AddVideoPopUp from '@/app/components/configuration/playlist/AddVideoPopUp'

function MeditationVideo() {
   
  const [addVideoPopUp , setAddVideoPopUp] = useState(false);


  const setNavbarText = useNavbarTextStore((state) => state.setNavbarText);
	setNavbarText("Configuration parameters");

  return (
    <div className="w-full h-[85vh] px-7 overflow-y-auto ">
      <div className="w-[60%] flex items-center justify-between ">
        <NavLink />
      </div>
      <div className='w-[80%]'>
        <NavLinkApp />
      </div>
      <div className='w-full h-[85%] mt-4 p-4 bg-white rounded-[8px] shadow drop-shadow-md'>
          {/* <FinancialConfigTable /> */}

          {/* <div className="w-full p-5 flex items-center">
            <p>Paste URL here:</p>
            <input 
              className="min-w-[60%] h-[40px] mx-3 ps-5 rounded-[8px] border-2 border-[#66A2FA] focus:outline-[#6aa4fb] focus:bg-[#D9D9D9]" 
              type="string" 
            />
            <button className="w-[150px] h-[40px] text-white bg-green-500 rounded-[8px]">Upload</button>
          </div> */}

          {/* <div className='w-full pe-10 flex justify-end'>
            <button className='w-[120px] h-[35px] bg-[#66A2FA] text-[14px] text-white rounded me-3'>Back</button>
            <button className='w-[120px] h-[35px] bg-[#66A2FA] text-[14px] text-white rounded'>Next</button>
          </div> */}


          <div className='w-full h-[20%] bg-[#E1E2EB] rounded-md '>
              
                <p className='text-black font-medium px-2 pt-1'>Create Playlist Heading</p>
                  
                 <div className='w-full h-full flex'>
                   <div className='w-[80%] h-full pt-4 flex'>
                      <input
                       className='w-[300px] h-10 ms-8 p-2 rounded border-[1px] border-black'
                       placeholder='Playlist Heading'
                       type='text'
                      />
                      <button className='w-[200px] h-10 ms-8 bg-[#495F85] text-white flex justify-center items-center rounded-2xl hover:bg-[#495f85d1]'>
                       <BsImage className='me-3'/> Upload Image
                      </button>
                   </div>
                       <div className= 'w-[20%] h-full'>
                         <button className='w-[150px] h-12 ms-8 mt-2 bg-[#6EA5FF] text-white rounded-2xl hover:scale-105 hover:bg-[#629bf7]'>
                           + Add Playlist
                         </button>
                      </div>
                 </div>
             

              <Playlist setAddVideoPopUp ={setAddVideoPopUp}/>
          </div>


      </div>
      { addVideoPopUp  &&  <AddVideoPopUp setAddVideoPopUp={setAddVideoPopUp} />    }

    </div>
  )
}

export default MeditationVideo