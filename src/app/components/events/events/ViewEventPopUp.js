"use client"

import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { BsCalendarDateFill } from "react-icons/bs";
import { MdAccessTimeFilled, MdLocationPin } from "react-icons/md";

function ViewEventPopUp(props) {

    const [eventData, setEventData] = useState({});


    useEffect(() => {
        const fetchData = async () => {
            try {

                const eventId = props.eventId;

              const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/superadmin/get-event/${eventId}`);
              console.log(response.data.user);

              setEventData(response.data.user);

            } catch (error) {
              console.error("Error fetching data:", error);
            }
      
        };
      
        fetchData();
    
        return () => {
            return;
        }
    }, []);
    


  return (
    <div className="w-[100vw] h-[100vh] bg-[#000000af] absolute left-0 top-0 flex justify-center items-center">
      <div className='w-[1000px] h-[550px] bg-[#D9D9D9] rounded'>
        <div className='w-full h-[10%] px-10 bg-[#5799fd] rounded-t flex items-center justify-between'>
          <h1 className='text-xl text-white font-bold'>{ eventData.event_name }</h1>
          <button 
            className='w-8 h-8 rounded bg-blue-600 text-white hover:bg-white hover:text-black'
            onClick={() => {
              props.setIsViewEvent(false);
            }}
          >X</button>
        </div>

        <div className='w-full h-[90%] p-10 rounded-b flex'>
            <div className='w-[40%] h-full px-5'>
                <img
                    className='w-full h-[200px] object-cover rounded drop-shadow-md' 
                    src={ eventData.image ? eventData.image : "/admin/profile_dummy.jpeg" }
                    alt='Event Image'
                />

                <div className='w-full mt-5 flex'>
                    <div className='w-[50%]'>
                        <p className='flex items-center mb-2 text-blue-600'>
                            <BsCalendarDateFill className='me-2 text-xl'/>
                            { eventData.date }
                        </p>
                        <p className='flex items-center mb-2 text-blue-600'>
                            <MdAccessTimeFilled className='me-2 text-xl'/>
                            { eventData.event_time }
                        </p>
                    </div>
                    <div className='w-[50%]'>
                        <p className='w-full flex items-center justify-end text-blue-600'>
                            <MdLocationPin className='me-2 text-xl'/>
                            { eventData.place }
                        </p>
                    </div>
                </div>
            </div>
            <div className='w-[60%] h-full overflow-y-auto'>
                <p className='w-full ps-10 text-black'>{ eventData.event_description }</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ViewEventPopUp