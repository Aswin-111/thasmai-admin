// import React from 'react'
// import { TbEdit } from "react-icons/tb";
// import { RiDeleteBin6Fill } from "react-icons/ri";

// function EventDetailsTable() {
//   return (
//     <div className="overflow-scroll max-h-full px-3">
   
//       <table className="table rounded-3xl">
//         <thead
//           className="bg-[#5799FD] text-white sticky top-0 gap-x-20 text-[0.9rem]"
//           style={{ borderRadius: "11px" }}
//         >
//           <tr className="rounded-3xl">
//             <th className="text-center">Event Name</th>
//             <th className="text-center">Date</th>
//             <th className="text-center">Location</th>
//             <th className="text-center">Time</th>
//             <th className="text-center">Priority</th>
//             <th className="text-center"></th>
//             <th className="text-center"></th>
//             <th className="text-center"></th>

//           </tr>
//         </thead>
//         <tbody className="my-10">
//           <tr>
//             <td className="text-center font-semibold">Mahanavami</td>
//             <td className="text-center">kjhg</td>
//             <td className="text-center">jhjgf</td>
//             <td className="text-center">koiuhgy</td>
//             <td className="text-center">jhgf</td>
//             <td className="text-center r">
//               <button>
//               < TbEdit className='text-2xl text-blue-600'/>
//               </button>
//               </td>
//             <td className="text-center ">
//               <button>
//               <RiDeleteBin6Fill className='text-2xl text-red-600'/>
//               </button>
//               </td>
//             <td className="text-center">
//               <button className='w-28 h-8 bg-[#5799FD] text-white rounded-xl'>View Details</button>
//             </td>

//           </tr>
//         </tbody>
//       </table>
   
//   </div>
//   )
// }

// export default EventDetailsTable





// "use client"

// import React, { useState, useEffect } from 'react';
// import { TbEdit } from "react-icons/tb";
// import { RiDeleteBin6Fill } from "react-icons/ri";

// function EventDetailsTable() {
//   const [events, setEvents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch('http://192.168.1.34:5000/api/v1/superadmin/events')
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Failed to fetch events');
//         }
//         return response.json();
//       })
//       .then(data => {
//         // Ensure that data has events array
//         if (Array.isArray(data.events)) {
//           setEvents(data.events);
//         } else {
//           throw new Error('Events data is not an array');
//         }
//       })
//       .catch(error => setError(error.message))
//       .finally(() => setLoading(false)); // Ensure loading state is updated even if there's an error
//   }, []);

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div className="overflow-scroll max-h-full px-3">
//       <table className="table rounded-3xl">
//         <thead className="bg-[#5799FD] text-white sticky top-0 gap-x-20 text-[0.9rem]" style={{ borderRadius: "11px" }}>
//           <tr className="rounded-3xl">
//             <th className="text-center">Event Name</th>
//             <th className="text-center">Date</th>
//             <th className="text-center">Location</th>
//             <th className="text-center">Time</th>
//             <th className="text-center">Priority</th>
//             <th className="text-center"></th>
//             <th className="text-center"></th>
//             <th className="text-center"></th>
//           </tr>
//         </thead>
//         <tbody className="my-10">
//           {events.map(event => (
//             <tr key={event.id}>
//               <td className="text-center font-semibold">{event.event_name}</td>
//               <td className="text-center">{new Date(event.date).toLocaleDateString()}</td>
//               <td className="text-center">{event.place}</td>
//               <td className="text-center">{new Date(event.date).toLocaleTimeString()}</td>
//               <td className="text-center">{event.priority}</td>
//               <td className="text-center">
//                 <button>
//                   <TbEdit className='text-2xl text-blue-600'/>
//                 </button>
//               </td>
//               <td className="text-center">
//                 <button>
//                   <RiDeleteBin6Fill className='text-2xl text-red-600'/>
//                 </button>
//               </td>
//               <td className="text-center">
//                 <button className='w-28 h-8 bg-[#5799FD] text-white rounded-xl'>View Details</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default EventDetailsTable;















import React, { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast'
import { TbEdit } from "react-icons/tb";
import { RiDeleteBin6Fill } from "react-icons/ri";

function EventDetailsTable(props) {

  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/superadmin/events`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch events');
        }
        return response.json();
      })
      .then(data => {
        // Ensure that data has events array
        if (Array.isArray(data.events)) {
          setEvents(data.events);
        } else {
          throw new Error('Events data is not an array');
        }
      })
      .catch(error => setError(error.message))
      .finally(() => setLoading(false)); // Ensure loading state is updated even if there's an error

      return () => {
        return;
      }

  }, []);

  const handleDelete = async (eventId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this event?");
    if (confirmDelete) {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/superAdmin/delete-events/${eventId}`, {
          method: "DELETE"
        });
        if (response.ok) {
          // Remove the deleted event from the events array
          setEvents(prevEvents => prevEvents.filter(event => event.id !== eventId));
        } else {
          throw new Error("Failed to delete event");
        }
      } catch (error) {
        setError(error.message);
      }
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }



  

  
  return (
  
    <div className="overflow-scroll max-h-full rounded-[8px]">
      <table className="table rounded-3xl">
        <thead className="bg-[#5799FD] text-white sticky top-0 gap-x-20 text-[0.9rem]" style={{ borderRadius: "11px" }}>
          <tr className="rounded-3xl">
            <th className="text-center">Event Name</th>
            <th className="text-center">Date</th>
            <th className="text-center">Location</th>
            <th className="text-center">Time</th>
            <th className="text-center">Priority</th>
            <th className="text-center"></th>
            <th className="text-center"></th>
            <th className="text-center"></th>
          </tr>
        </thead>
        <tbody className="my-10">
          {events.map(event => (
            <tr key={event.id}>
              <td 
                title="View event details"
                className="text-center font-semibold cursor-pointer hover:text-[#5799FD] hover:scale-105"
                onClick={() => {
                  props.setEventId(event.id);
                  props.setIsViewEvent(true);
                }}
              >
                {event.event_name}
              </td>
              <td className="text-center">{event.date}</td>
              <td className="text-center">{event.place}</td>
              <td className="text-center">{event.event_time}</td>
              <td className="text-center">{event.priority}</td>
              <td className="text-center" title="Edit event">
                <button onClick={() => {
                  props.setEventId(event.id);
                  props.setEditEvent(true);
                }}>
                  <TbEdit className='text-2xl text-blue-600 hover:bg-slate-200 hover:scale-110'/>
                </button>
              </td>
              <td className="text-center" title="Delete event">
                <button onClick={() => handleDelete(event.id)}>
                  <RiDeleteBin6Fill className='text-2xl text-red-600 hover:text-red-700 hover:bg-slate-200 hover:scale-110'/>
                </button>
              </td>
              <td className="text-center">
                <button 
                  title="View event details"
                  className='w-28 h-8 bg-[#5799FD] text-white rounded-xl hover:scale-105'
                  onClick={() => {
                    props.setEventId(event.id);
                    props.setIsViewEvent(true);
                  }}
                >
                  View Details
                </button>
              </td>
            </tr>

          ))}
        </tbody>
      </table>
    </div>

    



  );
}

export default EventDetailsTable;

