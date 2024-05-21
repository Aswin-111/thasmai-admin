"use client";
import { create } from "zustand";

export const useFilterStore = create((set) => ({
  FieldValues :["DOJ","Name","Id","Coupon","Phone","Email","Status"],
  dojOperator: [
    "Today",
    "Current week",
    "Current month",
    "Last two months",
    "Between",
  ],
  stringOperator: ["Starts With", "Equals to"],
  integerOperator: [">", "<", "="],

  statusOperator: ["Active", "Inactive", "Blocked"],

  FieldValue : "",
    setFieldText : (text) => set(state => ({FieldValue:text})),

    filters : [],
    setFilter : (filter)  => set(state =>  { return ({filters:[...state.filters,filter]} ) } ),
    deleteFilter : (index) => set(state => { const fil = [...state.filters]; fil.splice(index,1); return ({filters:[...fil]})}) 
}))
