// "use client"

// import React, { useState, useEffect } from 'react';
// import toast from "react-hot-toast";
// import axios from 'axios';
// import { useNavbarTextStore } from '../state/navbar-state';


// export default function Users() {

// 	const [developers, setDevelepors] = useState([]);
// 	console.log(developers);

// 	const setNavbarText = useNavbarTextStore((state) => state.setNavbarText);
// 	setNavbarText("Support & Contact");

//   	useEffect(() => {
    
//     	const fetchData = async () => {
//      		try {
//         		const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/superadmin/support`);
//         		// console.log(response);
//         		setDevelepors(response.data.support);
//       		} catch (error) {
//         		console.error("Error fetching data:", error);
// 				toast.error("Error fetching data.");
//       		}
//     	};

//     	fetchData();

//   	}, []);
    

//     return (
//         <div className="w-full h-[85vh] md:px-7 overflow-y-auto">

//       		<div className='w-full h-[95%] mt-2 p-4 bg-white rounded-[8px] shadow drop-shadow-md'>

//           		<div className=' w-full h-[15%] ps-10 flex items-center bg-blue-400 bg-gradient-to-r from-[#a5e1e282] to-[#d5ccc798]'>
//             		<h1 className='font-semibold text-2xl text-white '>Get Support</h1>
//           		</div>
//           		<div className='w-full h-[85%] p-5 md:p-10 flex flex-wrap justify-evenly bg-gradient-to-r from-[#a5e1e282] to-[#d5ccc798] overflow-y-auto'>

// 					{
// 						developers[0] && 
// 						developers.map((dev, index) => {
// 							return (
// 								<div className='w-80 h-32 p-4 mb-2 bg-[#ffffff8b] rounded drop-shadow-lg'>
//                 	        		<h1 className='font-medium text-black text-xl'>{ dev.Name }</h1>
//                 	        		<p className='mt-2 text-black text-2xl'>{ dev.PhoneNo }</p>
//                 	        		<p className='text-[#959595]'>{ dev.Role }</p>
//                 				</div>
// 							);
// 						})
// 					}

//           		</div>
//       		</div>
//     	</div>
//     );

// }




"use client"

import React, { useState, useEffect } from 'react';
import toast from "react-hot-toast";
import axios from 'axios';
import { useNavbarTextStore } from '../state/navbar-state';

function HelpAndSupportList() {

	const [contactList, setContactList] = useState([]);

	const setNavbarText = useNavbarTextStore((state) => state.setNavbarText);
	setNavbarText("Support & Contact");


	// Group contacts by department using reduce
	const groupedByDepartment = contactList.reduce((acc, item) => {
		if (!acc[item.departments]) {
		  acc[item.departments] = [];
		}
		acc[item.departments].push(item);
		return acc;
	  }, {});



	useEffect(() => {
        const fetchData = async () => {
    
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/superadmin/listContacts`);
                console.log(response.data.list);
                setContactList(response.data.list);
            } catch (error) {
                console.error('Error fetching data:', error);
                //   toast.error("Error fetching data.");
            }
        };
    
        fetchData();
    }, []);


  return (


	<div className='w-full h-full overflow-y-auto'>
		<h1>Help & Support</h1>

		<div className='w-full grid grid-cols-3 gap-4 gap-y-8 overflow-y-auto '>
			{/* <div className='w-[373px] h-[448px]'>
				<div className='w-full h-14 flex items-center justify-center bg-gradient-to-b from-[#858B9C] to-[#2E3036]'>
					<p className='text-white text-sm font-semibold leading-6'>Department Name</p> 
				</div>
				<div className='w-full h-[392px] bg-white text-sm'>
					<div className='w-full h-full  overflow-y-auto'>
						<div className='w-full h-14 border-b-[#C2C6D4] border-[1px] bg-white flex'>
							<div className="w-[10%] h-full px-2 flex items-center">1</div>
							<div className="w-[40%] h-full px-2 flex items-center">Mark Antony</div>
							<div className="w-[50%] h-full px-2 flex items-center">8928774265</div>
						</div>
					</div>
				</div>
			</div> */}


				{Object.keys(groupedByDepartment).map((department, index) => (
				        <div key={index} className='w-[373px] h-[448px] shadow-xl'>
				          <div className='w-full h-14 flex items-center justify-center bg-gradient-to-b from-[#858B9C] to-[#2E3036]'>
				            <p className='text-white text-sm font-semibold leading-6'>{department}</p>
				          </div>
				          <div className='w-full h-[392px] bg-white text-sm'>
				            <div className='w-full h-full overflow-y-auto'>
				              {groupedByDepartment[department].map((contactItem, idx) => (
				                <div key={contactItem.id} className='w-full h-14 border-b-[#C2C6D4] border-[1px] bg-white flex'>
				                  <div className="w-[10%] h-full px-2 flex items-center">{idx + 1}</div>
				                  <div className="w-[40%] h-full px-2 flex items-center">{contactItem.name}</div>
				                  <div className="w-[50%] h-full px-2 flex items-center">{contactItem.contact}</div>
				                </div>
				              ))}
				            </div>
				          </div>
				        </div>
				))}

		</div>

	</div>
  )
}

export default HelpAndSupportList
