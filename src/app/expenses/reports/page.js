"use client"

import React, { useEffect, useState } from 'react'
import NavLink from '../navlink/navlink'
import ExpenseDetail from '@/app/components/expenses/reports/ExpenseDetail'
import ExpenseTable from '@/app/components/expenses/reports/ExpenseTable'
import axios from "axios";

function ExpenseReports() {

	const [isFocused, setIsFocused] = useState(false);
    const [expenseData, setExpenseData] = useState([]);
    const [selectedId, setSelectedId] = useState("");
    const [isViewDetail, setIsViewDetail] = useState(false);
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");
    const [renderToggle, setRenderToggle] = useState(false);
	const [pageNo, setPageNo] = useState(1);
	const [totalPages, setTotalPages] = useState(1);
	const [filteredPageNo, setFilteredPageNo] = useState(1);
	const [isFilteredData, setIsFilteredData] = useState(false);


  	useEffect(() => {
    	const fetchData = async () => {
      
      		try {
            	const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/superadmin/get-expense`, {
					page: pageNo
				});
            	// console.log(response.data);
            	setExpenseData(response.data.expenses);
				setTotalPages(response.data.totalpages);
				setIsFilteredData(false);
				setFilteredPageNo(1);

        	} catch (error) {
            	console.error('Error fetching data:', error);
        	}
    	};

    	fetchData();
	}, [renderToggle, pageNo]);


	function  handleFocus() {
		setIsFocused(true);
	}
	function  handleBlur() {
		setIsFocused(false);
	}


	const handleDateChange = (value) => {

  		if(!value) {
    		setRenderToggle(!renderToggle);
  		} else {

    		const selectedDate = new Date(value + '-01'); // Adding '-01' to ensure it's the first day of the selected month
    		const month = selectedDate.getMonth() + 1; // Months are zero-based, so we add 1
    		const year = selectedDate.getFullYear();

    		// Do something with month and year
    		console.log("Month:", month);
    		console.log("Year:", year);
    		setMonth(month);
    		setYear(year);
  		}
  
	};


	async function handleClickFind(newPageNo) {
  
  		try {
    		const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/superadmin/filter?month=${month}&year=${year}`, {
				page: newPageNo
			});
  			// console.log(response);

   			setExpenseData(response.data.expenses);
			setTotalPages(response.data.totalPages);
			setIsFilteredData(true);
			setPageNo(1);

		} catch (error) {
    		console.error('Error fetching data:', error);
		}
	}

	function handlePreviousPage() {
        if(pageNo <= 1) {
            return;
        } else {
            setPageNo(prevValue => prevValue - 1);
        }
    };
    
    function handleNextPage() {
        if(pageNo >= totalPages ) {
            return;
        } else {
            setPageNo(prevValue => prevValue + 1);
        }
    };

	function handleFilteredPreviousPage() {
        if(filteredPageNo <= 1) {
            return;
        } else {
            setFilteredPageNo(prevPageNo => {
				const newPageNo = prevPageNo - 1;
				handleClickFind(newPageNo);
				return newPageNo;
			});
        }
    };
    
    function handleFilteredNextPage() {
        if(filteredPageNo >= totalPages ) {
            return;
        } else {
            setFilteredPageNo(prevPageNo => {
				const newPageNo = prevPageNo + 1;
				handleClickFind(newPageNo);
				return newPageNo;
			});
        }
    };



  	return (

    	<div className="w-full h-[85vh] px-7 overflow-y-auto">
      		<div className="w-full sticky top-0">
        		<NavLink />
      		</div>

      		<div className='w-full h-[90%] mt-2 p-4  bg-white rounded shadow drop-shadow-md '>
        
        		<div className='w-full h-10 flex justify-between'>
          			<div className="w-[50%] h-10 flex">
              			<input 
							type={isFocused ? "month" : "text"}
							placeholder="Select Month"
              			  	className= 'w-56 h-10 p-2 border-[1px] border-black rounded placeholder:text-black'
							onFocus={handleFocus}
							onBlur={handleBlur}
              			  	onChange={(e) => handleDateChange(e.target.value)}
              			/>
              			<button className='w-24 h-10 ms-4 rounded text-white bg-blue-700 hover:bg-blue-600'
              				onClick={ () => {
								handleClickFind(1);
							} }
              			>Find</button>
          			</div>
          
          			<div className='w-[40%] flex justify-evenly items-center font-medium'>
          			  	<p>Expense Amount: 3000</p>
          			  	<p>Received Amount: 5000</p>
          			</div>
        		</div> 

        		<div className='mt-4 h-[80%] overflow-scroll'>
        		    <ExpenseTable expenseData={expenseData} setIsViewDetail={setIsViewDetail} setSelectedId={setSelectedId} />
        		</div>

				<div className="w-full h-[10%] px-2 flex justify-between items-center">
					<div>
						{
							!isFilteredData ? (
								<p className="text-sm text-gray-500">Page { pageNo } of { totalPages }</p>
							) : (
								<p className="text-sm text-gray-500">Page { filteredPageNo } of { totalPages }</p>
							)
						}
					</div>
					{
						!isFilteredData ? (
							<div>
								<button
									className="w-28 h-9 text-sm bg-[#005DB8] text-white rounded-xl"
									onClick={ handlePreviousPage }
								>Previous</button>
								<button
									className="w-28 h-9 ms-5 text-sm bg-[#005DB8] text-white rounded-xl"
									onClick={ handleNextPage }
								>Next</button>
							</div>
						) : (
							<div>
								<button
									className="w-28 h-9 text-sm bg-[#005DB8] text-white rounded-xl"
									onClick={ handleFilteredPreviousPage }
								>Previous</button>
								<button
									className="w-28 h-9 ms-5 text-sm bg-[#005DB8] text-white rounded-xl"
									onClick={ handleFilteredNextPage }
								>Next</button>
							</div>
						)
					}
					
				</div>

      		</div>

        	{
        	  	isViewDetail && <ExpenseDetail selectedId={selectedId} setIsViewDetail={ setIsViewDetail } />
        	} 

    	</div>
  	)
}

export default ExpenseReports 
