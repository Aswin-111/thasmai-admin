"use client";

import React, { useEffect, useState } from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
// import { MdOutlineEdit } from "react-icons/md";
import axios from 'axios';
import { toast } from 'react-hot-toast';
import DateFormatter from '../../utils/DateFormatter';

function ZoomMeet(props) {

    const [zoomMeetData, setZoomMeetData] = useState([]);

    useEffect(() => {
        const fetchData = async () => { 
          
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/superadmin/get-zoomclass`);
                console.log(response);
                setZoomMeetData(response.data);
                
            } catch (error) {
                toast.error('Error loading zoom meeting data.');
                console.error('Error:', error);
            }
        };
    
        fetchData();
    }, [props.zoomTableRenderToggle]);


  return (
    <div className='w-full h-full mt-4 overflow-y-auto'>
            <table className='w-full sticky top-0'>
                <thead className='w-full h-12 bg-[#C5D8FF] text-black text-sm'>
                    <tr>
                        <th className='w-[] ps-2 text-start'>Sl No.</th>
                        <th className='w-[] ps-2 text-start'>Date From</th>
                        <th className='w-[] ps-2 text-start'>Date To</th>

                        <th className='w-[] ps-2 text-start'>From</th>

                        <th className='w-[] ps-2 text-start'>To</th>
                        <th className='w-[] ps-2 text-start'>Language</th>
                        <th className='w-[] ps-2 text-start'>Days of Week</th>

                        <th className=' text-start'>URL</th>

                        <th className='w-[] px-2 text-start'>Delete</th>
                    </tr>
                </thead>
                <tbody className='w-full bg-[#F9F9FF] border-b-2 border-[#C1C6D4] text-black text-xs'>

                    {
                        zoomMeetData[0] ? (
                            zoomMeetData.map((zoomMeet, index) => {
                                
                                return (
                                    <tr 
                                        key={index}
                                        className='h-12 border-b-[1px] border-[#eeeeee]' 
                                    >
                                        <td className='ps-2'>{ index + 1 }</td>

                                        <td className='ps-2'>
                                            <DateFormatter date={zoomMeet.zoomdatefrom}/>
                                        </td>
                                        <td className='ps-2'>
                                        <DateFormatter date={zoomMeet.zoomdateto}/>
                                        </td>

                                        <td className='ps-2'>{ zoomMeet.zoomStartTime }</td>
                                        <td className='ps-2'>{ zoomMeet.zoomStopTime }</td>
                                        <td className='ps-2'>{ zoomMeet.languages }</td>
                                        <td className='ps-2'>{ zoomMeet.daysOfWeek }</td>

                                        <td className=' ps-2 text-[#7698ef] hover:text-[#005DB8] text-wrap'>
                                            <a href={ zoomMeet.zoomLink } target="_blank">Zoom Link</a>
                                        </td>
                                        <td className=''>
                                            <RiDeleteBin6Line className='text-2xl cursor-pointer hover:text-red-500'
                                                onClick={() => {
                                                    props.setZoomMeetId(zoomMeet.id);
                                                    props.setIsZoomMeetPopUp(true)
                                                }}
                                            />
                                        </td>
                                    </tr>
                                );
                            })

                        ) : (
                            <tr className='h-12'>
                                <td>No data to display</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        )
                        
                    }
                    
                </tbody>
                
            </table>

         </div>
  )
}

export default ZoomMeet