"use client"

import React, { useState } from 'react'
import NavLink from '../navlink/navlink'
import CouponLabel from '@/app/components/couponlabel/couponLabel'
import { MdAddCircleOutline } from "react-icons/md";
import EventDetailsTable from '@/app/components/users/eventDetails/eventDetailsTable'
import AddEventPopUp from '@/app/components/users/eventDetails/AddEventPopUp'
import ViewEventPopUp from '@/app/components/users/eventDetails/ViewEventPopUp'
import EditPopUp from '@/app/components/users/eventDetails/EditPopUp'

function EventDetails() {

  const [addEventStatus, setAddEventStatus] = useState(false);

  const [eventId, setEventId] = useState(null);
  const [isViewEvent,setIsViewEvent] = useState(false);
  const [editEvent, setEditEvent] = useState(false);


  return (
   
    <div className="w-full h-[85vh] px-7 overflow-y-auto">
      <div className='flex items-center justify-between'>
        <NavLink />
        <button 
          className="w-[150px] h-[35px] bg-[#5799fd] hover:bg-[#5799fdd3] text-white rounded-[6px] text-[18px] font-semibold flex items-center justify-center hover:scale-105"
          onClick={() => {
            setAddEventStatus(true);
          }}
        >
          <MdAddCircleOutline  className="me-2  text-[28px]"/>
          Add Event</button>
      </div>

      <div className='w-full h-[90%] mt-5 bg-white rounded-[8px] shadow drop-shadow-md'>
        <EventDetailsTable 
          setEventId={setEventId} 
          setIsViewEvent={setIsViewEvent} 
          setEditEvent={setEditEvent} 
        />
      </div>

      {
        addEventStatus && <AddEventPopUp setAddEventStatus={ setAddEventStatus }/>
      }

      {
        isViewEvent && <ViewEventPopUp eventId={eventId} setIsViewEvent={setIsViewEvent} />
      }
      {
       editEvent && <EditPopUp eventId={eventId} setEditEvent={setEditEvent} />
      }

    </div>









  )
}

export default EventDetails