"use client";
import React from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import Select from "react-select";

function AddZoomMeet({ setIsAddZoomMeet }) {
  return (
    <div className="w-screen h-screen p-5 flex flex-col justify-center items-center absolute top-0 left-0 bg-[#000000d2] backdrop-blur-[1px]">
      <div className="w-[95%] sm:w-[480px] h-[544px] bg-white">
        <div className="w-full h-[72px] bg-[#005DB8] text-white flex items-center px-10 relative">
          <button
            className="w-8 h-8 absolute top-4 right-4 hover:scale-110 text-4xl text-white"
            onClick={() => setIsAddZoomMeet(false)} // Close the AddZoomMeet on click
          >
            <IoCloseCircleOutline />
          </button>
          <p className="text-xl font-semibold">ADD SUPPORT</p>
        </div>
        <div className="w-full h-[472px] px-10 py-8 flex flex-col justify-between">
          <select
            name="languages"
            id=""
            className="w-full h-10 px-2 bg-[#E0E2EC] text-black border-[1px] border-[#74777F] rounded-[8px] placeholder:text-[#44474E]"

            //  value={formData.languages}
            //  onChange={handleChange}
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
          <div className="w-full h-10  flex justify-around">
            <input
              name="zoomdatefrom"
              className="w-1/2 h-full px-2 me-5 bg-[#E0E2EC] text-black border-[1px] border-[#74777F] rounded-[8px] placeholder:text-[#44474E] "
              // value={formData.zoomdatefrom}
              // onChange={handleChange}
              placeholder="Date From"
              // type={!isFocusedDateFrom ? "text" : "date"}
              // onFocus={() => setIsFocusedDateFrom(true)}
              // onBlur={() => setIsFocusedDateFrom(false)}
            />
            <input
              name="zoomdateto"
              className="w-1/2 h-full px-2 bg-[#E0E2EC] text-black border-[1px] border-[#74777F] rounded-[8px] placeholder:text-[#44474E] "
              // value={formData.zoomdateto}
              // onChange={handleChange}
              placeholder=" Date To"
              // type={!isFocusedDateTo ? "text" : "date"}
              // onFocus={() => setIsFocusedDateTo(true)}
              // onBlur={() => setIsFocusedDateTo(false)}
            />
          </div>

          <div className="w-full h-10  flex justify-around">
            <input
              name="zoomStartTime"
              className="w-1/2 h-full px-2 me-5 bg-[#E0E2EC] text-black border-[1px] border-[#74777F] rounded-[8px] placeholder:text-[#44474E] "
              placeholder="From"
              // type={!isFocusedZoomFrom ? "text" : "time"}
              // onFocus={() => setIsFocusedZoomFrom(true)}
              // onBlur={() => setIsFocusedZoomFrom(false)}
              // value={formData.zoomStartTime}
              // onChange={handleChange}
            />
            <input
              name="zoomStopTime"
              className="w-1/2 h-full px-2 bg-[#E0E2EC] text-black border-[1px] border-[#74777F] rounded-[8px] placeholder:text-[#44474E] "
              placeholder="To"
              // type={!isFocusedZoomTo ? "text" : "time"}
              // onFocus={() => setIsFocusedZoomTo(true)}
              // onBlur={() => setIsFocusedZoomTo(false)}
              // value={formData.zoomStopTime}
              // onChange={handleChange}
            />
          </div>
          <div className="w-full h-10  bg-[#E0E2EC] text-black border-[1px] border-[#74777F] rounded-[8px] placeholder:text-[#44474E]">
            <Select
              isMulti
              name="daysOfWeek"
              className="basic-multi-select"
              classNamePrefix="Select days"
              placeholder="Select Days"
              styles={{
                container: (provided) => ({
                  ...provided,
                  width: "100%", // Full width
                  height: "100%", // Full height
                }),
                control: (provided) => ({
                  ...provided,
                  width: "100%", // Full width
                  height: "100%", // Full height
                  minHeight: "unset", // Allow full height usage
                  backgroundColor: "#E0E2EC", // Match background color
                  border: "1px solid #74777F", // Match border color
                  borderRadius: "8px", // Match border radius
                }),
                valueContainer: (provided) => ({
                  ...provided,
                  height: "100%", // Full height
                  display: "flex",
                  alignItems: "center", // Vertically align text
                  paddingLeft: "8px", // Match padding
                }),
                singleValue: (provided) => ({
                  ...provided,
                  color: "#44474E", // Match text color
                }),
                placeholder: (provided) => ({
                  ...provided,
                  color: "#44474E", // Match placeholder text color
                }),
                multiValue: (provided) => ({
                  ...provided,
                  backgroundColor: "#E0E2EC", // Match background for selected values
                  border: "1px solid #74777F", // Match border for selected values
                }),
                indicatorsContainer: (provided) => ({
                  ...provided,
                  height: "100%", // Match height of dropdown arrow
                }),
                dropdownIndicator: (provided) => ({
                  ...provided,
                  color: "#44474E", // Dropdown arrow color
                }),
              }}
            />
          </div>

          <input
            name="zoomLink"
            className="w-full h-10 px-2  bg-[#E0E2EC] text-black border-[1px] border-[#74777F] rounded-[8px] placeholder:text-[#44474E]"
            placeholder="Zoom URL"
            type="text"
            // value={formData.zoomLink}
            // onChange={handleChange}
          />

          <button className="w-full sm:w-[400px] h-14 bg-[#005cb8e6] text-white rounded-xl hover:bg-[#005DB8]">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddZoomMeet;
