"use client"

import React, { useState, useEffect } from 'react'
import NavLink from '../navlink/navlink'
// import dummyData from './dummy'
import AppointmentsTables from '@/app/components/users/appointmentsTable'
import AppointmentView from '@/app/components/users/ashramAppointmentsView'
import ProfileView from '@/app/components/users/profileView'
import CheckoutPayment from '@/app/components/operator/checkoutPayment'
import axios from 'axios';
import { useAdminAppointmentStore } from './appointmentState'



function Appointments() {

  const appointmentState = useAdminAppointmentStore((state) => {
    return state;
  });

  const [selectedId, setSelectedId] = useState(0);
  const [UId, setUId] = useState(0);
  const [viewProfile, setViewProfile] = useState(false);

  // console.log(appointmentState); 

  useEffect(() => {
    const fetchData = async () => {
      try {
          const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/superadmin/list-all-appointment`);
          appointmentState.setAppointments(response.data.appointments);
          console.log("page use line 29", response.data, appointmentState.appointments);
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [appointmentState.selectedAppointmentId]);





 async function handleCheckIn() {


    console.log("handle Checkin", selectedId);
    console.log(appointmentState.appointmentStatus, "handle checkin");
    const fetchData = async () => {
      try {
          const response = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/superadmin/update-payment/${selectedId}`, {
            appointment_status : appointmentState.appointmentStatus
          });

          return;
          
      } catch (error) {
        console.error('Error fetching data:', error);
        return;
      }
    };

    fetchData();
  }


  return (
    <div className="px-7 h-full">
      <div className="w-[60%] flex items-center justify-between ">
        <NavLink />
      </div>
      <div className='w-full h-[70vh] mt-10  bg-white rounded-[8px] shadow drop-shadow-md overflow-scroll '>
          <AppointmentsTables setSelectedId={setSelectedId} handleCheckIn= {handleCheckIn} setUId={setUId} setViewProfile={setViewProfile}/>
                    
      </div>


      {/* <div className='w-full h-[10vh] flex justify-end items-center'>
            <button className='w-[120px] h-[35px] bg-[#66A2FA] text-[14px] text-white rounded me-3'>Back</button>
            <button className='w-[120px] h-[35px] bg-[#66A2FA] text-[14px] text-white rounded'>Next</button>
          </div> */}

      {
        appointmentState.viewAppointment && <AppointmentView selectedId={selectedId}  />   
      }
       
      {
        viewProfile && <ProfileView selectedId={selectedId} UId={UId} setViewProfile={setViewProfile}/>
      }
      

    </div>
    

  )
}

export default Appointments