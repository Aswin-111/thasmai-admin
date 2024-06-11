"use client";

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';

function MeditationNotes() {

    const [impNotes, setImpNotes] = useState([]);
    console.log(impNotes);

    useEffect(() => {

        const fetchData = async () => {
            try {
    
              const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/superadmin/impNotes`);
            //   console.log(response,"imp message");
              setImpNotes(response.data);
    
            } catch (error) {
              console.error("Error fetching data:", error);
            }
      
        };
      
        fetchData();
    
        return () => {
            return;
        }
    
    }, []);

    return (
        <>
            {
                impNotes[0] ? (

                    impNotes.map((note, index) => {
                        return(
                            <div className={(index % 2 === 0) ? "w-full min-h-[80px] bg-red-400 mb-2 rounded flex" : "w-full min-h-[80px] bg-blue-400 mb-2 rounded flex"}>
                        <div className="w-full">
                    <div className="flex justify-between ps-2 pt-2">
                        <div className="text-[14px] p-1 font-medium text-blue-700 bg-blue-gray-100 rounded">{note.userName}</div>
                        <div className="pe-2 text-[10px] font-normal">{note.messageTime}</div>
                    </div>
                    <div className="p-2">
                        <p className="text-xs">{ note.message }</p>
                    </div>
                </div>
            </div>

                        );
                    })
                    
                ) : (
                    <div className='w-full h-full text-white bg-blue-400 flex justify-center items-center'>
                        No priority messages to display
                    </div>
                )
            }


            
            

            {/* <div className="w-full min-h-[80px] bg-blue-400 mb-2 rounded flex">
            <div className="w-[15%] flex justify-center items-center">
                <div className="rounded-full bg-[#caf8d5] w-[50px] h-[50px]">
                    <img className="w-full" src="" alt="" />   
                </div>
            </div>
            <div className="w-[85%]">
                <div className="flex justify-between ps-2 pt-2">
                    <div className="text-[14px] font-medium">Jeffin George</div>
                    <div className="pe-2 text-[10px] font-normal">19/01/2024</div>
                </div>
                <div className="p-2">
                    <p className="text-xs">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
            </div>
            </div>

            <div className="w-full h-[80px] bg-blue-400 mb-2 rounded">ABC</div>
            <div className="w-full h-[80px] bg-blue-400 mb-2 rounded">y</div>
            <div className="w-full h-[80px] bg-red-400 mb-2 rounded">y</div> */}

        </>
    )
}

export default MeditationNotes