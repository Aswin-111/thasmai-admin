"use client"
import React, { useState, useEffect} from 'react'
import NavLink from '../navlink/navlink'
import axios from "axios";


function Broadcast() {

	const [message, setMessage] = useState({
		receiver: "",
		title: "",
		body: ""
	});

	console.log(message);


	function handleOnChange(event) {
		const { name, value } = event.target
		setMessage((prevValue) => {
		   return {...prevValue, [name]:value}
		}
		) 
	}

	async function handleSendMessage(event) {
		event.preventDefault();
		const { receiver, title, body } = message;

		// Get today's date
		const today = new Date();
    
		// Format the date in "dd/mm/yyyy" format
		const formattedDate = today.toLocaleDateString('en-GB', {
		  	day: '2-digit',
		  	month: '2-digit',
		  	year: 'numeric'
		});

		if(receiver && title && body) {
			if(receiver === "meditators") {

				try {
					const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/payment/send-broadcast-notification`, {
						title: title,
						message: body,
						Date: formattedDate
					});
					console.log(response);
					alert(response.data.message);
					
				} catch (error) {
					// alert('Failed to send broadcast message');
					alert(error.message);
				}

			} else if(receiver === "operators") {
				alert("connect api for operator broadcast message😎😎");
			} else {
				return;
			}

		} else {

			if(receiver === "" && title === "" && body === "") {
				alert("Please enter the required fields");
			} else {
				if(receiver === "") {
					alert("Please select the receiver");
				} else if(title === "") {
					alert("Please enter message title");
				} else if(body === "") {
					alert("Please write a message");
				} else {
					return;
				}
			}
			
		}

	}

 	return (
    	<div className="w-full h-[85vh] px-7">
    		<div className="w-[25%] h-[6%] mb-2">
    			<NavLink />
    		</div>
    		<div className='w-full h-[85%] drop-shadow-xl bg-white flex p-4'>
				<div className='w-[50%] h-full'>
					<div className='h-[10%] w-full'>
					    <select
           			    	className='w-[50%] h-12 ps-2 border-[1.5px] border-black rounded'
							name="receiver"
							value={message.receiver}
							onChange={handleOnChange}
						>
             		     	<option value="" disabled selected>Select Receivers</option>
             		     	<option value='operators' >Operators</option>
             		     	<option value='meditators'>Meditators</option>
						</select>
					</div>
					<div className='w-full h-[70%] mt-5 flex flex-col border-[1.5px] border-black rounded'>
						<input 
						   type='text'
						   className='w-full h-[20%] ps-2 rounded-t outline-none focus:outline-none text-xl'
						   placeholder='Message Title'
						   name="title"
						   value={message.title}
						   onChange={handleOnChange}
						/>   
						<textarea
							placeholder='Write a message...'
							className='w-full h-[80%] mt-2 ps-2 pt-2 rounded-b outline-none focus:outline-none'
							name="body"
						    value={message.body}
						    onChange={handleOnChange}
						/>
					</div>
					<div className="w-full h-[20%] pt-5">
						<button 
							className= 'w-full h-12 bg-[#005db8] text-white rounded-xl hover:bg-[#005cb8e2] drop-shadow-xl'
							onClick={handleSendMessage}
						>Send</button>
					</div>
				</div>
             {/* <div className='h-full w-[50%]'>
               <h1 className='m-3 font-medium'>Compose</h1>
               <select
                className='w-52 h-12 ms-4 border-[1.5px] border-black rounded'>
                  <option selected>Select Receivers</option>
                  
             </select>


      <div class="w-[90%] h-[60%] m-4 ">
       <div class="w-full min-w-[200px] flex flex-col">
           <input
           className='w-full h-[15%]' 
             type='text'
           />
           <textarea
              className=' w-full h-[85%]'
              placeholder=" ">
          </textarea>
            
       </div>
      </div>



        <button className= ' w-[90%] h-[10%] m-4 bg-[#005db8] text-white rounded-xl hover:bg-[#005cb8e2] drop-shadow-xl' >Send</button>
      </div>
      <div className='h-full w-[50%]'>
        <div className=' w-full h-[10%] p-3 bg-[#005db8] text-white'>
          Sent items
        </div>

        <table className='w-full overflow-scroll '>
            <thead>
                <tr className='h-12 text-left bg-[#005DB8] text-white'>
                    <th className='ps-2'>Date</th>
                    <th className='ps-2'>Message</th>
                    <th className='ps-2 text-center'>View</th>
                </tr>
            </thead>
            <tbody>
                  <tr className='h-12 border-[#E0E2EC] border-b-2'>
                      <td className='ps-2'>01/04/2024</td>
                      <td className='ps-2'>Messagejndhdjjokxspo</td>
                      <td className='ps-2 text-center'>
                          <button
                              className='py-1 px-4 bg-[#AAC7FF] text-[#002F64] rounded-xl hover:scale-110'
                          
                          >
                              View
                          </button>
                      </td>
                  </tr>
            </tbody>
        </table>


        </div> */}
          
				
       </div>
    </div>
    
  )
}

export default Broadcast