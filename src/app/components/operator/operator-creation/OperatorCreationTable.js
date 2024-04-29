"use client"
import React from 'react'

function OperatorCreationTable() {
  return (
    <div className="w-full h-full m-0 p-0 overflow-y-auto">
            <table className='w-full'>
                <thead className="sticky top-0">
                    <tr className='h-12 text-left bg-[#005DB8] text-white'>
                        <th className='ps-2'>DOJ</th>
                        <th className='ps-2'>Name Type</th>
                        <th className='ps-2'>Emp Id</th>
                        <th className='ps-2 text-center'>Location</th>
                        <th className='ps-2 text-center'>Role </th>
                        <th className='ps-2 text-center'>Password</th>
                        <th className='ps-2 text-center'>Supervisor</th>
                        <th className='ps-2 text-center'></th>



                    </tr>
                </thead>
                <tbody>
                   
                        
                            <tr className='h-12 border-[#E0E2EC] border-b-2'>
                                <td className='ps-2'>12/06/2024</td>
                                <td className='ps-2'>Krishnadas R</td>
                                <td className='ps-2'>10023</td>
                                <td className='ps-2 text-center'>Alappuzha</td>
                                <td className='ps-2 text-center'>Operator</td>
                                <td className='ps-2 text-center'>12345</td>
                                <td className='ps-2 text-center'>Jishamol</td>
                                <td>🚮</td>
                            </tr>
                  

                </tbody>
            </table>
        </div>
  )
}

export default OperatorCreationTable