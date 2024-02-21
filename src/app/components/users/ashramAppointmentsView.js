"use client"

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useAdminAppointmentStore } from '@/app/users/ashram-appointments/appointmentState';

function AppointmentView({selectedId}) {

    const appointmentState = useAdminAppointmentStore((state) => {
        return state;
    });
    
    const [data, setData] = useState({});
    console.log(data);
    
    
    useEffect(() => {
        const fetchData = async () => {
          console.log(appointmentState.selectedAppointmentId);
          try {
              const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/superadmin/list-appointment/${selectedId}`);
              setData(response.data);
  
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);



  return (
    <div className='w-[100vw] h-[100vh] backdrop-blur-sm bg-[#0000003b] absolute top-0 left-0 flex justify-center items-center '>
        <div className='w-[1000px] h-[500px] bg-white rounded'>
            <div className='bg-[#5799FD] h-[85px]'>
                <h1 className='text-white text-3xl ps-10 py-6 '>Appointment Details</h1>
                <button 
                    className='h-8 w-8 bg-white text-2xl absolute right-[290px] top-[140px] hover:bg-blue-500 hover:text-white'
                    onClick = {() => { appointmentState.setViewAppointment(false) }}
                >x</button>
            </div>
                <div className='h-[75%] w-[90%] flex m-auto'>
                    <div className='w-[50%] mt-4 '>
                        <div className='flex pt-4'><p className='w-[50%]'>Appointment Id </p><p>: {data.id}</p></div>
                        <div className='flex pt-4'><p className='w-[50%]'>Appointment Date </p><p>: {data.appointmentDate}</p></div>
                        <div className='flex pt-4'><p className='w-[50%]'>Username </p><p>: {data.user_name}</p></div>
                        <div className='flex pt-4'><p className='w-[50%]'>Registered Date </p><p>: {data.register_date}</p></div>
                        <div className='flex pt-4'><p className='w-[50%]'>Status </p><p>: {data.appointment_status}</p></div>
                        <div className='flex pt-4'><p className='w-[50%]'>Payment </p><p>: {data.payment}</p></div>
                        <div className='flex pt-4'><p className='w-[50%]'>Pay Method </p><p>: {data.payment_method}</p></div>
                        <div className='flex pt-4'><p className='w-[50%]'>No.of.peoples </p><p>: {data.num_of_people}</p></div>
                    </div>

                    <div className=' w-[50%] mt-4'>
                        <div className='flex pt-4'><p className='w-[50%]'>Emergency contact</p><p>: {data.emergencyNumber}</p></div>
                        <div className='flex pt-4'><p className='w-[50%]'>Rewards</p><p>: {data.discount}</p></div>
                        <div className='flex pt-4'><p className='w-[50%]'>Check-in date</p><p>: {data.appointmentDate}</p></div>
                        <div className='flex pt-4'><p className='w-[50%]'>Check-out date</p><p>: {data.check_out}</p></div>
                        <div className='flex pt-4'><p className='w-[50%]'>Destination</p><p>: Ashram</p></div>
                        <div className='flex pt-4'><p className='w-[50%]'>Pick up</p><p>: {data.from}</p></div>
                        <div className='flex pt-4'><p className='w-[50%]'>Reason</p><p>: {data.appointment_reason}</p></div>
                        <div className='flex pt-4'><p className='w-[50%]'>No. of days</p><p>: {data.days}</p></div>
                    </div>
                </div>
            
        </div>
    </div>

  )
}

export default AppointmentView