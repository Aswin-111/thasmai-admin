// "use client"


// import React, { useRef } from "react";
// import { useAppointmentStore } from "@/app/operator/appointments/appointmentState";
// import axios from "axios";




// function AppointmentsTable() {

//   const appointmentState = useAppointmentStore((state) => {
//     return state;
//   });
   
//   // const appointments = appointmentState.appointments;

//   const statusRef = useRef(null);

//   function handleCheckIn() {


//     console.log("handle Checkin", appointmentState.selectedAppointmentId);
//     console.log(appointmentState.appointmentStatus, "handle checkin");
//     const fetchData = async () => {

//             // Get current date
//       let currentDate = new Date();

//       // Extract day, month, and year
//       let day = currentDate.getDate();
//       let month = currentDate.getMonth() + 1; // Adding 1 because January is 0
//       let year = currentDate.getFullYear();

//       // Format day and month to ensure they are displayed with leading zeros if necessary
//       day = day < 10 ? '0' + day : day;
//       month = month < 10 ? '0' + month : month;

//       // Concatenate day, month, and year in dd/mm/yyyy format
//       let formattedDate = day + '/' + month + '/' + year;

//       console.log(formattedDate); 
      


//       try {
//           const response = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/superadmin/update-payment/${appointmentState.selectedAppointmentId}`, {
//             appointment_status : appointmentState.appointmentStatus,
//             appointmentDate : formattedDate  
//           });
//           appointmentState.setSelectedAppointmentId(0);


//           return (
//             console.log("Checked In")
//           );
          
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         return;
//       }
//     };

//     fetchData();
//   }





//   function handleCheckOut() {

    
//     console.log("handle Check out", appointmentState.selectedAppointmentId);
//     console.log(appointmentState.appointmentStatus, "handle check out");
//     const fetchData = async () => {

//            // Get current date
//            let currentDate = new Date();

//            // Extract day, month, and year
//            let day = currentDate.getDate();
//            let month = currentDate.getMonth() + 1; // Adding 1 because January is 0
//            let year = currentDate.getFullYear();
     
//            // Format day and month to ensure they are displayed with leading zeros if necessary
//            day = day < 10 ? '0' + day : day;
//            month = month < 10 ? '0' + month : month;
     
//            // Concatenate day, month, and year in dd/mm/yyyy format
//            let formattedDate = day + '/' + month + '/' + year;
     
//            console.log(formattedDate); 


//       try {
//           const response = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/superadmin/update-payment/${appointmentState.selectedAppointmentId}`, {
//             appointment_status : appointmentState.appointmentStatus,
//             check_out : formattedDate
//           });

//           appointmentState.setSelectedAppointmentId(0);

//           return (
//             console.log("Checked Out")
//           );
          
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         return;
//       }
//     };

//     fetchData();
//   }
   

//   return (
//     <div className="overflow-scroll h-[80%] px-3 ">
//       <table className="table rounded-3xl">
//         <thead
//           className="bg-[#5799FD] text-white sticky top-0 gap-x-20 text-[0.9rem]"
//           style={{ borderRadius: "11px" }}
//         >
//           <tr className="rounded-3xl">
//             <th className="text-center">Id</th>
//             <th className="text-center">Date</th>
//             <th className="text-center">Username</th>
//             <th className="text-center">Check In</th>
//             <th className="text-center">Check Out</th>
//             <th className="text-center">Status</th>
//             <th className="text-center">Change Status</th>

//             <th className="text-center">Details</th>
           
//           </tr>
//         </thead>
//         <tbody className="my-10">
//           {
//            appointmentState.appointments.map((appointment, index) => {

//             return (
//               <tr
//                 key={index}
//                 className="font-semibold text-[0.8rem] text-black my-10 "
//               > 
                
//                 <td className="text-center">{appointment.UId} </td>
//                 <td className="text-center">{appointment.register_date} </td>
//                 <td className="text-center text-indigo-600">{appointment.user_name} </td>
//                 <td className="text-center">{appointment.appointmentDate}</td>
//                 <td className="text-center">{appointment.check_out} </td>
//                 <td className="text-center flex justify-center">
                  
//                   <div className={ appointment.appointment_status === "Not Arrived" && "w-[120px] h-[35px] m-0  text-amber-500 flex justify-center items-cente"
//                                 || appointment.appointment_status === "Checked In" && "w-[120px] h-[35px] m-0  text-[#23A058] flex justify-center items-center"
//                                 || appointment.appointment_status === "Checked Out" && "w-[120px] h-[35px] m-0  text-[#CB4335] flex justify-center items-center"
//                                 || appointment.appointment_status === "Completed" && "w-[120px] h-[35px] m-0 text-black  flex justify-center items-center"
//                   }>
                    
//                     {

//                       appointment.appointment_status === "Not Arrived" && <p>Not Arrived</p>
//                       ||
//                       appointment.appointment_status === "Checked In" && <p>Checked In</p>
//                       ||
//                       appointment.appointment_status === "Checked Out" && <p>Checked Out</p>
//                       ||
//                       appointment.appointment_status === "Completed" && <p>Completed</p>

//                     }

//                   </div>

//                 </td>





//                 <td className="text-center">

//                   {
//                     appointment.appointment_status === "Not Arrived" && 
//                       <button 
//                         className="w-[90px] h-[35px] rounded-3xl text-white bg-green-500 hover:bg-green-700"
//                         onClick={() => {
//                           appointmentState.setSelectedAppointmentId(appointment.id);
//                           appointmentState.setAppointmentStatus("Checked In");
//                           handleCheckIn();
//                         }}
//                       >Check In</button> 
//                   }

//                   {
//                     appointment.appointment_status === "Checked In" && 
//                       <button 
//                         className="w-[90px] h-[35px] rounded-3xl text-white bg-red-500 hover:bg-red-700"
//                         onClick={() => {
//                           appointmentState.setSelectedAppointmentId(appointment.id);
//                           appointmentState.setAppointmentStatus("Checked Out");
//                           handleCheckOut();
//                         }}
//                       >Check Out</button>
                     
//                   }

//                   {
//                     appointment.appointment_status === "Checked Out" && 
//                       <button 
//                         className="w-[90px] h-[35px] rounded-3xl text-white bg-blue-500 hover:bg-blue-700"
//                         onClick={() => {
//                           appointmentState.setSelectedAppointmentId(appointment.id);
//                           appointmentState.setViewPayment(true);
//                         }}
//                       >Payment</button>
                     
//                   }

//                   {
//                     appointment.appointment_status === "Completed" && 
//                     ("N/A")
//                   }


//                 </td>
                

//                 <td className="text-center">
//                   <button 
//                     className='w-[90px] h-[35px] rounded-3xl border-black border-[0.5px] hover:bg-slate-200'
//                     onClick={ () => {
//                       appointmentState.setSelectedAppointmentId(appointment.id);
//                       appointmentState.setViewAppointment(true);
//                     } }
//                   >
//                     View
//                   </button>                
//                 </td>



                            
                
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default AppointmentsTable;



//--------------------------------------------------------------------------------------------------------------------------------------








"use client"


import React, { useRef, useEffect } from "react";
import { useAppointmentStore } from "@/app/operator/appointments/appointmentState";
import axios from "axios";
import moment from 'moment'





function AppointmentsTable() {

  const appointmentState = useAppointmentStore((state) => {
    return state;
  });
   
  // console.log(appointmentState.appointments);
  

  useEffect(() =>{
    fetchData();
    return () => {
      return;
    }
    
  }, [])

  async function fetchData() {
   try {
    
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/superadmin/list-all-appointment`);
    appointmentState.setAppointments(response.data.appointments);
    
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
          appointmentState.appointments[0] &&
           appointmentState.appointments.map((appoint, index) => {
            
            return (
              <tr
                key={index}
                className="font-medium text-[0.8rem] text-black my-10 "
              > 
                
                <td className="text-center">{appoint.appointment.UId} </td>
                <td className="text-center">{appoint.appointment.register_date} </td>
                <td className="text-center text-indigo-600">{appoint.appointment.user_name} </td>
                <td className="text-center">{appoint.appointment.appointmentDate}</td>
                <td className="text-center">{appoint.appointment.check_out} </td>
                <td className="text-center flex justify-center">
                  
                  <div className={ appoint.appointment.appointment_status === "Not Arrived" && "w-[120px] h-[35px] m-0  text-amber-500 flex justify-center items-cente"
                                || appoint.appointment.appointment_status === "Checked In" && "w-[120px] h-[35px] m-0  text-[#23A058] flex justify-center items-center"
                                || appoint.appointment.appointment_status === "Checked Out" && "w-[120px] h-[35px] m-0  text-[#CB4335] flex justify-center items-center"
                                || appoint.appointment.appointment_status === "Completed" && "w-[120px] h-[35px] m-0 text-black  flex justify-center items-center"
                  }>
                    
                    {appoint.appointment.appointment_status}

                  </div>

                </td>





                <td className="text-center">

                  {
                    // appoint.appointment.appointment_status.startsWith("Not Arrived") && 
                    appoint.appointment.appointment_status === "Not Arrived" && 

                      <button 
                        className="w-[90px] h-[35px] rounded-3xl text-white bg-green-500 hover:bg-green-700"
                        onClick={(e) => {
                          handleCheckInClick(appoint.appointment.id, "Checked In")
                        }}
                      >Check In</button> 
                  }

                  {
                    // appoint.appointment.appointment_status.startsWith("Checked In") &&
                    appoint.appointment.appointment_status === "Checked In" &&  
                      <button 
                        className="w-[90px] h-[35px] rounded-3xl text-white bg-red-500 hover:bg-red-700"
                        onClick={(e) => {
                          handleCheckOutClick(appoint.appointment.id, "Checked Out")
                        }}
                      >Check Out</button>
                     
                  }

                  {
                    // appoint.appointment.appointment_status.startsWith("Checked Out") &&
                    appoint.appointment.appointment_status === "Checked Out" &&  
                      <button 
                        className="w-[90px] h-[35px] rounded-3xl text-white bg-blue-500 hover:bg-blue-700"
                        onClick={(e) => {
                          appointmentState.setPaymentToggle(true, appoint.appointment.id);
                        }}
                      >Payment</button>
                     
                  }

                  {
                    // appoint.appointment.appointment_status.startsWith("Completed") &&
                    appoint.appointment.appointment_status === "Completed" &&  
                    ("N/A")
                  }

                </td>
                


                <td className="text-center">
                  <button 
                    className='w-[90px] h-[35px] rounded-3xl border-black border-[0.5px] hover:bg-slate-200'
                    onClick={ () => {
                      appointmentState.setAppointmentViewToggle(true, appoint.appointment.id);
                    }}
                  >
                    View
                  </button>                
                </td>

                

               

                            
                
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default AppointmentsTable;