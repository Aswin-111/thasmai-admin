"use client"

import React, { useState } from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineEdit } from "react-icons/md";


function MeditationTimeConfigTable(props) {

  const [editableId, setEditableId] = useState(null);

  return (
    <div className="w-full mt-10 overflow-scroll h-[90%]">
      <p className='text-black font-medium mt-4'>Meditation Time & Video Details By Country</p>
      <table className="table rounded-3xl mt-4">
        <thead
          className="w-full h-[50px] bg-[#005DB8] text-white sticky top-0 gap-x-20 text-[0.9rem]"
          style={{ borderRadius: "11px" }}
        >
          <tr className="rounded-3xl">
            <th className="text-left w-[10%]">Sl.No.</th>
            <th className="text-left w-[30%]">Country</th>
            <th className="text-left w-[25%]">General Video</th>
            <th className="text-left w-[25%]">Morning Meditation</th>
            <th className="text-left w-[10%]">Morning Video</th>
            <th className="text-left w-[25%]">Evening Meditation</th>
            <th className="text-left w-[10%]">Evening Video</th>
            <th className="text-left w-[25%]">Edit</th>



          </tr>
        </thead>
        <tbody className="my-10 font-medium text-xs  border-b-2 border-[#C1C6D4]">
          
         <tr className='font-medium text-xs  border-b-2 border-[#C1C6D4]'>
          <td>1</td>
          <td>India</td>
          <td>https://www.y...</td>
          <td>06:00 AM to 07:00 AM </td>
          <td>https://www.y...</td>
          <td>06:00 AM to 07:00 AM </td>
          <td>https://www.y...</td> 
          <td><MdOutlineEdit className='text-2xl cursor-pointer hover:text-blue-500'
                onClick={() => {
                  props.setEditMeditationTimePopUp(true)
                  }}
          /></td>
        </tr>
        
        <tr className='font-medium text-xs  border-b-2 border-[#C1C6D4]'>
          <td>1</td>
          <td>India</td>
          <td>https://www.y...</td>
          <td>06:00 AM to 07:00 AM </td>
          <td>https://www.y...</td>
          <td>06:00 AM to 07:00 AM </td>
          <td>https://www.y...</td> 
          <td><MdOutlineEdit className='text-2xl cursor-pointer hover:text-blue-500'/></td>
        </tr>
        <tr className='font-medium text-xs  border-b-2 border-[#C1C6D4]'>
          <td>1</td>
          <td>India</td>
          <td>https://www.y...</td>
          <td>06:00 AM to 07:00 AM </td>
          <td>https://www.y...</td>
          <td>06:00 AM to 07:00 AM </td>
          <td>https://www.y...</td> 
          <td><MdOutlineEdit className='text-2xl cursor-pointer hover:text-blue-500'/></td>
        </tr>
              


        
        </tbody>
      </table>
    </div>
  )
}

export default MeditationTimeConfigTable