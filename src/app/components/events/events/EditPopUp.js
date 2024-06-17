 "use client"
 
 import React, { useState, useEffect} from 'react'
 import { BiCloudUpload } from "react-icons/bi";
 import axios from 'axios'
 import { toast } from 'react-hot-toast'
 import moment from 'moment';
 import useImageCompressor from '../../ImageCompression/useImageCompressor';




 function EditPopUp(props) {

  const [eventData, setEventData] = useState({});

  const [edittedData, setEdittedData] = useState({});

  const [previewImage, setPreviewImage] = useState();

  const { compressImage } = useImageCompressor();


  console.log(edittedData);




  useEffect(() => {
    const fetchData = async () => {
        try {

          const eventId = props.eventId;

          const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/superadmin/get-event/${eventId}`);
        //   console.log(response.data.user);
          setEventData(response.data.user);
          setEdittedData(response.data.user);

        } catch (error) {
          console.error("Error fetching data:", error);
        }
  
    };
  
    fetchData();

    return () => {
        return;
    }

}, []);


function handleChange(e) {
  const { name, value } = e.target;
  setEdittedData((prev) => ({
      ...prev,
      [name]: value,
    }));
}

async function uploadImage(event) {
    const file = event.target.files[0];

    // const compressedFile = await compressImage(file);

    // if (compressedFile) {
    //   console.log(compressedFile);
    //   setEdittedData((prevValue) => ({
    //     ...prevValue,
    //     image: compressedFile
    //   }));
    //   setPreviewImage(URL.createObjectURL(compressedFile));
    // }

    setEdittedData((prevValue) => ({
      ...prevValue,
      image: file
    }));
    setPreviewImage(URL.createObjectURL(file));



}



const handleSubmit = async (e) => {
    e.preventDefault();

    const eventId = props.eventId;
    // console.log((eventId));

    const { event_name, event_description, priority, place, date, image, event_time } = edittedData;
         
    // formatting time to 15:00 Am format and append to form
    var time = moment(event_time, "HH:mm");
    const formattedTime = time.format('h:mm a');

    
      const formData = new FormData();
      
      formData.append('event_name', event_name);
      formData.append('event_description', event_description);
      formData.append('priority', priority);
      formData.append('place', place);
      formData.append('date', date);
      formData.append('image', image);
      formData.append('event_time', formattedTime);

    //   console.log(formData);

      try {
        const response = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/superadmin/update-event/${eventId}`, formData);
        console.log(response);
        // alert(response.data.message);
        toast.success(response.data.message);
        props.setFilterToggle(prevValue => !prevValue);
        
      } catch (error) {
        console.error('Error uploading event:', error);
        // Log the error to the console
        // alert("Error uploading event. Please try again."); // Optionally, inform the user about the error
        toast.error("Error uploading event. Please try again.");

      }
    
  };




   return (

     <div className="w-[100vw] h-[100vh] bg-[#000000af] absolute left-0 top-0 flex justify-center items-center">
         <div className='w-[1000px] h-[550px] bg-[#D9D9D9] rounded'>
             <div className='w-full h-[10%] px-10 bg-[#5799fd] rounded-t flex items-center justify-between'>
                 <h1 className='text-xl text-white font-bold'>Edit Event</h1>
                 <button 
                     className='w-8 h-8 rounded bg-blue-600 text-white hover:bg-white hover:text-black'
                     onClick={() => {
                         props.setEditEvent(false);
                     }}
                 >X</button>
             </div>
             <div className='w-full h-[90%] px-20 rounded-b'>
                 <div className='w-full h-[15%] flex justify-between items-center'>
                     <input 
                         className='w-[45%] h-[40px] px-2 bg-white text-black rounded border-[2px] border-[rgba(0,0,0,0.36)]' 
                         type="text"
                         placeholder = "Name"
                         name="event_name" 
                         value={edittedData.event_name}
                         id=""
                         onChange={handleChange} 
                     />
                     <div className='w-[45%] h-full flex justify-between items-center'>
                         <input 
                             className='w-[45%] h-[40px] px-1 bg-white text-black rounded border-[2px] border-[rgba(0,0,0,0.36)]' 
                             type="date"
                             placeholder="Date"
                             min= {new Date()} 
                             name="date"
                             value={edittedData.date}
                             id="" 
                            onChange={handleChange} 
                         />
                         <input 
                             className='w-[45%] h-[40px] px-1 bg-white text-black rounded border-[2px] border-[rgba(0,0,0,0.36)]' 
                             type="time"
                             // placeholder="Time"
                             name="event_time"
                             value={edittedData.event_time}
                             min="00:00"
                             max="12:00"
                             id=""
                            onChange={handleChange} 
                         />
                     </div>
                 
                 </div>
                 <div className='w-full h-[15%] flex justify-between items-center'>
                     <input 
                         className='w-[45%] h-[40px] px-2 bg-white text-black rounded border-[2px] border-[rgba(0,0,0,0.36)]' 
                         type="text"
                         placeholder="Location" 
                         name="place" 
                         value={edittedData.place}
                         id=""
                         onChange={handleChange} 

                     />
                     
                     <select
                         className='w-[45%] h-[40px] px-2 bg-white text-black rounded border-[2px] border-[rgba(0,0,0,0.36)]' 
                         name="priority"
                         value= {edittedData.priority}
                         id=""
                         onChange={handleChange} 
                     > 
                         <option value="" disabled selected>Priority</option>
                         <option value="Low">Low</option>
                         <option value="Medium">Medium</option>
                         <option value="High">High</option>
                     </select>
                 </div>
                 <div className='w-full h-[30%]'>
                     <textarea
                         className="w-full h-full p-2 bg-white text-black rounded border-[2px] border-[rgba(0,0,0,0.36)]" 
                         name="event_description" 
                         value= {edittedData.event_description}
                         id="" 
                         cols="30" 
                         rows="10"
                         placeholder="Description"
                         onChange={handleChange} 
                     ></textarea>
                 </div>
                 <div className='w-full h-[40%] py-6 rounded relative'>
                  
                         <div className="w-[35%] h-full rounded flex justify-center items-center bg-[#999393]">
                           <label className="w-full h-full relative" htmlFor="eventImage">
                             { 
                                 edittedData.image ? 
                                 (  
                                    <>
                                        <img className="w-full h-full object-cover" src = { previewImage ? previewImage : edittedData.image } alt="event image"/>
                                        <span className="w-full h-full hover:text-lg hover:text-white  hover:bg-[#00000048] absolute top-0 left-0 flex flex-col items-center justify-center"  role="button"><BiCloudUpload className='text-3xl'/> Edit Image</span>
                                    </>
                                 ) : (
                                    <span className="w-full h-full text-lg flex flex-col items-center justify-center"  role="button"><BiCloudUpload className='text-3xl'/> Upload Image</span>
                                 )
                             }
                             <input 
                                 type="file" 
                                 className="" 
                                 id="eventImage" 
                                 name="image" 
                                 value= ""
                                 accept="image/*" 
                                 onChange={ uploadImage }
                                 hidden
                             />  
                            </label> 
                         </div>
                  
                      
                    <button
                        className="w-[120px] h-[40px] mb-6 bg-[#ff8710] hover:bg-[#ff8810d1] text-white font-semibold rounded absolute bottom-0 right-0"
                        onClick={handleSubmit}
                    >
                        Save
                    </button>
                 </div>
             </div>
         </div>
     </div>
   )
 }
 export default EditPopUp