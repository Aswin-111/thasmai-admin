"use client";

import React from 'react';

function MeditationNotes() {
    return (
        <>
            <div className="w-full min-h-[80px] bg-red-400 mb-2 rounded flex">
                <div className="w-[15%] flex justify-center items-center">
                    <div className="rounded-full bg-[#A2BCFF] w-[50px] h-[50px]">
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

            <div className="w-full min-h-[80px] bg-blue-400 mb-2 rounded flex">
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
            <div className="w-full h-[80px] bg-red-400 mb-2 rounded">y</div>

        </>
    )
}

export default MeditationNotes