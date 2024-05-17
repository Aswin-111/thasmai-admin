
"use client"
import React from 'react'
import { usePathname } from 'next/navigation'
import Link from "next/link"

function NavLinkFeedback() {
    const pathname = usePathname()
    
  return (
    <nav className='w-full mt-5 flex'>
        <Link href = '/feedback/ashramStayFeedback/generalFeedback' className={`${pathname === '/feedback/ashramStayFeedback/generalFeedback' ? 'link px-5 py-1 bg-[#5799FD] text-white text-[14px] font-normal rounded-lg' : 'link rounded-md px-5 py-1 text-black text-[14px] font-semibold'}`}>General Feedback</Link>
        <Link href = '/feedback/ashramStayFeedback/individualFeedback' className={`${pathname === '/feedback/ashramStayFeedback/individualFeedback' ? 'link px-5 py-1 bg-[#5799FD] text-white text-[14px] font-normal rounded-lg' : 'link rounded-md px-5 py-1 text-black text-[14px] font-semibold'}`}>Individual Feedback</Link>
        
    </nav>
  )
}

export default NavLinkFeedback