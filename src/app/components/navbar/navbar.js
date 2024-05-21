"use client"

import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from 'next/navigation';
import { useNavbarTextStore } from '../../state/navbar-state'
import { useLoginStore } from "@/app/loginstate/loginState";
import { IoMdMenu } from "react-icons/io";


function Navbar() {
  	const state = useLoginStore(function(state) { {
    	return state
  		}	
	})

	const pathname = usePathname()
	const router = useRouter()

  	const nav_text  = useNavbarTextStore(state => state.navbar_text);
  
  	return (

		<div className="w-full h-16 flex">

			{/* this div is displayed only for operator mobile view */}
			<div className="w-[10%] md:w-0 h-full flex justify-center items-center bg-white">

				<div className="drawer bg-white">
				  	<input id="my-drawer" type="checkbox" className="drawer-toggle" />
				  	<div className="drawer-content bg-white">
				    	{/* Page content here */}
				    	<label htmlFor="my-drawer" className="drawer-button bg-white flex justify-center items-center">
							<IoMdMenu className="text-4xl text-[#005DB8]" />
						</label>
				  	</div> 
				  	<div className="drawer-side z-50">
				    	<label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
				    	<ul className="menu p-4 w-80 min-h-full bg-white text-base-content">
				      		{/* Sidebar content here */}
				      		<Link href="/overview">
                  				<li className={`${pathname.startsWith('/overview') ? ' bg-[#005DB8] text-white py-3 px-5 ' : 'py-3 px-5 text-black hover:bg-[#dbeafe]'}`}>Overview</li>
                			</Link>
              				<Link href="/appointments/appointments">
              				    <li className={`${pathname.startsWith('/appointments') ? ' bg-[#005DB8] text-white py-3 px-5' : 'py-3 px-5 text-black hover:bg-[#dbeafe]'}`}>Appointments</li>
              				</Link>
              				<Link href="/feedback/appointmentFeedback">
              				  <li className={`${pathname.startsWith('/feedback') ? ' bg-[#005DB8] text-white py-3 px-5' : 'py-3 px-5 text-black hover:bg-[#dbeafe]'}`}>Feedback Views</li>
              				</Link>
              				<Link href="/notifications/notifications">
              				    <li className={`${pathname.startsWith('/notifications') ? ' bg-[#005DB8] text-white py-3 px-5' : 'py-3 px-5 text-black hover:bg-[#dbeafe]'}`}>Notifications / Broadcast</li>
              				  </Link>
              				<Link href="/events/events">
              				    <li className={`${pathname.startsWith('/events') ? ' bg-[#005DB8] text-white py-3 px-5' : 'py-3 px-5 text-black hover:bg-[#dbeafe]'}`}>Events</li>
              				</Link>
              				<Link href="/expenses/add-expense">
              				    <li className={`${pathname.startsWith('/expenses') ? ' bg-[#005DB8] text-white py-3 px-5' : 'py-3 px-5 text-black hover:bg-[#dbeafe]'}`}>Financial/Expense</li>
              				</Link>
              				<Link href="/support">
              				    <li className={`${pathname.startsWith('/support') ? ' bg-[#005DB8] text-white py-3 px-5' : 'py-3 px-5 text-black hover:bg-[#dbeafe]'}`}>Support & Contact</li>
              				</Link>
				    	</ul>
				  	</div>
				</div>

			</div>



			<div className="w-[90%] md:w-full  h-full">
				<nav className="navbar w-full h-10 px-4 md:px-10 bg-white flex justify-between ">
      
	  				<h1 className="text-black">{nav_text}</h1>
		 			<button
			 			className='w-[80px] h-[30px]  bg-[#d34b4b] text-white flex items-center justify-center rounded'
		  				onClick={()=>{
			  				localStorage.removeItem('userdata')
			  				state.setIsloggedin(false)
			  				router.push('/login');
		  				}}
	  				>Logout</button>
  				</nav>
			</div>
			

		</div>
    	
  	);
}

export default Navbar;
