"use client"
import React from 'react';
import NavLink from '../navlink/navlink';
import { IoMdSend } from "react-icons/io";
import { MdOutlineReply } from "react-icons/md";


function GlobalMessaging() {
  return (
    <div className="w-full h-[85vh] px-7">
      <div className="w-[50%] h-[6%]">
        <NavLink />
      </div>
      <div className='w-full h-[90%] mt-5 p-4  bg-white rounded shadow drop-shadow-md flex'>

        {/* ---------------------Global message tab--------------------- */}
        <div className='w-[60%] h-full me-3 bg-[#F0E0CF]'>
            <div className='w-full h-[12%] ps-5 bg-[#815500] flex items-center'>
                <img className="w-[6%]" src="/thasmai-logo.png" alt="" />
                <p className='ms-2 text-white text-lg'>Thasmai Group</p>
            </div>

            <div className='w-full h-[75%] px-2 pt-2 overflow-y-auto'>

                <div className="chat chat-start">
                    <div className="chat-image avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <div className="chat-header">
                        Rahul K Dev
                        {/* <time className="text-xs opacity-50">12:45</time> */}
                    </div>
                    <div className="chat-bubble bg-white text-black">You were the Chosen One!</div>
                    <div className="chat-footer flex items-center">
                        <span className="p-1 px-2 bg-[#BEC0C8] text-black rounded-xl">❤️ 27876</span>
                        <button className="ms-10 p-1 px-2 bg-[#BEC0C8] text-black rounded-xl flex items-center hover:scale-105">
                           <MdOutlineReply className='me-1 text-xl'/>
                           Reply
                        </button>
                    </div>
                </div>

                <div className="chat chat-end">
                    <div className="chat-image avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    {/* <div className="chat-header">
                        Thasmai Guruji
                        <time className="text-xs opacity-50">12:46</time>
                    </div> */}
                    <div className="chat-bubble bg-[#DDC2A1] text-[#3E2E16]">I hate you!</div>
                    {/* <div className="chat-footer opacity-50">
                        Seen at 12:46
                    </div> */}
                </div>


            </div>        {/* ---------scrolling div ends here */}

            <div className='ps-2 w-full h-[13%] flex items-center'>
                <input 
                    className='w-[90%] h-12 ps-4 rounded-xl outline-none drop-shadow-lg'
                    type="text" 
                    name="" 
                    id=""
                    placeholder="Message" 
                />
                <button className='w-12 h-12 ms-2 bg-[#815500] rounded-full flex justify-center items-center hover:scale-105'>
                    <IoMdSend className='text-white text-3xl'/>
                </button>
            </div>
        </div>


        {/* ------------------------Individual message tab--------------------- */}
        <div className='w-[40%] h-full bg-[#EAE1D9]'>

            <div className='w-full h-[12%] ps-5 flex items-center bg-[#FFB94C]'>
                <img src="/cedis.png" alt="User image" />
                <p className='ms-2 text-black text-lg'>Rahul K Dev</p>
            </div>

            <div className='w-full h-[75%] px-2 pt-2'>
                <div className="chat chat-start">
                    <div className="chat-bubble bg-white text-black">
                        Hi..
                    </div>
                </div>
                <div className="chat chat-end">
                    <div className="chat-bubble bg-[#DDC2A1] text-[#3E2E16]">
                        Hello...
                    </div>
                </div>
            
            </div>

            <div className='px-2 w-full h-[13%] flex items-center'>
                <input 
                    className='w-[90%] h-12 ps-4 rounded-xl outline-none drop-shadow-lg'
                    type="text" 
                    name="" 
                    id=""
                    placeholder="Message"
                />
                <button className='w-12 h-12 ms-2 bg-[#FFB94C] rounded-full flex justify-center items-center hover:scale-105'>
                    <IoMdSend className='text-[#442B00] text-3xl'/>
                </button>
            </div>

        </div>


      </div>
    </div>  
  )
}

export default GlobalMessaging