"use client";
 
import Image from "next/image";
import React from "react";
 
 
function CouponLabel() {
    return (
 
        <div className="flex h-full">
            <div className="bg-[#5799FD] w-16 h-8 rounded-l-xl flex justify-center items-center border-r-4">
                <Image src = '/admin/coupon-count.png' className="" width={24} height={24} alt="coupon"/>
            </div>
            <div className="bg-[#5799FD] w-24 h-8 rounded-r-xl font-bold text-white flex justify-center items-center ">
                100K
            </div>
        </div>
    );
}
 
export default CouponLabel;