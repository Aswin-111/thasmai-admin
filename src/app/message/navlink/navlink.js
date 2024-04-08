"use client"
import { usePathname } from 'next/navigation'
import Link from "next/link";



function NavLink() {
    const pathname = usePathname()

  return (
    <nav className='w-full h-full flex justify-between items-center'>

      <Link href = '/message/individual' className={`${pathname === '/message/individual' ? 'link px-10 py-1 bg-[#005DB8] text-white font-semibold rounded-lg' : 'link rounded-md px-10 py-1 bg-[#e0e2ec] text-black font-semibold'}`}>Individual</Link>
      <Link href = '/message/global' className={`${pathname === '/message/global' ? 'link px-10 py-1 bg-[#005DB8] text-white font-semibold rounded-lg' : 'link rounded-md px-10 py-1 bg-[#e0e2ec] text-black font-semibold'}`}>Global</Link>
      <Link href = '/message/meditationExperience' className={`${pathname === '/message/meditationExperience' ? 'link px-5 py-1 bg-[#005DB8] text-white font-semibold rounded-lg' : 'link rounded-md px-5 py-1 bg-[#e0e2ec] text-black font-semibold'}`}>Meditation Experience</Link>
     
      {/* <a href = "/appointments/applications/registration" className={`${pathname.startsWith('/configuration/applications') ? 'link px-5 py-1 bg-[#005DB8] text-white font-semibold rounded-lg' : 'link rounded-md px-5 py-1 text-black font-semibold'}`}>Applications</a> */}
    
    </nav>
  )
}

export default NavLink