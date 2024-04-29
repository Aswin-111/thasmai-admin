"use client"
import React, {useState, useEffect } from 'react';
import axios from 'axios';
import { Carousel } from "@material-tailwind/react";
 
export default function CarouselDefault() {

  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
    
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/listevents`);
            console.log(response.data.events);
            setEvents(response.data.events);

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    fetchData();
}, []);




  return (
    <Carousel className="rounded w-full h-[85%]" autoplay="true" autoplayDelay="3000" loop="true"
      settings={{
        navigationType: "buttons", // Ensure that navigationType is set to "buttons"
        prevButtonClasses: "bg-blue-500 text-white", // Customize the style of the previous button
        nextButtonClasses: "bg-green-500 text-white", // Customize the style of the next button
      }}
 
    >

        {
            events[0] && 
			events.map((i, index) => {
				return (
					<div className="h-full flex justify-center items-center bg-blue-gray-100">
            			<div className="w-[35%] h-full flex justify-end items-center pe-5">
                			<img className="w-32 h-32 object-cover" src={i.image} alt="" />
            			</div>
            			<div className="w-[65%] h-full text-left text-[14px] font-bold flex flex-col justify-center">
                			<div className="flex justify-start h-8">
                    			<h3>{i.event_name}</h3>
                    			<div className="ms-5 bg-[#FF7979] text-white font-normal rounded-xl w-20 h-5 flex justify-center items-center">{i.priority}</div>
                			</div>
                			<p className="text-[#A4A4A4]">{i.event_description.substring(0,30) + "..." }</p>
                			<p className="text-[#1A69A6]">{i.place}</p>
            			</div>
        			</div>
				)
			})
        }

        

        
        {/* <div className="h-full flex justify-center items-center bg-blue-gray-100">
            <div className="w-[35%] h-full flex justify-end items-center pe-5">
                <img className="w-[60%]" src="../images/happy-new-year-1.png" alt="" />
            </div>
            <div className="w-[65%] h-full text-left text-[14px] font-bold flex flex-col justify-center">
                <div className="flex justify-start h-8">
                    <h3>New Year Program</h3>
                    <div className="ms-5 bg-[#FF7979] text-white font-normal rounded-xl w-20 h-5 flex justify-center items-center">High</div>
                </div>
                <p className="text-[#A4A4A4]">New year program is held at trust</p>
                <p className="text-[#1A69A6]">Bangalore, Thasmai Trust</p>
            </div>
        </div>


        <div className="h-full flex justify-center items-center bg-blue-gray-100">
            <div className="w-[35%] h-full flex justify-end items-center pe-5">
                <img className="w-[60%]" src="../morning-meditators.png" alt="" />
            </div>
            <div className="w-[65%] h-full text-left text-[14px] font-bold flex flex-col justify-center">
                <div className="flex justify-start h-8">
                    <h3>New Year Program</h3>
                    <div className="ms-5 bg-[#FF7979] text-white font-normal rounded-xl w-20 h-5 flex justify-center items-center">High</div>
                </div>
                <p className="text-[#A4A4A4]">New year program is held at trust</p>
                <p className="text-[#1A69A6]">Bangalore, Thasmai Trust</p>
            </div>
        </div> */}

        
       







      {/* <img
        src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
        alt="image 3"
        className="h-full w-full object-cover"
      /> */}

    </Carousel>
  );
}