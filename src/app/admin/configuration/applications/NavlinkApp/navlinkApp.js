"use client"
import { usePathname } from 'next/navigation'
import Link from "next/link"

function NavLinkApp() {
    const pathname = usePathname()

  return (
    <nav className='w-full mt-2 ms-10 flex justify-between'>
        <Link href = '/admin/configuration/applications/registration' className={`${pathname === '/admin/configuration/applications/registration' ? 'link px-5 py-1 bg-[#005DB8] text-white text-[14px] font-normal rounded-lg' : 'link rounded-md px-5 py-1 bg-[#e0e2ec] text-black  text-[14px] font-normal'}`}>Registration</Link>
        <Link href = '/admin/configuration/applications/reference' className={`${pathname === '/admin/configuration/applications/reference' ? 'link ms-3  px-5 py-1 bg-[#005DB8] text-white text-[14px] font-normal rounded-lg' : 'link rounded-md ms-3  px-5 py-1 bg-[#e0e2ec] text-black  text-[14px] font-normal'}`}>Reference</Link>
        <Link href = '/admin/configuration/applications/meditationTime' className={`${pathname === '/admin/configuration/applications/meditationTime' ? 'link ms-3  px-5 py-1 bg-[#005DB8] text-white text-[14px] font-normal rounded-lg' : 'link rounded-md ms-3  px-5 py-1 bg-[#e0e2ec] text-black  text-[14px] font-normal'}`}>Meditation Time</Link>
        <Link href = '/admin/configuration/applications/meditationVideo' className={`${pathname === '/admin/configuration/applications/meditationVideo' ? 'link ms-3  px-5 py-1 bg-[#005DB8] text-white text-[14px] font-normal rounded-lg' : 'link rounded-md ms-3  px-5 py-1 bg-[#e0e2ec] text-black  text-[14px] font-normal'}`}>Meditation Video</Link>
        
    </nav>
  )
}

export default NavLinkApp