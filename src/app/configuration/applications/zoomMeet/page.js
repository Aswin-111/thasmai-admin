// "use client"
// import { useEffect, useState } from 'react'
// import React from 'react'
// import NavLink from '../../navlink/navlink'
// import NavLinkApp from '../NavlinkApp/navlinkApp'
// import { BsImage } from "react-icons/bs";
// import ZoomMeet from '@/app/components/configTable/ZoomMeet'

// function page() {

//   const [isFocusedZoomFrom, setIsFocusedZoomFrom] = useState(false);
//   const [isFocusedZoomTo, setIsFocusedZoomTo] = useState(false);

//   return (

//       <div className="w-full h-[85vh] px-7 overflow-y-auto">
//         <div className="w-[60%] flex items-center justify-between ">
//           <NavLink />
//         </div>
//         <div className='w-[80%]'>
//           <NavLinkApp />
//         </div>
//         <div className='w-full h-[85%] mt-4 p-4 bg-white rounded-[8px] shadow drop-shadow-md overflow-y-auto'>
//         <div className='w-full h-[20%] bg-[#E1E2EB] rounded-md '>

//               <p className='text-black font-medium px-2 pt-1'>Create Playlist Heading</p>

//                <div className='w-full h-full flex'>
//                  <div className='w-[80%] h-full pt-4 flex'>
//                   <input
//                      className='w-40 h-10 ms-8 p-2 rounded border-[1px] border-black'
//                       type='date'
//                    />

//                     <input
//                      className='w-32 h-10 ms-8 p-2 rounded border-[1px] border-black'
//                       placeholder='From'
//                       type={!isFocusedZoomFrom ? 'text' : 'time'}
//                       onFocus={() => setIsFocusedZoomFrom(true)}
//                       onBlur={() => setIsFocusedZoomFrom(false)}
//                    />
//                    <input
//                      className='w-32 h-10 ms-8 p-2 rounded border-[1px] border-black'
//                       placeholder='To'
//                       type={!isFocusedZoomTo ? 'text' : 'time'}
//                       onFocus={() => setIsFocusedZoomTo(true)}
//                       onBlur={() => setIsFocusedZoomTo(false)}
//                    />

//                     <input
//                      className='w-[300px] h-10 ms-8 p-2 rounded border-[1px] border-black'
//                      placeholder='Zoom URL'
//                      type='text'
//                     />

//                  </div>
//                      <div className= 'w-[20%] h-full'>
//                        <button className='w-[150px] h-12 ms-8 mt-2 bg-[#6EA5FF] text-white rounded-2xl hover:scale-105 hover:bg-[#629bf7]'>
//                          + Add Meeting
//                        </button>
//                     </div>
//                </div>
//            </div>
//            <ZoomMeet/>
//         </div>
//       </div>

//   )
// }

// export default page
"use client";
import { useEffect, useState } from "react";
import React from "react";
import NavLink from "../../navlink/navlink";
import NavLinkApp from "../NavlinkApp/navlinkApp";
import { BsImage } from "react-icons/bs";
import ZoomMeet from "@/app/components/configuration/zoomMeet/ZoomMeet";
import axios from "axios";
import { toast } from "react-hot-toast";
import DeleteZoomMeetPopUp from "@/app/components/configuration/zoomMeet/DeleteZoomMeetPopUp";
import Select from "react-select";

const daysOptions = [
  { value: "Sunday", label: "Sunday" },
  { value: "Monday", label: "Monday" },
  { value: "Tuesday", label: "Tuesday" },
  { value: "Wednesday", label: "Wednesday" },
  { value: "Thursday", label: "Thursday" },
  { value: "Friday", label: "Friday" },
  { value: "Saturday", label: "Saturday" },
];

function Page() {
  const [zoomMeetId, setZoomMeetId] = useState("");
  const [isZoomMeetPopUp, setIsZoomMeetPopUp] = useState(false);
  const [formData, setFormData] = useState({
    zoomdatefrom: "",
    zoomdateto: "",
    zoomStartTime: "",
    zoomStopTime: "",
    zoomLink: "",
    languages: "",
    daysOfWeek: [],
  });

  console.log(formData);
  

  const [isFocusedZoomFrom, setIsFocusedZoomFrom] = useState(false);

  const [isFocusedZoomTo, setIsFocusedZoomTo] = useState(false);
  const [isFocusedDateFrom, setIsFocusedDateFrom] = useState(false);
  const [isFocusedDateTo, setIsFocusedDateTo] = useState(false);

  const [zoomTableRenderToggle, setZoomTableRenderToggle] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleDaysOfWeekChange = (selectedDays) => {
    setFormData((prevState) => ({
      ...prevState,
      daysOfWeek: selectedDays,
    }));
  };

  const convertTo12HourFormat = (time24) => {
    const [hours, minutes] = time24.split(":");
    const period = hours >= 12 ? "PM" : "AM";
    const hours12 = hours % 12 || 12;
    return `${hours12}:${minutes} ${period}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if any required field is empty
    if (
      !formData.zoomdatefrom ||
      !formData.zoomdateto ||
      !formData.zoomStartTime ||
      !formData.zoomStopTime ||
      !formData.zoomLink ||
      !formData.languages ||
      !formData.daysOfWeek[0]
    ) {
      toast.error("Please fill all the required fields.");
      return;
    }

    // Format the date to YYYY-MM-DD
    const formattedData = {
      ...formData,
      zoomdatefrom: new Date(formData.zoomdatefrom).toISOString().split("T")[0],
      zoomdateto: new Date(formData.zoomdateto).toISOString().split("T")[0],
      zoomStartTime: convertTo12HourFormat(formData.zoomStartTime),
      zoomStopTime: convertTo12HourFormat(formData.zoomStopTime),
    };

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/user/zoom`,
        formattedData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setFormData({
        zoomdatefrom: "",
        zoomdateto: "",
        zoomStartTime: "",
        zoomStopTime: "",
        zoomLink: "",
        languages: "",
        daysOfWeek: [],
      });
      setZoomTableRenderToggle((prevValue) => !prevValue);

      toast.success(response.data.message);
      console.log(response);
    } catch (error) {
      toast.error("Failed to add meeting. Please try again.");
      console.error("Error:", error);
    }
  };

  return (
    <div className="w-full h-[85vh] px-7 overflow-y-auto">
      <div className="w-full flex items-center justify-between ">
        <NavLink />
      </div>
      <div className="w-full">
        <NavLinkApp />
      </div>
      <div className="w-full h-[85%] mt-4 p-4 bg-white rounded-[8px] shadow drop-shadow-md overflow-y-auto">
        <div className="w-full bg-[#E1E2EB] rounded-md">
          <p className="text-black font-medium px-2 pt-1">
            Create Zoom Meet Link
          </p>
          <div className="w-full h-full">
            <div className="w-full h-full pt-4 flex flex-wrap gap-2">
              <select
                name="languages"
                id=""
                className="w-48 h-10 ms-4 p-2 rounded border-[1px] bg-white text-black border-black"
                value={formData.languages}
                onChange={handleChange}
              >
                <option value="" selected>
                  Select language
                </option>
                <option value="English">English</option>
                <option value="Hindi">Hindi</option>
                <option value="Kannada">Kannada</option>
                <option value="Malayalam">Malayalam</option>
                <option value="Tamil">Tamil</option>
                <option value="Telugu">Telugu</option>
              </select>
              <input
                name="zoomdatefrom"
                className="w-40 h-10 ms-4 p-2 rounded border-[1px] bg-white text-black border-black"
                value={formData.zoomdatefrom}
                onChange={handleChange}
                placeholder="Date From"
                type={!isFocusedDateFrom ? "text" : "date"}
                onFocus={() => setIsFocusedDateFrom(true)}
                onBlur={() => setIsFocusedDateFrom(false)}
              />
              <input
                name="zoomdateto"
                className="w-40 h-10 ms-4 p-2 rounded border-[1px] bg-white text-black border-black"
                value={formData.zoomdateto}
                onChange={handleChange}
                placeholder=" Date To"
                type={!isFocusedDateTo ? "text" : "date"}
                onFocus={() => setIsFocusedDateTo(true)}
                onBlur={() => setIsFocusedDateTo(false)}
              />
              <input
                name="zoomStartTime"
                className="w-32 h-10 ms-4 p-2 rounded border-[1px] bg-white text-black border-black"
                placeholder="From"
                type={!isFocusedZoomFrom ? "text" : "time"}
                onFocus={() => setIsFocusedZoomFrom(true)}
                onBlur={() => setIsFocusedZoomFrom(false)}
                value={formData.zoomStartTime}
                onChange={handleChange}
              />
              <input
                name="zoomStopTime"
                className="w-32 h-10 ms-4 p-2 rounded border-[1px] bg-white text-black border-black"
                placeholder="To"
                type={!isFocusedZoomTo ? "text" : "time"}
                onFocus={() => setIsFocusedZoomTo(true)}
                onBlur={() => setIsFocusedZoomTo(false)}
                value={formData.zoomStopTime}
                onChange={handleChange}
              />
              <input
                name="zoomLink"
                className="w-[400px] h-10 ms-4 p-2 rounded border-[1px] bg-white text-black  border-black"
                placeholder="Zoom URL"
                type="text"
                value={formData.zoomLink}
                onChange={handleChange}
              />
              
            </div>
            <div className="w-full h-full pe-6 pb-4 flex justify-between items-center">
            <div className="min-w-[400px] h-10 ms-4 rounded border-[1px] bg-white text-black border-black">
                <Select
                  isMulti
                  name="daysOfWeek"
                  options={daysOptions}
                  className="basic-multi-select"
                  classNamePrefix="Select days"
                  placeholder="Select Days"
                  value={formData.daysOfWeek.map(day => ({ value: day, label: day }))} // Reset value after form submit
                  onChange={(selectedOptions) => {
                    // console.log(selectedOptions);
                    // If you only want the day values and not the whole object
                    const selectedDays = selectedOptions ? selectedOptions.map(option => option.value) : [];
                    console.log('Selected days:', selectedDays);
                    handleDaysOfWeekChange(selectedDays);
                  }}
                  styles={{
                    container: (provided) => ({
                      ...provided,
                      width: "100%", // Make sure the container takes full width
                      height: "100%", // Full height of the parent
                    }),
                    control: (provided) => ({
                      ...provided,
                      width: "100%", // Ensure the control (input box) is 100% width
                      height: "100%", // Ensure the control is 100% height
                      minHeight: "unset", // Override minHeight to allow full height usage
                    }),
                    valueContainer: (provided) => ({
                      ...provided,
                      height: "100%", // Ensure the value container matches the control height
                      display: "flex",
                      alignItems: "center", // Vertically align the selected value
                    }),
                    indicatorsContainer: (provided) => ({
                      ...provided,
                      height: "100%", // Ensures the dropdown arrow matches the control height
                    }),
                  }}
                />
              </div>
              <button
                onClick={handleSubmit}
                className="w-[150px] h-12 ms-8 mt-2 bg-[#6EA5FF] text-white rounded-2xl hover:scale-105 hover:bg-[#629bf7]"
              >
                + Add Meeting
              </button>
            </div>
          </div>
        </div>
        <ZoomMeet
          setZoomMeetId={setZoomMeetId}
          zoomTableRenderToggle={zoomTableRenderToggle}
          setIsZoomMeetPopUp={setIsZoomMeetPopUp}
        />
      </div>
      {isZoomMeetPopUp && (
        <DeleteZoomMeetPopUp
          zoomMeetId={zoomMeetId}
          setIsZoomMeetPopUp={setIsZoomMeetPopUp}
          zoomTableRenderToggle={zoomTableRenderToggle}
          setZoomTableRenderToggle={setZoomTableRenderToggle}
        />
      )}
    </div>
  );
}

export default Page;
