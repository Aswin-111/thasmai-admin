import React from 'react'
import NavLink from '../navlink/navlink'


function Notifications() {
  
  return (
    <div className="w-full h-[85vh] px-7">
    <div className="w-[25%] h-[6%] mb-2" >
      <NavLink />
    </div>
      <div className='h-[85%] w-full bg-white drop-shadow-xl'>
       <div className='w-full flex justify-between'>
       <input type='date'
        className= ' w-56 h-12 m-4 mt-6 border-[1px] border-black rounded'
        />
        <div className=' w-48 flex my-9 me-8 justify-evenly font-medium'>
          <h1>Unread:</h1>
          <h1>Total:</h1>
        </div>
       </div> 
        <div className='m-4'>
        <table className='w-full overflow-scroll '>
            <thead>
                <tr className='h-12 text-left bg-[#005DB8] text-white'>
                    <th className='ps-2'>Date</th>
                    <th className='ps-2'>Username</th>
                    <th className='ps-2'>Message</th>
                    <th className='ps-2 text-center'>Status</th>
                    <th className='ps-2 text-center'>Chat</th>
                </tr>
            </thead>
            <tbody>
                <tr className='h-12 border-[#E0E2EC] border-b-2'>
                    <td className='ps-2'>01/04/2024</td>
                    <td className='ps-2'>Rahul</td>
                    <td className='ps-2'>Messagejndhdjjokxspo</td>
                    <td className='ps-2 text-center'>Unread</td>
                    <td className='ps-2 text-center'>
                        <button
                            className='py-1 px-4 bg-[#AAC7FF] text-[#002F64] rounded-xl hover:scale-110'
                            
                        >
                            View
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
        </div>
      </div>
    </div>
  )
}

export default Notifications