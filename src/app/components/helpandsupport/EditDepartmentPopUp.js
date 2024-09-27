"use client"
import React, { useState, useEffect } from 'react'
import { IoCloseCircleOutline } from "react-icons/io5";
import axios from 'axios';
import toast from 'react-hot-toast';

function EditDepartmentPopUp(props) {

    const [edittedDepartment, setEdittedDepartment] = useState({
        id:"",
        departments:""
    });

    console.log(edittedDepartment);
    

    useEffect(() => {
        const fetchData = async () => {
           const deptId = props.selectedDepartmentId;
            console.log(deptId);
            
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/superadmin/department/${deptId}`);
                console.log(response.data.contact);
                setEdittedDepartment(response.data.contact);
            } catch (error) {
                console.error('Error fetching data:', error);
                //   toast.error("Error fetching data.");
            }
        };
    
        fetchData();
    }, []);

    function handleOnChange(event) {
        const { name, value } = event.target;
        setEdittedDepartment((prevValue) => {
          return (
            {
              ...prevValue,
              [name] : value
            }
          )
        })
      }


    async function handleEditDepartment() {
        try {
          console.log(edittedDepartment);
          
            const response = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/superadmin/updateDepartments`, edittedDepartment);
            console.log(response);
            if(response) {
              toast.success("Department updated successfully");
              props.setIsDepartmentRenderToggle(prevValue => !prevValue);
              props.setIsEditDepartmentOpen(false);
            }
            
        } catch (error) {
            console.error('Error fetching data:', error);
              toast.error("Error while updating department");
        }
      }

  return (
    <div className="w-screen h-screen p-5 flex flex-col justify-center items-center absolute top-0 left-0 bg-[#000000d2] backdrop-blur-[1px]">
   

    <div className="w-[95%] sm:w-[480px] h-[416px] bg-white">
        <div className='w-full h-[72px] bg-[#005DB8]  text-white flex items-center px-10 relative'>
            <button
                    className="w-8 h-8  absolute top-4 right-4 hover:scale-110 text-4xl text-white "
                    onClick={() => {
                        props.setIsEditDepartmentOpen(false);
                    }}
            ><IoCloseCircleOutline/></button>
            <p className='text-xl font-semibold'>Edit Department</p>
        </div>
        <div className='w-full h-[344px] px-10 py-8 flex flex-col justify-between'>
             
            
            <input 
                type='text'
                placeholder=''
                className='w-full h-10 ps-2 bg-[#E0E2EC] text-black border-[1px] border-[#74777F] rounded-[8px] placeholder:text-[#44474E]'
                name="departments"
                value={edittedDepartment.departments}
                onChange={handleOnChange}
            />
           
         
            <button
             className='w-full sm:w-[400px] h-14 bg-[#005cb8e6] text-white rounded-xl hover:bg-[#005DB8]'
                onClick={handleEditDepartment}
            >
                 Submit
            </button>

        </div>

    </div>
    </div>
  )
}

export default EditDepartmentPopUp