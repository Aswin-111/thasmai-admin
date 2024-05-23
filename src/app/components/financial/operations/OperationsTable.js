"use client"

import React from "react";
import { useOperationsFilterStore } from "@/app/financial/operations/filterState";

function OperationsTable({ data }) {


    const filterState =  useOperationsFilterStore((state) => {
  	  return state;
  	});

    // useEffect(() => {

    //     const fetchData = async () => {
        
    //         try {
    //             const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/superadmin/list-donation?page=${props.pageNo}`);
                    
    //             filterState.setExpenseData(response.data.users);
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
    
        <table className="table rounded-3xl">
            <thead
              className="bg-[#5799FD] text-white sticky top-0 gap-x-20 text-[0.9rem]"
              style={{ borderRadius: "11px" }}
            >
                <tr className="rounded-3xl">
		        	<th className="text-center">Sl. No</th>
                    <th className="text-center">Date</th>
                    <th className="text-center">Emp. Name</th>
                    <th className="text-center">Expense Type</th>
                    <th className="text-center">Amount</th>
                    <th className="text-center">Bills</th>
                    {/* <th className="text-center">Remarks</th> */}
                    <th className="text-center">Total Expense</th>
                    <th className="text-center">Saturation Limit</th>
                    <th className="text-center">Status</th>
                </tr>
                </thead>
            
                <tbody className="">

                    {
                        // filterState.expenseData[0] ? (
                        //     filterState.expenseData.map((i, index) => {
                        //         return (
                        //             <tr
                        //               key={index}
                        //               className="font-medium text-xs text-black"
                        //             >
                        //                 <td className="text-center">{ (index + 1) + ((props.pageNo - 1) * 10 ) }</td>
                        //                 <td className="text-center">{i.joinDate}</td>
                        //                 <td className="text-center text-indigo-600">{i.employeeName} </td>
                        //                 <td className="text-center">{i.expenseType} </td>
                        //                 <td className="text-center">{i.amount} </td>
                        //                 <td className="text-center">{i.bills} </td>
                        //                 <td className="text-center">{i.remarks}</td>
                        //                 <td className="text-center">{i.totalExpense}</td>
                        //                 <td className="text-center">{i.saturationLimit} </td>
                        //                 <td className="text-center">
                        //                   <div className="bg-[#55ee9b] w-full h-7 p-1 text-white rounded">{i.status}</div>
                        //                 </td>
                                    
                        //             </tr>
                        //         );
                        //     })
                        // ) : (
                        //     <tr>
                		// 	    <td>No data to display</td>
              			//     </tr>
                        // )
            
                    }

                <tr
                  className="font-medium text-xs text-black"
                >
                    <td className="text-center">1</td>
                    <td className="text-center">2024-03-05</td>
                    <td className="text-center text-indigo-600">John Doe</td>
                    <td className="text-center">Electricity Bill</td>
                    <td className="text-center">2000</td>
                    <td className="text-center">Bill Link</td>
                    {/* <td className="text-center">Advance payment</td> */}
                    <td className="text-center">400</td>
                    <td className="text-center">5000</td>
                    <td className="text-center">
                      <div className="bg-[#55ee9b] w-full h-7 p-1 text-white rounded">Pay</div>
                    </td>
                
                </tr>

        </tbody>
      </table>
   
  );
}

export default OperationsTable;