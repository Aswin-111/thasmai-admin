import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineEdit } from "react-icons/md";

function ZoomMeet() {
  return (
    <div className='w-full h-full mt-4'>
            <table className='w-full '>
                <thead className='w-full h-12 bg-[#C5D8FF] text-black '>
                    <tr>
                        <th className='w-[] text-start ps-2'>Sl No.</th>
                        <th className='w-[] text-start'>Date</th>
                        <th className='w-[] text-start'>From</th>

                        <th className='w-[] text-start'>To</th>
                        <th className='w-[] text-start'>URL</th>

                        <th className='w-[] text-start'>Edit</th>
                    </tr>
                </thead>
                <tbody className='w-full h-12 bg-[#F9F9FF] border-b-2 border-[#C1C6D4] text-black'>
                    <tr>
                        <td className='ps-2'>1</td>
                        <td>5 Minute Meditation Video</td>
                        <td>12</td>
                        <td>123</td>
                        <td>https://www.youtube.com/watch?v=inpok4MKVLM</td>
                        <td> <MdOutlineEdit className='text-2xl cursor-pointer hover:text-blue-500'/></td>
                        
                        
                    </tr>
                </tbody>
                <tbody className='w-full h-12 bg-[#F9F9FF] border-b-2 border-[#C1C6D4]'>
                    <tr>
                        <td className='ps-2'>2</td>
                        <td>5 Minute Meditation Video</td>
                        <td>12</td>
                        <td>123</td>
                        <td>https://www.youtube.com/watch?v=inpok4MKVLM</td>
                        <td> <MdOutlineEdit className='text-2xl cursor-pointer hover:text-blue-500'/></td>
                        
                        
                    </tr>
                </tbody>
            </table>

         </div>
  )
}

export default ZoomMeet