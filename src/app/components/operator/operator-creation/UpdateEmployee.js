import React, {useState, useEffect} from 'react';


function UpdateEmployee(props) {

    const [ employeeData, setEmployeeData ] = useState(
        { 
          name:"",
          role : "",
          username : "",
          location : "",
          dateOfJoining : "",
          password : "",
          confirmPassword : ""
        }
    );

    function handleOnChange(event) {
        const { name, value } = event.target
        setEmployeeData(prevValue => (
          {
            ...prevValue , 
            [name] : value
          }
        ))
       }


  return (
    <div className="w-screen h-screen p-5 flex flex-col justify-center items-center absolute top-0 left-0 bg-[#000000d2] backdrop-blur-[1px]">
        <button
                className="w-8 h-8 m-0 p-0 absolute top-6 right-6 hover:scale-110 text-5xl text-white rotate-45"
                onClick={() => {
                    props.setUpdateEmployee(false);
                }}
        >+</button>

        <div className="w-[30%] h-[95%] bg-white">
            <div className='w-full h-[10%] bg-[#005DB8]  text-white flex items-center px-10'>
                <p className='text-xl'>Update Employee</p>
            </div>
            <div className='w-full h-[90%] px-10 py-8 flex flex-col justify-between'>
                <input 
                  type='text'
                  placeholder='Employee Name'
                  className='w-full h-10 ps-2 bg-[#E0E2EC] text-black border-2 border-[#74777F] rounded-[8px]'
                  name="name"
                  value={employeeData.name}
                  onChange={handleOnChange}
                />
                <select
                 className='w-full h-10 ps-2 bg-[#E0E2EC] text-black border-2 border-[#74777F] rounded-[8px]'
                 name="role"
                 value={employeeData.role}
                 onChange={handleOnChange}

                 >
                    <option  value="" selected disabled>Role</option>
                    <option>Supervisor</option>
                    <option>Operator</option>
                </select>
                {/* <select className='w-full h-10 ps-2 bg-[#E0E2EC] text-black border-2 border-[#74777F] rounded-[8px]' >
                    <option value="" selected disabled>*Supervisor(only if the role is operator)</option>
                    <option>Supervisor</option>
                    <option>Operator</option>
                </select> */}
                <input 
                  type='email'
                  placeholder='Email as username'
                  className='w-full h-10 ps-2 bg-[#E0E2EC] text-black border-2 border-[#74777F] rounded-[8px] focus:bg-slate-50'
                  name="username"
                  value={employeeData.username}
                  onChange={handleOnChange}

                />
                 {/* <input 
                  type='text'
                  placeholder='Employee Id'
                  className='w-full h-10 ps-2 bg-[#E0E2EC] text-black border-2 border-[#74777F] rounded-[8px]'
                  name="username"
                  value={employeeData.username}
                  onChange={handleOnChange}
                /> */}
                 <input 
                  type='text'
                  placeholder='Location'
                  className='w-full h-10 ps-2 bg-[#E0E2EC] text-black border-2 border-[#74777F] rounded-[8px]'
                  name="location"
                  value={employeeData.location}
                  onChange={handleOnChange}
                />
                 <input 
                  type='date'
                  placeholder='Date of Joining'
                  className='w-full h-10 ps-2 bg-[#E0E2EC] text-black border-2 border-[#74777F] rounded-[8px]'
                  name="dateOfJoining"
                  value={employeeData.dateOfJoining}
                  onChange={handleOnChange}
                />
                 <input 
                  type='text'
                  placeholder='Password'
                  className='w-full h-10 ps-2 bg-[#E0E2EC] text-black border-2 border-[#74777F] rounded-[8px]'
                  name="password"
                  value={employeeData.password}
                  onChange={handleOnChange}
                />
                 <input 
                  type='Password'
                  placeholder='Confirm Password'
                  className='w-full h-10 ps-2 bg-[#E0E2EC] text-black border-2 border-[#74777F] rounded-[8px]'
                  name="confirmPassword"
                  value={employeeData.confirmPassword}
                  onChange={handleOnChange}
                />
                <button
                 className='w-full h-12 bg-[#005cb8e6] text-white rounded-xl hover:bg-[#005DB8]'
                //  onClick = {handleCreateEmployee}
                >
                     Add Employee
                </button>

            </div>

        </div>
        
    </div>
  )
}

export default UpdateEmployee