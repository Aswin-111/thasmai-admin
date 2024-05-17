"use client"
import { usePathname } from 'next/navigation'
import Link from "next/link"

function NavLink() {
    const pathname = usePathname()

  return (
    <nav className='w-full h-full flex items-center'>

    <Link href = '/admin/configuration/financial' className={`${pathname === '/admin/configuration/financial' ? 'link px-5 py-1 bg-[#005DB8] text-white font-semibold rounded-lg' : 'link rounded-md px-5 py-1 bg-[#e0e2ec] text-black font-semibold'}`}>Financial</Link>
    <Link href = '/admin/configuration/applications/registration' className={`${pathname.startsWith('/admin/configuration/applications') ? 'link ms-3  px-5 py-1 bg-[#005DB8] text-white font-semibold rounded-lg' : 'link rounded-md ms-3  px-5 py-1 bg-[#e0e2ec] text-black font-semibold'}`}>Applications</Link>
    <Link href = '/admin/configuration/operations'className={`${pathname === '/admin/configuration/operations' ? 'link ms-3  px-5 py-1 bg-[#005DB8] text-white font-semibold rounded-lg' : 'link rounded-md ms-3  px-5 py-1 bg-[#e0e2ec] text-black font-semibold'}`}>Operations</Link>
    <Link href = '/admin/configuration/support-contact'className={`${pathname === '/admin/configuration/support-contact' ? 'link ms-3  px-5 py-1 bg-[#005DB8] text-white font-semibold rounded-lg' : 'link rounded-md ms-3  px-5 py-1 bg-[#e0e2ec] text-black font-semibold'}`}>Support & Contact</Link>
    

    </nav>
  )
}

export default NavLink