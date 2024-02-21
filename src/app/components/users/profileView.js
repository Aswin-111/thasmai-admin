"use client"

import React, { useState, useEffect } from 'react'
import {useAdminAppointmentStore} from '@/app/users/ashram-appointments/appointmentState'
import axios from 'axios'

function ProfileView({ selectedId, UId, setViewProfile }) {

    const [profile, setProfile] = useState({});

    

    const appointmentState = useAdminAppointmentStore((state) => {
        return state;
      }); 


      useEffect(() =>{
        fetchData()
        
      }, [])
    
      async function fetchData(){
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/getUserById/${UId}`);
        setProfile(response.data.user);
        console.log(response.data.user);
        console.log(`${process.env.NEXT_PUBLIC_API_URL}`)
        return;
    
      }

     

      
  return (
    <div className='fixed top-0 left-0 w-full h-full bg-[#00000022] backdrop-blur-[1px] z-10 shadow drop-shadow-lg flex justify-center items-center overflow-hidden'>
      <div className='w-[900px] h-[500px] bg-transparent rounded flex'>
        <div className='bg-white w-[30%] border-blue-900 border-b-2'>
          <div className='w-full h-[60%] bg-[#4b90f8] flex items-center justify-center'>
          <img className='rounded-full h-[180px] w-[180px] border-4 object-cover' src={profile.profilePicUrl? `${profile.profilePicUrl}` : "/profile_dummy.jpeg"} alt='Profile photo' />
               {/* sometimes need to paste " data:image/png;base64, " infront of base64 code */}
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
                   
                   
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileView