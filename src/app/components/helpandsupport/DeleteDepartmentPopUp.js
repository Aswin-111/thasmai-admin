"use client"
import React from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

function DeleteDepartmentPopUp(props) {

    const handleDelete = async () => {
        
        const deptId = props.selectedDepartmentId;
        try {
            const response = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/superadmin/deleteDepartments/${deptId}`);
            console.log(response);
            toast.success("Department deleted successfully.");
            // props.setIsContactTableRenderToggle(prevValue => !prevValue);
            props.setIsDepartmentRenderToggle(prevValue => !prevValue);
            props.setIsDeleteDepartmentOpen(false);
            
        } catch (error) {
                 // console.error('Error fetching data:', error);
                toast.error("Error while deleting contact.");
        }
        
    };



    return (
        <div className="w-[100vw] h-[100vh] bg-[#000000af] absolute left-0 top-0 flex justify-center items-center">
            <div className='w-[500px] h-[200px] bg-white rounded hover:bg-[#cfcdcc]'>
                <div className='w-full h-[50%] flex justify-center items-center'>
                    <p className='text-lg font-medium text-black'>Are you sure you want to delete this department?</p>
                </div>
                <div className='w-full h-[50%] flex justify-evenly items-center'>
                    <button 
                        className='w-[120px] h-[40px] bg-amber-700 hover:bg-amber-800 text-white rounded'
                        onClick={() => {
                            handleDelete();
                        }}
                    >Yes</button>
                    <button 
                        className='w-[120px] h-[40px] bg-blue-500 hover:bg-blue-600 text-white rounded'
                        onClick={() => {
                            props.setIsDeleteDepartmentOpen(false);
                        }}
                    >No</button>
                </div>
            </div>
        </div>
    )
}

export default DeleteDepartmentPopUp