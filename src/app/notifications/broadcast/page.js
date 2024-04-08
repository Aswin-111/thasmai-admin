import React from 'react'
import NavLink from '../navlink/navlink'


function Broadcast() {
  return (
    <div className="w-full h-[85vh] px-7">
    <div className="w-[25%] h-[6%] mb-2">
      <NavLink />
    </div>
    <div className='w-full h-[85%] drop-shadow-xl bg-white flex p-4'>
      <div className='h-full w-[50%]'>
        <h1 className='m-3 font-medium'>Compose</h1>
        <select
         className='w-52 h-12 ms-4 border-[1.5px] border-black rounded'>
           <option selected>Select Receivers</option>
           
      </select>


    <div class="w-[90%] m-4 ">
       <div class="relative w-full min-w-[200px]">
           <textarea
             class="peer h-full min-h-[250px] w-full resize-none rounded-[7px] border border-black  px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
            placeholder=" ">
          </textarea>
            <label
               class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
               Message
            </label>
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


      </div>
    </div>
    </div>
    
  )
}

export default Broadcast