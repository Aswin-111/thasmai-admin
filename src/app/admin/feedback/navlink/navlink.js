"use client"
import { usePathname } from 'next/navigation'
import Link from "next/link"

function NavLink() {
    const pathname = usePathname()

  return (
    <nav className='w-full mt-5 flex justify-start'>

      <Link href = '/admin/feedback/meditationFeedback' className={`${pathname === '/admin/feedback/meditationFeedback' ? 'link px-5 py-1 bg-[#005DB8] text-white font-semibold rounded-lg' : 'link rounded-md px-5 py-1 bg-[#e0e2ec] text-black font-semibold'}`}>Meditation Feedback</Link>
      <Link href = '/admin/feedback/feedbacks' className={`${pathname === '/admin/feedback/feedbacks' ? 'link ms-3 px-5 py-1 bg-[#005DB8] text-white font-semibold rounded-lg' : 'link rounded-md ms-3 px-5 py-1 bg-[#e0e2ec] text-black font-semibold'}`}>Appointment Feedback</Link>
      {/* <Link href = '/admin/feedback/ashramStayFeedback/generalFeedback' className={`${pathname.startsWith('/admin/feedback/ashramStayFeedback') ? 'link ms-3 px-5 py-1 bg-[#005DB8] text-white font-semibold rounded-lg' : 'link rounded-md ms-3 px-5 py-1 bg-[#e0e2ec] text-black font-semibold'}`}>Ashram Stay Feedback</Link>/admin */}
      <Link href = '/admin/feedback/applicationFeedback' className={`${pathname === '/admin/feedback/applicationFeedback' ? 'link ms-3 px-5 py-1 bg-[#005DB8] text-white font-semibold rounded-lg' : 'link rounded-md ms-3 px-5 py-1 bg-[#e0e2ec] text-black font-semibold'}`}>Application Feedback</Link>
      
     </nav>
  )
}

export default NavLink