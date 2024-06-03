"use client"
import React, { useRef, useEffect, useState } from "react";
import { useAppointFilterStore } from "@/app/appointments/appointments/filterstate";
import axios from "axios";
import moment from 'moment'
import toast from 'react-hot-toast'




function AppointmentsTable(props) {
  const [isCheckinRender,setIsCheckinRender] = useState(false)
  const filterState = useAppointFilterStore((state) => {
    return state;
  });
  
  useEffect(() =>{
    fetchData();
    return () => {
      return;
    }
    
  }, [props.filterToggle, props.pageNo ,isCheckinRender])

  async function fetchData() {
    const pageNo = props.pageNo
    console.log(pageNo);

   try {
    
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/superadmin/list-all-appointment?page=${pageNo}`);
    filterState.setAppointments(response.data.appointments);
    // console.log(response);
    props.setTotalPages(response.data.totalPages)
    props.setIsFilteredData(false)
    props.setIsFilteredPageNo(1)
    
    
   } catch (error) {

     console.log(error);
   }
      

  }


  async function handleCheckInClick(id, status) {
    try {
    const dateTime = `${moment().format('DD/MM/YYYY')}`;
    const formattedCheckinDate = moment( dateTime, 'DD/MM/YYYY',true).format("YYYY-MM-DD");
    console.log(formattedCheckinDate);
    const response = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/superadmin/update-payment/${id}`,{
      appointment_status : status,
      appointmentDate: formattedCheckinDate
    })
    toast.success("User Checkedin Successfully")
    
    if (!props.isFilteredData) {
      // setIsCheckinRender(!isCheckinRender)
      fetchData()
      
    } else{
      props.handleSearch(props.filteredPageNo)
    }
    
    

      
    } catch (error) {
      toast.error("Error while checkin a user")
    }
    
  }


  async function handleCheckOutClick(id, status){
    try {
    const dateTime = `${moment().format('DD/MM/YYYY')}`;
    const formattedCheckoutDate = moment( dateTime, 'DD/MM/YYYY',true).format("YYYY-MM-DD");
    console.log(formattedCheckoutDate);
     await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/superadmin/update-payment/${id}`,{
      appointment_status : status,
      check_out: formattedCheckoutDate
    })
    toast.success("User Checked out Successfully")
    
    if (!props.isFilteredData) {
      // props.setFilterToggle(!props.filterToggle)
      fetchData();
     
      
    } else{
      props.handleSearch(props.filteredPageNo)
    }
      
    } catch (error) {
      toast.error("Error while checkin a user")

      
    }
    
  }




   

  return (
    <div className="h-[85%] overflow-scroll">
      <table className="table  rounded-3xl max-h-[10vh]">
        <thead
          className="bg-[#5799FD] text-white sticky top-0 gap-x-20 text-[0.9rem]"
          style={{ borderRadius: "11px" }}
        >
          <tr className="rounded-3xl">
            <th className="text-center ">Id</th>
            <th className="text-center">Date</th>
            <th className="text-center">Username</th>
            <th className="text-center">Check In</th>
            <th className="text-center">Check Out</th>
            <th className="text-center">Status</th>
            <th className="text-center">Change Status</th>
            <th className="text-center">Details</th>
           
          </tr>
        </thead>
        <tbody className=" overflow-scroll">
          { 
            filterState.appointments[0] ? (
              filterState.appointments.map((appoint, index) => {
            
                return (
                  <tr
                    key={index}
                    className="font-medium text-[0.8rem] text-black my-10 "
                  > 
                    
                    <td className="text-center">{appoint.UId} </td>
                    <td className="text-center">{appoint.register_date} </td>
                    <td className="text-center text-indigo-600">{appoint.user_name} </td>
                    <td className="text-center">{appoint.appointmentDate}</td>
                    <td className="text-center">{appoint.check_out} </td>
                    <td className="text-center flex justify-center">
                      
                      <div className={ appoint.appointment_status === "Not Arrived" && "w-[120px] h-[35px] m-0  text-amber-500 flex justify-center items-cente"
                                    || appoint.appointment_status === "Checked In" && "w-[120px] h-[35px] m-0  text-[#23A058] flex justify-center items-center"
                                    || appoint.appointment_status === "Checked Out" && "w-[120px] h-[35px] m-0  text-[#CB4335] flex justify-center items-center"
                                    || appoint.appointment_status === "Completed" && "w-[120px] h-[35px] m-0 text-black  flex justify-center items-center"
                      }>
                        
                        {appoint.appointment_status}
    
                      </div>
    
                    </td>
    
    
    
    
    
                    <td className="text-center">
    
                      {
                        // appoint.appointment.appointment_status.startsWith("Not Arrived") && 
                        appoint.appointment_status === "Not Arrived" && 
    
                          <button 
                            className="w-[90px] h-[35px] rounded-3xl text-white bg-green-500 hover:bg-green-700"
                            onClick={(e) => {
                              handleCheckInClick(appoint.id, "Checked In")
                            }}
                          >Check In</button> 
                      }
    
                      {
                        // appoint.appointment.appointment_status.startsWith("Checked In") &&
                        appoint.appointment_status === "Checked In" &&  
                          <button 
                            className="w-[90px] h-[35px] rounded-3xl text-white bg-red-500 hover:bg-red-700"
                            onClick={(e) => {
                              handleCheckOutClick(appoint.id, "Checked Out")
                            }}
                          >Check Out</button>
                         
                      }
    
                      {
                        // appoint.appointment.appointment_status.startsWith("Checked Out") &&
                        appoint.appointment_status === "Checked Out" &&  
                          <button 
                            className="w-[90px] h-[35px] rounded-3xl text-white bg-blue-500 hover:bg-blue-700"
                            onClick={(e) => {
                              filterState.setPaymentToggle(true, appoint.id);
                            }}
                          >Payment</button>
                         
                      }
    
                      {
                        // appoint.appointment.appointment_status.startsWith("Completed") &&
                        appoint.appointment_status === "Completed" &&  
                        ("N/A")
                      }
    
                    </td>
                    
    
    
                    <td className="text-center">
                      <button 
                        className='w-[90px] h-[35px] rounded-3xl border-black border-[0.5px] hover:bg-[#e2e8f0]'
                        onClick={ () => {
                          filterState.setAppointmentViewToggle(true, appoint.id);
                        }}
                      >
                        View
                      </button>                
                    </td>            
                    
                  </tr>
                );
              })

            ) : (
              <tr>
                <td>No data to display</td>
              </tr>
            )
           
          }
        </tbody>
      </table>
    </div>
  );
}

export default AppointmentsTable;