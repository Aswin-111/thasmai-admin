"use client"




export default function Users(){
    

    return (
        <div className="w-full h-[85vh] px-7 overflow-y-auto">

      <div className='w-full h-[95%] mt-2 p-4 bg-white rounded-[8px] shadow drop-shadow-md'>
          <div className=' w-full h-[15%] ps-10 flex items-center bg-blue-400'>
            <h1 className='font-semibold text-2xl text-white '>Get Support</h1>
          </div>
          <div className='w-full h-[85%] p-10 bg-gradient-to-r from-[#a5e1e282] to-[#d5ccc798]'>
                <div className='w-80 h-32 p-4 bg-[#ffffff8b] rounded drop-shadow-lg'>
                        <h1 className='font-medium text-black text-xl'>Jasmine John PJ</h1>
                        <p className='mt-2 text-black text-2xl'>+91-1234567890</p>
                        <p className='text-[#959595]'>Backend Developer</p>
                </div>
          </div>
      </div>
    </div>
    )
}