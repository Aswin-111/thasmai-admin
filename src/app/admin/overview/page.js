"use client"

import React from 'react';
import Link from "next/link";
import ColumnChart from "@/app/components/overview/ColumnChart/ColumnChart"
import PieChart from "@/app/components/overview/PieChart/PieChart"
import CarouselDefault from "@/app/components/overview/CarouselDefault/CarouselDefault"
import MeditationCount from "@/app/components/overview/MeditationCount/MeditationCount"
import { useNavbarTextStore } from '../state/navbar-state';


export default function Overview(){

    const setNavbarText = useNavbarTextStore((state) => state.setNavbarText);
	setNavbarText("Overview");
    

    return (
        <div className="w-full h-[85vh] pb-1">
            <div className="w-full h-[40%] flex justify-around">
                <div className="w-[47%] h-full">
                    <ColumnChart/>
                </div>
                <div className="w-[47%] h-full">
                    <PieChart/>
                </div>
            </div>

            <div className="w-full h-[25%] flex justify-around items-center">
                <MeditationCount />
            </div>

            <div className="w-[100%] h-[35%] flex justify-around">


                <div className="w-[54%] h-[100%] bg-white rounded-xl shadow-md ps-4 pe-1 py-2">
                    <h3 className="h-[15%] font-bold">Comments</h3>
                    <div className="comments w-[100%] h-[85%] rounded overflow-y-auto pe-1 text-white">

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

                    </div>
                </div>


                <div className="w-[40%] h-[100%] bg-white rounded-xl shadow-md py-2 ps-4 pe-3">
                    <Link href="/users/eventdetails" className="w-full">
                        <h3 className="h-[15%] font-bold">Recent Event List</h3>
                    </Link>
                    <CarouselDefault/>
                    
                </div>

            </div>
        </div>
    )
}