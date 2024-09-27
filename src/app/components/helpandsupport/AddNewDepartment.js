"use client"
import React, { useState, useEffect } from 'react'
import { MdModeEditOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import axios from 'axios';
import toast from 'react-hot-toast';

function AddNewDepartment(props) {

  const [departmentList, setDepartmentList] = useState([]);
  const [newDepartment, setNewDepartment] = useState("");
  console.log(newDepartment);
  
  useEffect(() => {
    const fetchData = async () => {

        try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/superadmin/listDepartments`);
                console.log(response.data.departmentsList);
                setDepartmentList(response.data.departmentsList);
        } catch (error) {
            console.error('Error fetching data:', error);
            //   toast.error("Error fetching data.");
        }
    };

    fetchData();
  }, [props.isDepartmentRenderToggle]);

  function handleChangeDepartment(e) {
    const value = e.target.value;
    setNewDepartment(value);
  }

  async function handleAddDepartment() {
    if(newDepartment) {
      try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/superadmin/addDepartments`, {
          departments: newDepartment
        });
        
        console.log(response);
        if(response) {
          setNewDepartment("");
          props.setIsDepartmentRenderToggle(prevValue => !prevValue);
          toast.success("Successfully added new department.");

        }
      } catch (error) {
        console.error('Error fetching data:', error);
        //   toast.error("Error fetching data.");
      }
    } else {
      toast("Enter a department name.");
    }
  }

  return (
    <>
        <div className="flex justify-between items-center mx-2 mt-6">
            <input
              type="text"
              name="department"
              value={newDepartment}
              className="w-[310px] h-10 px-4 bg-[#E0E2EC] border-[1px] border-[#74777F] rounded-lg outline-none placeholder:text-[#44474E]"
              placeholder="New Department"
              onChange={handleChangeDepartment}
            />
            <button 
              className="w-[104px] h-10 bg-[#165DB2] text-white rounded-lg"
              onClick={()=>{
                  handleAddDepartment();
              }}
              
            >
              + ADD
            </button>
          </div>

          <div className="h-[75%] mx-2 mt-14 overflow-y-scroll">
            <table className="table rounded-3xl bg-white">
              <thead className="w-full h-[56px] bg-gradient-to-b from-[#858B9C] to-[#2E3036]  text-white sticky top-0 gap-x-20 text-[0.9rem]">
                <tr className="rounded-3xl">
                  <th className="text-center w-[]">Sl No.</th>
                  <th className="text-center w-[]">Department</th>
                  <th className="text-center w-[]">Action</th>
                </tr>
              </thead>
              <tbody className="my-10 overflow-y-scroll">

                {
                  departmentList.map((dept, index) => {
                    return (
                      <tr className="border-[1px] border-b-[#C2C6D4]">
                        <td className="text-center w-[]">{index + 1}</td>
                        <td className="text-center w-[]">{ dept.departments }</td>
                        <td className="  ">
                          <span className="flex justify-between text-xl">
                            <MdDelete
                              className="text-[#BA1A1A] hover:scale-125 cursor-pointer" 
                              onClick={() => {
                                props.setSelectedDepartmentId(dept.id);
                                props.setIsDeleteDepartmentOpen(true);
                              }} 
                            

                            />
                            <MdModeEditOutline 
                              className="text-[#304364] hover:scale-125 cursor-pointer"
                              onClick={() => {
                                props.setSelectedDepartmentId(dept.id);
                                props.setIsEditDepartmentOpen(true);
                              }}
                            />
                          </span>
                        </td>
                      </tr>
                    )
                      
                  })
                }

              </tbody>
            </table>
          </div>
    </>
  )
}

export default AddNewDepartment