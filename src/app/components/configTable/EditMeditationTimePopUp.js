import React from 'react'

function EditMeditationTimePopUp() {
  return (
    <div className="w-[100vw] h-[100vh] bg-[#000000af] absolute left-0 top-0 flex justify-center items-center">
        <div className='bg-white'>
      <p className='text-black font-medium'>Add Meditation Time by Country</p>
      <form >
        <div className='mt-6 flex'>
          <select
            name="country"

            
            className='w-full md:w-[32%] h-10 p-2 ps-6 ms-11 mb-5 bg-[#FDFBFF] text-black border-[1px] border-black rounded-md'
          >
            <option value="" disabled>---Select a country---</option>
            {/* {countryList.map((country, index) => (
              <option value={country.name} key={index}>
                {country.name}
              </option>
            ))} */}
          </select>
  
          <p className='h-10 ps-16 text-black flex items-end'>Add General Video Url</p>
          <input
            name="general_video"
            
            className='w-[20%] h-10 ms-2 border-[1px] bg-[#FDFBFF] border-black rounded-md'
            type='text'
          />
          <label className="h-10 ms-12 flex justify-center items-center p-4 border-2 border-dashed border-gray-800 rounded-lg cursor-pointer hover:bg-gray-50">
            <input 
              type="file" 
              className="hidden" 
             
            />
            
          </label>
        </div>
  
        <p className='text-black font-medium'>Morning Meditation</p>
        <div className='mt-4 flex'>
          <p className='flex justify-center items-center ms-10 text-black'>Time</p>
          <input
            name="morning_time_from"
            
            className='w-32 h-10 ms-8 border-[1px] bg-[#FDFBFF] border-black rounded-md ps-3'
            placeholder='From'
           
          />
          <input
            name="morning_time_to"
            
            
            className='w-32 h-10 ms-8 border-[1px] bg-[#FDFBFF] border-black rounded-md ps-3'
            placeholder='To'
            
          />
          <p className='h-10 text-black flex items-center ms-10'>Add URL</p>
          <input
            name="morning_video"
            
            className='w-[30%] h-10 ms-2 border-[1px] bg-[#FDFBFF] border-black rounded-md'
            type='text'
          />
          <label className="h-10 ms-12 flex justify-center items-center p-4 border-2 border-dashed border-gray-800 rounded-lg cursor-pointer hover:bg-gray-50">
            <input 
              type="file" 
              className="hidden" 
              accept="image/*" 
              
            />
            
          </label>
        </div>
  
        <p className='text-black font-medium mt-5'>Evening Meditation</p>
        <div className='mt-4 flex'>
          <p className='flex justify-center items-center ms-10 text-black'>Time</p>
          <input
            name="evening_time_from"
            
            className='w-32 h-10 ms-8 border-[1px] bg-[#FDFBFF] border-black rounded-md ps-3'
            placeholder='From'
            
          />
          <input
            name="evening_time_to"
            
            className='w-32 h-10 ms-8 border-[1px] bg-[#FDFBFF] border-black rounded-md ps-3'
            placeholder='To'
            
          />
          <p className='h-10 text-black flex items-center ms-10'>Add URL</p>
          <input
            
           
            className='w-[30%] h-10 ms-2 border-[1px] bg-[#FDFBFF] border-black rounded-md'
            type='text'
          />
          <label className="h-10 ms-12 flex justify-center items-center p-4 border-2 border-dashed border-gray-800 rounded-lg cursor-pointer hover:bg-gray-50">
            <input 
              type="file" 
              className="hidden" 
              accept="image/*" 
             
            />
            {/* <span className={`text-gray-400 ${eveningImage ? 'text-gray-800' : ''}`}>
              {eveningImage ? eveningImage.name : 'Select an image'}
            </span> */}
          </label>
        </div>
  
        <button type="submit" className='h-12 w-[450px] mt-10 bg-[#005DB8] hover:bg-[#005cb8d1] text-white rounded-2xl'>
          Add Meditation Time
        </button>
      </form>
    </div>
    </div>
  )
}

export default EditMeditationTimePopUp