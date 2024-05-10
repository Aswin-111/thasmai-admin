"use client"; 

import React, { useEffect, useState } from 'react';
import { FaEdit } from "react-icons/fa";
import axios from 'axios';

function OperatorCreationTable(props) {

    const [operatorData, setOperatorData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/superadmin/operatorList`);
                console.log(response);
                setOperatorData(response.data.list);
            } catch (error) {
                console.log('Error fetching data:', error);
            }
        };

        fetchData();
    }, [operatorData]);

    return (
        <div className="w-full h-full m-0 p-0 overflow-y-auto">
            <table className='w-full'>
                <thead className="sticky top-0">
                    <tr className='h-12 text-left bg-[#005DB8] text-white'>
                        <th className='ps-2'>Name</th>
                        <th className='ps-2'>DOJ</th>
                        <th className='ps-2'>Username</th>
                        {/* <th className='ps-2'>Emp Id</th> */}
                        <th className='ps-2 text-center'>Location</th>
                        <th className='ps-2 text-center'>Role</th>
                        <th className='ps-2 text-center'>Email</th>
                        {/* <th className='ps-2 text-center'>Supervisor</th> */}
                        <th className='ps-2 text-center'></th>
                    </tr>
                </thead>
                <tbody>
                    {operatorData.map((operator, index) => (
                        <tr key={index} className='h-12 border-[#E0E2EC] border-b-2'>
                            <td className='ps-2'>{operator.name}</td>
                            <td className='ps-2'>{operator.dateOfJoining}</td>
                            <td className='ps-2'>{operator.username}</td>
                            {/* <td className='ps-2'>{operator.empId}</td> */}
                            <td className='ps-2 text-center'>{operator.location}</td>
                            <td className='ps-2 text-center'>{operator.role}</td>
                            <td className='ps-2 text-center'>{operator.email}</td>
                            {/* <td className='ps-2 text-center'>{operator.supervisor}</td> */}
                            <td>
                                <button 
                                    onClick={() => {
                                      props.setUpdateEmployee(true);
                                    }}
                                >
                                    <FaEdit className='text-2xl text-red-600 hover:text-red-700 hover:bg-slate-200 hover:scale-110' />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default OperatorCreationTable;
