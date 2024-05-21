"use client";
import { create } from "zustand";

export const useAppointmentStore = create((set) => ({


    appointments : [],
  setAppointments : (data) => {

    console.log(data);
    set(state =>{return ({ appointments : data })})
    
},

  paymentToggle: false,
  setPaymentToggle : (toggle, appointment) => set((state) => { 
    let order_id = "";
    if(appointment) {
      order_id = appointment
    } else {
      order_id = state.id
    } 
    return ({paymentToggle : toggle, id : order_id})}),

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