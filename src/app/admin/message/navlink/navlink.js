"use client"
import { usePathname } from 'next/navigation'
import Link from "next/link";



function NavLink() {
    const pathname = usePathname()

  	return (
    	<nav className='w-full h-full flex  items-center'>

      		{/* <Link href = '/admin/message/individual' className={`${pathname === '/admin/message/individual' ? 'link px-10 py-1 bg-[#005DB8] text-white font-semibold rounded-lg' : 'link rounded-md px-10 py-1 bg-[#e0e2ec] text-black font-semibold'}`}>Individual</Link> */}
      		{/* <Link href = '/admin/message/global' className={`${pathname === '/admin/message/global' ? 'link ms-3 px-10 py-1 bg-[#005DB8] text-white font-semibold rounded-lg' : 'link rounded-md ms-3 px-10 py-1 bg-[#e0e2ec] text-black font-semibold'}`}>Global</Link> */}
      		{/* <Link href = '/admin/message/meditationExperience' className={`${pathname === '/admin/message/meditationExperience' ? 'link ms-3 px-5 py-1 bg-[#005DB8] text-white font-semibold rounded-lg' : 'link rounded-md  ms-3 px-5 py-1 bg-[#e0e2ec] text-black font-semibold'}`}>Meditation Experience</Link> */}
      		<Link href = '/admin/message/test-global' className={`${pathname === '/admin/message/test-global' ? 'link ms-3 px-5 py-1 bg-[#005DB8] text-white font-semibold rounded-lg' : 'link rounded-md  ms-3 px-5 py-1 bg-[#e0e2ec] text-black font-semibold'}`}>Global Messages</Link>
      		<Link href = '/admin/message/test-gurujiTab' className={`${pathname === '/admin/message/test-gurujiTab' ? 'link ms-3 px-5 py-1 bg-[#005DB8] text-white font-semibold rounded-lg' : 'link rounded-md  ms-3 px-5 py-1 bg-[#e0e2ec] text-black font-semibold'}`}>Guruji Messages</Link>
      		<Link href = '/admin/message/blogs' className={`${pathname === '/admin/message/blogs' ? 'link ms-3 px-5 py-1 bg-[#005DB8] text-white font-semibold rounded-lg' : 'link rounded-md  ms-3 px-5 py-1 bg-[#e0e2ec] text-black font-semibold'}`}>Blogs</Link>

    
    	</nav>
  	);
}

export default NavLink