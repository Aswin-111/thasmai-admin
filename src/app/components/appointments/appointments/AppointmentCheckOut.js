
"use client"
 
import React, {useState, useEffect, useRef} from 'react';
// import { useAppointStore } from '@/app/appointments/appointments/ashramAppointmentState';
import { useAppointFilterStore } from "@/app/appointments/appointments/filterstate";

import axios  from 'axios';
 
 
function AppointmentCheckOut() {
 
 
    // const appointmentState = useAppointStore((state) => {
    //     return state;
    // });
    const filterState = useAppointFilterStore((state) => {
        return state;
    });
 
 
    const [data, setData] = useState([]);
 
    const [date, setDate] = useState("");
 
    const [image, setImage] = useState(null);
 
    const [finalPayment,setFinalPayment] = useState(0)
    console.log("Image STATE", image);
 
    const paymentAmountRef = useRef("")
    const paymentMethodRef = useRef("")

    console.log(paymentAmountRef);
 
    // const appointmentImageRef = useRef("")
 
    // console.log(appointmentImageRef.current.value);
 
    const discount = data.discount;
    // console.log(discount);
 
    useEffect(() => {
 
      fetchData();
 
      return () => {
        // Your cleanup logic here
        console.log("Component unmounted");
    };
 
    }, []);
 
 
 
    async function uploadImage(event) {
        const file = event.target.files[0]; // Get the first file from the input
 
        try {
            setImage(file); // Set the image file itself, not its URL
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    }
 
    async function paymentClickHandler(totalAmount, paymentType, status, days) {
        if (image) {
            const formData = new FormData();
            formData.append('payment', totalAmount);
            formData.append('payment_method', paymentType);
            formData.append('appointment_status', status);
            formData.append('room', days);
            formData.append('appointmentImage', image);
 
            console.log(formData);
 
            try {
                const response = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/superadmin/update-payment/${filterState.id}`, formData);
                window.location.reload();
            } catch (error) {
                console.error('Error uploading payment:', error);
            }
        } else {
            alert("Please upload appointment bill image");
        }
    }
 
 
 
 
 
    async function fetchData() {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/superadmin/list-appointment/${filterState.id}`
      );
      console.log(response.data);
      setData(response.data.appointment);

      let startDate = response.data.appointment.appointmentDate.split("/");
      let endDate = response.data.appointment.check_out.split("/");
 
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
                        filterState.setPaymentToggle(false, undefined);
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
                                className="h-[35px] ps-3 rounded-[6px] outline-black bg-white text-black border-black border-[1px]" 
                                type="number" 
                                name="payment"
                                placeholder='₹ 0000'
                                ref={paymentAmountRef}
 

                                    onChange = { ()=>{
                                        console.log(paymentAmountRef.current.value)
                                        let final = String((Number(paymentAmountRef.current.value) - discount)).startsWith('-') ? 0 : String((Number(paymentAmountRef.current.value) - discount))
                                        console.log(final);
                                        setFinalPayment(final)
                                    }}
                            />
                        </div>
                        <div className='flex pt-4'>
                            <p className='w-[50%]'>Reward/Discount received</p>
                            <p>: ₹ {data.discount ? data.discount : "0"}</p>
                        </div>
                        <div className='flex pt-4'>
                            <p className='w-[50%] font-semibold'>Total payment</p>
                            <p>: ₹ { finalPayment}
                            </p>
                        </div>  
                        <div className='flex pt-4'>
                            <p className='w-[50%]'>Type of Payment</p>
                            {/* <p>: njhgfd</p> */}
                            <select 
                                className='w-[150px] h-[35px] p-0 ps-2 rounded-[6px] outline-black bg-white text-black border-black border-[1px]'  
                                name="payment_method" 
                                ref={paymentMethodRef}
                            > Select
                                <option disabled>Select</option>
                                <option value="cash">Cash</option>
                                <option value="upi">UPI</option>
                                <option value="card">Card</option>
                            </select>
                        </div> 
                        <div className='flex pt-4'>
                            <p className='w-[50%]'>Upload Bill:</p>
 
                            <input 
                                className="h-[35px] rounded-[6px] outline-black" 
                                type="file" 
                                name="image"
                                placeholder='Upload Image'
                                accept='image/*'
                                onChange={uploadImage}  
                            />
                        </div>
 
 
 
                </div>
 
 
                <button 
                    className='mt-10 w-[50%] h-[50px] bg-[#23A058] text-white rounded-xl hover:bg-[#23a057d0]'
                    disabled = { String((Number(paymentAmountRef.current.value) - discount)).startsWith("-") || String((Number(paymentAmountRef.current.value) - discount)).startsWith("0")}
                    onClick={() => {
                        // console.log(appointmentImageRef.current.value);
                        paymentClickHandler(String((Number(paymentAmountRef.current.value) - discount)), paymentMethodRef.current.value, "Completed", date)
                    }}
                >
                    Payment of ₹ { String((Number(paymentAmountRef.current.value) - discount)).startsWith('-') ? "" : String((Number(paymentAmountRef.current.value) - discount)) }
                </button>
 
            </div>
        </div>
    </div>
  )
}
 
export default AppointmentCheckOut