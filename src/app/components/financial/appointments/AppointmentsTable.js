"use client"

import React, { useState, useEffect} from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useAppointmentsFilterStore } from "@/app/financial/appointments/filterState";

function AppointmentsTable(props) {

    const filterState = useAppointmentsFilterStore((state) => {
        return state;
    });


    // useEffect(() => {

    //     const fetchData = async () => {
        
    //         try {
    //             const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/superadmin/list-donation?page=${props.pageNo}`);
                    
    //             filterState.setUsersData(response.data.users);
    //             props.setTotalPages(response.data.totalPages);
    //             props.setIsFilteredData(false);
    //             props.setFilteredPageNo(1);
    //             console.log(response);
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //             toast.error("Error fetching data.");
    //         }
    //     };
    
    //     fetchData();
    // }, [props.pageNo, props.filterToggle]);
  
    return (
    
        <table className="table">
            <thead
              className="bg-[#5799FD] text-white sticky top-0 gap-x-20 text-[0.9rem]"
              style={{ borderRadius: "11px" }}
            >
                <tr className="">
					<th className="text-center">Sl. No</th>
                    <th className="text-center">Date</th>
                    <th className="text-center">Name</th>
                    <th className="text-center">Id</th>
                    {/* <th className="text-center">Email</th>
                    <th className="text-center">Phone</th> */}
                    <th className="text-center">No. of Days</th>
                    <th className="text-center">No. of members</th>
                    <th className="text-center">Fees paid</th>
                    <th className="text-center">Avail.Coupons</th>
                    <th className="text-center">C.Redeemed</th>
                </tr>
            </thead>
            <tbody className="my-10">

                {    
					// filterState.usersData[0] ? (

                  	// 	filterState.usersData.map((i, index) => {

                    // 		return (

                    //             <tr
                    //                 key={index}
                    //                 className="font-medium text-xs text-black my-10 "
                    //             >
					// 			    <td className="text-center">{ (index + 1) + ((props.pageNo - 1) * 10 ) }</td>
                    //                 <td className="text-center">{ i.DOJ }</td>
                    //                 <td 
                    //                     className="text-center text-indigo-600 hover:text-indigo-800 hover:scale-105 cursor-pointer"
                    //                     onClick={() => {
                    //                         props.setUserId(i.UId);
                    //                         props.setIsViewProfile(true);
                    //                     }}
                    //                 >
                    //                     { i.firstName } { i.secondName }
                    //                 </td>
                    //                 <td className="text-center">{ i.UId }</td>
                    //                 <td className="text-center flex justify-evenly">
                    //                   <div className="bg-[#d9d9d9] w-10 h-7 p-1 me-1 rounded">L - { i.Level }</div>      
                    //                   <div className="bg-[#d9d9d9] w-10 h-7 p-1 rounded">N - { i.node_number }</div> 
                    //                 </td>     
                    //                 {/* <td className="text-center">{i.phone} </td>
                    //                 <td className="text-center">{i.email}</td> */}
                    //                 <td className="text-center">{ i.feesPaid }</td>
                    //                 <td className="text-center">{ i.latestFee } </td>
                    //                 <td className="text-center">{ i.total_distributed_coupons } </td>
                    //                 <td className="text-center">{ i.coupons } </td>              
                    //             </tr>
                    // 		);
                    // 	})

                	// ) : (
                  	// 	<tr>
                	// 		<td>No data to display</td>
              		// 	</tr>
                	// )
                    
                }

                <tr className="font-medium text-xs text-black my-10">
                    {/* <td className="text-center">1</td>
                    <td className="text-center">2024-06-16</td>
                    <td 
                        className="text-center text-indigo-600 hover:text-indigo-800 hover:scale-105 cursor-pointer"
                    >John Doe</td>
                    <td className="text-center">1</td>
                    <td className="text-center flex justify-evenly">
                        <div className="bg-[#d9d9d9] w-10 h-7 p-1 me-1 rounded">L - 5</div>      
                        <div className="bg-[#d9d9d9] w-10 h-7 p-1 rounded">N - 3</div> 
                    </td>
                    <td className="text-center">4500</td>
                    <td className="text-center">2000</td>
                    <td className="text-center">3</td>
                    <td className="text-center">5</td> */}



                    <td className="text-center">1</td>
                    <td className="text-center">2024-06-16</td>
                    <td 
                        className="text-center text-indigo-600 hover:text-indigo-800 hover:scale-105 cursor-pointer"
                    >John Doe</td>
                    <td className="text-center">5</td>
                    {/* <td className="text-center">{i.phone} </td>
                    <td className="text-center">{i.email} </td> */}
                    <td className="text-center">4</td>
                    <td className="text-center">2</td>
                    <td className="text-center">2500</td>
                    <td className="text-center">8</td>
                    <td className="text-center">2</td> 

                </tr>

            </tbody>
        </table>
    
    );
}

export default AppointmentsTable;
