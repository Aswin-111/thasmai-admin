"use client"

import React, {useState, useEffect, useRef} from 'react';
import { useAppointmentStore } from '@/app/operator/appointments/appointmentState';
import axios  from 'axios';


function CheckoutPayment() {
    

    const appointmentState = useAppointmentStore((state) => {
        return state;
    });


    const [data, setData] = useState([]);

    const [date, setDate] = useState("");

    const paymentAmountRef = useRef("")
    const paymentMethodRef = useRef("")

    const discount = data.discount;
  
    useEffect(() => {

      fetchData();

    }, []);
  
    async function paymentClickHandler(totalAmount, paymentType, status, days){
      const response = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/superadmin/update-payment/${appointmentState.id}`,{
          
      payment:totalAmount,
      payment_method : paymentType,
  
      appointment_status: status,
      room:days
  
      })
      
      window.location.reload()
    }
  
  
    async function fetchData() {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/superadmin/list-appointment/${appointmentState.id}`
      );
      console.log(response.data);
      setData(response.data);
      let startDate = response.data.appointmentDate.split("/");
      let endDate = response.data.check_out.split("/");
  
      startDate = `${startDate[2]}/${startDate[1]}/${startDate[0]}`;
      endDate = `${endDate[2]}/${endDate[1]}/${endDate[0]}`;
  
      console.log(startDate, endDate);
      var checkInDate = new Date(startDate); // Check-in date
      var checkOutDate = new Date(endDate); // Check-out date
  
      var difference_ms = Math.abs(checkOutDate - checkInDate);
  
      var difference_days = Math.floor(difference_ms / (1000 * 60 * 60 * 24));
  
      console.log("Difference in days:", difference_days);
      setDate(difference_days === 0 ? 1 : difference_days);
      return;
    }


    



  return (
    <div className='w-[100vw] h-[100vh] backdrop-blur-sm bg-[#0000003b] absolute top-0 left-0 flex justify-center items-center '>
        <div className='w-[600px] h-[500px] bg-white rounded'>
            <div className='w-full h-[15%] ps-8 font-semibold text-xl text-white bg-[#5799FD] rounded relative flex items-center'>
                Check-out Payment
                <button 
                    className="w-[30px] h-[30px] text-black font-medium bg-white hover:text-white hover:bg-blue-700 rounded absolute right-[30px]"
                    onClick={() => {
                        appointmentState.setPaymentToggle(false, undefined);
                    }}
                >x</button>
            </div>
            
            <div className='w-full h-[85%] text-center'>
                <div className='w-[75%] mt-4 mx-auto'>
                        <div className='flex pt-4'>
                            <p className='w-[50%]'>Number of days stayed</p>
                            <p>: {date}</p>
                        </div>
                        <div className='flex pt-4'>
                            <p className='w-[50%]'>Appointment payment</p>
                            
                            <input 
                                className="h-[35px] rounded-[6px] outline-black" 
                                type="number" 
                                name="payment"
                                placeholder='₹ 0000'
                                ref={paymentAmountRef}

                            />
                        </div>
                        <div className='flex pt-4'>
                            <p className='w-[50%]'>Reward/Discount received</p>
                            <p>: ₹ {data.discount?data.discount:"0"}</p>
                        </div>
                        <div className='flex pt-4'>
                            <p className='w-[50%] font-semibold'>Total payment</p>
                            <p>: ₹ {String((Number(paymentAmountRef.current.value) - discount)).startsWith('-') ? 0 : String((Number(paymentAmountRef.current.value) - discount))}</p>
                        </div>  
                        <div className='flex pt-4'>
                            <p className='w-[50%]'>Type of Payment</p>
                            {/* <p>: njhgfd</p> */}
                            <select 
                                className='w-[150px] h-[35px] p-0 ps-2 rounded-[6px] outline-black'  
                                name="payment_method" 
                                ref={paymentMethodRef}
                            > Select
                                <option disabled>Select</option>
                                <option value="cash">Cash</option>
                                <option value="upi">UPI</option>
                                <option value="card">Card</option>
                            </select>
                        </div>     
                </div>


                <button 
                    className='mt-10 w-[50%] h-[50px] bg-[#23A058] text-white rounded-xl hover:bg-[#23a057d0]'
                    disabled = { String((Number(paymentAmountRef.current.value) - discount)).startsWith("-") || String((Number(paymentAmountRef.current.value) - discount)).startsWith("0")}
                    onClick={() => {
                        paymentClickHandler(String((Number(paymentAmountRef.current.value) - discount)), paymentMethodRef.current.value, "Completed", date)
                    }}
                >
                    Payment of ₹ {String((Number(paymentAmountRef.current.value) - discount)).startsWith('-') ? "" : String((Number(paymentAmountRef.current.value) - discount))}
                </button>

            </div>
        </div>
    </div>
  )
}

export default CheckoutPayment