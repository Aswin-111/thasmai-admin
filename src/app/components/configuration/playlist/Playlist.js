"use client" 
import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineEdit } from "react-icons/md";


function Playlist(props) {

  return (
    
    
    <div>
           <div className='w-full h-15 mt-8 bg-[#495F85] flex'>
               <div className='w-[60%] h-full p-2 flex text-white'>
                 <img src="/admin/thasmai-logo.png" className="h-11" />
                    <div className='ps-2 flex justify-center items-center'>
                        <p>Playlist 01</p>
                    </div>
               </div>
     
               <div className='w-[40%] h-full p-1 text-white flex  items-center justify-evenly '>
                  <RiDeleteBin6Line className='text-2xl cursor-pointer hover:text-red-500'/>
                  <MdOutlineEdit className='text-2xl cursor-pointer hover:text-blue-500'/>
                    <button className='w-[150px] h-10 ms-8 mt-2 bg-[#6EA5FF] text-white rounded-2xl hover:scale-105 hover:bg-[#629bf7]'
                     onClick={() => {
                       props.setAddVideoPopUp(true)
                       }}
                    >
                           + Add Video
                    </button>
               </div>
          </div>

         <div className='w-full h-full'>
            <table className='w-full h-full'>
                <thead className='w-full h-12 bg-[#C5D8FF] text-black '>
                    <tr>
                        <th className='w-[10%] text-start ps-2'>Sl No.</th>
                        <th className='w-[20%] text-start'>Video Heading</th>
                        <th className='w-[50%] text-start'>Video Url</th>
                        <th className='w-[10%] text-start'>Delete</th>
                        <th className='w-[10%] text-start'>Edit</th>
                    </tr>
                </thead>
                <tbody className='w-full h-14 bg-[#F9F9FF] border-b-2 border-[#C1C6D4] text-black'>
                    <tr>
                        <td className='ps-2'>1</td>
                        <td>5 Minute Meditation Video</td>
                        <td>https://www.youtube.com/watch?v=inpok4MKVLM</td>
                        <td><RiDeleteBin6Line className='text-2xl cursor-pointer hover:text-red-500'/></td>
                        <td> <MdOutlineEdit className='text-2xl cursor-pointer hover:text-blue-500'/></td>
                        
                        
                    </tr>
                </tbody>
                <tbody className='w-full h-14 bg-[#F9F9FF] border-b-2 border-[#C1C6D4]'>
                    <tr>
                        <td className='ps-2'>2</td>
                        <td>5 Minute Meditation Video</td>
                        <td>https://www.youtube.com/watch?v=inpok4MKVLM</td>
                        <td><RiDeleteBin6Line className='text-2xl cursor-pointer hover:text-red-500'/></td>
                        <td> <MdOutlineEdit className='text-2xl cursor-pointer hover:text-blue-500'/></td>
                        
                        
                    </tr>
                </tbody>
            </table>

         </div>
    </div>

  )
}

export default Playlist