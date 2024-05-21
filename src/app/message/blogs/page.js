"use client"

import React, { useState, useEffect, useRef } from 'react'
import NavLink from '../navlink/navlink'
import { useNavbarTextStore } from '../../state/navbar-state'
import CouponLabel from '@/app/components/couponlabel/couponLabel'
import { MdAddCircleOutline } from "react-icons/md";
import ViewBlogPopUp from '@/app/components/message/blogs/ViewBlogPopUp'
import EditBlogPopUp from '@/app/components/message/blogs/EditBlogPopUp'
import DeletePopUp from '@/app/components/message/blogs/DeletePopUp'
import { useBlogFilterStore } from "./filterstate";
import {toast} from 'react-hot-toast';
import FilterChip from "./filterchips";
import axios from 'axios';
import BlogDetailsTable from '@/app/components/message/blogs/blogDetailsTable'
import AddBlogPopUp from '@/app/components/message/blogs/AddBlogPopUp'



function Blogs() {

  	const [addBlogStatus, setAddBlogStatus] = useState(false);

  	const [blogId, setBlogId] = useState(null);
  	const [isViewBlog,setIsViewBlog] = useState(false);
  	const [editBlog, setEditBlog] = useState(false);
	const [isDeleteBlog, setIsDeleteBlog] = useState(false);

  	const [filterToggle, setFilterToggle] = useState(false);

  	const [pageNo, setPageNo] = useState(1);
	const [totalPages, setTotalPages] = useState(1);
	const [filteredPageNo, setFilteredPageNo] = useState(1);
	const [isFilteredData, setIsFilteredData] = useState(false);
	console.log(pageNo, totalPages, filteredPageNo);

  	const fieldRef = useRef("")
  	const operatorRef = useRef("")
  	const dataRef = useRef("")
  	const startDateRef = useRef()
  	const endDateRef = useRef()

	const filterState = useBlogFilterStore((state) => {
        return state;
  	});

	const setNavbarText = useNavbarTextStore((state) => state.setNavbarText);
	setNavbarText("Message");


    function handleFieldChange(e) {
      	const value = e.target.value;
      	console.log(value, filterState);
      	filterState.setFieldText(value);
      	filterState.setOperatorValue("");
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
				"Name": "blog_name",
				"Date":"date",
				// "Location":"place",
				// "Priority":"priority",

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
				const value = (i.field.toLowerCase() ==="name" || i.field.toLowerCase() ==="location") ? `${i.value}%` : i.value;
				console.log(field,value,operator);
			
				if(field.includes("Date") && operator === "between") {
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
		  
		  	const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/superadmin/blogs-query`, {
				queryConditions: filteredData, 
				page : newPageNo , 
		  	})
		  	//undo
		  	console.log(response,"sdfghnbg");
	
		  	filterState.setBlogsData(response.data.queryResults);
			setIsFilteredData(true);
			setTotalPages(response.data.totalPages);
		}
		catch (error) {  
		  	console.error('Error occurred:', error);
		} 
	};


  	return (
   
    	<div className="w-full h-[85vh] px-7 overflow-y-auto">
      		<div className='flex items-center justify-between'>
        		<NavLink />
        		<button 
        		  className="w-[180px] h-[35px] px-2 bg-[#5799fd] hover:bg-[#5799fdd3] text-white rounded-[6px] text-[16px] font-semibold flex items-center justify-center hover:scale-105"
        		  onClick={() => {
        		    setAddBlogStatus(true);
        		  }}
        		> 
          			<MdAddCircleOutline  className="me-2 text-[28px]"/>
          			Add Blog
				</button>
      		</div>

      		<div className='w-full h-[90%] mt-2 p-4 bg-white rounded-[8px] shadow drop-shadow-md'>
      			<div className="w-full h-8 flex justify-between">

					<div className='w-[65%]  flex'>
  						<select 
  						  	ref = {fieldRef}
  						  	className="px-2 w-40 h-8 text-[12px] focus:outline-none rounded bg-white text-black border-[1px] border-[#44474E]"
  						  	onChange={(e) => {
  						    	handleFieldChange(e);
  						  	}}
  						>
  						  	<option  value="" disabled selected>
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
  						  	filterState.FieldValue === "Name" && 
						
  						  	<select className="ms-3 px-2 w-40 h-8 text-[12px] focus:outline-none rounded bg-white text-black border-[1px] border-[#44474E]" 
  						    	ref = {operatorRef}
  						    	onChange={e => {
  						      		filterState.setOperatorValue(e.target.value)
  						    	}}
  						  	>
  						    	<option value="" disabled selected>
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
  						  	filterState.FieldValue === "Date" && 
						
  						  	<select className="ms-3 px-2 w-40 h-8 text-[12px] focus:outline-none rounded bg-white text-black border-[1px] border-[#44474E]" 
  						    	ref = {operatorRef}
  						    	onChange={e => {
  						      		filterState.setOperatorValue(e.target.value)
  						    	}}
  						  	>
  						    	<option value="" disabled selected>
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

						{/* {
  						  	filterState.FieldValue === "Location" && 
						
  						  	<select className="ms-3 px-2 w-40 h-8 text-[12px] focus:outline-none rounded bg-white text-black border-[1px] border-[#44474E]" 
  						    	ref = {operatorRef}
  						    	onChange={e => {
  						      		filterState.setOperatorValue(e.target.value)
  						    	}}
  						  	>
  						    	<option value="" disabled selected>
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
  						  	filterState.FieldValue === "Priority" && 
						
  						  	<select className="ms-3 px-2 w-40 h-8 text-[12px] focus:outline-none rounded bg-white text-black border-[1px] border-[#44474E]" 
  						    	ref = {operatorRef}
  						    	onChange={e => {
  						      		filterState.setOperatorValue(e.target.value)
  						    	}}
  						  	>
  						    	<option value="" disabled selected>
  						      		Choose operator
  						    	</option>
  						    	<option value="equal to">
  						      		equal to
  						    	</option>
  						  	</select>
  						} */}

  										{/* ----------------value input/select---------------- */}

  						{
  						  	filterState.FieldValue === "" && (
  						    	<>
  						      		<div className='ms-3 w-40 h-8 text-center px-4 rounded bg-[#e0e2ec] text-black  border-none text-slate-100"'></div>
  						      		<div className='ms-3 w-40 h-8 text-center px-4 rounded bg-[#e0e2ec] text-black border-none text-slate-100"'></div>
  						    	</>
  						  	)
  						}

						{
  						  	( filterState.FieldValue === "Name" && filterState.operatorValue === "") && 
  						    	<>
  						    	  	<div className='ms-3 w-40 h-8 text-center px-4 rounded bg-[#e0e2ec] border-none text-slate-100"'></div>
  						    	  	<div className='ms-3 w-40 h-8 text-center px-4 rounded bg-[#e0e2ec] border-none text-slate-100"'></div>
  						    	</>
  						}

  						{ 
							( filterState.FieldValue  === "Name" && filterState.operatorValue !== "") && 
  						    	<>
  						      		<input
  						            	type="text"
  						            	placeholder="Value" ref = {dataRef}
  						            	className="placeholder:text-black ms-3 w-40 h-8 text-[12px] text-center bg-white text-black px-4  focus:outline-none rounded border-[1px] border-[#44474E]"
  						      		/>
  						      		<div className='ms-3 w-40 h-8 text-center px-4 rounded bg-[#e0e2ec] border-none text-slate-100"'></div>
  						    	</>
  						}

						{/* {
  						  	( filterState.FieldValue === "Location" && filterState.operatorValue === "") && 
  						    	<>
  						    	  	<div className='ms-3 w-40 h-8 text-center px-4 rounded bg-[#e0e2ec] border-none text-slate-100"'></div>
  						    	  	<div className='ms-3 w-40 h-8 text-center px-4 rounded bg-[#e0e2ec] border-none text-slate-100"'></div>
  						    	</>
  						}

						{ 
							( filterState.FieldValue  === "Location" && filterState.operatorValue !== "") && 
  						    	<>
  						      		<input
  						            	type="text"
  						            	placeholder="Value" ref = {dataRef}
  						            	className="placeholder:text-black ms-3 w-40 h-8 text-[12px] text-center bg-white text-black px-4  focus:outline-none rounded border-[1px] border-[#44474E]"
  						      		/>
  						      		<div className='ms-3 w-40 h-8 text-center px-4 rounded bg-[#e0e2ec] border-none text-slate-100"'></div>
  						    	</>
  						  	
  						} */}

  						{
  						  	( filterState.FieldValue === "Date" && filterState.operatorValue === "") && 
  						    	<>
  						    	  	<div className='ms-3 w-40 h-8 text-center px-4 rounded bg-[#e0e2ec] border-none text-slate-100"'></div>
  						    	  	<div className='ms-3 w-40 h-8 text-center px-4 rounded bg-[#e0e2ec] border-none text-slate-100"'></div>
  						    	</>
  						}
  						{
  						  ( filterState.FieldValue === "Date" && filterState.operatorValue === "equal to") &&
  						    <>
  						      <input type="date" ref = {dataRef} className='ms-3 w-40 h-8 text-[12px] text-center px-4  focus:outline-none  rounded bg-white text-black border-[1px] border-[#44474E]' />
  						      <div className='ms-3 w-40 h-8 text-center px-4 rounded bg-[#e0e2ec] border-none text-slate-100"'></div>
  						    </>
  						}
  						{   ( filterState.FieldValue === "Date" && filterState.operatorValue === "between") && 
  						    <>
  						      <input type="date" ref={startDateRef} className='ms-3 w-40 h-8 text-[12px] text-center px-4  focus:outline-none  rounded bg-white text-black border-[1px] border-[#44474E]' />
  						      <input type="date" ref={endDateRef} className='ms-3 w-40 h-8 text-[12px] text-center px-4  focus:outline-none  rounded bg-white text-black border-[1px] border-[#44474E]' />
  						    </>
  						}

						{/* {
  						  	( filterState.FieldValue === "Priority" && filterState.operatorValue === "") && 
  						    	<>
  						    	  	<div className='ms-3 w-40 h-8 text-center px-4 rounded bg-[#e0e2ec] border-none text-slate-100"'></div>
  						    	  	<div className='ms-3 w-40 h-8 text-center px-4 rounded bg-[#e0e2ec] border-none text-slate-100"'></div>
  						    	</>
  						}

  						{
  						  	(filterState.FieldValue  === "Priority" && filterState.operatorValue !== "") && (
  						    	<>
  						    	  	<select className='ms-3 px-2 w-40 h-8 text-[12px] focus:outline-none rounded bg-white text-black border-[1px] border-[#44474E]' ref = {dataRef}>
  						    	    	<option value="" disabled selected>
  						    	    	  	Choose value
  						    	    	</option>
  						    	    	{
  						    	    	  	filterState.priorityValues.map((i, index) => {
  						    	    	    	return <option value={i}>
  						    	    	      		{i}
  						    	    	    	</option>
  						    	    	  	}) 
  						    	    	}
  						    	  	</select>
  						    	  	<div className='ms-3 w-40 h-8 text-center px-4 rounded bg-[#e0e2ec] border-none text-slate-100"'></div>
  						    	</>
  						  	)
					  
  						} */}
  

					</div>

											{/* ---------------------------AND / OR button------------------------ */}

	 				<div className='w-[15%]  flex'>

         				<button 
							className="w-[60px] h-8 px-3 text-[12px] bg-[#D6E3FF] text-black rounded-2xl" 
							onClick={(e)=>{
           						if(filterState.operatorValue === "between") {
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
             					}
           					}}
         				>
           					AND
        				</button>

        				<button 
							className="ms-3 w-[60px] h-8 px-3 text-[12px] bg-[#D6E3FF] text-black rounded-2xl" 
							onClick={(e)=>{
             					if(filterState.operatorValue === "between") {
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
										logicaloperator:'or'
									})
             					} else if(filterState.FieldValue.includes("Date") && filterState.operatorValue === "equal to") {
             					  	let date = dataRef.current.value;
             					  	date = date.split("-");
             					  	date = `${date[0]}-${date[1]}-${date[2]}`;
								
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
             					}
           					}}
         				>
           					OR
        				</button>

					</div>
              								{/* --------------Find button---------------- */}

    				<div className='w-[20%] h-full text-right'>
 					  	<button 
							className="px-6 h-8 text-[12px] bg-[#005DB8] rounded-xl text-white font-semibold shadow-lg" 
							onClick={() => { 
								console.log('clicked');
								handleSearch(1);
							}}
						>
    						Find
  					  	</button>
					</div>

				</div>
  


  										{/* ------------------Fiterchips div ------------------- */}

        		<div className="w-full h-[10%] bg-[#005DB8] overflow-y-auto shadow my-5 flex flex-wrap items-center snap-mandatory snap-y py-2 px-2">

        		  	{ 
        		    	filterState.filters[0] ? (
        		      	filterState.filters.map((i, index) => {
        		        	return (
        		          		<FilterChip filter = {i} index= {index} setFilterToggle={setFilterToggle} filterToggle={filterToggle} />
        		        	)
        		      	})
				  
        		    	) : (
        		      		<p className="ms-3 text-[#94a3b8] font-light">No filters applied</p>
        		    	)
        		  	}

        		</div>

        		<div className='w-full h-[80%] mt-2'>
			  		<div className="w-full h-[85%] m-0 p-0 overflow-scroll">
					  < BlogDetailsTable
                  		  	setBlogId={setBlogId} 
                  		  	setIsViewBlog={setIsViewBlog} 
                  		  	setEditBlog={setEditBlog}
							setIsDeleteBlog={setIsDeleteBlog}
							setIsFilteredData={setIsFilteredData}
							setFilteredPageNo={setFilteredPageNo}
							pageNo={pageNo}
							setTotalPages={setTotalPages}
							filterToggle={filterToggle}
                  		/>
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
      		  	addBlogStatus && <AddBlogPopUp setAddBlogStatus={ setAddBlogStatus }/>
      		}

      		{
      		  	isViewBlog && <ViewBlogPopUp blogId={blogId} setIsViewBlog={setIsViewBlog} />
      		}

      		{
      		 	 editBlog && <EditBlogPopUp blogId={blogId} setEditBlog={setEditBlog} />
      		}

			{
				isDeleteBlog && <DeletePopUp blogId={blogId} setIsDeleteBlog={setIsDeleteBlog} />
			}

    	</div>

  	)
}

export default Blogs