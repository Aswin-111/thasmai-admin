"use client";


import { create } from "zustand";

export const useAppointmentFeedbackStore = create((set) => ({


  appointments : [],
  setAppointments : (data) => set(state =>{return ({ appointments : data })}),

  

  id: "",
  setId :   (newId) => set((state) =>{ return ({ id:newId })}),

  appointmentViewToggle: false,
  setAppointmentViewToggle : (toggle, appointment) => set((state) => { 
    let view_id = "";
    if(appointment) {
      view_id = appointment
    } else {
      view_id = state.id
    } 
    return ({  appointmentViewToggle : toggle, id : view_id})}),



    feedbackViewToggle: false,
    setFeedbackViewToggle : (toggle, feedback) => set((state) => { 
      let feedback_id = "";
      if(feedback) {
        feedback_id = feedback
      } else {
        feedback_id = state.id
      } 
      return ({  feedbackViewToggle : toggle, id : feedback_id})}),

   
}))