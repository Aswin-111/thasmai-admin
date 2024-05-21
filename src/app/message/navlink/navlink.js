"use client"
import { usePathname } from 'next/navigation'
import Link from "next/link";



function NavLink() {
    const pathname = usePathname()

  	return (
    	<nav className='w-full h-full flex  items-center'>

      		{/* <Link href = '/message/individual' className={`${pathname === '/message/individual' ? 'link px-10 py-1 bg-[#005DB8] text-white font-semibold rounded-lg' : 'link rounded-md px-10 py-1 bg-[#e0e2ec] text-black font-semibold'}`}>Individual</Link> */}
      		{/* <Link href = '/message/global' className={`${pathname === '/message/global' ? 'link ms-3 px-10 py-1 bg-[#005DB8] text-white font-semibold rounded-lg' : 'link rounded-md ms-3 px-10 py-1 bg-[#e0e2ec] text-black font-semibold'}`}>Global</Link> */}
      		{/* <Link href = '/message/meditationExperience' className={`${pathname === '/message/meditationExperience' ? 'link ms-3 px-5 py-1 bg-[#005DB8] text-white font-semibold rounded-lg' : 'link rounded-md  ms-3 px-5 py-1 bg-[#e0e2ec] text-black font-semibold'}`}>Meditation Experience</Link> */}
      		<Link href = '/message/test-global' className={`${pathname === '/message/test-global' ? 'link ms-3 px-5 py-1 bg-[#005DB8] text-white font-semibold rounded-lg' : 'link rounded-md  ms-3 px-5 py-1 bg-[#e0e2ec] text-black font-semibold'}`}>Global Messages</Link>
      		<Link href = '/message/test-gurujiTab' className={`${pathname === '/message/test-gurujiTab' ? 'link ms-3 px-5 py-1 bg-[#005DB8] text-white font-semibold rounded-lg' : 'link rounded-md  ms-3 px-5 py-1 bg-[#e0e2ec] text-black font-semibold'}`}>Guruji Messages</Link>
      		<Link href = '/message/blogs' className={`${pathname === '/message/blogs' ? 'link ms-3 px-5 py-1 bg-[#005DB8] text-white font-semibold rounded-lg' : 'link rounded-md  ms-3 px-5 py-1 bg-[#e0e2ec] text-black font-semibold'}`}>Blogs</Link>

    
    	</nav>
  	);
}

export default NavLink