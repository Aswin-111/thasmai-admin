"use client"

import React, { useEffect, useState, useRef } from 'react'
import NavLink from '../navlink/navlink';
import { useNavbarTextStore } from '../../state/navbar-state';
import ExpenseDetail from '@/app/components/expenses/reports/ExpenseDetail'
import ExpenseTable from '@/app/components/expenses/reports/ExpenseTable'
import FilterChip from "./filterchips";
import axios from "axios";
import { useExpenseFilterStore } from "./filterstate";
import {toast} from 'react-hot-toast';


function ExpenseReports() {

	// const [isFocused, setIsFocused] = useState(false);
    const [expenseData, setExpenseData] = useState([]);
    const [selectedId, setSelectedId] = useState("");
    const [isViewDetail, setIsViewDetail] = useState(false);
    // const [month, setMonth] = useState("");
    // const [year, setYear] = useState("");
    // const [renderToggle, setRenderToggle] = useState(false);
	const [pageNo, setPageNo] = useState(1);
	const [totalPages, setTotalPages] = useState(1);
	const [filteredPageNo, setFilteredPageNo] = useState(1);
	const [isFilteredData, setIsFilteredData] = useState(false);


	const [filterToggle, setFilterToggle] = useState(false);

  	const fieldRef = useRef("")
  	const operatorRef = useRef("")
  	const dataRef = useRef("")
  	const startDateRef = useRef()
  	const endDateRef = useRef()

	const filterState = useExpenseFilterStore((state) => {
        return state;
    });

	const setNavbarText = useNavbarTextStore((state) => state.setNavbarText);
	setNavbarText("Financial / Expense");


  	useEffect(() => {
    	const fetchData = async () => {
      
      		try {
            	const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/superadmin/get-expense`, {
					page: pageNo
				});
            	console.log(response.data);
            	setExpenseData(response.data.expenses);
				setTotalPages(response.data.totalpages);
				setIsFilteredData(false);
				setFilteredPageNo(1);

        	} catch (error) {
            	// console.error('Error fetching data:', error);
				toast.error("Error fetching data.");
        	}
    	};

    	fetchData();
	}, [pageNo, filterToggle]);


	// function  handleFocus() {
	// 		setIsFocused(true);
	// }
	// function  handleBlur() {
	// 		setIsFocused(false);
	// }

	function handleFieldChange(e) {
		const value = e.target.value;
		console.log(value, filterState);
		filterState.setFieldText(value);
		filterState.setOperatorValue("");
	}


	// const handleDateChange = (value) => {

  	// 	if(!value) {
    // 		setRenderToggle(!renderToggle);
  	// 	} else {

    // 		const selectedDate = new Date(value + '-01'); // Adding '-01' to ensure it's the first day of the selected month
    // 		const month = selectedDate.getMonth() + 1; // Months are zero-based, so we add 1
    // 		const year = selectedDate.getFullYear();

    // 		// Do something with month and year
    // 		console.log("Month:", month);
    // 		console.log("Year:", year);
    // 		setMonth(month);
    // 		setYear(year);
  	// 	}
  
	// };


	// async function handleClickFind(newPageNo) {
  
  	// 	try {
    // 		const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/superadmin/filter?month=${month}&year=${year}`, {
	// 			page: newPageNo
	// 		});
  	// 		// console.log(response);

   	// 		setExpenseData(response.data.expenses);
	// 		setTotalPages(response.data.totalPages);
	// 		setIsFilteredData(true);
	// 		setPageNo(1);
	// 	} catch (error) {
    // 		console.error('Error fetching data:', error);
	// 	}
	// }

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
				handleSearch(newPageNo);
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
				handleSearch(newPageNo);
				return newPageNo;
			});
        }
    };


	async function handleSearch (newPageNo) {
		try {
		  	const config = {
				"Expense Type": "expenseType",
				"Amount": "amount",
				"Expense Date":"Expense_Date",
				
				"starts with":"like",
				"equal to": "=",
				"greater than" : ">",
				"less than" : "<",
				"not equal to" : "<>",
		  	}
		   	console.log(config["starts with"]);

		  	const filteredData = filterState.filters.map((i,ind) => {
		   
				const field = i.field;
	
				const operator = i.operator.toLowerCase();
				const value = i.field.toLowerCase() ==="name" ? `${i.value}%` : i.value;
				console.log(field,value,operator);
			
				if(field.includes("Date") && operator === "between") {
			  		// SELECT *
			  		// FROM users
			  		// WHERE registration_date BETWEEN '2024-01-01' AND '2024-03-01';
			  		return({
						field : config[`${field}`], 
						operator: "between", 
						value: value, 
						logicaloperator: i.logicaloperator
			  		})
				} 
			
				return({
				  	field : config[`${field}`], 
					operator: config[`${operator}`], 
					value: value, 
					logicaloperator: i.logicaloperator
				})
			})

		  	filteredData[filteredData.length-1].logicaloperator = "null";
		  	console.log(filteredData);   
		  
		  	const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/superadmin/expense-query`, {
				queryConditions: filteredData, 
				page :newPageNo, 
				pageSize: 10
		  	})
		  	//undo
		  	console.log(response,"sdfghnbg");

			setExpenseData(response.data.results);
			setTotalPages(response.data.totalPages);
			setIsFilteredData(true);
			
	  
		}
		catch (error) {  
		  	console.error('Error occurred:', error);
		} 
	};



  	return (

    	<div className="w-full h-[85vh] px-7 overflow-y-auto">
      		<div className="w-full sticky top-0">
        		<NavLink />
      		</div>

      		<div className='w-full h-[93%] mt-2 p-4 bg-white rounded shadow drop-shadow-md '>
        
				<div className="w-full h-8 flex justify-between">

					<div className='w-[65%] flex'>

  						<select ref = {fieldRef}
							className="px-2 w-40 h-8 text-[12px] focus:outline-none rounded bg-white text-black border-[1px] border-[#44474E]"
							onChange={(e) => {
							  handleFieldChange(e);
							}}
  						>
							<option 
								disabled 
								selected
								value=""
							>
							  	Choose field
							</option>
							{ 
							  	filterState.FieldValues.map((i,index)=>{
									return (
								  		<option key = {index} value = {i}> 
											{i}
								  		</option>
									)
							  	})
							}
  						</select>

  								{/* -----------------operator select--------------- */}
						{
              				filterState.FieldValue === "" && 

              				<select className="ms-3 px-2 w-40 h-8 text-[12px] focus:outline-none rounded bg-white text-black border-[1px] border-[#44474E]" 
              				  disabled  
              				>
              				  <option disabled selected>
              				    Choose operator
              				  </option>
              				</select>
            			}

            			{
            			  filterState.FieldValue === "Expense Type" && 
						
            			  <select className="ms-3 px-2 w-40 h-8 text-[12px] focus:outline-none rounded bg-white text-black border-[1px] border-[#44474E]" 
            			    ref = {operatorRef}
            			    onChange={e => {
								filterState.setOperatorValue(e.target.value)
            			    }}
            			  >
            			    <option disabled selected>
            			      Choose operator
            			    </option>
            			    {
            			      filterState.stringOperator.map((i, index) => {
            			        return (
            			          <option key={index} value={i}>
            			            {i}
            			          </option>
            			        );
            			      })
            			    } 
            			  </select>

            			}

            			{
            			  filterState.FieldValue === "Amount" && 
						
            			  <select className="ms-3 px-2 w-40 h-8 text-[12px] focus:outline-none rounded bg-white text-black border-[1px] border-[#44474E]" 
            			    ref = {operatorRef}
            			    onChange={e => {
								filterState.setOperatorValue(e.target.value)
            			    }}
            			  >
            			    <option disabled selected>
            			      Choose operator
            			    </option>
            			    {
            			      filterState.integerOperator.map((i, index) => {
            			        return (
            			          <option key={index} value={i}>
            			            {i}
            			          </option>
            			        );
            			      })
            			    }
            			  </select>
            			}

						{
            			  filterState.FieldValue === "Expense Date" && 
						
            			  <select className="ms-3 px-2 w-40 h-8 text-[12px] focus:outline-none rounded bg-white text-black border-[1px] border-[#44474E]" 
            			    ref = {operatorRef}
            			    onChange={e => {
								filterState.setOperatorValue(e.target.value)
            			    }}
            			  >
            			    <option disabled selected>
            			      Choose operator
            			    </option>
            			    {
            			      filterState.dateOperator.map((i, index) => {
            			        return (
            			          <option key={index} value={i}>
            			            {i}
            			          </option>
            			        );
            			      })
            			    }
            			  </select>
            			}
  								{/* -----------------value input/select--------------- */}


  						{
							(filterState.FieldValue.length === 0 || filterState.operatorValue === "")  && 
							<>
								<div className='ms-3 w-40 h-8 text-center px-4 rounded bg-gray-300 border-none text-slate-100"'></div>
								<div className='ms-3 w-40 h-8 text-center px-4 rounded bg-gray-300 border-none text-slate-100"'></div>
							</>
  						}

						{
							( filterState.FieldValue  === "Expense Type" && filterState.operatorValue === "starts with" ) &&
							<>
								<input
									type="text"
									placeholder="Value" ref = {dataRef}
									className="placeholder:text-black ms-3 w-40 h-8 text-[12px] text-center bg-white text-black px-4  focus:outline-none rounded border-[1px] border-[#44474E]"
								/>
								<div className='ms-3 w-40 h-8 text-center px-4 rounded bg-gray-300 border-none text-slate-100"'></div>
							</>
  						}

						{
							( filterState.FieldValue  === "Expense Type" && filterState.operatorValue === "equal to" ) &&
							<>
								<select className='ms-3 px-2 w-40 h-8 text-[12px] focus:outline-none rounded bg-white text-black border-[1px] border-[#44474E]' ref = {dataRef}>
									<option disabled selected value="" > Choose field </option>
								  	{
										filterState.expenseTypeValues.map((i, index) => {
									  		return <option value={i}> {i} </option>
										}) 
								    }
								</select>
								<div className='ms-3 w-40 h-8 text-center px-4 rounded bg-gray-300 border-none text-slate-100"'></div>
							</>
  						}

  						{ 
							( filterState.FieldValue  === "Amount" && (filterState.operatorValue  === "greater than" || filterState.operatorValue  === "less than" || filterState.operatorValue  === "equal to" || filterState.operatorValue  === "not equal to") ) && 
								<>
								<input
									type="text"
									placeholder="Value" ref = {dataRef}
									className="placeholder:text-black ms-3 w-40 h-8 text-[12px] text-center bg-white text-black px-4  focus:outline-none rounded border-[1px] border-[#44474E]"
								/>
								<input type="text" disabled className='ms-3 w-40 h-8 text-[12px] text-center px-4  focus:outline-none  rounded bg-[#EEEAEA] border-none text-slate-100' />
								</>
  						}

  						{
							( filterState.FieldValue === "Expense Date" && filterState.operatorValue === "equal to") && 
							<>
							  <input type="date" ref = {dataRef} className='ms-3 w-40 h-8 text-[12px] text-center px-4  focus:outline-none  rounded bg-white text-black border-[1px] border-[#44474E]' />
							  <input type="date" disabled className='ms-3 w-40 h-8 text-[12px] text-center px-4  focus:outline-none  rounded bg-[#EEEAEA] border-none text-slate-100' />
							</>  
  						}
  						{   ( filterState.FieldValue === "Expense Date" && filterState.operatorValue === "between") && 
							  <>
							  	<input type="date" ref={startDateRef} className='ms-3 w-40 h-8 text-[12px] text-center px-4  focus:outline-none  rounded bg-white text-black border-[1px] border-[#44474E]' />
							  	<input type="date" ref={endDateRef} className='ms-3 w-40 h-8 text-[12px] text-center px-4  focus:outline-none  rounded bg-white text-black border-[1px] border-[#44474E]' />
							  </>
  						}

					</div>


  						{/* ---------------------------AND / OR button------------------------ */}

					<div className='w-[15%]  flex'>
					  	<button 
							className="w-[60px] h-8 px-3 text-[12px] bg-[#D6E3FF] text-black rounded-2xl" 
							onClick={(e)=>{
								if(filterState.FieldValue.includes("Date") && filterState.operatorValue === "between") {
								  	let startDate = startDateRef.current.value;
								  	startDate = startDate.split("-");
								  	startDate = `${startDate[0]}-${startDate[1]}-${startDate[2]}`;
								
								  	let endDate = endDateRef.current.value;
								  	endDate = endDate.split("-");
								  	endDate = `${endDate[0]}-${endDate[1]}-${endDate[2]}`;
								
								  	console.log(startDate, endDate);
								
								  	filterState.setFilter({
										field : fieldRef.current.value, 
										operator : "between", 
										value : `${startDate}/${endDate}`, 
										logicaloperator: 'and'
									})
								} else if(filterState.FieldValue.includes("Date") && filterState.operatorValue === "equal to") {
								  	let date = dataRef.current.value;
								  	date = date.split("-");
								  	date = `${date[0]}-${date[1]}-${date[2]}`;
									
								  	filterState.setFilter({
										field : fieldRef.current.value, 
										operator : operatorRef.current.value,
										value : `${date}`, 
										logicaloperator: 'and'
									})
								} else {
									filterState.setFilter({
										field : fieldRef.current.value, 
										operator : operatorRef.current.value,
										value : dataRef.current.value, 
										logicaloperator: 'and'
									})
									dataRef.current.value = ''
								}
					  		}}
						>
							AND
					  	</button>
				  
					  	<button 
					  		className="ms-3 w-[60px] h-8 px-3 text-[12px] bg-[#D6E3FF] text-black rounded-2xl" 
							onClick={(e)=>{
					
								if(filterState.FieldValue.includes("Date") && filterState.operatorValue === "between") {
								  	let startDate = startDateRef.current.value;
								  	startDate = startDate.split("-");
								  	startDate = `${startDate[2]}/${startDate[1]}/${startDate[0]}`;
									
								  	let endDate = endDateRef.current.value;
								  	endDate = endDate.split("-");
								  	endDate = `${endDate[2]}/${endDate[1]}/${endDate[0]}`;
									
								  	console.log(startDate, endDate);
									
								  	filterState.setFilter({
										field : fieldRef.current.value, 
										operator : "between", 
										value : `${startDate}-${endDate}`, 
										logicaloperator:'or'
									})
								} else if(filterState.FieldValue.includes("Date") && filterState.operatorValue === "equal to") {
								  	let date = dataRef.current.value;
								  	date = date.split("-");
								  	date = `${date[2]}/${date[1]}/${date[0]}`;
									
								  	filterState.setFilter({
										field : fieldRef.current.value, 
										operator : operatorRef.current.value,
										value : `${date}`, 
										logicaloperator:'or'
									})
								} else {
									filterState.setFilter({
										field : fieldRef.current.value, 
										operator : operatorRef.current.value,
										value : dataRef.current.value, 
										logicaloperator:'or'
									})
									dataRef.current.value = ''
								}

					  		}}
						>
							OR
					  	</button>
				  
					</div>
				  
							  {/* --------------Find button---------------- */}
				  
					<div className='w-[20%] h-full text-right'>   
					  	<button className="px-6 h-8 text-[12px] bg-[#005DB8] rounded-xl text-white font-semibold shadow-lg" onClick={()=>{console.log('clicked');handleSearch()}}>
							Find
					  	</button> 
					</div>
				  
				</div>


				                            {/* -------- Filterchip div ----------- */}

        		<div className="w-full h-[10%] my-2 py-2 px-2 bg-[#005DB8] overflow-y-auto shadow flex flex-wrap items-center snap-mandatory snap-y">

        		  { 
        		    filterState.filters[0] ? (
        		      filterState.filters.map((i,index) => {
        		        return (
        		          <FilterChip 
        		            filter = {i} 
        		            index= {index} 
        		            setFilterToggle={setFilterToggle} 
        		            filterToggle={filterToggle}
							handleSearch={handleSearch}
        		          />
        		        )
        		      })
        		    ) : (
        		      <p className="ms-3 text-[#94a3b8] font-light">No filters applied</p>
        		    )
				
        		  }
        		  {/* <p className="ms-5 text-slate-400 font-light">Add more filters</p> */}
        		</div>


				                            {/* -------- Expense table div ----------- */}


        		<div className='w-full h-[80%] mt-2'>

					<div className="w-full h-[5%] m-0 mb-1 p-2 flex flex-row-reverse">
						<div className='w-[40%] flex justify-between items-center font-medium'>
          				  	<p>Expense Amount: 3000</p>
          				  	<p>Received Amount: 5000</p>
          				</div>
					</div>

					
					<div className="w-full h-[85%] m-0 p-0 overflow-scroll">
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

				

      		</div>

        	{
        	  	isViewDetail && <ExpenseDetail selectedId={selectedId} setIsViewDetail={ setIsViewDetail } />
        	} 

    	</div>
  	)
}

export default ExpenseReports 