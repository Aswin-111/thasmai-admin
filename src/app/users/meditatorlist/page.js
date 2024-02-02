"use client";
import { useStore } from "../../state/navbar-state";
import { useFilterStore } from "./filterstate";
import NavLink from "../navlink/navlink";
import CouponLabel from "@/app/components/couponlabel/couponLabel";
import DataTable from "@/app/components/datatable/datatable";

import data from "./data.json";
import { useEffect, useRef } from "react";
import DatePicker from "./datepicker";
import FilterChip from "./filterchips";



function MeditatorList() {

  const fieldRef = useRef()
  const operatorRef = useRef()
  const dataRef = useRef()

  const filterState = useFilterStore((state) => {
    return state;
  });




  
  



useEffect(()=>{console.log('hi',filterState.FieldValue);filterState.setFieldText(filterState.FieldValue)},[])
useEffect(()=>{filterState.setFieldText(filterState.FieldValue)},[filterState.FieldValue])  

  const setNavbarText = useStore((state) => state.setNavbarText);
  
  setNavbarText("Users");
  
  function handleFieldChange(e) {
    const value = e.target.value;
    // console.log(value, filterState);
    filterState.setFieldText(value);
  }

  
  return (
    <div className="px-7">
      <div className="flex items-center justify-between ">
        <NavLink />
        <CouponLabel />
      </div>

      <div className="mt-5 w-full flex justify-between bg-slate-100">

        <select ref = {fieldRef}
          className="px-5 h-10 focus:outline-none  rounded-xl shadow-lg bg-white text-black"
          onChange={(e) => {
            handleFieldChange(e);
          }}
          onLoad={(e) => {
            // handleFieldChange(e);
            
            
            console.log(filterState.FieldValues[0]);
            filterState.setFieldText(filterState.FieldValues[0])
          }}
          defaultValue={filterState.FieldValue} 
        >
          <option disabled selected>
            Choose field
          </option>
         {filterState.FieldValues.map((i,index)=>{
          return (
          <option key = {index} value = {i}>{i}</option>

          )
         })}
        </select>
        <select className=" px-5 h-10 focus:outline-none  rounded-xl shadow-lg bg-white  text-black " ref = {operatorRef}>
          <option disabled selected>
            Choose operator
          </option>
          {filterState.FieldValue === "DOJ" &&
            filterState.dojOperator.map((i, index) => {
              return (
                <option key={index} value={i} >
                  {i}
                </option>
              );
            })}

          {filterState.FieldValue === "Name" &&
            filterState.stringOperator.map((i, index) => {
              return (
                <option key={index} value={i}>
                  {i}
                </option>
              );
            })}

          {filterState.FieldValue === "Id" && (
            <option value="equalto">Equal to</option>
          )}
          {filterState.FieldValue === "Coupon" &&
            filterState.integerOperator.map((i, index) => {
              return (
                <option key={index} value={i}>
                  {i}
                </option>
              );
            })}
          {filterState.FieldValue === "Phone" && (
            <option value="equalto">Equal to</option>
          )}
          {filterState.FieldValue === "Email" &&
            filterState.stringOperator.map((i, index) => {
              return (
                <option key={index} value={i}>
                  {i}
                </option>
              );
            })}

          {filterState.FieldValue === "Status" &&
            filterState.statusOperator.map((i, index) => {
              return (
                <option key={index} value={i}>
                  {i}
                </option>
              );
            })}
        </select>
        <input
          type="text"
          placeholder="Value" ref = {dataRef}
          className={`${filterState.FieldValue === "DOJ" ||
          filterState.FieldValue === "Status" ?"placeholder:text-slate-400 h-10 text-center px-4  focus:outline-none  rounded-xl bg-[#EEEAEA] border-none text-slate-100":"placeholder:text-black h-10 text-center px-4  focus:outline-none  rounded-xl shadow-lg"}`}
          disabled={
            filterState.FieldValue === "DOJ" ||
            filterState.FieldValue === "Status"
          }
        />

        
        {/* <DatePicker/> */} 
        <button className="px-4 h-10 bg-white text-black rounded-xl shadow-lg" onClick={(e)=>{
          
          filterState.setFilter({field : fieldRef.current.value, operator : operatorRef.current.value,value : dataRef.current.value})
          
        }}>
          AND
        </button>
        <button className="px-4 h-10 bg-white text-black rounded-xl shadow-lg">
          OR
        </button>
        <button className="px-6 h-10 bg-[#5799FD] rounded-xl text-white font-semibold shadow-lg">
          Find
        </button>
        <button className="px-6 h-10  rounded-xl bg-green-400 text-white font-semibold shadow-lg">
          Save
        </button>
      </div>
      <div className="w-full h-[10vh] max-h-48 bg-[#5799FD] rounded-xl overflow-y-auto shadow my-5 grid grid-cols-2 items-center snap-mandatory snap-y py-10">

        {filterState.filters.map((i,index) => {
          return (
          <FilterChip filter = {i} key = {index}/>
          )
        })}
      </div>

      <div className="w-full h-[55vh] bg-white shadow-2xl rounded-xl ">
        <div className="w-full flex justify-between px-3 py-5 bg-white text-black">
          <select className=" w-32 h-10 px-2  focus:outline-none border-none bg-[#EEEAEA] text-[#585858] rounded-xl">
            <option disabled>Choose operator</option>
            <option selected>Name</option>
            <option>Vue</option>
            <option>React</option>
          </select>
          <div>
            <input
              type="text"
              placeholder="Value"
              className=" w-40 h-10   placeholder:text-black text-center outline-none   focus:outline-none  rounded-xl border-none bg-[#EEEAEA] text-[#585858]"
            />
          </div>
          <img src="/search.png" className="h-[2.5rem]" alt="search icon" />
          <select className=" px-3 h-10 focus:bg-white focus:outline-none border-none bg-[#EEEAEA] text-[#585858] rounded-xl ">
            <option disabled selected>
              Select Rows
            </option>
            <option>10</option>
            <option>20</option>
            <option>30</option>
          </select>
          <div className="relative">
            <input
              type="text"
              placeholder="Coupons"
              className="placeholder:text-[#585858] text-center px-2 h-10 focus:outline-none border-none bg-[#EEEAEA] rounded-xl text-[#585858]"
            />

            <img src="/cedis.png" className="absolute right-5 top-[0.5rem] " />
          </div>
          <button className="px-5 h-10 bg-[#676967] text-white font-semibold rounded-xl">
            Redeem
          </button>

          <button className="px-5 h-10 bg-[#5799FD] text-white font-semibold rounded-xl">
            Distribute
          </button>
        </div>

        {/* <SortableTable/> */}
        <DataTable data={data} />
      </div>
    </div>
  );
}

export default MeditatorList;
