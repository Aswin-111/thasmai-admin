"use client"

import React, { useEffect, useRef } from "react";
import { useDistributionFilterStore } from './filterState'
import NavLink from '../navlink/navlink';
import { useNavbarTextStore } from "../../state/navbar-state";
import FilterChip from "./filterChips";
import DistributionTable from "@/app/components/datatable/distributionTable";
import data from "./data.json"
import Image from "next/image";


function Distribution() {
  
  const fieldRef = useRef()
  const operatorRef = useRef()
  const dataRef = useRef()

  const filterState = useDistributionFilterStore((state) => {
    return state;
  });
  

  useEffect(()=>{console.log('hi',filterState.fieldValue);filterState.setFieldText(filterState.fieldValue)},[])
  useEffect(()=>{filterState.setFieldText(filterState.fieldValue)},[filterState.fieldValue])  

  const setNavbarText = useNavbarTextStore((state) => state.setNavbarText);
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

export default Distribution