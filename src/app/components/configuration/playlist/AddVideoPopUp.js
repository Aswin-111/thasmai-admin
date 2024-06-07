"use client";

import React, { useState } from 'react'
import axios from 'axios';
import { toast } from 'react-hot-toast';

function AddVideoPopUp(props) {


    const [videoData, setVideoData] = useState({
        videoHeading: '',
        videoLink: ''
    });

    const handleVideoDataChange = (e) => {
        const { name, value } = e.target;
        setVideoData(prevState => ({
          ...prevState,
          [name]: value
        }));
    };
    

    //handleAddPlaylist
    const handleAddVideo = async (e) => {
        e.preventDefault();
                
        const { head, image } = props.selectedData;
        const { videoHeading, videoLink } = videoData;

        
        
        // console.log('Submitting playlist form:',form);

        if(videoHeading && videoLink) {

                const formData = new FormData();
                formData.append('playList_heading', head);
                formData.append('playList_image', image);
                formData.append('Video_heading', videoHeading)
                formData.append('videoLink', videoLink);

                // form.append('category', playlistHeading);
                console.log(formData);

            try {

                const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/superadmin/add-video`, formData);
                console.log(response);
                // Clear form fields after successful submission
                props.setSelectedData({
                    playlistHeading: '',
                    playlistImage: '',
                });
                setVideoData({
                    videoHeading: '',
                    videoLink: '',
                });
                toast.success('Video added successfully');

            } catch (error) {
                console.error('Error adding video:', error);
                toast.error('Error while adding video.');
            }

        } else {
            toast("Please enter video heading and link.");
        }
    };






  return (
    
        <div className="w-[100vw] h-[100vh] bg-[#000000af] absolute left-0 top-0 flex justify-center items-center">
 
            <button
                className="w-8 h-8 m-0 p-0 absolute top-6 right-6 hover:scale-110 text-5xl text-white rotate-45"
                onClick={() => {
                    props.setAddVideoPopUp(false);
                }}
            
            >+</button>
            <div className='w-[800px] h-[400px] absolute  bg-[#C5D8FF] rounded-xl'>
                 <p className='text-[#00193B] font-medium text-2xl p-4'>Add Video</p>
                 <input
                  className='w-[80%] h-16 mx-16 mt-4 ps-5 rounded-md border-[1px] bg-white border-black placeholder:text-xl placeholder:text-[#44474E]'
                  placeholder='Video Heading' 
                  type='text'
                  name='videoHeading'
                  value={videoData.videoHeading}
                  onChange={handleVideoDataChange}
                 />
                 <input
                  className='w-[80%] h-16 mx-16 mt-10 ps-5 rounded-md border-[1px] bg-white border-black placeholder:text-xl placeholder:text-[#44474E]'
                  placeholder='Video URL' 
                  type='text'
                  name='videoLink'
                  value={videoData.videoLink}
                  onChange={handleVideoDataChange}
                 />
                 <div className='w-[80%] mt-16 mx-16 flex justify-end'>
                    <button 
                        className='w-[320px] h-[60px]  bg-[#00193B] text-white text-xl rounded-2xl hover:bg-[#00193bcc]'
                        onClick={handleAddVideo}
                    >
                        + Add Video
                    </button>
                 </div>
            </div>

        </div>
  )
}

export default AddVideoPopUp