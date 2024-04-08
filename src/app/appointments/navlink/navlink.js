"use client"
import { usePathname } from 'next/navigation'
import Link from "next/link";



function NavLink() {
    const pathname = usePathname()

  return (
    <nav className='w-full h-full flex justify-between items-center'>

      <Link href = '/appointments/appointments' className={`${pathname === '/appointments/appointments' ? 'link px-5 py-1 bg-[#005DB8] text-white font-semibold rounded-lg' : 'link rounded-md px-5 py-1 bg-[#e0e2ec] text-black font-semibold'}`}>Appointments</Link>
      <Link href = '/appointments/feedbacks' className={`${pathname === '/appointments/feedbacks' ? 'link px-5 py-1 bg-[#005DB8] text-white font-semibold rounded-lg' : 'link rounded-md px-5 py-1 bg-[#e0e2ec] text-black font-semibold'}`}>Feedbacks</Link>
      <Link href = '/appointments/calender' className={`${pathname === '/appointments/calender' ? 'link px-5 py-1 bg-[#005DB8] text-white font-semibold rounded-lg' : 'link rounded-md px-5 py-1 bg-[#e0e2ec] text-black font-semibold'}`}>Calender</Link>
     
      {/* <a href = "/appointments/applications/registration" className={`${pathname.startsWith('/configuration/applications') ? 'link px-5 py-1 bg-[#005DB8] text-white font-semibold rounded-lg' : 'link rounded-md px-5 py-1 text-black font-semibold'}`}>Applications</a> */}
    
    </nav>
  )
}

export default NavLink