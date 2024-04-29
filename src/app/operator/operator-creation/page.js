"use client"

import React, { useState, useEffect } from 'react'
import { IoMdSearch } from "react-icons/io";
import OperatorCreationTable from '@/app/components/operator/operator-creation/OperatorCreationTable'
import AddEmployee from '@/app/components/operator/operator-creation/AddEmployee'
import NavLink from '../navlink/navlink'

function OperatorCreation() {

	const [addPopup, setAddPopup] = useState(false);

	

  return (
    <div className='w-full h-[92vh] px-7 overflow-y-auto'>
      	<div className='flex items-center justify-between'>
       		<NavLink />      
      	</div>
      	<div className='w-full h-[85%] mt-2 p-4  bg-white rounded shadow drop-shadow-md '>
        	<button 
				className='w-[180px] h-[40px] text-white bg-[#005DB8] rounded-xl hover:bg-[#005cb8c0]'
				onClick={() => {
					setAddPopup(true);
				}}
			>
				+ Add Employee
			</button>
        	
			<div className='flex mt-3 h-[40px]'>
          		<select 
            		className='w-[220px] h-[40px] px-2 bg-[#EEEAEA] rounded-xl'
           		>
			 		<option value="">Name</option>
             		<option value="">Emp Id</option>
 			 		<option value="">Location</option>
 			 		<option value="">Role</option>
		  		</select>
          		<input 
          		  type='text'
          		  className='w-[220px] h-[40px] ms-6 px-2 bg-[#EEEAEA] rounded-xl'
					placeholder='Values'
		  		/>

		  		<div className='w-[40px] h-[40px] ms-6 bg-[#005DB8] text-white hover:bg-[#005cb8d1] cursor-pointer flex justify-center items-center rounded-full'>
					<IoMdSearch className='text-3xl'/>
		  		</div>
        	</div>

			<div className='w-full h-[80%] mt-3'>
				<OperatorCreationTable />
			</div>
      	</div>

		{
					
			addPopup && <AddEmployee setAddPopup={ setAddPopup } />
		}

    </div>
  )
}

export default OperatorCreation