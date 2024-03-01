"use client"

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useAppointmentFeedbackStore } from '@/app/feedback/appointmentFeedback/appointFeedbackState'


function FeedbackView() {

    const feedbackState = useAppointmentFeedbackStore((state) => {
        return state;
    });
    
    const [data, setData] = useState({});
    console.log(data);
    
    
    useEffect(() => {
        const fetchData = async () => {
          try {
              const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/superadmin/list-appointment/${feedbackState.id}`);
              setData(response.data);
  
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();

        return () => {
            return;
        }


      }, []);


    
  return (
    <div className="w-[100vw] h-[100vh] absolute top-0 left-0 bg-[#00000096] backdrop-blur-sm flex justify-center items-center">
        <div className="w-[1000px] h-[500px] p-10 bg-[#5799FD] relative rounded-xl">
            <button 
                className="w-8 h-8 bg-white text-[#5799FD] text-2xl font-bold hover:bg-blue-700 hover:text-white absolute rounded top-[15px] right-[15px]"
                onClick={() => {
                    feedbackState.setFeedbackViewToggle(false, undefined);
                }}
            >X</button>

            <div className="w-full h-[15%] ps-10 text-white text-xl font-thin flex items-center">
                Feedback from:
                <h1 className="text-2xl font-bold ms-5"> { data.user_name }</h1>
            </div>

            <div className="w-full h-[85%] p-10 bg-white rounded shadow-md overflow-y-auto">
                <p className="text-lg">{ data.feedback }</p>
            </div>

        </div>


    </div>
  )
}

export default FeedbackView