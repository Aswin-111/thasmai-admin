"use client";
import React from 'react';
 
 
 
function RefPopTable({ data, filterState }) {
    return (
        <table className="table">
            <thead className="bg-[#5799FD] text-white sticky top-0 text-[0.9rem]">
                <tr className='h-14'>
                    <th className="text-center">DOJ</th>
                    <th className="text-center">Name</th>
                    <th className="text-center">Id</th>
                    <th className="text-center">Coupons</th>
                    <th className="text-center">Phone</th>
                    <th className="text-center">Email</th>
                    <th className="text-center">Status</th>
                    <th className="text-center">Ban</th>
 
                </tr>
            </thead>
 
            <tbody className="">
                {
                    data[0] ? (
 
                        data.map((i, index) => {
                            return (
                                <tr
                                    key={index}
                                    className="h-12 font-medium text-xs bg-white text-black"
                                >
 
                                    <td className="text-center">{ i.DOJ }</td>
                                    <td 
                                        className="text-center text-indigo-600 hover:text-indigo-800 hover:scale-105 cursor-pointer"
                                        // onClick={() => {
                                        //     filterState.setRefPopData(i.UId, true);
                                        // }}
                                    >
                                        { i.firstName } { i.secondName }
                                    </td>
                                    <td className="text-center">{ i.UId } </td>
                                    <td className="text-center">{ i.coupons } </td>
                                    <td className="text-center">{ i.phone } </td>
                                    <td className="text-center">{ i.email }</td>
                                    <td className="text-center">{ i.user_Status }</td>
                                    <td className="text-center">
                                        <button 
                                            className="w-5 h-5" 
                                            // onClick={() => {
                                            //     (async function() {
                                            //         const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/admin/closeuser`,{
                                            //             id:i.UId
                                            //         });
 
                                            //         filterState.setBanToggle(!filterState.banToggle)
                                            //     })()
                                            // }} 
                                            disabled={ i.ban === true }
                                        >
                                            <img src="/admin/ban.png" className={`${i.ban === true ? "mahadhanam-ban" : ""}`}/>
                                        </button>
                                    </td>
 
                                </tr>
                            );
                        })
 
                    ) : (
                        <tr className='w-full bg-white text-black'>
                            <td className=''>No meditators data to display</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
 
                        </tr>
                    )
 
                }
            </tbody>
 
        </table>
    )
}
 
export default RefPopTable