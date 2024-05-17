"use client"
 
import React, { useState, useEffect} from 'react'
import { BiCloudUpload } from "react-icons/bi";
import axios from 'axios'
import { toast } from 'react-hot-toast'



function EditBlogPopUp(props) {

 const [blogData, setBlogData] = useState({});

 const [edittedData, setEdittedData] = useState({});

 const [previewImage, setPreviewImage] = useState();

 console.log(edittedData);


 useEffect(() => {
   const fetchData = async () => {
       try {

         const blogId = props.blogId;

         const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/superadmin/get-blog/${blogId}`);
       //   console.log(response.data.user);
         setBlogData(response.data.user);
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

function uploadImage(event) {
   const file = event.target.files[0];

   setEdittedData((prevValue) => ({
     ...prevValue,
     image: file
   }));

   setPreviewImage(URL.createObjectURL(file));

}



const handleSubmit = async (e) => {
   e.preventDefault();

   const blogId = props.blogId;
   // console.log((eventId));

   const { blog_name, blog_description, image } = edittedData;

   
     const formData = new FormData();
     formData.append('blog_name', blog_name);
     formData.append('blog_description', blog_description);
     formData.append('image', image);

   //   console.log(formData);

     try {
       const response = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/superadmin/update-blog/${blogId}`, formData);
       console.log(response);
       // alert(response.data.message);
       toast.success(response.data.message);
       window.location = "/admin/message/blogs";
       
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
                <h1 className='text-xl text-white font-bold'>Edit Blog</h1>
                <button 
                    className='w-8 h-8 rounded bg-blue-600 text-white hover:bg-white hover:text-black'
                    onClick={() => {
                        props.setEditBlog(false);
                    }}
                >X</button>
            </div>
            <div className='w-full h-[90%] px-20 rounded-b'>
                <div className='w-full h-[15%] flex justify-between items-center'>
                    <input 
                        className='w-full h-[40px] px-2 bg-white text-black rounded border-[2px] border-[rgba(0,0,0,0.36)]' 
                        type="text"
                        placeholder = "Blog Name"
                        name="blog_name" 
                        value={edittedData.blog_name}
                        id=""
                        onChange={handleChange} 
                    />
                
                </div>

                <div className='w-full h-[40%]'>
                    <textarea
                        className="w-full h-full p-2 bg-white text-black rounded border-[2px] border-[rgba(0,0,0,0.36)]" 
                        name="blog_description" 
                        value= {edittedData.blog_description}
                        id="" 
                        cols="30" 
                        rows="10"
                        placeholder="Description"
                        onChange={handleChange} 
                    ></textarea>
                </div>
                <div className='w-full h-[40%] py-6 rounded relative'>
                 
                        <div className="w-[35%] h-full rounded flex justify-center items-center bg-[#999393]">
                          <label className="w-full h-full relative" htmlFor="blogImage">
                            { 
                                edittedData.image ? 
                                (  
                                   <>
                                       <img className="w-full h-full object-cover" src = { previewImage ? previewImage : edittedData.image } alt="Blog image"/>
                                       <span className="w-full h-full hover:text-lg hover:text-white  hover:bg-[#00000048] absolute top-0 left-0 flex flex-col items-center justify-center"  role="button"><BiCloudUpload className='text-3xl'/> Edit Image</span>
                                   </>
                                ) : (
                                   <span className="w-full h-full text-lg flex flex-col items-center justify-center"  role="button"><BiCloudUpload className='text-3xl'/> Upload Image</span>
                                )
                            }
                            <input 
                                type="file" 
                                className="" 
                                id="blogImage" 
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
export default EditBlogPopUp