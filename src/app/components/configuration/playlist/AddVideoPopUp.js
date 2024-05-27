import React from 'react'

function AddVideoPopUp(props) {
  return (
    
        <div className="w-[100vw] h-[100vh] bg-[#000000af] absolute left-0 top-0 flex justify-center items-center">
 
            <button
                className="w-8 h-8 m-0 p-0 absolute top-6 right-6 hover:scale-110 text-5xl text-white rotate-45"
                onClick={() => {
                    props.setAddVideoPopUp(false);
                }}
            
            >+</button>
            <div className='w-[800px] h-[400px] absolute  bg-[#C5D8FF] rounded-xl'>
                 <p className='text-[#00193B] font-medium text-2xl p-4'>Add Video</p>
                 <input
                  className='w-[80%] h-16 mx-16 mt-4 ps-5 rounded-md border-[1px] border-black placeholder:text-xl placeholder:text-[#44474E]'
                  placeholder='Video Heading' 
                  type='text'
                 />
                 <input
                  className='w-[80%] h-16 mx-16 mt-10 ps-5 rounded-md border-[1px] border-black placeholder:text-xl placeholder:text-[#44474E]'
                  placeholder='Video URL' 
                  type='text'
                 />
                 <div className='w-[80%] mt-16 mx-16 flex justify-end'>
                    <button className='w-[320px] h-[60px]  bg-[#00193B] text-white text-xl rounded-2xl hover:bg-[#00193bcc]'>
                        + Add Video
                    </button>
                 </div>
            </div>

        </div>
  )
}

export default AddVideoPopUp