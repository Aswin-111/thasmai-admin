"use client"
import React, { useState, useEffect } from 'react';
import { MdModeEditOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { toast }  from 'react-hot-toast';
import axios from 'axios';


function HelpAndSupportTable(props) {

    useEffect(() => {
        const fetchData = async () => {
    
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/superadmin/listContacts`);
                console.log(response.data.list);
                props.setContactList(response.data.list);
            } catch (error) {
                console.error('Error fetching data:', error);
                  toast.error("Error fetching data.");
            }
        };
    
        fetchData();
    }, [props.isContactTableRenderToggle]);

    
  return (
      <>
        <table className="table rounded-3xl">
            <thead className="w-full h-[56px] bg-gradient-to-b from-[#858B9C] to-[#2E3036] text-white sticky top-0 gap-x-20 text-[0.9rem]">
              <tr className="rounded-3xl">
                <th className="text-center w-[10%]">Sl No.</th>
                <th className="text-center w-[25%]">Department</th>
                <th className="text-center w-[25%]">Name</th>
                <th className="text-center w-[20%]">Contact</th>
                <th className="text-center w-[15%]">Action</th>
              </tr>
            </thead>
            <tbody className="my-10">

              {
                props.contactList.map((contact, index) => {
                  return (
                    <tr key={index} className="border-[1px] border-b-[#C2C6D4]">
                      <td className="text-center w-[10%]">{ index+1 }</td>
                      <td className="text-center w-[20%]">{contact.departments}</td>
                      <td className="text-center w-[20%]">{contact.name}</td>
                      <td className="text-center w-[20%]">{contact.contact}</td>
                      <td className="">
                        <span className="flex justify-between text-xl">
                          <MdDelete 
                            className="text-[#BA1A1A] hover:scale-125 cursor-pointer"
                            onClick={() => {
                              props.setSelectedContactId(contact.id);
                              props.setIsDeleteContactOpen(true);
                            }} 
                          />
                          <MdModeEditOutline 
                            className="text-[#304364] hover:scale-125 cursor-pointer"
                            onClick={() => {
                              props.setSelectedContactId(contact.id);
                              props.setIsEditContactOpen(true);
                            }} 
                          />
                        </span>
                      </td>
                    </tr>
                  )
                })
              }
              


            </tbody>
          </table>
        </>
  )
}

export default HelpAndSupportTable;
