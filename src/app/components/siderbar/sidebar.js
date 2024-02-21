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

import { useLoginStore } from "@/app/loginstate/loginState";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useEffect, useState } from "react";

function SideBar() {
  const [role, setRole] = useState('');
  const pathname = usePathname();
  
  useEffect(() => {
    let role_text = localStorage.getItem('userdata');
    console.log("Role from local storage:", role_text); // Log the role_text to check if it's retrieved correctly
    if (role_text) {
      const parsedRole = JSON.parse(role_text).role; // Parse the role from the stored userdata
      console.log("Parsed role:", parsedRole); // Log the parsed role to check its value
      setRole(parsedRole); // Set the role state
    }
  }, []);

  console.log("Current role:", role); // Log the current role state

  return (
    <div>
      <div className="bg-white h-screen flex flex-col items-center py-8 ">
        <div className="logo px-5">
          <img src="/logo.png" className="h-16" />
        </div>
        <div className="navitems w-full">
          <ul className="sidebar">
            {role === 'admin' ? (
              <>
                <Link href="/overview">
                  <li className={`${pathname.startsWith('/overview') ? ' bg-[#5799FD] text-white py-3 px-5' : 'py-3 px-5 hover:bg-[#dbeafe]'}`}>Overview</li>
                </Link>
                <Link href="/users/meditatorlist">
                  <li className={`${pathname.startsWith('/users') ? ' bg-[#5799FD] text-white py-3 px-5' : 'py-3 px-5  hover:bg-[#dbeafe]'}`}>Users</li>
                </Link>
                <Link href="/financial/distribution">
                  <li className={`${pathname.startsWith('/financial') ? ' bg-[#5799FD] text-white py-3 px-5' : 'py-3 px-5 hover:bg-[#dbeafe]'}`}>Financial</li>
                </Link>
                <Link href="/analytics">
                  <li className={`${pathname.startsWith('/analytics') ? ' bg-[#5799FD] text-white py-3 px-5' : 'py-3 px-5 hover:bg-[#dbeafe]'}`}>Analytics / Insights</li>
                </Link>
                <Link href="/configuration/financial">
                  <li className={`${pathname.startsWith('/configuration') ? ' bg-[#5799FD] text-white py-3 px-5' : 'py-3 px-5 hover:bg-[#dbeafe]'}`}>Configuration Parameters</li>
                </Link>
                <Link href="/notifications">
                  <li className={`${pathname.startsWith('/notifications') ? ' bg-[#5799FD] text-white py-3 px-5' : 'py-3 px-5 hover:bg-[#dbeafe]'}`}>Notifications / Broadcast</li>
                </Link>
                <Link href="/operator/appointments">
                  <li className={`${pathname.startsWith('/operator') ? ' bg-[#5799FD] text-white py-3 px-5' : 'py-3 px-5 hover:bg-[#dbeafe]'}`}>Operator Management</li>
                </Link>
                <Link href="/feedback">
                  <li className={`${pathname.startsWith('/feedback') ? ' bg-[#5799FD] text-white py-3 px-5' : 'py-3 px-5 hover:bg-[#dbeafe]'}`}>Feedback Views</li>
                </Link>
                <Link href="/logging">
                  <li className={`${pathname.startsWith('/logging') ? ' bg-[#5799FD] text-white py-3 px-5' : 'py-3 px-5 hover:bg-[#dbeafe]'}`}>Logging / Error Handling</li>
                </Link>
                <Link href="/support">
                  <li className={`${pathname.startsWith('/support') ? ' bg-[#5799FD] text-white py-3 px-5' : 'py-3 px-5 hover:bg-[#dbeafe]'}`}>Support & Contact</li>
                </Link>
              </>
            ) : (
              <Link href="/operator/appointments">
                <li className={`${pathname.startsWith('/operator') ? ' bg-[#5799FD] text-white py-3 px-5' : 'py-3 px-5 hover:bg-[#dbeafe]'}`}>Operator Management</li>
              </Link>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
