"use client";
import { create } from "zustand";

export const useLoginStore = create((set) => ({


   

    isloggedin : false,
    setIsloggedin : (toggle) => set((state) => ( { 
  
      isloggedin : toggle 

    }) ), //setisloggedin
   
    role : "",
    setRole : (role) => set((state) => ( { 
  
      role : role 

    }) )

  }) ) //end
  

  


