"use client"


import React, { useEffect, useRef } from "react";
import { useOperationsFilterStore } from './filterState'
import { useStore } from "../../state/navbar-state";
import NavLink from '../navlink/navlink';
import FilterChip from "./filterChips";
import Image from "next/image";
import OperationsTable from "@/app/components/datatable/operationsTable";
import data from './data.json'

function Operations() {

  const fieldRef = useRef()
  const operatorRef = useRef()
  const dataRef = useRef()

  const filterState =  useOperationsFilterStore((state) => {
    return state;
  });
  

  useEffect(()=>{console.log('hi',filterState.fieldValue);filterState.setFieldText(filterState.fieldValue)},[])
  useEffect(()=>{filterState.setFieldText(filterState.fieldValue)},[filterState.fieldValue])  

  const setNavbarText = useStore((state) => state.setNavbarText);
  setNavbarText("Financial");

  function handleFieldChange(e) {
    const value = e.target.value;
    // console.log(value, filterState);
    filterState.setFieldText(value);
  }


  return (
    <div className="px-7 h-full">
      <div className="flex items-center justify-start ">
        <NavLink />
        {/* <CouponLabel /> */}
      </div>
      <div className='w-full h-[50%] flex  justify-center items-center'>Website under development</div>
      
    </div>
  )
}

export default Operations
