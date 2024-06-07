"use client"

import React, { useState, useEffect, use } from 'react'
import { useAdminAppointmentStore } from '@/app/users/ashram-appointments/appointmentState'
import axios from 'axios'

function ProfileView({ selectedId, UId, setIsViewProfile }) {

    const [profile, setProfile] = useState({});
    const [meditationDetails, setMeditationDetails] = useState({})
    const [bankDetails, setBankDetails] = useState({})
    const [profilePic,setProfilePic] = useState("")
    const [paymentDetails,setPaymentDetails] = useState([])
    const [zoomDetails,setZoomDetails] = useState([])
    const [meditationLog, setMeditationLog] = useState([])

    const [isProfile, setIsProfile] = useState(true);
    const [isMeditation, setIsMeditation] = useState(false);
    const [isBank, setIsBank] = useState(false);
    const [isPayment, setIsPayment] = useState(false);
    



    console.log(UId);

    const appointmentState = useAdminAppointmentStore((state) => {
        return state;
      }); 


      useEffect(() =>{
        fetchData()
        
      }, [])
    
      async function fetchData(){
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/superadmin/profiledetails/${UId}`);
        setProfile(response.data.user);
        setProfilePic(response.data.profilePic)
        setMeditationDetails(response.data.meditationData)
        setBankDetails(response.data.bankDetails)
        setPaymentDetails(response.data.transactions)
        setZoomDetails(response.data.zoomrecord)
        setMeditationLog(response.data.meditationlog)
        console.log(response.data);
        // console.log(`${process.env.NEXT_PUBLIC_API_URL}`)
        return;
    
      }
 
     

      
  return (
    
    // <div className='fixed top-0 left-0 w-full h-full bg-[#00000022] backdrop-blur-[1px] z-10 shadow drop-shadow-lg flex justify-center items-center overflow-hidden'>
    <div className="w-[100vw] h-[100vh] bg-[#000000af] absolute left-0 top-0 flex justify-center items-center">
     
     <div className='w-[1200px] h-[650px] p-5 bg-white rounded flex relative'>

        <button 
              className='h-8 w-8 bg-blue-200 text-2xl absolute right-[5px] top-[5px] hover:bg-blue-700 hover:text-white' 
              onClick=  {() => { setIsViewProfile(false) }}
        >x</button>




        <div className='w-[30%] h-full p-2 shadow-lg'>
          <div className='w-full h-[50%] flex justify-center items-center bg-[#E0E2EC]'>
            <img className='rounded-full h-[180px] w-[180px] border-4 object-cover' src={profilePic? `${profilePic}` : "/admin/profile_dummy.jpeg"} alt='Profile photo' />
               {/* sometimes need to paste " data:image/png;base64, " infront of base64 code */}
          </div>
          <div className='w-full h-[50%] p-3 pt-5 text-black'>
            <p className='mb-4 font-semibold'>{`${profile.first_name}  ${profile.last_name}`}</p>
            <p className='mb-4'>{ profile.email} </p>
            <p className='mb-4'>+91 { profile.phone} </p>
            <p className='mb-4'>Card No: { profile.UId} </p>
          </div>
        </div>

        <div className='w-[70%] h-full pt-2 ps-4'>

          <div className='w-full h-[10%] ps-4'>
                <button 
                    className={isProfile ? 
                        ('w-36 h-8 me-2 bg-[#005db8] text-white rounded-[8px] hover:scale-105')
                         : 
                        ('w-36 h-8 me-2 bg-[#e0e2ec]  hover:scale-105 rounded-[8px]') 
                    }
                    onClick={() => {
                      setIsMeditation(false);
                      setIsBank(false);
                      setIsProfile(true);
                      setIsPayment(false);
                    }}
                >Profile</button>
                <button 
                    className={isMeditation ? 
                        ('w-36 h-8 me-2 bg-[#005db8] text-white rounded-[8px] hover:scale-105')
                         : 
                        ('w-36 h-8 me-2 bg-[#e0e2ec]  hover:scale-105 rounded-[8px]') 
                    }
                    onClick={() => {
                      setIsProfile(false);
                      setIsBank(false);
                      setIsMeditation(true);
                      setIsPayment(false);

                    }}
                >Meditation</button>
                <button 
                    className={isBank ? 
                        ('w-36 h-8 me-2 bg-[#005db8] text-white rounded-[8px] hover:scale-105')
                         : 
                        ('w-36 h-8 me-2 bg-[#e0e2ec]  hover:scale-105 rounded-[8px]') 
                    }
                    onClick={() => {
                      setIsProfile(false);
                      setIsMeditation(false);
                      setIsBank(true);
                      setIsPayment(false);

                    }}
                >Bank</button>
                <button 
                    className={isPayment ? 
                        ('w-36 h-8 bg-[#005db8] text-white rounded-[8px] hover:scale-105')
                         : 
                        ('w-36 h-8 bg-[#e0e2ec]  hover:scale-105 rounded-[8px]') 
                    }
                    onClick={() => {
                      setIsProfile(false);
                      setIsMeditation(false);
                      setIsBank(false);
                      setIsPayment(true);

                    }}
                >Payment</button>

        
          </div>

          

          <div className='w-full h-[90%] p-4 bg-[#DAE2F9] '>
            

            {
              isProfile && 
                <>
                <div className='w-full flex'>
                <div className='w-[50%] h-full'>
                <table className='w-full text-black'>
                  <tbody>
                    <tr className='h-[40px]'>
                      <td className='w-[35%] text-left'>Name</td>
                      <td className='w-[65%] text-left'>: {`${profile.first_name}  ${profile.last_name}`}</td>
                    </tr>
                    <tr className='h-[40px]'>
                      <td className='w-[35%] text-left'>Phone No.</td>
                      <td className='w-[65%] text-left'>: {profile.phone}</td>
                    </tr>
                    <tr className='h-[40px]'>
                      <td className='w-[35%] text-left'>Email</td>
                      <td className='w-[65%] text-left'>: {profile.email}</td>
                    </tr>
                    <tr className='h-[40px]'>
                      <td className='w-[35%] text-left'>DOB</td>
                      <td className='w-[65%] text-left'>: {profile.DOB}</td>
                    </tr>
                    <tr className='h-[40px]'>
                      <td className='w-[35%] text-left'>Gender</td>
                      <td className='w-[65%] text-left'>: {profile.gender}</td>
                    </tr>

                  </tbody>
                </table>
              </div>
              <div className='w-[50%] h-full'>
              <table className='w-full'>
                  <tbody>
                    <tr className='h-[40px]'>
                      <td className='w-[35%] text-left'>Card No.</td>
                      <td className='w-[65%] text-left'>: {profile.UId}</td>
                    </tr>
                    <tr className='h-[40px]'>
                      <td className='w-[35%] text-left'>Address</td>
                      <td className='w-[65%] text-left'>: {profile.address}</td>
                    </tr>
                    <tr className='h-[40px]'>
                      <td className='w-[35%] text-left'>District</td>
                      <td className='w-[65%] text-left'>: {profile.district}</td>
                    </tr>
                    <tr className='h-[40px]'>
                      <td className='w-[35%] text-left'>State</td>
                      <td className='w-[65%] text-left'>: {profile.state}</td>
                    </tr>
                    <tr className='h-[40px]'>
                      <td className='w-[35%] text-left'>PIN</td>
                      <td className='w-[65%] text-left'>: {profile.pincode}</td>
                    </tr>

                  </tbody>
                </table>
              </div>

              </div>
              </>
            
            }


            {
              isMeditation   && 
                <>
                      <div className='w-full flex border-b-2 border-white'>
                       <div className='w-[50%] '>
                       <table className='w-full text-black'>
                         <tbody>
                           <tr className='h-[40px]'>
                             <td className='w-[50%] text-left'>Current Session</td>
                             <td className='w-[50%] text-left'>: {meditationDetails.session_num ? meditationDetails.session_num : "-"}</td>
                           </tr>
                           <tr className='h-[40px]'>
                             <td className='w-[50%] text-left'>Day</td>
                             <td className='w-50%] text-left'>: {meditationDetails.day ? meditationDetails.day : "-"}</td>
                           </tr>
                           <tr className='h-[40px]'>
                             <td className='w-[50%] text-left'>Completed Cycle</td>
                             <td className='w-[50%] text-left'>: {meditationDetails.cycle ? meditationDetails.cycle : "-"}</td>
                           </tr>
                           {/* <tr className='h-[40px]'>
                             <td className='w-[50%] text-left'>Break Cycle</td>
                             <td className='w-[50%] text-left'>: 20</td>
                           </tr> */}
                           
                         </tbody>
                       </table>
                     </div>
                     <div className='w-[50%] '>
                     <table className="w-full">
                    <tbody>
                      <tr>
                        <td className="w-[35%] text-left ">Last 5 meditated days</td>
                      </tr>
                      { (meditationLog[0]) && 
                        meditationLog.map((medLog, index) => {
                          return(
                            <tr key={index} className="h-[40px]">
                              <td className="w-[35%] text-left">{medLog.updatedAt}</td>
                            </tr>
                          )
                        })
                      }
                    </tbody>
                    </table>
                         
                     </div>
                  </div>

                  <div className='w-[100%] mt-4 h-full overflow-y-auto'>
                    <p className='text-black font-medium'>Latest Zoom class attended</p>
      <table className='w-full text-black'>
      <thead>
        <tr className='h-[40px]'>
          <th className='w-[20%] text-left'>Date</th>
          <th className='w-[20%] text-left'>Time</th>
        </tr>
      </thead>
      <tbody>
        {zoomDetails.map((zoom, index) => (
          <tr key={index} className='h-[40px]'>
            <td className='text-left'>{zoom.zoom_date}</td>
            <td className='text-left'>{zoom.zoom_time}</td>
            
          </tr>
        ))}
      </tbody>
    </table>
       </div>
                     
              </>
            
            }

            {
              isBank && 
                <>
                <div className='w-[100%] h-full'>
                <table className='w-full text-black'>
                  <tbody>
                    <tr className='h-[40px]'>
                      <td className='w-[25%] text-left'>Bank Name</td>
                      <td className='w-[75%] text-left'>: {bankDetails.bankName}</td>
                    </tr>
                    <tr className='h-[40px]'>
                      <td className='w-[25%] text-left'>IFSC Code</td>
                      <td className='w-[75%] text-left'>: {bankDetails.IFSCCode}</td>
                    </tr>
                    <tr className='h-[40px]'>
                      <td className='w-[25%] text-left'>Branch Name</td>
                      <td className='w-[75%] text-left'>: {bankDetails.branchName}</td>
                    </tr>
                    <tr className='h-[40px]'>
                      <td className='w-[25%] text-left'>Account Holder</td>
                      <td className='w-[75%] text-left'>: {bankDetails.accountName}</td>
                    </tr>
                    <tr className='h-[40px]'>
                      <td className='w-[25%] text-left'>Account Number</td>
                      <td className='w-[75%] text-left'>: {bankDetails.accountNo}</td>
                    </tr>
                    
                  </tbody>
                </table>
              </div>
              
              </>
            
            }

            {/* {
              isPayment && 
                <>
                <div className='w-[50%] h-full'>
                <table className='w-full text-black'>
                  <tbody>
                    <tr className='h-[40px]'>
                      <td className='w-[35%] text-left'>UId</td>
                      <td className='w-[65%] text-left'>: {paymentDetails.UId}</td>
                    </tr>
                    <tr className='h-[40px]'>
                      <td className='w-[35%] text-left'>Phone No.</td>
                      <td className='w-[65%] text-left'>: {profile.phone}</td>
                    </tr>
                    <tr className='h-[40px]'>
                      <td className='w-[35%] text-left'>Email</td>
                      <td className='w-[65%] text-left'>: {profile.email}</td>
                    </tr>
                    <tr className='h-[40px]'>
                      <td className='w-[35%] text-left'>DOB</td>
                      <td className='w-[65%] text-left'>: {profile.DOB}</td>
                    </tr>
                    <tr className='h-[40px]'>
                      <td className='w-[35%] text-left'>Gender</td>
                      <td className='w-[65%] text-left'>: {profile.gender}</td>
                    </tr>

                  </tbody>
                </table>
              </div>
              <div className='w-[50%] h-full'>
              <table className='w-full'>
                  <tbody>
                    <tr className='h-[40px]'>
                      <td className='w-[35%] text-left'>Card No.</td>
                      <td className='w-[65%] text-left'>: {profile.UId}</td>
                    </tr>
                    <tr className='h-[40px]'>
                      <td className='w-[35%] text-left'>Address</td>
                      <td className='w-[65%] text-left'>: {profile.address}</td>
                    </tr>
                    <tr className='h-[40px]'>
                      <td className='w-[35%] text-left'>District</td>
                      <td className='w-[65%] text-left'>: {profile.district}</td>
                    </tr>
                    <tr className='h-[40px]'>
                      <td className='w-[35%] text-left'>State</td>
                      <td className='w-[65%] text-left'>: {profile.state}</td>
                    </tr>
                    <tr className='h-[40px]'>
                      <td className='w-[35%] text-left'>PIN</td>
                      <td className='w-[65%] text-left'>: {profile.pincode}</td>
                    </tr>

                  </tbody>
                </table>
              </div>
              </>
            
            } */}


{
  isPayment && 
  <div className='w-[100%] h-full overflow-y-auto'>
    <table className='w-full text-black'>
      <thead>
        <tr className='h-[40px]'>
          <th className='w-[20%] text-left'>UID</th>
          <th className='w-[20%] text-left'>Amount</th>
          <th className='w-[30%] text-left'>Payment Date</th>
          <th className='w-[20%] text-left'>Payment Time</th>
        </tr>
      </thead>
      <tbody>
        {paymentDetails.map((payment, index) => (
          <tr key={index} className='h-[40px]'>
            <td className='text-left'>{payment.UId}</td>
            <td className='text-left'>{payment.amount}</td>
            <td className='text-left'>{payment.payment_date}</td>
            <td className='text-left'>{payment.payment_time}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
}






            




          </div>

        </div>



      </div>
    </div>
  )
}

export default ProfileView