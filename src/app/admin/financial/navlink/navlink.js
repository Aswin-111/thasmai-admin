"use client"
import { usePathname } from 'next/navigation'
import Link from "next/link"

function NavLink() {
    const pathname = usePathname()

  return (
    <nav className='w-full mt-5 flex justify-between'>
    <Link href = '/admin/financial/distribution' className={`${pathname === '/admin/financial/distribution' ? 'link px-5 py-1 bg-[#5799FD] text-white font-semibold rounded-lg' : 'link rounded-md px-5 py-1 text-black font-semibold'}`}>Distribution</Link>
    <Link href = '/admin/financial/donation' className={`${pathname === '/admin/financial/donation' ? 'link px-5 py-1 bg-[#5799FD] text-white font-semibold rounded-lg' : 'link rounded-md px-5 py-1 text-black font-semibold'}`}>Donation</Link>
    <Link href = '/admin/financial/operations'className={`${pathname === '/admin/financial/operations' ? 'link px-5 py-1 bg-[#5799FD] text-white font-semibold rounded-lg' : 'link rounded-md px-5 py-1 text-black font-semibold'}`}>Operations</Link>
    <Link href = '/admin/financial/fees'className={`${pathname === '/admin/financial/fees' ? 'link px-5 py-1 bg-[#5799FD] text-white font-semibold rounded-lg' : 'link rounded-md px-5 py-1 text-black font-semibold'}`}>Fees</Link>
    <Link href = '/admin/financial/appointments'className={`${pathname === '/admin/financial/appointments' ? 'link px-5 py-1 bg-[#5799FD] text-white font-semibold rounded-lg' : 'link rounded-md px-5 py-1 text-black font-semibold'}`}>Ashram Appointments</Link>
    <Link href = '/admin/financial/administration'className={`${pathname === '/admin/financial/administration' ? 'link px-5 py-1 bg-[#5799FD] text-white font-semibold rounded-lg' : 'link rounded-md px-5 py-1 text-black font-semibold'}`}>Administration</Link>

    
    </nav>
  )
}

export default NavLink