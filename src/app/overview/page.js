"use client";

import React from 'react';
import Link from "next/link";
import ColumnChart from "@/app/components/overview/ColumnChart/ColumnChart"
import PieChart from "@/app/components/overview/PieChart/PieChart"
import CarouselDefault from "@/app/components/overview/CarouselDefault/CarouselDefault"
import MeditationCount from "@/app/components/overview/MeditationCount/MeditationCount"
import { useNavbarTextStore } from '../state/navbar-state';
import MeditationNotes from '../components/overview/MeditationNotes/MeditationNotes';


export default function Overview() {

    const setNavbarText = useNavbarTextStore((state) => state.setNavbarText);
	setNavbarText("Overview");
    

    return (
        
        <div className="w-full h-[85vh] pb-1 overflow-y-auto">
            <div className="w-full md:h-[40%] mb-6 md:m-0 md:flex justify-around">
                <div className="w-full md:w-[47%] mb-2 md:m-0 h-full">
                    <ColumnChart />
                </div>
                <div className="w-full md:w-[47%] mb-2 md:m-0 h-full">
                    <PieChart />
                </div>
            </div>

            <div className="w-full md:h-[25%] mb-6 md:m-0 md:flex justify-around items-center">
                <MeditationCount />
            </div>

            <div className="w-full md:h-[35%] mb-4 md:m-0 md:flex justify-around">


                <div className="w-full h-[250px] md:w-[54%] md:h-full ps-4 pe-1 py-2 mb-4 md:m-0 bg-white rounded-xl shadow-md  overflow-y-auto md:overflow-hidden">
                    <h3 className="h-[15%] font-bold text-black">Meditation Notes</h3>
                    <div className="comments w-[100%] h-[85%] rounded overflow-y-auto pe-1 text-white">
                        <MeditationNotes />
                    </div>
                </div>


                <div className="w-full h-[250px] md:w-[40%] md:h-full bg-white rounded-xl shadow-md py-2 ps-4 pe-3">
                    <Link href="/events/events" className="w-full">
                        <h3 className="h-[15%] font-bold text-black">Recent Messages</h3>
                    </Link>
                    <CarouselDefault />
                    
                </div>

            </div>
        </div>
    )
}