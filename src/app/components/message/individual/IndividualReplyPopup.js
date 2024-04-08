"use client"
import React from 'react'
import { IoMdSend } from "react-icons/io";


function IndividualReplyPopup(props) {
  return (
    <div className='w-[100vw] h-[100vh] backdrop-blur-sm bg-[#0000003b] absolute top-0 left-0 flex justify-center items-center'>
        <div className='w-[1100px] h-[600px] px-4 py-10 bg-white flex justify-between relative'>
            <button 
                className="w-6 h-6 text-5xl rotate-45 absolute top-0 right-0 hover:text-blue-500 hover:scale-105"
                onClick={() => {
                    props.setIsViewChat(false);
                }}
            >
                +
            </button>
                                    {/* ------------------Chatbox section-------------------- */}

            <div className='w-[49%] h-full shadow-2xl'>
                <div className='w-full h-[12%] ps-5 flex items-center bg-[#005DB8]'>
                    <img src="/cedis.png" alt="User image" />
                    <p className='ms-2 text-white text-2xl'>Rahul K Dev</p>
                </div>

                <div className='w-full h-[75%] px-2 pt-2'>
                    <div className="chat chat-start">
                        <div className="chat-bubble bg-[#F1F1F1] text-black">
                            Hi..
                        </div>
                    </div>
                    <div className="chat chat-end">
                        <div className="chat-bubble bg-[#5799fd2f] text-black">
                            Hello...
                        </div>
                    </div>

                </div>

                <div className='px-2 w-full h-[13%] flex items-center'>
                    <input 
                        className='w-[90%] h-12 ps-4 bg-[#FDFAFA] border-[0.2px] border-black rounded-full outline-none'
                        type="text" 
                        name="" 
                        id=""
                        placeholder="Message"
                    />
                    <button className='w-12 h-12 ms-2 bg-[#005DB8] rounded-full flex justify-center items-center hover:scale-105'>
                        <IoMdSend className='text-white text-3xl'/>
                    </button>
                </div>

            </div>

                        {/* ------------------Pre written answer section---------------------- */}

            <div className='w-[49%] h-full shadow-2xl'>

                <div className='w-full h-[12%] ps-5 flex items-center bg-[#005DB8] text-white text-lg border-white border-b-2'>
                    Pre written Answers
                </div>
                <div className='w-full h-[75%]'>
                    <table className='w-full'>
                        <thead className='h-14 text-left bg-[#005DB8] text-white'>
                            <tr>
                                <th className='w-[15%] ps-2'>Sl.no</th>
                                <th className='w-[60%] ps-2'>Message</th>
                                <th className='w-[25%] ps-2 text-center'>Send</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='h-14 text-left border-[#E0E2EC] border-b-2'>
                                <td className='ps-2'>1</td>
                                <td className='ps-2'>Message bghdflkmghnujkjkhuihcb</td>
                                <td className='ps-2 text-center'>
                                    <button
                                        className='w-[100px] h-10 font-medium bg-[#F9D8FD] rounded-full hover:scale-105'
                                    >Send</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='w-full h-[13%] flex'>
                    <div className='w-[50%] h-full ps-5 text-[#74777F] flex items-center'>
                        Page 1 of 5
                    </div>
                    <div className='w-[50%] h-full flex justify-between items-center'>
                        <button className="w-[120px] h-9 bg-[#005DB8] text-white rounded-xl">Previous</button>
                        <button className="me-3 w-[120px] h-9 bg-[#005DB8] text-white rounded-xl">Next</button>
                    </div>

                </div>

            </div>

        </div>

    </div>
  )
}

export default IndividualReplyPopup