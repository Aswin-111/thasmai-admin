"use client"
import React from 'react'

function IndividualMessageTable(props) {
  return (
    <div className='w-full h-full'>
        <table className='w-full overflow-scroll'>
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
                            onClick={() => {
                                props.setIsViewChat(true);
                            }}
                        >
                            Reply
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default IndividualMessageTable
