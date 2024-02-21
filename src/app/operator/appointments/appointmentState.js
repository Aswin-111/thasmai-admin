"use client";
import { create } from "zustand";

export const useAppointmentStore = create((set) => ({


    appointments : [],
  setAppointments : (data) => set(state =>{console.log(data); return ({ appointments : data })}),

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

   
}))