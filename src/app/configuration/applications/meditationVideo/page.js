"use client"

import React, { useState } from 'react'
import NavLink from '../../navlink/navlink'
import NavLinkApp from '../NavlinkApp/navlinkApp'
import { useNavbarTextStore } from '@/app/state/navbar-state'
import { BsImage } from "react-icons/bs";
import Playlist from '@/app/components/configuration/playlist/Playlist'
import AddVideoPopUp from '@/app/components/configuration/playlist/AddVideoPopUp'
import axios from 'axios';
import { toast } from "react-hot-toast";

function MeditationVideo() {
   
    const [addVideoPopUp , setAddVideoPopUp] = useState(false);
    const [playlistData, setPlaylistData] = useState({
        playlistHeading: "",
        playlistImage:""
    });

    console.log(playlistData);

    const setNavbarText = useNavbarTextStore((state) => state.setNavbarText);
	setNavbarText("Configuration parameters");

    const handlePlaylistDataChange = (e) => {
        const { name, value } = e.target;
        setPlaylistData(prevState => ({
          ...prevState,
          [name]: value
        }));
      };

      const handlePlaylistImageChange = (e) => {
        const file = e.target.files[0];
        setPlaylistData({
            ...playlistData,
            playlistImage: file,
        });
    };


    const handleAddPlaylist = async (e) => {
        e.preventDefault();

        
        console.log('Submitting playlist data:', playlistData); // Log the form data before submission

        const form = new FormData();
        form.append('playList_heading', playlistData.playlistHeading);
        form.append('playList_image', playlistData.playlistImage);
        form.append('category', playlistData.playlistHeading);
        

        if(playlistData.playlistHeading && playlistData.playlistImage ) {
                console.log(form);
            try {
                const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/superadmin/add-video`, form);
                console.log(response);
                toast.success('Playlist created successfully');
                // Clear form fields after successful submission
                setPlaylistData({
                    playlistHeading: '',
                    playlistImage: null,
                });

            } catch (error) {
                console.error('Error creating playlist:', error);
                toast.error('Error while creating playlist.');
            }

        } else {
            toast("Please enter playlist heading and image.");
        }
    };




  return (
    <div className="w-full h-[85vh] px-7 overflow-y-auto ">
      <div className="w-[60%] flex items-center justify-between ">
        <NavLink />
      </div>
      <div className='w-[80%]'>
        <NavLinkApp />
      </div>
      <div className='w-full h-[85%] mt-4 p-4 bg-white rounded-[8px] shadow drop-shadow-md'>
          
          <div className='w-full h-[20%] bg-[#E1E2EB] rounded-md '>
              
                <p className='text-black font-medium px-2 pt-1'>Create Playlist Heading</p>
                  
                 <div className='w-full flex'>
                   <div className='w-[80%] h-full pt-4 flex'>
                      <input
                       className='w-[300px] h-10 ms-8 p-2 rounded border-[1px] border-black'
                       name='playlistHeading'
                       value={playlistData.playlistHeading}
                       placeholder='Playlist Heading'
                       type='text'
                       onChange={handlePlaylistDataChange}
                      />

                      <label htmlFor="playlistImage"
                            className='w-[200px] h-10 ms-8'
                      >
                        <input 
                            id='playlistImage'
                            type="file" 
                            className="hidden" 
                            accept="image/*" 
                            onChange={handlePlaylistImageChange}
                        />
                      
                            <span className='w-[200px] h-10 bg-[#495F85] text-white flex justify-center items-center rounded-2xl hover:bg-[#495f85d1]'>
                                <BsImage className='me-3'/> Upload Image
                            </span>
                      </label>

                        <span className={`text-gray-400  flex items-center ps-2 ${playlistData.playlistImage ? 'text-gray-800' : ''}`}>
                            { playlistData.playlistImage ? playlistData.playlistImage.name : 'Select an image'}
                         </span>
                    
                      
                   </div>
                       <div className= 'w-[20%] h-full'>
                         <button 
                          className='w-[150px] h-12 ms-8 mt-2 bg-[#6EA5FF] text-white rounded-2xl hover:scale-105 hover:bg-[#629bf7]'
                          onClick={(e) => {
                            handleAddPlaylist(e);
                          }}
                         >
                           + Add Playlist
                         </button>
                      </div>
                 </div>
             

              <Playlist setAddVideoPopUp ={setAddVideoPopUp}/>
          </div>


      </div>
      { addVideoPopUp  &&  <AddVideoPopUp setAddVideoPopUp={setAddVideoPopUp} />    }

    </div>
  )
}

export default MeditationVideo