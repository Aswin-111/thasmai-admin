


"use client"


import React, { useRef, useEffect } from "react";
import { useAppointmentFeedbackStore } from "@/app/feedback/appointmentFeedback/appointFeedbackState";
import axios from "axios";
import moment from 'moment'





function AppointFeedbackTable() {

  const feedbackState = useAppointmentFeedbackStore((state) => {
    return state;
  });
   


  useEffect(() =>{
    fetchData();

    return () => {
      return;
    }
    
  }, [feedbackState.appointments])

  async function fetchData() {
   try {
    
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/superadmin/list-all-appointment`);

    console.log(response.data.data);

    const data = response.data.data;
    const filteredData = data.filter((i) => {
      return i.appointment_status === "Completed";
    })

    feedbackState.setAppointments(filteredData);
    
   } catch (error) {

     console.log(error);
   }
  
    

  }


  async function handleCheckInClick(id, status){
    const response = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/superadmin/update-payment/${id}`,{
      appointment_status : status,
      appointmentDate: `${moment().format('DD/MM/YYYY')}`
      
    })
    fetchData()
  }


  async function handleCheckOutClick(id, status){

     await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/superadmin/update-payment/${id}`,{
      appointment_status : status,
      check_out: `${moment().format('DD/MM/YYYY')}`
    })
    fetchData()
  }




   

  return (
    <div className="h-80 ">
      <table className="table  rounded-3xl max-h-[10vh]">
        <thead
          className="bg-[#5799FD] text-white sticky top-0 gap-x-20 text-[0.9rem]"
          style={{ borderRadius: "11px" }}
        >
          <tr className="rounded-3xl">
            <th className="text-center ">Id</th>
            <th className="text-center">Username</th>
            <th className="text-center">Checkout Date</th>
            <th className="text-center">Details</th>
            <th className="text-center">Feedback</th>
           
          </tr>
        </thead>
        <tbody className=" overflow-scroll">
          {
           feedbackState.appointments.map((appointment, index) => {

            return (
              <tr
                key={index}
                className="font-semibold text-[0.8rem] text-black my-10 "
              > 
                
                <td className="text-center">{appointment.UId} </td>
                <td className="text-center text-indigo-600">{appointment.user_name} </td>
                <td className="text-center">{appointment.check_out} </td>
                





              
                


                <td className="text-center">
                  <button 
                    className='w-[90px] h-[35px] rounded-3xl border-black border-[0.5px] hover:bg-slate-200'
                    onClick={ () => {
                      feedbackState.setAppointmentViewToggle(true, appointment.id);
                    }}
                  >
                    View
                  </button>                
                </td>

                

                {
                  appointment.appointment_status.startsWith("Completed") ? (
                    <td className="text-center">
                      <button 
                        className="w-[120px] h-[35px] rounded-3xl border-black border-[0.5px] hover:bg-slate-200"
                        onClick={() => {
                          feedbackState.setFeedbackViewToggle(true, appointment.id);
                        }}
                      >Feedback</button>
                    </td>
                  ) : (
                    <td></td>
                  ) 

                  
                }

                            
                
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default AppointFeedbackTable;