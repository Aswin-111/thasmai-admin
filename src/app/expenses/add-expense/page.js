"use client"
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





import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavLink from '../navlink/navlink';
import { toast } from 'react-hot-toast';
import { MdOutlineFileUpload } from "react-icons/md";

function AddExpense() {
    const [formData, setFormData] = useState({
        Date: '',
        expenseType: '',
        amount: '',
        description: '',
        invoice: null,
    });

    useEffect(() => {
        // Get today's date
        const today = new Date();
        const day = String(today.getDate()).padStart(2, '0');
        const month = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
        const year = today.getFullYear();
        const todayDate = `${day}/${month}/${year}`;
        
        // Set today's date in your form data
        setFormData({
            ...formData,
            Date: todayDate,
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
        form.append('Date', formData.Date);
        form.append('expenseType', formData.expenseType);
        form.append('amount', formData.amount);
        form.append('description', formData.description);
        form.append('invoice', formData.invoice);

        if(formData.invoice && formData.expenseType && formData.amount && formData.description) {

            try {
                const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/superadmin/expense`, form);
                console.log(response);
                toast.success('Expense created successfully');
                // Clear form fields after successful submission
                setFormData({
                    Date: '',
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
        <div className="w-full h-[85vh] px-7 overflow-y-auto">
            <div className="w-full sticky top-0">
                <NavLink />
            </div>
            <div className='w-full h-[93%] mt-2 p-4 bg-white rounded shadow drop-shadow-md '>
                <div className='w-full h-[85%] px-16 py-6 flex '>
                    <div className='w-[60%] flex flex-col'>
                        <input
                            type='text'
                            className='w-[45%] h-12 p-2 mb-5 bg-white text-black border-[1px] border-black rounded-[6px]'
                            name="expenseType"
                            value={formData.expenseType}
                            onChange={handleInputChange}
                            placeholder='Expense Type'
                        />
                        <input
                            type='number'
                            className='w-[45%] h-12 p-2 mb-5 bg-white text-black border-[1px] border-black rounded-[6px]'
                            name="amount"
                            value={formData.amount}
                            onChange={handleInputChange}
                            placeholder='Amount'
                        />
                        <div className='w-[45%] h-12 px-2 mb-5 bg-[#565F71] text-white rounded-2xl'>
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
                            className='w-[95%] p-3 bg-white text-black border-[1px] border-black rounded-[6px]'
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                            placeholder='Description'
                            rows={8}
                        />
                    </div>
                    <div className='w-[40%] bg-slate-200 flex justify-center items-center rounded-[8px] border-[1px] border-black'>
                        {formData.invoice ? (
                            <img className="w-full h-full" src={URL.createObjectURL(formData.invoice)} alt="invoice" />
                        ) : (
                            <div className="text-gray-500 text-center">No invoice uploaded</div>
                        )}
                    </div>
                </div>
                <div className='w-full h-[15%] ps-16'>
                    <div className='w-[60%] h-full'>
                        <button className='w-[90%] h-12 bg-[#005DB8] text-white rounded-2xl' onClick={handleSubmit}>Create Expense</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddExpense;