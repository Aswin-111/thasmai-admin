"use client"
import { usePathname } from 'next/navigation'
import Link from "next/link"

function NavLink() {
    const pathname = usePathname()

  return (
    <nav className='w-full mt-2 flex '>
    <Link href = '/users/meditatorlist' className={`${pathname === '/users/meditatorlist' ? 'link px-5 py-1 bg-[#005DB8] text-white font-semibold rounded-lg' : 'link rounded-md px-5 py-1 bg-[#e0e2ec] text-black font-semibold hover:scale-105'}`}>Meditator List</Link>
    <Link href = '/users/mahadhanam' className={`${pathname === '/users/mahadhanam' ? 'link ms-3 px-5 py-1  bg-[#005DB8] text-white font-semibold rounded-lg' : 'link rounded-md ms-3 px-5 py-1 bg-[#e0e2ec] text-black font-semibold hover:scale-105'}`}>Mahadhanam</Link>
    <Link href = '/users/eventdetails' className={`${pathname === '/users/eventdetails' ? 'link ms-3 px-5 py-1 bg-[#005DB8] text-white font-semibold rounded-lg' : 'link rounded-md ms-3 px-5 py-1 bg-[#e0e2ec] text-black font-semibold hover:scale-105'}`}>Event Details</Link>
    <Link href = '/users/ashram-appointments' className={`${pathname === '/users/ashram-appointments' ? 'link ms-3 px-5 py-1 bg-[#005DB8] text-white font-semibold rounded-lg' : 'link rounded-md ms-3 px-5 py-1 bg-[#e0e2ec] text-black font-semibold hover:scale-105'}`}>Ashram Appointments</Link>

    </nav>
  )
}

export default NavLink