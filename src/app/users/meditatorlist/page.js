"use client";
import { useNavbarTextStore } from "../../state/navbar-state";
import { useFilterStore } from "./filterstate";
import NavLink from "../navlink/navlink";
import CouponLabel from "@/app/components/couponlabel/couponLabel";

import { useEffect, useRef } from "react";




function MeditatorList() {

  const fieldRef = useRef()
  const operatorRef = useRef()
  const dataRef = useRef()

  const filterState = useFilterStore((state) => {
    return state;
  });




  

useEffect(()=>{console.log('hi',filterState.FieldValue);filterState.setFieldText(filterState.FieldValue)},[])
useEffect(()=>{filterState.setFieldText(filterState.FieldValue)},[filterState.FieldValue])  

  const setNavbarText = useNavbarTextStore((state) => state.setNavbarText);
  
  setNavbarText("Users");
  
  function handleFieldChange(e) {
    const value = e.target.value;
    // console.log(value, filterState);
    filterState.setFieldText(value);
  }

  
  return (
    <div className="px-7 h-full">
      <div className="flex items-center justify-between ">
        <NavLink />
        <CouponLabel />
      </div>

      
      <div className='w-full h-[50%] flex  justify-center items-center'>Website under development</div>
      
    </div>
  );
}

export default MeditatorList;
