"use client"
 
 
import React, { useEffect, useRef,useState } from "react";
import { useAdminAppointmentStore } from "@/app/users/ashram-appointments/appointmentState";
import axios from "axios";
 
 
 
 
function AppointmentsTables({ setSelectedId, setUId, setViewProfile }) {
 
  const appointmentState = useAdminAppointmentStore((state) => {
    return state;
  });
  
  // const appointments = appointmentState.appointments;

const statusRef = useRef(null);
const [disc, setdisc] = useState('')
const [count, setCount] = useState(0)
 
useEffect(()=>{
 
},[count])
 
  async function handleSubmitClick(UId,coupon,id){
    try {
 
      const response = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/superadmin/discount/${UId}`,{ coupon:coupon, 
      id:id
      });
      console.log("successfully updated");
      setCount(current=>current+=1)
     window.location.reload()
      return;
 
  } catch (error) {
    console.error('Error fetching data:', error);
    return;
  }
 
 
 
  }
  return (
    <div className="  ">
      <table className="table rounded-3xl">
        <thead
          className="bg-[#5799FD] text-white sticky top-0 gap-x-20 text-[0.9rem]"
          style={{ borderRadius: "11px" }}
        >
          <tr className="rounded-3xl">
            <th className="text-center">Id</th>
            <th className="text-center">Date</th>
            <th className="text-center">Username</th>
            <th className="text-center">Check In</th>
            
            <th className="text-center">Status</th>
            <th className="text-center">Coupon</th>
            <th className="text-center">Details</th>
            <th className="text-center">Reward</th>
            <th className="text-center"></th>
 
 
 
          </tr>
        </thead>
        <tbody className="my-10">
          {appointmentState.appointments &&
           appointmentState.appointments.map((appointment, index) => {
 
            return (
              <tr
                key={index}
                className="font-semibold text-[0.8rem] text-black my-10 "
              > 
 
                <td className="text-center">{appointment.UId} </td>
                <td className="text-center">{appointment.register_date} </td>
                <td 
                  className="text-center text-indigo-600 hover:text-indigo-800 cursor-pointer"
                  onClick = {() => {
                    setViewProfile(true);
                    setSelectedId(appointment.id);
                    setUId(appointment.UId);
                  }}
                >
                  {appointment.user_name} 
                </td>
                <td className="text-center">{appointment.appointmentDate}</td>
                
                <td className="text-center">{appointment.appointment_status} </td>
                <td className="text-center flex justify-center">{appointment.userCoupons} </td>
 
                <td className="text-center">
                  <button 
                    className=' px-5 py-1 rounded border-black border-[0.5px] hover:bg-slate-200'
                    onClick={ () => {
                      appointmentState.setViewAppointment(true);
                      // appointmentState.setSelectedAppointmentId(appointment.id);
                      setSelectedId(appointment.id);
                    } }
                  >
                    View
                  </button>                
                </td>
 
                <td className="text-center flex justify-center">
                  <input 
                  type="number"
                  onChange={
                    (e)=>setdisc(e.target.value)
                  }
                  className="w-[6rem] py-1 ps-2 rounded placeholder:text-[.7rem] border-none bg-slate-200"
                  placeholder="C.amount"
                  />
                   </td>
 
                <td className="text-center">
                  <button className=" px-5 py-1 text-white rounded bg-emerald-500" onClick={function (){
 
                    handleSubmitClick(appointment.UId,disc,appointment.id)
                  }
                    }>Submit</button>
                </td>
 
 
 
 
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
 
export default AppointmentsTables;