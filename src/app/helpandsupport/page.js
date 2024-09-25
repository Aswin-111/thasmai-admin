"use client";

import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavbarTextStore } from "../state/navbar-state";
import { MdModeEditOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import AddDepartment from "../components/helpandsupport/AddDepartment";


export default function Users() {
  const [developers, setDevelepors] = useState([]);
  console.log(developers);

  const setNavbarText = useNavbarTextStore((state) => state.setNavbarText);
  setNavbarText("Help & Support");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/superadmin/support`
        );
        // console.log(response);
        setDevelepors(response.data.support);
      } catch (error) {
        console.error("Error fetching data:", error);
        toast.error("Error fetching data.");
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full h-[85vh] md:px-7 overflow-y-auto">
      <div className="w-full h-[6%] mb-2">Navbar</div>
      <div className="w-full min-h-[90vh] md:min-h-0 md:h-[90%] p-4  drop-shadow-xl bg-white flex flex-col md:flex-row overflow-y-scroll">
        <div className="w-[60%] h-full ">
          <button className="w-[213px] h-14 bg-[#165DB2] text-white text-base font-medium rounded-lg">
            + ADD NEW CONTACT
          </button>
          <div className="w-full py-2 px-4 mt-2 flex  justify-between items-center bg-[#F9F9FF]">
            <h1 className="text-[#424752] font-bold text-base">
              Help & Support
            </h1>
            <input
              type="search"
              className="w-[274px] h-10 px-4 bg-[#EDEDF5] border-[1px] border-[#727783] rounded-lg outline-none "
              placeholder="Search"
            />
          </div>

          <table className="table rounded-3xl">
            <thead className="w-full h-[56px] bg-gradient-to-b from-[#858B9C] to-[#2E3036]  text-white sticky top-0 gap-x-20 text-[0.9rem]">
              <tr className="rounded-3xl">
                <th className="text-center w-[10%]">Sl No.</th>
                <th className="text-center w-[25%]">Department</th>
                <th className="text-center w-[25%]">Name</th>
                <th className="text-center w-[20%]">Contact</th>
                <th className="text-center w-[15%]">Action</th>
              </tr>
            </thead>
            <tbody className="my-10">
              <tr className="border-[1px] border-b-[#C2C6D4]">
                <td className="text-center w-[10%]">1</td>
                <td className="text-center w-[20%]">Accounting</td>
                <td className="text-center w-[20%]">Tom</td>
                <td className="text-center w-[20%]">5689909876</td>
                <td className="  ">
                  <span className="flex justify-between text-xl">
                    <MdDelete className="text-[#BA1A1A]" />
                    <MdModeEditOutline className="text-[#304364]" />
                  </span>
                </td>
              </tr>

              <tr className="border-[1px] border-b-[#C2C6D4]">
                <td className="text-center w-[10%]">1</td>
                <td className="text-center w-[20%]">Accounting</td>
                <td className="text-center w-[20%]">Tom</td>
                <td className="text-center w-[20%]">5689909876</td>
                <td className="  ">
                  <span className="flex justify-between text-xl">
                    <MdDelete className="text-[#BA1A1A]" />
                    <MdModeEditOutline className="text-[#304364]" />
                  </span>
                </td>
              </tr>
              <tr className="border-[1px] border-b-[#C2C6D4]">
                <td className="text-center w-[10%]">1</td>
                <td className="text-center w-[20%]">Accounting</td>
                <td className="text-center w-[20%]">Tom</td>
                <td className="text-center w-[20%]">5689909876</td>
                <td className="  ">
                  <span className="flex justify-between text-xl">
                    <MdDelete className="text-[#BA1A1A]" />
                    <MdModeEditOutline className="text-[#304364]" />
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="w-[40%] h-full mx-4 border-[1px] border-[#727783] rounded-lg drop-shadow-sm shadow-md bg-[#F9F9FF]">
			<div className="flex justify-between items-center mx-2 mt-6">
				<input 
				  type="text"
				  className="w-[310px] h-10 px-4 bg-[#E0E2EC] border-[1px] border-[#74777F] rounded-lg outline-none placeholder:text-[#44474E]"
				  placeholder="New Department"

				/>
				<button className= "w-[104px] h-10 bg-[#165DB2] text-white rounded-lg">+ ADD</button>
			</div>

      <div className="mx-2">
        
      <table className="table rounded-3xl bg-white  mt-14">
            <thead className="w-full h-[56px] bg-gradient-to-b from-[#858B9C] to-[#2E3036]  text-white sticky top-0 gap-x-20 text-[0.9rem]">
              <tr className="rounded-3xl">
                <th className="text-center w-[]">Sl No.</th>
                <th className="text-center w-[]">Department</th>
                <th className="text-center w-[]">Action</th>
              </tr>
            </thead>
            <tbody className="my-10">
              <tr className="border-[1px] border-b-[#C2C6D4]">
                <td className="text-center w-[]">1</td>
                <td className="text-center w-[]">Accounting</td>
                <td className="  ">
                  <span className="flex justify-between text-xl">
                    <MdDelete className="text-[#BA1A1A]" />
                    <MdModeEditOutline className="text-[#304364]" />
                  </span>
                </td>
              </tr>
              <tr className="border-[1px] border-b-[#C2C6D4]">
                <td className="text-center w-[]">1</td>
                <td className="text-center w-[]">Accounting</td>
                <td className="  ">
                  <span className="flex justify-between text-xl">
                    <MdDelete className="text-[#BA1A1A]" />
                    <MdModeEditOutline className="text-[#304364]" />
                  </span>
                </td>
              </tr>
              <tr className="border-[1px] border-b-[#C2C6D4]">
                <td className="text-center w-[]">1</td>
                <td className="text-center w-[]">Accounting</td>
                <td className="  ">
                  <span className="flex justify-between text-xl">
                    <MdDelete className="text-[#BA1A1A]" />
                    <MdModeEditOutline className="text-[#304364]" />
                  </span>
                </td>
              </tr>
              <tr className="border-[1px] border-b-[#C2C6D4]">
                <td className="text-center w-[]">1</td>
                <td className="text-center w-[]">Accounting</td>
                <td className="  ">
                  <span className="flex justify-between text-xl">
                    <MdDelete className="text-[#BA1A1A]" />
                    <MdModeEditOutline className="text-[#304364]" />
                  </span>
                </td>
              </tr>

              
            </tbody>
          </table>
      </div>
			
		</div>
      </div>

      <AddDepartment/>
    </div>
  );
}
