"use client"
import React, { useState, useEffect } from 'react'
import axios from "axios";


function ExpenseDetail(props) {

    const [data, setData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
          
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/superadmin/get-expensebyid/${ props.selectedId }`)
                // console.log(response.data.user);
                setData(response.data.user);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
    
        fetchData();
    }, []);


    return (
        <div className="w-screen h-screen p-5 flex flex-col justify-center items-center absolute top-0 left-0 bg-[#000000d2] backdrop-blur-[1px]">
            <button
                className="w-8 h-8 m-0 p-0 absolute top-6 right-6 hover:scale-110 text-5xl text-white rotate-45"
                onClick={() => {
                    props.setIsViewDetail(false);
                }}
            >+</button>
            
            {/* <div className="w-[80%] h-[90%] bg-white flex">
                <div className='w-[50%]'>
                    <div className='w-full h-16 bg-blue-800 text-white flex items-center justify-center text-2xl'> Expense Details</div>

                    <div className='w-full pt-24 ps-16'>
                        <div className="flex mb-5">
                            <p className="w-[25%] font-bold text-black">Date:</p>
                            <p className="w-[75%] ms-2">{ data.Date }</p>
                        </div>
                        <div className="flex mb-5">
                            <p className="w-[25%] font-bold text-black">Expense Type:</p>
                            <p className="w-[75%] ms-2">{ data.expenseType }</p>
                        </div>
                        <div className="flex mb-5">
                            <p className="w-[25%] font-bold text-black">Amount:</p>
                            <p className="w-[75%] ms-2">{ data.amount }</p>
                        </div>
                        <div className="flex mb-5">
                            <p className="w-[25%] font-bold text-black">Description:</p>
                            <p className="w-[75%] ms-2">{ data.description }</p>
                        </div>
                   </div>

                </div>


                <div className='w-[50%] p-5 flex justify-center items-center border-l-2 border-gray-300'>
                    <img 
                        className="max-w-[85%] h-full object-cover"
                        src={data.invoiceUrl} alt="Invoice Image" 
                    />
                </div>


            </div> */}

            <div className='w-full h-[85%] flex justify-center items-center'>
                <img 
                    className="max-w-[85%] h-full object-cover border-2 border-white"
                    src={data.invoiceUrl} alt="Invoice Image" 
                />
            </div>

            <div className="w-full h-[15%] p-5 flex justify-center items-center text-white overflow-scroll">
                <p className="w-full h-full text-center font-bold">
                    { data.Date }, { data.expenseType }, ₹ { data.amount }, <span className="font-light">{ data.description }</span>
                </p>
            </div>
            
        </div>
    )
}

export default ExpenseDetail