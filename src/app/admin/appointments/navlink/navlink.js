"use client"
import { usePathname } from 'next/navigation'
import Link from "next/link";



function NavLink() {
    const pathname = usePathname()

  return (
    <nav className='w-full h-full flex items-center'>

      <Link href = '/admin/appointments/appointments' className={`${pathname === '/admin/appointments/appointments' ? 'link px-5 py-1 bg-[#005DB8] text-white font-semibold rounded-lg' : 'link rounded-md px-5 py-1 bg-[#e0e2ec] text-black font-semibold'}`}>Appointments</Link>
      <Link href = '/admin/appointments/feedbacks' className={`${pathname === '/admin/appointments/feedbacks' ? 'link ms-3  px-5 py-1 bg-[#005DB8] text-white font-semibold rounded-lg' : 'link rounded-md ms-3  px-5 py-1 bg-[#e0e2ec] text-black font-semibold'}`}>Feedbacks</Link>
      <Link href = '/admin/appointments/calender' className={`${pathname === '/admin/appointments/calender' ? 'link ms-3  px-5 py-1 bg-[#005DB8] text-white font-semibold rounded-lg' : 'link rounded-md ms-3  px-5 py-1 bg-[#e0e2ec] text-black font-semibold'}`}>Calender</Link>
     
      {/* <a href = "/admin/appointments/applications/registration" className={`${pathname.startsWith('/admin/configuration/applications') ? 'link px-5 py-1 bg-[#005DB8] text-white font-semibold rounded-lg' : 'link rounded-md px-5 py-1 text-black font-semibold'}`}>Applications</a> */}
    
    </nav>
  )
}

export default NavLink