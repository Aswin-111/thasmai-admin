"use client"

import React, { useState, useEffect, use } from 'react'
import {useAdminAppointmentStore} from '@/app/users/ashram-appointments/appointmentState'
import axios from 'axios'

function ProfileView({ selectedId, UId, setViewProfile }) {

    const [profile, setProfile] = useState({});
    const [meditationDetails, setMeditationDetails] = useState({})
    const [bankDetails, setBankDetails] = useState({})
    
    
    
    
    

    const [profilePic,setProfilePic] = useState("")

    const [isProfile, setIsProfile] = useState(true);
    const [isMeditation, setIsMeditation] = useState(false);
    const [isBank, setIsBank] = useState(false);



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
        console.log(response.data);
        // console.log(`${process.env.NEXT_PUBLIC_API_URL}`)
        return;
    
      }

     

      
  return (
    <div className='fixed top-0 left-0 w-full h-full bg-[#00000022] backdrop-blur-[1px] z-10 shadow drop-shadow-lg flex justify-center items-center overflow-hidden'>
      <div className='w-[1000px] h-[500px] p-5 bg-white rounded flex relative'>

        <button 
              className='h-8 w-8 bg-blue-200 text-2xl absolute right-[5px] top-[5px] hover:bg-blue-700 hover:text-white' 
              onClick=  {() => {setViewProfile(false)}}
        >x</button>




        {/* <div className='bg-white w-[30%] border-blue-900 border-b-2'>
          <div className='w-full h-[60%] bg-[#4b90f8] flex items-center justify-center'>
          <img className='rounded-full h-[180px] w-[180px] border-4 object-cover' src={profile.profilePicUrl? `${profile.profilePicUrl}` : "/profile_dummy.jpeg"} alt='Profile photo' />
               sometimes need to paste " data:image/png;base64, " infront of base64 code
          </div>
          <div className='w-full h-[40%] text-blue-950 text-center pt-5'>
            <h1 className='text-xl font-bold'>{`${profile.first_name}  ${profile.last_name}`}</h1>
            <p className='text-xl'>ID: {profile.UId}</p>
            <br/>
            <p className='text-md'>+91 {profile.phone}</p>
           
            <p className='text-md'>
              <a href="mailto: `{profile.email}`">
              {profile.email}
              </a>
            </p>


          </div>
        </div>

        <div className='bg-white w-[70%] h-full p-5 border-blue-900 border-b-2'>
          <div className='w-full flex'>
            <p className='text-xl font-semibold text-blue-900'>Meditator Profile</p>
            <button 
              className='h-8 w-8 bg-blue-200 text-2xl relative left-[385px] bottom-[5px] hover:bg-blue-700 hover:text-white' 
              onClick=  {() => {setViewProfile(false)}}
            >x</button>
          </div>

          <div className='w-full h-[93%] mx-auto pt-2 border-blue-900 border-t-4 overflow-y-auto'>
            <div className='mb-3'>
                <div className='font-bold  text-blue-900'>User Id</div>
                    <div>{profile.UId}</div>
            </div>
            <div className='mb-3'>
               <div className='font-bold  text-blue-900'>Date of Joining</div>
               <div>{profile.DOJ}</div>
            </div>
            <div className='mb-3'>
              <div className='font-bold text-blue-900'>Date of Birth</div>
              <div>{profile.DOB}</div>
            </div>
            <div className='mb-3'>
              <div className='font-bold text-blue-900'>Email</div>
              <div>{profile.email}</div>
            </div>
            
                  <div className='mb-3'>
                       <div className='font-bold  text-blue-900'>Phone number</div>
                       <div>{profile.phone}</div>
                   </div>
                   <div className='mb-3'>
                       <div className='font-bold  text-blue-900'>Address</div>
                       <div>{profile.address}</div>
                   </div>
                   <div className='mb-3'>
                       <div className='font-bold  text-blue-900'>Pin Code</div>
                       <div>{profile.pincode}</div>
                   </div>
                   <div className='mb-3'>
                       <div className='font-bold  text-blue-900'>District</div>
                       <div>{profile.district}</div>
                   </div>
                   <div className='mb-3'>
                       <div className='font-bold  text-blue-900'>State</div>
                       <div>{profile.state}</div>
                   </div>
                   <div className='mb-3'>
                       <div className='font-bold  text-blue-900'>Country</div>
                       <div>{profile.country}</div>
                   </div>
                   <div className='mb-3'>
                       <div className='font-bold  text-blue-900'>Reference</div>
                       <div>{profile.reference}</div>
                   </div>
                   <div className='mb-3'>
                       <div className='font-bold  text-blue-900'>Languages</div>
                       <div>{profile.languages}</div>
                   </div>
                   <div className='mb-3'>
                       <div className='font-bold  text-blue-900'>Classes Attended</div>
                       <div>{profile.classAttended}</div>
                   </div>
                   <div className='mb-3'>
                       <div className='font-bold  text-blue-900'>Meditation Cycle</div>
                       <div>{profile.cycle}</div>
                   </div>
                   <div className='mb-3'>
                       <div className='font-bold  text-blue-900'>Meditation Days</div>
                       <div>{profile.day}</div>
                   </div>
                   <div className='mb-3'>
                       <div className='font-bold  text-blue-900'>Session NO</div>
                       <div>{profile.session_num}</div>
                   </div>
                   
                   
          </div>
        </div> */}

        <div className='w-[30%] h-full p-2 shadow-lg'>
          <div className='w-full h-[50%] flex justify-center items-center bg-[#E0E2EC]'>
            <img className='rounded-full h-[180px] w-[180px] border-4 object-cover' src={profilePic? `${profilePic}` : "/profile_dummy.jpeg"} alt='Profile photo' />
               {/* sometimes need to paste " data:image/png;base64, " infront of base64 code */}
          </div>
          <div className='w-full h-[50%] p-3 pt-5'>
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
                    }}
                >Meditation</button>
                <button 
                    className={isBank ? 
                        ('w-36 h-8 bg-[#005db8] text-white rounded-[8px] hover:scale-105')
                         : 
                        ('w-36 h-8 bg-[#e0e2ec]  hover:scale-105 rounded-[8px]') 
                    }
                    onClick={() => {
                      setIsProfile(false);
                      setIsMeditation(false);
                      setIsBank(true);
                    }}
                >Bank</button>
          </div>

          

          <div className='w-full h-[90%] p-4 bg-[#DAE2F9] flex'>
            

            {
              isProfile && 
                <>
                <div className='w-[50%] h-full'>
                <table className='w-full'>
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
              </>
            
            }


            {
              isMeditation && 
                <>
                <div className='w-[50%] h-full'>
                <table className='w-full'>
                  <tbody>
                    <tr className='h-[40px]'>
                      <td className='w-[50%] text-left'>Current Session</td>
                      <td className='w-[50%] text-left'>: {meditationDetails.session_num}</td>
                    </tr>
                    <tr className='h-[40px]'>
                      <td className='w-[50%] text-left'>Day</td>
                      <td className='w-50%] text-left'>: {meditationDetails.day}</td>
                    </tr>
                    <tr className='h-[40px]'>
                      <td className='w-[50%] text-left'>Completed Cycle</td>
                      <td className='w-[50%] text-left'>: {meditationDetails.cycle}</td>
                    </tr>
                    {/* <tr className='h-[40px]'>
                      <td className='w-[50%] text-left'>Break Cycle</td>
                      <td className='w-[50%] text-left'>: 20</td>
                    </tr> */}
                    
                  </tbody>
                </table>
              </div>
              <div className='w-[50%] h-full'>
              <table className='w-full'>
                  <tbody>
                    <tr className='h-[40px]'>
                      <td className='w-[35%] text-left'>Last 5 meditated days</td>
                      {/* <td className='w-[65%] text-left'>: {profile.UId}</td> */}
                    </tr>
                    <tr className='h-[40px]'>
                      <td className='w-[35%] text-left'>05/06/2024</td>
                      {/* <td className='w-[65%] text-left'>: {profile.address}</td> */}
                    </tr>
                    <tr className='h-[40px]'>
                      <td className='w-[35%] text-left'>05/06/2024</td>
                      {/* <td className='w-[65%] text-left'>: {profile.district}</td> */}
                    </tr>
                    <tr className='h-[40px]'>
                      <td className='w-[35%] text-left'>05/06/2024</td>
                      {/* <td className='w-[65%] text-left'>: {profile.state}</td> */}
                    </tr>
                    <tr className='h-[40px]'>
                      <td className='w-[35%] text-left'>05/06/2024</td>
                      {/* <td className='w-[65%] text-left'>: {profile.pincode}</td> */}
                    </tr>
                    <tr className='h-[40px]'>
                      <td className='w-[35%] text-left'>05/06/2024</td>
                      {/* <td className='w-[65%] text-left'>: {profile.pincode}</td> */}
                    </tr>

                  </tbody>
                </table>
              </div>
              </>
            
            }

            {
              isBank && 
                <>
                <div className='w-[100%] h-full'>
                <table className='w-full'>
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


            




          </div>

        </div>



      </div>
    </div>
  )
}

export default ProfileView