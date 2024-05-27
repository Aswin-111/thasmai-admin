 "use client"
 import React from 'react'

function MeditationTimeForm() {
  return (
    <div>
        <p className='text-black font-medium'>Add Meditation Time by Country</p>
        <div className='mt-6 flex'>
          <select 
             className='w-full md:w-[30%] h-10 p-2 ps-5 mb-5 bg-[#FDFBFF] text-black border-[1px] border-black rounded-md'
                            
          >
           <option value="" disabled selected>---Select a country---</option>
           <option value="Electricity bill">India</option>
           <option value="Water bill">Austrila</option>
           <option value="Stationery items">Germany</option>
           <option value="Food and beverages">Canada</option>
         </select>

            <p className='h-10 ps-20 text-black flex items-end'>Add General Video Url</p>
            <input 
             className='w-[40%] h-10 ms-2 border-[1px] bg-[#FDFBFF] border-black rounded-md '
             type='text'
            /> 
        </div>
        <p className='text-black font-medium'>Morning Meditation</p>

            <div className='mt-4 flex'>
              <p className='h-10 text-black font-medium flex items-center ms-10'>Time</p>
              <input 
                className='w-40 h-10 ms-8 border-[1px] bg-[#FDFBFF] border-black rounded-md ps-3'
                placeholder='From'
                type='text'
              />
               <input 
                className='w-40 h-10 ms-2 border-[1px] bg-[#FDFBFF] border-black rounded-md ps-3'
                placeholder='To'
                type='text'
              />
              <p className='h-10 text-black flex items-center ms-10'>Add URL</p>
              <input 
                 className='w-[45%] h-10 ms-2 border-[1px] bg-[#FDFBFF] border-black rounded-md '
                 type='text'
                /> 
            </div>

            <p className='text-black font-medium mt-5'>Evening Meditation</p>

            <div className='mt-4 flex'>
              <p className='h-10 text-black font-medium flex items-center ms-10'>Time</p>
              <input 
                className='w-40 h-10 ms-8 border-[1px] bg-[#FDFBFF] border-black rounded-md ps-3'
                placeholder='From'
                type='text'
              />
               <input 
                className='w-40 h-10 ms-2 border-[1px] bg-[#FDFBFF] border-black rounded-md ps-3'
                placeholder='To'
                type='text'
              />
              <p className='h-10 text-black flex items-center ms-10'>Add URL</p>
              <input 
                 className='w-[45%] h-10 ms-2 border-[1px] bg-[#FDFBFF] border-black rounded-md '
                 type='text'
                /> 
            </div>

            <button className='h-12 w-[450px] mt-10 bg-[#005DB8] hover:bg-[#005cb8d1] text-white rounded-2xl'>
                 Add Meditation Time
            </button>

    </div>
  )
}

export default MeditationTimeForm