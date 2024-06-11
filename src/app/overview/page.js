"use client";

import React, { useState } from 'react';
import Link from "next/link";
import ColumnChart from "@/app/components/overview/ColumnChart/ColumnChart"
import CarouselDefault from "@/app/components/overview/CarouselDefault/CarouselDefault"
import MeditationCount from "@/app/components/overview/MeditationCount/MeditationCount"
import { useNavbarTextStore } from '../state/navbar-state';
import MeditationNotes from '../components/overview/MeditationNotes/MeditationNotes';
import IncomePieChart from '../components/overview/PieChart/IncomePieChart';
import ExpensePieChart from '../components/overview/PieChart/ExpensePieChart';
import { BsToggle2Off,BsToggle2On } from "react-icons/bs";


export default function Overview() {

    const [pieChartToggle , setPieChartToggle] =useState(false)

    const setNavbarText = useNavbarTextStore((state) => state.setNavbarText);
	setNavbarText("Overview");
    

    return (
        
        <div className="w-full h-[85vh] pb-1 overflow-y-auto">
            <div className="w-full md:h-[40%] mb-6 md:m-0 md:flex justify-around">
                <div className="w-full md:w-[47%] mb-2 md:m-0 h-[35vh] md:h-full">
                    <ColumnChart />
                </div>
                <div className="w-full md:w-[47%]  mb-2 md:m-0 h-full relative">
                    <button className='w-10 h-6 text-3xl text-blue-gray-900 hover:text-blue-600 absolute top-[7px] right-5 z-50'
                        onClick={() => {
                            setPieChartToggle(prevValue => !prevValue);
                        }}
                    >
                        {
                            !pieChartToggle ? <BsToggle2Off/> : <BsToggle2On/>
                        }
                    </button>
                    {
                        !pieChartToggle ?  <IncomePieChart/> :  <ExpensePieChart/>
                    }
                </div>
            </div>

            <div className="w-full md:h-[25%] mb-6 md:m-0 md:flex justify-around items-center">
                <MeditationCount />
            </div>

            <div className="w-full md:h-[35%] mb-4 md:m-0 md:flex justify-around">


                <div className="w-full h-[250px] md:w-[54%] md:h-full ps-4 pe-1 py-2 mb-4 md:m-0 bg-white rounded-xl shadow-md  overflow-y-auto md:overflow-hidden">
                    <h3 className="h-[15%] font-bold text-black">Meditation Notes</h3>
                    <div className="comments w-[100%] h-[85%] rounded overflow-y-auto p-1 bg-blue-gray-50 text-white">
                        <MeditationNotes />
                    </div>
                </div>


                <div className="w-full h-[250px] md:w-[40%] md:h-full bg-white rounded-xl shadow-md py-2 ps-4 pe-3">
                    <Link href="/events/events" className="w-full">
                        <h3 className="h-[15%] font-bold text-black">Recent Events</h3>
                    </Link>
                    <CarouselDefault />
                    
                </div>

            </div>
        </div>
    )
}