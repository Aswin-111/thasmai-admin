"use client"

import React, { useState, useEffect, useRef } from 'react'
import { useNavbarTextStore } from '../../state/navbar-state'
import NavLink from '../navlink/navlink'
// import dummyData from './dummy'
import AppointmentsTable from '@/app/components/appointments/appointments/AppointmentsTable'
import AppointmentView from '@/app/components/appointments/appointments/AppointmentView'
import AppointmentCheckOut from '@/app/components/appointments/appointments/AppointmentCheckOut'
import axios from 'axios';
import { useAppointFilterStore } from "./filterstate";
import FilterChip from "./filterchips";



function AshramAppointments() {

  const [filterToggle, setFilterToggle] = useState(false);

  const [pageNo, setPageNo] = useState(1);
	const [totalPages, setTotalPages] = useState();
	const [filteredPageNo, setFilteredPageNo] = useState(1);
	const [isFilteredData, setIsFilteredData] = useState(false);

  const fieldRef = useRef("")
  const operatorRef = useRef("")
  const dataRef = useRef("")
  const startDateRef = useRef()
  const endDateRef = useRef()

  
//  console.log(pageNo);


  // const appointmentState = useAppointStore((state) => {
  //     return state;
  // });

  const filterState = useAppointFilterStore((state) => {
    return state;
  });


  useEffect(()=>{console.log('hi',filterState.FieldValue);filterState.setFieldText(filterState.FieldValue)},[])
  useEffect(()=>{filterState.setFieldText(filterState.FieldValue)},[filterState.FieldValue])  

  const setNavbarText = useNavbarTextStore((state) => state.setNavbarText);
	setNavbarText("Appointments");
  
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


  async function handleSearch (page) {
    try {
      const config = {
        "Appointment Id": "id",
        "Name": "user_name",
        "Appointment Date":"register_date",
        "Checkin Date":"appointmentDate",
        "Checkout Date":"check_out",
        "Status":"appointment_status",


        "starts with":"like",
        "equal to": "=",
        "greater than" : ">",
        "less than" : "<",
        "not equalto" : "<>",

  
      }
       console.log(config["starts with"]);
       
  
      const filteredData = filterState.filters.map((i,ind) => {
       
        const field = i.field;

        const operator = i.operator.toLowerCase();
        const value = (i.field.toLowerCase() ==="name" && i.operator === "starts with" ) ? `${i.value}%` : i.value;
         console.log(field,value,operator);
        
         if(field.includes("Date") && operator === "between") {
          // SELECT *
          // FROM users
          // WHERE registration_date BETWEEN '2024-01-01' AND '2024-03-01';
          return({
            field : config[`${field}`], operator: "between", value: value, logicaloperator: i.logicaloperator
          })
         } 
        
        return({
          field : config[`${field}`], operator: config[`${operator}`], value: value, logicaloperator: i.logicaloperator
        })
      })
      filteredData[filteredData.length-1].logicaloperator = "null";
      console.log(filteredData);   
      
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/superadmin/appointment-query`, {
        queryConditions: filteredData, page :page, pageSize: 10
      })
      //undo
     console.log(response,"sdfghnbg");
    filterState.setAppointments([...response.data.results])
    setIsFilteredData(true)
    setTotalPages(response.data.totalPages)
    
  
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
      <div className='w-full h-[90%] mt-2 p-4  bg-white rounded shadow drop-shadow-md '>

        <div className="w-full h-8 flex justify-between">

          <div className='w-[65%] flex'>

            <select ref = {fieldRef}
              className="px-2 w-40 h-8 text-[12px] focus:outline-none rounded bg-white text-black border-[1px] border-[#44474E]"
              onChange={(e) => {
                handleFieldChange(e);
              }}
              // onLoad={(e) => {
              //   // handleFieldChange(e);
              //   console.log(filterState.FieldValues[0]);
              //   filterState.setFieldText(filterState.FieldValues[0])
              // }}
              // defaultValue={filterState.FieldValue} x
            >
              <option disabled selected>
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

            <select className="ms-3 px-2 w-40 h-8 text-[12px] focus:outline-none rounded bg-white text-black border-[1px] border-[#44474E]" 
              ref = {operatorRef}
              onChange={e => {
                filterState.setOperatorValue(e.target.value)
              }}
            >
                <option disabled selected>
                  Choose operator
                </option>

                { filterState.FieldValue === "Appointment Id" && 
                    <option value="equal to">Equal to</option>  
                }

                { filterState.FieldValue === "Appointment Date" &&
                  filterState.dateOperator.map((i, index) => {
                    return (
                      <option key={index} value={i}>
                        {i}
                      </option>
                    );
                  })
                }

                { filterState.FieldValue === "Name" && 
                  filterState.stringOperator.map((i, index) => {
                    return (
                      <option key={index} value={i}>
                        {i}
                      </option>
                    );
                  })
                }
                { filterState.FieldValue === "Checkin Date" &&
                  filterState.dateOperator.map((i, index) => {
                    return (
                      <option key={index} value={i}>
                        {i}
                      </option>
                    );
                  })
                }
                { filterState.FieldValue === "Checkout Date" &&
                  filterState.dateOperator.map((i, index) => {
                    return (
                      <option key={index} value={i}>
                        {i}
                      </option>
                    );
                  })
                }
                { filterState.FieldValue === "Status" &&
                 
                      <option value="equal to">
                        equal to
                      </option>
                   
                }
            </select>
            

            {
              (filterState.FieldValue.length === 0)  && 
              <div className='ms-3 w-48 h-8 text-center px-4 rounded bg-white border-none text-slate-100"'></div>
            }

            { (filterState.FieldValue  === "Name" || filterState.FieldValue  === "Appointment Id") && 
                        <input
                          type="text"
                          placeholder="Value" ref = {dataRef}
                          className={`${ filterState.FieldValue === "Appointment Date" ||
                            filterState.FieldValue === "Checkin Date" ||
                            filterState.FieldValue === "Checkout Date" ||
                            filterState.FieldValue === "Status" ? "placeholder:text-slate-200 ms-3 w-48 h-8 text-[12px] text-center px-4  focus:outline-none  rounded bg-[#EEEAEA] border-none text-slate-100":"placeholder:text-black ms-3 w-48 h-8 text-[12px] text-center bg-white text-black px-4  focus:outline-none rounded border-[1px] border-[#44474E]"}`}
                          disabled={
                            filterState.FieldValue === "Appointment Date" ||
                            filterState.FieldValue === "Checkin Date" ||
                            filterState.FieldValue === "Checkout Date" ||
                            filterState.FieldValue === "Status"
                          }
                        />
            }

            {
              ( filterState.FieldValue === "Appointment Date" && filterState.operatorValue === "") && 
                <input type="date" disabled className='ms-3 w-40 h-8 text-[12px] text-center px-4  focus:outline-none  rounded bg-[#EEEAEA] border-none text-slate-100' />
            }
            {
              ( filterState.FieldValue === "Appointment Date" && filterState.operatorValue === "equal to") && 
                <input type="date" ref = {dataRef} className='ms-3 w-40 h-8 text-[12px] text-center px-4  focus:outline-none  rounded bg-white text-black border-[1px] border-[#44474E]' />
            }
            {   ( filterState.FieldValue === "Appointment Date" && filterState.operatorValue === "between") && 
                <>
                <input type="date" ref={startDateRef} className='ms-3 w-40 h-8 text-[12px] text-center px-4  focus:outline-none  rounded bg-white text-black border-[1px] border-[#44474E]' />
                <input type="date" ref={endDateRef} className='ms-3 w-40 h-8 text-[12px] text-center px-4  focus:outline-none  rounded bg-white text-black border-[1px] border-[#44474E]' />
                </>
            }

            {
              ( filterState.FieldValue === "Checkin Date" && filterState.operatorValue === "") && 
                <input type="date" disabled className='ms-3 w-40 h-8 text-[12px] text-center px-4  focus:outline-none  rounded bg-[#EEEAEA] border-none text-slate-100' />
            }
            {
              ( filterState.FieldValue === "Checkin Date" && filterState.operatorValue === "equal to") && 
                <input type="date" ref = {dataRef} className='ms-3 w-40 h-8 text-[12px] text-center px-4  focus:outline-none  rounded bg-white text-black border-[1px] border-[#44474E]' />
            }
            {   ( filterState.FieldValue === "Checkin Date" && filterState.operatorValue === "between") && 
                <>
                <input type="date" ref={startDateRef} className='ms-3 w-40 h-8 text-[12px] text-center px-4  focus:outline-none  rounded bg-white text-black border-[1px] border-[#44474E]' />
                <input type="date" ref={endDateRef} className='ms-3 w-40 h-8 text-[12px] text-center px-4  focus:outline-none  rounded bg-white text-black border-[1px] border-[#44474E]' />
                </>
            }

            {
              ( filterState.FieldValue === "Checkout Date" && filterState.operatorValue === "") && 
                <input type="date" disabled className='ms-3 w-40 h-8 text-[12px] text-center px-4  focus:outline-none  rounded bg-[#EEEAEA] border-none text-slate-100' />
            }
            {
              ( filterState.FieldValue === "Checkout Date" && filterState.operatorValue === "equal to") && 
                <input type="date" ref = {dataRef} className='ms-3 w-40 h-8 text-[12px] text-center px-4  focus:outline-none  rounded bg-white text-black border-[1px] border-[#44474E]' />
            }
            {   ( filterState.FieldValue === "Checkout Date" && filterState.operatorValue === "between") && 
                <>
                <input type="date" ref={startDateRef} className='ms-3 w-40 h-8 text-[12px] text-center px-4  focus:outline-none  rounded bg-white text-black border-[1px] border-[#44474E]' />
                <input type="date" ref={endDateRef} className='ms-3 w-40 h-8 text-[12px] text-center px-4  focus:outline-none  rounded bg-white text-black border-[1px] border-[#44474E]' />
                </>
            }

            {
              filterState.FieldValue  === "Status" &&
                  <select className='ms-3 px-2 w-40 h-8 text-[12px] focus:outline-none rounded bg-white text-black border-[1px] border-[#44474E]' ref = {dataRef}>
                    {
                      filterState.statusValues.map((i, index) => {
                        return <option value={i}>
                          {i}
                        </option>
                      }) 
                    }
                  </select>
            }

          </div>

            {/* ---------------------------AND / OR button------------------------ */}

          <div className='w-[15%]  flex'>
            <button className="w-[60px] h-8 px-3 text-[12px] bg-[#D6E3FF] text-black rounded-2xl" onClick={(e)=>{
              if(filterState.operatorValue === "between") {
                let startDate = startDateRef.current.value;
                startDate = startDate.split("-");
                startDate = `${startDate[0]}-${startDate[1]}-${startDate[2]}`;

                let endDate = endDateRef.current.value;
                endDate = endDate.split("-");
                endDate = `${endDate[0]}-${endDate[1]}-${endDate[2]}`;

                console.log(startDate, endDate);
                
                filterState.setFilter({field : fieldRef.current.value, operator : "between", value : `${startDate}/${endDate}`, logicaloperator:
              'and'})
              } else if(filterState.FieldValue.includes("Date") && filterState.operatorValue === "equal to") {
                let date = dataRef.current.value;
                date = date.split("-");
                date = `${date[0]}-${date[1]}-${date[2]}`;
                
                filterState.setFilter({field : fieldRef.current.value, operator : operatorRef.current.value,value : `${date}`, logicaloperator:
                'and'})
              } else {
              filterState.setFilter({field : fieldRef.current.value, operator : operatorRef.current.value,value : dataRef.current.value, logicaloperator:
              'and'})
              dataRef.current.value = ''
              }
            }}>
              AND
            </button>

            <button className="ms-3 w-[60px] h-8 px-3 text-[12px] bg-[#D6E3FF] text-black rounded-2xl" onClick={(e)=>{

              if(filterState.operatorValue === "between") {
                let startDate = startDateRef.current.value;
                startDate = startDate.split("-");
                startDate = `${startDate[0]}-${startDate[1]}-${startDate[2]}`;
              
                let endDate = endDateRef.current.value;
                endDate = endDate.split("-");
                endDate = `${endDate[0]}-${endDate[1]}-${endDate[2]}`;
              
                console.log(startDate, endDate);

                filterState.setFilter({field : fieldRef.current.value, operator : "between", value : `${startDate}/${endDate}`, logicaloperator:'or'})
              } else if(filterState.FieldValue.includes("Date") && filterState.operatorValue === "equal to") {
                let date = dataRef.current.value;
                date = date.split("-");
                date = `${date[0]}-${date[1]}-${date[2]}`;

                filterState.setFilter({field : fieldRef.current.value, operator : operatorRef.current.value,value : `${date}`, logicaloperator:'or'})
              } else {
              filterState.setFilter({field : fieldRef.current.value, operator : operatorRef.current.value,value : dataRef.current.value, logicaloperator:'or'})
              dataRef.current.value = ''
              }
              
            }}>
              OR
            </button>

          </div>

                    {/* --------------Find button---------------- */}

          <div className='w-[20%] h-full text-right'>   
            <button className="px-6 h-8 text-[12px] bg-[#005DB8] rounded-xl text-white font-semibold shadow-lg"
                 onClick={()=>{
                    console.log('clicked');
                    handleSearch(1)
                    }}>
              Find
            </button> 
          </div>

        </div>

                            {/* -------- Filterchip div ----------- */}

        {/* <div className="w-full h-[10%] bg-[#005DB8] overflow-y-auto shadow my-5 grid grid-cols-2 items-center snap-mandatory snap-y py-2"> */}
        <div className="w-full h-[10%] bg-[#005DB8] overflow-y-auto shadow my-5 flex flex-wrap items-center snap-mandatory snap-y py-2 px-2">

          { 
            filterState.filters[0] ? (
              filterState.filters.map((i,index) => {
                return (
                  <FilterChip 
                    filter = {i} 
                    index= {index} 
                    setFilterToggle={setFilterToggle} 
                    filterToggle={filterToggle}
                  />
                )
              })
            ) : (
              <p className="ms-3 text-[#94a3b8] font-light">No filters applied</p>
            )
          
          }
          {/* <p className="ms-5 text-slate-400 font-light">Add more filters</p> */}
        </div>


      <div className='w-full h-[80%] mt-2'>
          <AppointmentsTable 
           filterToggle={filterToggle}
           pageNo={pageNo} 
           setTotalPages={setTotalPages} 
           setIsFilteredData={setIsFilteredData}
           isFilteredData={isFilteredData}
           filteredPageNo={filteredPageNo}
           setFilteredPageNo={setFilteredPageNo}
           handleSearch={handleSearch}
          />
      



      <div className="w-full md:h-[10%] px-2 flex justify-between items-center">
						<div>
							{
								!isFilteredData ? (
									<p className="text-[12px] md:text-sm text-gray-500">Page { pageNo } of { totalPages }</p>
								) : (
									<p className="text-[12px] md:text-sm text-gray-500">Page { filteredPageNo } of { totalPages }</p>
								)
							}
						</div>
						{
							!isFilteredData ? (
								<div>
									<button
										className="w-20 md:w-28 h-9 text-sm bg-[#005DB8] text-white rounded-xl"
										onClick={ handlePreviousPage }
									>Previous</button>
									<button
										className="w-20 md:w-28 h-9 ms-5 text-sm bg-[#005DB8] text-white rounded-xl"
										onClick={ handleNextPage }
									>Next</button>
								</div>
							) : (
								<div>
									<button
										className="w-20 md:w-28 h-9 text-sm bg-[#005DB8] text-white rounded-xl"
										onClick={ handleFilteredPreviousPage }
									>Previous</button>
									<button
										className="w-20 md:w-28 h-9 ms-5 text-sm bg-[#005DB8] text-white rounded-xl"
										onClick={ handleFilteredNextPage }
									>Next</button>
								</div>
							)
						}
					
					</div>
          </div>
        

      </div>

      

      {
        filterState.appointmentViewToggle && <AppointmentView  />   
      }

      {
        filterState.paymentToggle && 
        <AppointmentCheckOut 
          isFilteredData={isFilteredData} 
          handleSearch={handleSearch}  
          filteredPageNo={filteredPageNo} 
          filterToggle={filterToggle} 
          setFilterToggle={setFilterToggle}
       />
      }
    
    
    </div>
  )
}

export default AshramAppointments