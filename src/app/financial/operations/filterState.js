"use client"

import { create } from "zustand";

export const useOperationsFilterStore = create((set) => ({

  	fieldValues : ["DOJ", "First Name", "Second Name", "User Id", "Donation Paid So Far", "Latest Donation", "Available coupon", "Level", "Node", "Status"],

  	dojOperator : ["equal to", "between"],

  	stringOperator : ["starts with", "equal to"],

  	integerOperator : ["greater than", "less than", "equal to", "not equal to"],

  	statusOperator : ["Active", "Inactive", "Blocked"],



  	fieldValue : "",
  	setFieldValue : (text) => set(state => ({
  	    fieldValue : text
  	})),

  	operatorValue : "",
  	setOperatorValue : (text) => set(state => ({
  	    operatorValue : text
  	})),

  	filters : [],
  	setFilter : (filter)  => set(state =>  { 
  	    return ({
  	        filters : [...state.filters, filter]
  	    }) 
  	}),
  	deleteFilter : (index) => set(state => { 
  	    const fil = [...state.filters]; 
  	    fil.splice(index,1); 
  	    return ({
  	        filters : [...fil]
  	    })
  	}),

  	expenseData : [],
  	setExpenseData : (data) => set(state => {
  	  //console.log(data);
  	    return ({
			expenseData : [...data]
  	  }) 
  	}),

}))






