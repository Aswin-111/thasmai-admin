"use client"
import React, { useState, useEffect } from 'react'
import { IoCloseCircleOutline } from "react-icons/io5";
import axios from 'axios';
import toast from 'react-hot-toast';

function EditContact(props) {

  const [edittedData, setEdittedData] = useState({
    id:"",
    departments:"",
    name: "",
    contact: ""    
  });
  

  useEffect(() => {
    const fetchData = async () => {
       const contactId = props.selectedContactId;
        console.log(contactId);
        
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/superadmin/contact/${contactId}`);
            console.log(response.data.contact);
            setEdittedData(response.data.contact);
        } catch (error) {
            console.error('Error fetching data:', error);
            //   toast.error("Error fetching data.");
        }
    };

    fetchData();
}, []);

function handleOnChange(event) {
  const { name, value } = event.target;
  setEdittedData((prevValue) => {
    return (
      {
        ...prevValue,
        [name] : value
      }
    )
  })
}

async function handleEditContact() {
  try {
      const response = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/superadmin/updateContacts`, edittedData);
      console.log(response);
      if(response) {
        toast.success("Contact updated successfully");
        props.setIsContactTableRenderToggle(prevValue => !prevValue);
        props.setIsEditContactOpen(false);
      }
      
  } catch (error) {
      console.error('Error fetching data:', error);
        toast.error("Error while updating contact");
  }
}

  return (
    <div className="w-screen h-screen p-5 flex flex-col justify-center items-center absolute top-0 left-0 bg-[#000000d2] backdrop-blur-[1px]">
   

    <div className="w-[95%] sm:w-[480px] h-[416px] bg-white">
        <div className='w-full h-[72px] bg-[#005DB8]  text-white flex items-center px-10 relative'>
            <button
                    className="w-8 h-8  absolute top-4 right-4 hover:scale-110 text-4xl text-white "
                    onClick={() => {
                        props.setIsEditContactOpen(false);
                    }}
            ><IoCloseCircleOutline/></button>
            <p className='text-xl font-semibold'>Edit Contact</p>
        </div>
        <div className='w-full h-[344px] px-10 py-8 flex flex-col justify-between'>
            
            {/* <select
              className='w-full h-10 ps-2 bg-[#E0E2EC] text-black border-2 border-[#74777F] rounded-[8px]'
              name="departments"
              // value={edittedDetails.departments}
              // onChange={handleOnChange}
            >
                <option  value="" selected disabled>Select Department</option>
                {
                  departmentList.map((dept, index) => {
                    return <option key={dept.id} value={dept.departments}>{dept.departments}</option>
                  })
                }
            </select> */}
            
            <div className='w-full h-10 ps-2 bg-[#E0E2EC] text-black border-2 border-[#74777F] rounded-[8px] flex items-center'>
                {edittedData.departments}
            </div>
            
             
             <input 
              type='text'
              placeholder='Name'
              className='w-full h-10 ps-2 bg-[#E0E2EC] text-black border-[1px] border-[#74777F] rounded-[8px] placeholder:text-[#44474E]'
              name="name"
              value={edittedData.name}
              onChange={handleOnChange}
            />
            <input 
              type='number'
              placeholder='Phone Number'
              className='w-full h-10 ps-2 bg-[#E0E2EC] text-black border-[1px] border-[#74777F] rounded-[8px] placeholder:text-[#44474E]'
              name="contact"
              value={edittedData.contact}
              onChange={handleOnChange}
            />
           
         
            <button
             className='w-full sm:w-[400px] h-14 bg-[#005cb8e6] text-white rounded-xl hover:bg-[#005DB8]'
                onClick={handleEditContact}
            >
                 Submit
            </button>

        </div>

    </div>
    </div>
    
  )
}

export default EditContact