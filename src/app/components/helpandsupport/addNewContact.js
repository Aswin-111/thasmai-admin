"use client"
import React, { useState, useEffect } from 'react'
import { IoCloseCircleOutline } from "react-icons/io5";
import axios from 'axios';
import toast from 'react-hot-toast';

function AddNewContact(props) {

    const [newContactDetails, setNewContactDetails] = useState({
        departments: "",
        name : "",
        contact: "",
    });

  console.log(newContactDetails);

  const [departmentList, setDepartmentList] = useState([]);




  useEffect(() => {
    const fetchData = async () => {

        try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/superadmin/listDepartments`);
                
                console.log(response.data.departmentsList);
                setDepartmentList(response.data.departmentsList);
        } catch (error) {
            console.error('Error fetching data:', error);
              toast.error("Error fetching data.");
        }
    };

    fetchData();
  }, []);


  function handleOnChange(e) {
    const { name, value } = e.target;
    setNewContactDetails((prevValue) => {
      return({
        ...prevValue,
        [name] : value,
      })
    })
  }


  async function handleAddNewContact() {
    const {departments, name, contact} = newContactDetails;
    if(departments && name && contact) {
      try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/superadmin/addContact`, newContactDetails);
        
        console.log(response);
        if(response) {
          setNewContactDetails({
            departments : "",
            name : "",
            contact : ""
          });
          toast.success("Successfully added new contact.");
        }
        props.setIsContactTableRenderToggle(prevValue => !prevValue);
      } catch (error) {
        console.error('Error fetching data:', error);
          toast.error("Error while creating contact");
      }
    } else {
      toast("Enter the required fields");
    }
  }


  return (
    <div className="w-screen h-screen p-5 flex flex-col justify-center items-center absolute top-0 left-0 bg-[#000000d2] backdrop-blur-[1px]">
   

    <div className="w-[95%] sm:w-[480px] h-[416px] bg-white">
        <div className='w-full h-[72px] bg-[#005DB8]  text-white flex items-center px-10 relative'>
            <button
                    className="w-8 h-8  absolute top-4 right-4 hover:scale-110 text-4xl text-white "
                    onClick={() => {
                        props.setIsAddNewContactOpen(false);
                    }}
            ><IoCloseCircleOutline/></button>
            <p className='text-xl font-semibold'>ADD SUPPORT</p>
        </div>
        <div className='w-full h-[344px] px-10 py-8 flex flex-col justify-between'>
            
            <select
              className='w-full h-10 ps-2 bg-[#E0E2EC] text-black border-2 border-[#74777F] rounded-[8px]'
              name="departments"
              value={newContactDetails.departments}
              onChange={handleOnChange}
            >
                <option  value="" selected disabled>Select Department</option>
                {
                  departmentList.map((dept, index) => {
                    return <option key={dept.id} value={dept.departments}>{dept.departments}</option>
                  })
                }
            </select>
            
            
             
             <input 
              type='text'
              placeholder='Name'
              className='w-full h-10 ps-2 bg-[#E0E2EC] text-black border-[1px] border-[#74777F] rounded-[8px] placeholder:text-[#44474E]'
              name="name"
              value={newContactDetails.name}
              onChange={handleOnChange}
            />
            <input 
              type='number'
              placeholder='Phone Number'
              className='w-full h-10 ps-2 bg-[#E0E2EC] text-black border-[1px] border-[#74777F] rounded-[8px] placeholder:text-[#44474E]'
              name="contact"
              value={newContactDetails.contact}
              onChange={handleOnChange}
            />
           
         
            <button
             className='w-full sm:w-[400px] h-14 bg-[#005cb8e6] text-white rounded-xl hover:bg-[#005DB8]'
                onClick={handleAddNewContact}
            >
                 Submit
            </button>

        </div>

    </div>
    
</div>
  )
}

export default AddNewContact;