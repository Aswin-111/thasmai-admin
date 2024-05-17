"use client"
import { usePathname } from 'next/navigation'
import Link from "next/link"

function NavLink() {
    const pathname = usePathname()

  return (
    <nav className='w-full flex justify-start m-0'>

      <Link href = '/admin/operator/operator-creation' className={`${pathname === '/admin/operator/operator-creation' ? 'link px-5 py-1 bg-[#005DB8] text-white font-semibold rounded-lg' : 'link rounded-md px-5 py-1 bg-[#e0e2ec] text-black font-semibold'}`}>Operator Creation</Link>
      {/* <Link href = '/admin/operator/appointments' className={`${pathname === '/admin/operator/appointments' ? 'link px-5 py-1 bg-[#005DB8] text-white font-semibold rounded-lg' : 'link rounded-md px-5 py-1 bg-[#e0e2ec] text-black font-semibold'}`}>Appointments</Link> */}
      {/* <Link href = '/admin/operator/gurujiAvailability' className={`${pathname === '/admin/operator/gurujiAvailability' ? 'link px-5 py-1 bg-[#005DB8] text-white font-semibold rounded-lg' : 'link rounded-md px-5 py-1 bg-[#e0e2ec] text-black font-semibold'}`}>Add Guruji's Availability</Link> */}
       
    </nav>
  )
}

export default NavLink