"use client"
import { usePathname } from 'next/navigation'
import Link from "next/link"

function NavLink() {
    const pathname = usePathname()

  return (
    <nav className='w-full mt-5 flex justify-start'>

      <Link href = '/feedback/meditationFeedback' className={`${pathname === '/feedback/meditationFeedback' ? 'link px-5 py-1 bg-[#5799FD] text-white font-semibold rounded-lg' : 'link rounded-md px-5 py-1 text-black font-semibold'}`}>Meditation Feedback</Link>
      <Link href = '/feedback/appointmentFeedback' className={`${pathname === '/feedback/appointmentFeedback' ? 'link px-5 py-1 bg-[#5799FD] text-white font-semibold rounded-lg' : 'link rounded-md px-5 py-1 text-black font-semibold'}`}>Appointment Feedback</Link>
    
    </nav>
  )
}

export default NavLink