// "use client"
// import React, { useState } from 'react';
// import NavLink from '../navlink/navlink'
// import { MdOutlineFileUpload } from "react-icons/md";


// function AddExpense() {

//     const [image, setImage] = useState(null);
//     const handleImageChange = (e) => {
//       const file = e.target.files[0];
//       const reader = new FileReader();
  
//       reader.onloadend = () => {
//         setImage(reader.result); 
//       };
  
//       if (file) {
//         reader.readAsDataURL(file); 
//       }
//     };

//   return (
//     <div className="w-full h-[85vh] px-7 overflow-y-auto">
//       <div className="w-full sticky top-0">
//         <NavLink />
//       </div>
//       <div className='w-full h-[93%] mt-2 p-4  bg-white rounded shadow drop-shadow-md '>

//         <div className='w-full h-[85%] px-16 py-6 flex '>
//             <div className='w-[60%] flex flex-col'>
//                 <select className='w-[45%] h-12 p-2 mb-5 bg-white text-black border-[1px] border-black rounded-[6px] '>
//                     <option className='' disabled>Expense Type</option>
//                     <option className=''>Water bill</option>
//                     <option className=''>Electricity bill</option>

        
//             </select>
//             <input type='number'
//                 className='w-[45%] h-12 p-2 mb-5 bg-white text-black border-[1px] border-black rounded-[6px] placeholder:text-black '
//                 placeholder='Amount'
//             />
//             <div className='w-[45%] h-12 px-2 mb-5 bg-[#565F71] text-white rounded-2xl'>
//                 <label 
//                     htmlFor="bill"
//                     className='w-full h-full flex items-center'
//                 >
//                     <MdOutlineFileUpload  className='text-2xl me-2'/>
//                     Upload Invoice
//                 </label>
//                 <input id="bill" className="w-full h-full" type="file" hidden onChange={handleImageChange} />
//             </div>
//             <textarea 
//                 className='w-[95%] p-3 bg-white text-black border-[1px] border-black rounded-[6px] placeholder:text-black '
//                 placeholder='Description'
//                 rows={8}
//             />
//         </div>
//         <div className='w-[40%] bg-slate-200 flex justify-center items-center rounded-[8px] border-[1px] border-black'>
//             {/* <img className='w-full h-full' alt='bill image'/> */}

//             {image ? (
//               <img className="w-full h-full " src={image} alt="bill image" />
//             ) : (
//               <div className="text-gray-500 text-center">No bills uploaded</div>
//             )}

//         </div>
        
//        </div>

//        <div className='w-full h-[15%] ps-16'>
//             <div className='w-[60%] h-full'>
//                 <button className='w-[90%] h-12 bg-[#005DB8] text-white rounded-2xl'>Save to Expense</button>
//             </div>
//        </div>

//         </div>
//     </div>
//   )
// }

// export default AddExpense



"use client"

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavLink from '../navlink/navlink';
import { useLoginStore } from '@/app/loginstate/loginState';
import { useNavbarTextStore } from '../../state/navbar-state';
import { toast } from 'react-hot-toast';
import { MdOutlineFileUpload } from "react-icons/md";

function AddExpense() {

    const [employeeId, setEmployeeId] = useState(null); // to attach employye id with expense created.
    const [formData, setFormData] = useState({
        Expense_Date: '',
        emp_id : '',
        expenseType: '',
        amount: '',
        description: '',
        invoice: null,
    });


    const loginState = useLoginStore(function(state) {
  	    return state
  	});

    const setNavbarText = useNavbarTextStore((state) => state.setNavbarText);
	setNavbarText("Financial / Expense");

    useEffect(() => {
        // Get today's date
        const today = new Date();
        const day = String(today.getDate()).padStart(2, '0');
        const month = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
        const year = today.getFullYear();
        const todayDate = `${year}-${month}-${day}`;


        //set employee Id in form data
       const userData = localStorage.getItem('userdata')
       const empId = JSON.parse(userData).emp_Id;
        
        // Set today's date and employee id in your form data
        setFormData({
            ...formData,
            Expense_Date: todayDate,
            emp_id : empId,
        });
        
    }, []); // Run only once on component mount




    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setFormData({
            ...formData,
            invoice: file,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        
        console.log('Submitting form data:', formData); // Log the form data before submission

        const form = new FormData();
        form.append('Expense_Date', formData.Expense_Date);
        form.append('expenseType', formData.expenseType);
        form.append('amount', formData.amount);
        form.append('description', formData.description);
        form.append('invoice', formData.invoice);
        form.append('emp_id', formData.emp_id);

        if(formData.invoice && formData.expenseType && formData.amount && formData.description) {
                console.log(form);
            try {
                const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/superadmin/expense`, form);
                console.log(response);
                toast.success('Expense created successfully');
                // Clear form fields after successful submission
                setFormData({
                    Expense_Date: '',
                    emp_id : '',
                    expenseType: '',
                    amount: '',
                    description: '',
                    invoice: null,
                });
            } catch (error) {
                console.error('Error creating expense:', error);
                toast.error('Error while updating expense details.');
            }

        } else {
            toast("Please enter the required expense details.");
        }
    };


    return (
        <div className="w-full h-[85vh] px-1 md:px-7">
            <div className="w-full sticky top-0">
                <NavLink />
            </div>
            <div className='w-full h-[95%] mt-2 p-4 bg-white rounded shadow drop-shadow-md overflow-y-auto'>
                <div className='w-full md:h-[85%] px-2 md:px-16 py-6 md:flex '>

                    <div className='w-full md:w-[60%] flex flex-col'>
                        {/* <input
                            type='text'
                            className='w-[45%] h-12 p-2 mb-5 bg-white text-black border-[1px] border-black rounded-[6px]'
                            name="expenseType"
                            value={formData.expenseType}
                            onChange={handleInputChange}
                            placeholder='Expense Type'
                        /> */}
                        <select 
                            className='w-full md:w-[45%] h-12 p-2 mb-5 bg-white text-black border-[1px] border-black rounded-[6px]'
                            name="expenseType"
                            value={formData.expenseType}
                            onChange={handleInputChange}
                        >
                            <option value="" disabled>Select</option>
                            <option value="Electricity bill">Electricity Bill</option>
                            <option value="Water bill">Water Bill</option>
                            <option value="Stationery items">Stationery Items</option>
                            <option value="Food and beverages">Food and beverages</option>
                            {/* <option value="Other">Other</option> */}

                        </select>
                        <input
                            type='number'
                            className='w-full md:w-[45%] h-12 p-2 mb-5 bg-white text-black border-[1px] border-black rounded-[6px]'
                            name="amount"
                            value={formData.amount}
                            onChange={handleInputChange}
                            placeholder='Amount'
                        />
                        <div className='w-full md:w-[45%] h-12 px-2 mb-5 bg-[#565F71] text-white rounded-2xl hover:bg-green-600'>
                            <label
                                htmlFor="bill"
                                className='w-full h-full flex items-center'
                            >
                                <MdOutlineFileUpload className='text-2xl me-2' />
                                Upload Invoice
                            </label>
                            <input id="bill" className="w-full h-full" type="file" hidden onChange={handleImageChange} />
                        </div>
                        <textarea
                            className='w-full md:w-[95%] p-3 bg-white text-black border-[1px] border-black rounded-[6px]'
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                            placeholder='Description'
                            rows={8}
                        />
                    </div>
                    <div className='w-full h-[350px] md:w-[40%] md:h-full mt-5 md:m-0 bg-slate-200 flex justify-center items-center rounded-[8px] border-[1px] border-black'>
                        {
                            formData.invoice ? (
                                <img className="w-full h-full" src={URL.createObjectURL(formData.invoice)} alt="invoice" />
                            ) : (
                                <div className="text-gray-500 text-center">No invoice uploaded</div>
                            )
                        }
                    </div>
                </div>

                <div className='w-full md:h-[15%] md:ps-16'>
                    <div className='w-full md:w-[60%] h-full'>
                        <button className='w-full md:w-[90%] h-12 bg-[#005DB8] text-white rounded-2xl' onClick={handleSubmit}>Create Expense</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddExpense;
