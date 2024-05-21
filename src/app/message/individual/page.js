"use client"
import React, { useState } from 'react';
import NavLink from '../navlink/navlink';
import IndividualMessageTable from '@/app/components/message/individual/IndividualMessageTable';
import IndividualReplyPopup from '@/app/components/message/individual/IndividualReplyPopup';

function IndividualMessaging() {

  const [isViewChat, setIsViewChat] = useState(false);

  return (
    <div className="w-full h-[85vh] px-7 overflow-y-auto">
      <div className="w-full sticky top-0">
        <NavLink />
      </div>
      <div className='w-full h-[90%] mt-5 p-4 bg-white rounded shadow drop-shadow-md'>
        <div className='w-full h-[15%]'>

        </div>
        <div className='w-full h-[85%]'>
          <IndividualMessageTable setIsViewChat={setIsViewChat} />
        </div>
      </div>


      {
        isViewChat && <IndividualReplyPopup setIsViewChat={setIsViewChat} />
      }
    </div>
  )
}

export default IndividualMessaging