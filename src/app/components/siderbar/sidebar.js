"use client"

// import { useLoginStore } from "@/app/loginstate/loginState";
// import Link from "next/link";
// import { usePathname } from 'next/navigation'
// import { useEffect, useState } from "react";


// function SideBar() {
//   const [role,setRole] =useState('')
//   const pathname = usePathname()
//   // const state = useLoginStore(function(state){
//   // return state
//   // })
 

//   useEffect(()=>{
//     let role_text =localStorage.getItem('userdata')
//     if (role_text){
//   setRole (localStorage.getItem('userdata').role ?  localStorage.getItem('userdata').role : '')
      
//     }
    
//   },[])
  

//   return (
//     <div>
//       <div className="bg-white h-screen flex flex-col items-center py-8 ">
//         <div className="logo px-5">
//           {/* <Image src = '/../../../public/logo.jpeg' className='w-48 h-10'/> */}
//           <img src="/logo.png" className="h-16" />
//         </div>
//         <div className="navitems w-full">
//           <ul className="sidebar">
//             {/* {role === 'admin' ? 
//             (
//               <> */}
//             <Link href="/overview" >
//               <li className={`${pathname.startsWith('/overview') ? ' bg-[#5799FD] text-white py-3 px-5' : 'py-3 px-5 hover:bg-[#dbeafe]'}`}>Overview</li>
//             </Link>
//             <Link href="/users/meditatorlist">
//               <li className={`${pathname.startsWith('/users') ? ' bg-[#5799FD] text-white py-3 px-5' : 'py-3 px-5  hover:bg-[#dbeafe]'}`}>Users</li>
//             </Link>
//             <Link href="/financial/distribution">
//               <li className={`${pathname.startsWith('/financial') ? ' bg-[#5799FD] text-white py-3 px-5' : 'py-3 px-5 hover:bg-[#dbeafe]'}`}>Financial</li>
//             </Link>
//             <Link href="/analytics">
//               <li className={`${pathname.startsWith('/analytics') ? ' bg-[#5799FD] text-white py-3 px-5' : 'py-3 px-5 hover:bg-[#dbeafe]'}`}>Analytics / Insights</li>
//             </Link>
//             <Link href="/configuration/financial">
//               <li className={`${pathname.startsWith('/configuration') ? ' bg-[#5799FD] text-white py-3 px-5' : 'py-3 px-5 hover:bg-[#dbeafe]'}`}>Configuration Parameters</li>
//             </Link>
//             <Link href="/notifications">
//               <li className={`${pathname.startsWith('/notifications') ? ' bg-[#5799FD] text-white py-3 px-5' : 'py-3 px-5 hover:bg-[#dbeafe]'}`}>Notifications / Broadcast</li>
//             </Link>
//             <Link href="/operator/appointments">
//               <li className={`${pathname.startsWith('/operator') ? ' bg-[#5799FD] text-white py-3 px-5' : 'py-3 px-5 hover:bg-[#dbeafe]'}`}>Operator Management</li>
//             </Link>
//             <Link href="/feedback">
//               <li className={`${pathname.startsWith('/feedback') ? ' bg-[#5799FD] text-white py-3 px-5' : 'py-3 px-5 hover:bg-[#dbeafe]'}`}>Feedback Views</li>
//             </Link>
//             <Link href="/logging">
//               <li className={`${pathname.startsWith('/logging') ? ' bg-[#5799FD] text-white py-3 px-5' : 'py-3 px-5 hover:bg-[#dbeafe]'}`}>Logging / Error Handling</li>
//             </Link>
//             <Link href="/support">
//               <li className={`${pathname.startsWith('/support') ? ' bg-[#5799FD] text-white py-3 px-5' : 'py-3 px-5 hover:bg-[#dbeafe]'}`}>Support & Contact</li>
//             </Link>
//             {/* </> ) :    
//             <Link href="/operator/appointments">
//               <li className={`${pathname.startsWith('/operator') ? ' bg-[#5799FD] text-white py-3 px-5' : 'py-3 px-5 hover:bg-[#dbeafe]'}`}>Operator Management</li>
//             </Link> } */}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SideBar;









"use client"

import { useLoginStore } from "@/app/admin/loginstate/loginState";
import Link from "next/link";
import { usePathname,useRouter } from 'next/navigation';
import { useEffect, useState } from "react";

function SideBar() {
  const [role, setRole] = useState('');
  const pathname = usePathname();
  const router = useRouter()
  useEffect(() => {
    setRole('')
    let role_text = localStorage.getItem('userdata');
    console.log("Role from local storage:", role_text); // Log the role_text to check if it's retrieved correctly
    if (role_text) {
      const parsedRole = JSON.parse(role_text).role; // Parse the role from the stored userdata
      console.log("Parsed role:", parsedRole); // Log the parsed role to check its value
      setRole(parsedRole); // Set the role state
    }
  }, []);

  // console.log("Current role:", role); // Log the current role state

  return (
    <div>
      <div className="bg-white h-screen flex flex-col items-center py-8  ">
        <div className="logo px-5 sticky top-1 bg-white">
          <img src="/admin/logo.png" className="h-16" />
        </div>
        <div className="navitems w-full overflow-y-auto">
          <ul className="sidebar ">
            {role === 'admin' && (
              <>
                <Link href="/admin/overview">
                  <li className={`${pathname.startsWith('/admin/overview') ? ' bg-[#005DB8] text-white py-2 px-5 ' : 'py-2 px-5 text-black hover:bg-[#dbeafe]'}`}>Overview</li>
                </Link>
                <Link href="/admin/users/meditatorlist">
                  <li className={`${pathname.startsWith('/admin/users') ? ' bg-[#005DB8] text-white py-2 px-5' : 'py-2 px-5 text-black  hover:bg-[#dbeafe]'}`}>Users</li>
                </Link>
                <Link href="/admin/financial/distribution">
                  <li className={`${pathname.startsWith('/admin/financial') ? ' bg-[#005DB8] text-white py-2 px-5' : 'py-2 px-5 text-black hover:bg-[#dbeafe]'}`}>Financial</li>
                </Link>
                <Link href="/admin/appointments/appointments">
                  <li className={`${pathname.startsWith('/admin/appointments') ? ' bg-[#005DB8] text-white py-2 px-5' : 'py-2 px-5 text-black hover:bg-[#dbeafe]'}`}>Appointments</li>
                </Link>
                <Link href="/admin/feedback/meditationFeedback">
                  <li className={`${pathname.startsWith('/admin/feedback') ? ' bg-[#005DB8] text-white py-2 px-5' : 'py-2 px-5 text-black hover:bg-[#dbeafe]'}`}>Feedback Views</li>
                </Link>
                <Link href="/admin/message/test-global">
                  <li className={`${pathname.startsWith('/admin/message') ? ' bg-[#005DB8] text-white py-2 px-5' : 'py-2 px-5 text-black hover:bg-[#dbeafe]'}`}>Message</li>
                </Link>
                <Link href="/admin/notifications/notifications">
                  <li className={`${pathname.startsWith('/admin/notifications') ? ' bg-[#005DB8] text-white py-2 px-5' : 'py-2 px-5 text-black hover:bg-[#dbeafe]'}`}>Notifications / Broadcast</li>
                </Link>
                
                <Link href="/admin/events/events">
                  <li className={`${pathname.startsWith('/admin/events') ? ' bg-[#005DB8] text-white py-2 px-5' : 'py-2 px-5 text-black hover:bg-[#dbeafe]'}`}>Events</li>
                </Link>
                {/* <Link href="/admin/analytics">
                  <li className={`${pathname.startsWith('/analytics') ? ' bg-[#005DB8] text-white py-3 px-5' : 'py-3 px-5 text-black hover:bg-[#dbeafe]'}`}>Analytics / Insights</li>
                </Link> */}
                <Link href="/admin/expenses/add-expense">
                  <li className={`${pathname.startsWith('/admin/expenses') ? ' bg-[#005DB8] text-white py-2 px-5' : 'py-2 px-5 text-black hover:bg-[#dbeafe]'}`}>Financial/Expense</li>
                </Link>
                <Link href="/admin/operator/operator-creation">
                  <li className={`${pathname.startsWith('/admin/operator') ? ' bg-[#005DB8] text-white py-2 px-5' : 'py-2 px-5 text-black hover:bg-[#dbeafe]'}`}>Operator Management</li>
                </Link>
                <Link href="/admin/configuration/financial">
                  <li className={`${pathname.startsWith('/admin/configuration') ? ' bg-[#005DB8] text-white py-2 px-5' : 'py-2 px-5 text-black hover:bg-[#dbeafe]'}`}>Configuration Parameters</li>
                </Link>
                <Link href="/admin/logging">
                  <li className={`${pathname.startsWith('/admin/logging') ? ' bg-[#005DB8] text-white py-2 px-5' : 'py-2 px-5 text-black hover:bg-[#dbeafe]'}`}>Logging / Error Handling</li>
                </Link>
                <Link href="/admin/support">
                  <li className={`${pathname.startsWith('/admin/support') ? ' bg-[#005DB8] text-white py-2 px-5' : 'py-2 px-5 text-black hover:bg-[#dbeafe]'}`}>Support & Contact</li>
                </Link>
                
              </>
            ) }

                {role === 'operator' && (
            
              <>
              <Link href="/admin/overview">
                  <li className={`${pathname.startsWith('/admin/overview') ? ' bg-[#005DB8] text-white py-3 px-5 ' : 'py-3 px-5 text-black hover:bg-[#dbeafe]'}`}>Overview</li>
                </Link>
              <Link href="/admin/appointments/appointments">
                  <li className={`${pathname.startsWith('/admin/appointments') ? ' bg-[#005DB8] text-white py-3 px-5' : 'py-3 px-5 text-black hover:bg-[#dbeafe]'}`}>Appointments</li>
              </Link>
              <Link href="/admin/feedback/appointmentFeedback">
                <li className={`${pathname.startsWith('/admin/feedback') ? ' bg-[#005DB8] text-white py-3 px-5' : 'py-3 px-5 text-black hover:bg-[#dbeafe]'}`}>Feedback Views</li>
              </Link>
              <Link href="/admin/notifications/notifications">
                  <li className={`${pathname.startsWith('/admin/notifications') ? ' bg-[#005DB8] text-white py-3 px-5' : 'py-3 px-5 text-black hover:bg-[#dbeafe]'}`}>Notifications / Broadcast</li>
                </Link>
              <Link href="/admin/events/events">
                  <li className={`${pathname.startsWith('/admin/events') ? ' bg-[#005DB8] text-white py-3 px-5' : 'py-3 px-5 text-black hover:bg-[#dbeafe]'}`}>Events</li>
              </Link>
              <Link href="/admin/expenses/add-expense">
                  <li className={`${pathname.startsWith('/admin/expenses') ? ' bg-[#005DB8] text-white py-3 px-5' : 'py-3 px-5 text-black hover:bg-[#dbeafe]'}`}>Financial/Expense</li>
              </Link>
              <Link href="/admin/support">
                  <li className={`${pathname.startsWith('/admin/support') ? ' bg-[#005DB8] text-white py-3 px-5' : 'py-3 px-5 text-black hover:bg-[#dbeafe]'}`}>Support & Contact</li>
              </Link>
              
              
              {/* <Link href="/admin/message/test-global">
                  <li className={`${pathname.startsWith('/admin/message') ? ' bg-[#005DB8] text-white py-3 px-5' : 'py-3 px-5 text-black hover:bg-[#dbeafe]'}`}>Message</li>
              </Link> */}
              
               
              
            </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
