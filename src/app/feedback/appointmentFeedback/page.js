"use client"

import react from 'react'
import NavLink from '../navlink/navlink'
import AppointFeedbackTable from '@/app/components/feedback/AppointFeedbackTable'
import AppointmentView from '@/app/components/feedback/AppointmentView'
import FeedbackView from '@/app/components/feedback/FeedbackView'
import {useAppointmentFeedbackStore} from './appointFeedbackState.js'

function AppointmentFeedback() {

  const feedbackState = useAppointmentFeedbackStore((state) => {
    return state;
  });


  return (
    <div className="px-7 h-full ">
      <div className="w-[60%] flex items-center justify-between ">
        <NavLink />
      </div>
      <div className='w-full mt-10 h-[500px]  bg-white rounded-[8px] shadow drop-shadow-md overflow-scroll'>
        <AppointFeedbackTable />
       
      </div>

      {
        feedbackState.appointmentViewToggle && <AppointmentView />
      }

      {
        feedbackState.feedbackViewToggle && <FeedbackView />
      }


  </div>
  )
}

export default AppointmentFeedback