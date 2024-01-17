import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Navbar from '../navbar/navbar'

function SideBar() {
  return (
    <div >
      
        <div className='bg-white flex flex-col items-center py-8'>
        <div className="logo px-5">
            {/* <Image src = '/../../../public/logo.jpeg' className='w-48 h-10'/> */}
            <img src = "/logo.png" className='h-16'/>
        </div>
        <div className="navitems">
            <ul >
                <li className='py-3 px-10'><Link href = '/overview' >Overview</Link></li>
                <li className='py-3 px-10'><Link href = '/users' >Users</Link></li>
                <li className='py-3 px-10'><Link href = '/financial' >Financial</Link></li>
                <li className='py-3 px-10'><Link href = '/analytics' >Analytics / Insights</Link></li>
                <li className='py-3 px-10'><Link href = '/configuration' >Configuration Parameters</Link></li>
                <li className='py-3 px-10'><Link href = '/notifications' >Notifications / Broadcast</Link></li>
                <li className='py-3 px-10'><Link href = '/operator' >Operator Management</Link></li>
                <li className='py-3 px-10'><Link href = '/feedback' >Feedback Views</Link></li>
                <li className='py-3 px-10'><Link href = '/logging' >Logging / Error Handling</Link></li>
                <li className='py-3 px-10'><Link href = '/support' >Support & Contact</Link></li>
            </ul>
        </div>
    </div>
    </div>
  )
}

export default SideBar