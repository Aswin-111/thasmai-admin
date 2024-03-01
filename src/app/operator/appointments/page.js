"use client"

import React, { useState, useEffect } from 'react'
import NavLink from '../navlink/navlink'
// import dummyData from './dummy'
import AppointmentsTable from '@/app/components/operator/operatorTable'
import AppointmentView from '@/app/components/operator/appointmentView'
import CheckoutPayment from '@/app/components/operator/checkoutPayment'
import FeedbackView from '@/app/components/feedback/FeedbackView'
import axios from 'axios';
import { useAppointmentStore } from './appointmentState'


function Appointments() {

  
  const appointmentState = useAppointmentStore((state) => {
    return state;
  });

  // console.log(appointmentState); 

  useEffect(() => {
    const fetchData = async () => {
      try {
          const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/superadmin/list-all-appointment`);
          appointmentState.setAppointments(response.data.data);
          // console.log(response.data, appointmentState.appointments);
          
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [appointmentState.appointments, appointmentState.appointmentStatus]);





  return (
    <div className="px-7 h-full ">
      <div className="w-[60%] flex items-center justify-between ">
        <NavLink />
      </div>
      <div className='w-full mt-10 h-[500px]  bg-white rounded-[8px] shadow drop-shadow-md overflow-scroll'>
          <AppointmentsTable />

         
      </div>
      {/* <div className='w-full h-[20%] pe-10 flex justify-end items-center'>
            <button className='w-[120px] h-[35px] bg-[#66A2FA] text-[14px] text-white rounded me-3'>Back</button>
            <button className='w-[120px] h-[35px] bg-[#66A2FA] text-[14px] text-white rounded'>Next</button>
          </div> */}
      {
        appointmentState.appointmentViewToggle && <AppointmentView />   
      }

      {
        appointmentState.paymentToggle && <CheckoutPayment />
      }
      
      {
        appointmentState.feedbackViewToggle && <FeedbackView />
      }

    </div>

  )
}

export default Appointments