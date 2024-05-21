"use client"
import { usePathname } from 'next/navigation'
import Link from "next/link";



function NavLink() {
    const pathname = usePathname()

  return (
    <nav className='w-full h-full flex justify-between items-center'>

      <Link href = '/notifications/notifications' className={`${pathname === '/notifications/notifications' ? 'link px-6 py-1 bg-[#005DB8] text-white font-semibold rounded-lg' : 'link rounded-md px-6 py-1 bg-[#e0e2ec] text-black font-semibold'}`}>Notification</Link>
      <Link href = '/notifications/broadcast' className={`${pathname === '/notifications/broadcast' ? 'link px-6 py-1 bg-[#005DB8] text-white font-semibold rounded-lg' : 'link rounded-md px-6 py-1 bg-[#e0e2ec] text-black font-semibold'}`}>Broadcast</Link>
     
    
    </nav>
  )
}

export default NavLink