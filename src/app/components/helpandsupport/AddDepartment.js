import React from 'react'
import { IoCloseCircleOutline } from "react-icons/io5";

function AddDepartment() {
  return (
    <div className="w-screen h-screen p-5 flex flex-col justify-center items-center absolute top-0 left-0 bg-[#000000d2] backdrop-blur-[1px]">
   

    <div className="w-[480px] h-[416px] bg-white">
        <div className='w-[480px] h-[72px] bg-[#005DB8]  text-white flex items-center px-10 relative'>
            <button
                    className="w-8 h-8 m-0 p-0 absolute top-2 right-2 hover:scale-110 text-5xl text-white "
                    // onClick={() => {
                    //     props.setAddPopup(false);
                    // }}
            ><IoCloseCircleOutline/></button>
            <p className='text-xl'>Add Employee</p>
        </div>
        <div className='w-full h-[344px] px-10 py-8 flex flex-col justify-between'>
            
            <select
              className='w-full h-10 ps-2 bg-[#E0E2EC] text-black border-2 border-[#74777F] rounded-[8px]'
              name="role"
            //   value={employeeData.role}
            //   onChange={handleOnChange}
            >
                <option  value="" selected disabled>Role</option>
                {/* <option value="supervisor">Supervisor</option> */}
                <option value="operator">Operator</option>
            </select>
            {/* <select className='w-full h-10 ps-2 bg-[#E0E2EC] text-black border-2 border-[#74777F] rounded-[8px]' >
                <option value="" selected disabled>*Supervisor(only if the role is operator)</option>
                <option>Supervisor</option>
                <option>Operator</option>
            </select> */}
            
             
             <input 
              type='text'
              placeholder='Name'
              className='w-full h-10 ps-2 bg-[#E0E2EC] text-black border-2 border-[#74777F] rounded-[8px]'
              name="name"
             
            />
            <input 
              type='number'
              placeholder='Phone Number'
              className='w-full h-10 ps-2 bg-[#E0E2EC] text-black border-2 border-[#74777F] rounded-[8px]'
              name="number"
             
            />
           
         
            <button
             className='w-[400px] h-14 bg-[#005cb8e6] text-white rounded-xl hover:bg-[#005DB8]'
            
            >
                 Add Employee
            </button>

        </div>

    </div>
    
</div>
  )
}

export default AddDepartment