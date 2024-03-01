"use client"
// import { useLoginStore } from '@/app/loginstate/loginState'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useRef,useState } from 'react'


function Login({loginToggle}) {
  const userRef = useRef("")
  const passRef = useRef("")
  const [data,setData] = useState({})

  // const state = useLoginStore(function(state){
  //   return state
  // })
  const router = useRouter()
  async function handleLogin(username,password){
    try{
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/superAdmin/login`,
    {
      userName:username,
      password:password
      
  })
  
  let userData = response.data.user
  
  
  
//  state.setRole(userData.role)
console.log('userdata')
 
  localStorage.setItem('userdata',JSON.stringify(userData))

  

  if (userData.role === 'operator'){
    loginToggle(true)
    //  router.push('/operator/appointments')
    return location.href ='/operator/appointments'
    
  }

   else if (userData.role === 'admin'){
    loginToggle(true)
    return location.href ='/users/ashram-appointments'
    
  }
  // else{
  //   loginToggle(true)
  // }

    }
  catch (err) {
    console.log("error occurred",err.response.data.message)
   if(err.response.data.message){
    return alert(err.response.data.message)
   }
    
  }
  }

  return (
    <div className='w-full h-screen bg-slate-300 absolute z-50 left-0 top-0 overflow-hidden'>
      <div className='w-full h-[60px] bg-[#5799FD]'></div>

 
        <div className='w-full h-[85%] flex justify-center items-center '>
         <div className='w-[28rem] h-[28rem] border-gray-950 shadow-xl flex flex-col rounded  items-center bg-white'>
          <h1 className='my-10 font-semibold text-2xl'> Login</h1>
          <input ref = {userRef} className='px-10 py-2 mt-10 rounded outline-black   border-black border-2'
          placeholder='Username'
           type='text'/>
           <input ref = {passRef} className='px-10 py-2 my-3 rounded outline-black  border-black border-2'
           placeholder='Password'
           type='password'/>

           <button className='px-[8rem] py-2 mt-10 bg-emerald-500 text-white text-md border-rad' onClick={(e)=>{
            console.log('login')
            handleLogin(
              userRef.current.value,passRef.current.value
            )}}>
              Login</button>
         </div>
        
   </div>
   </div>
  )
}

export default Login