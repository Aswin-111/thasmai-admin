"use client";
 
import React, { useState, useEffect } from "react";
import { useMahadhanamFilterStore } from "@/app/users/mahadhanam/filterstate";
import axios from "axios";
 
function MahadhanamCart({ setCartToggle }) {
 
    const filterState = useMahadhanamFilterStore((state) => {
        return state;
    });
 
    const [totalCouponsToDistribute, setTotalCouponsToDistribute] = useState(0);
    const [distributionRecords, setDistributionRecords] = useState([]);
    const [removeToggle, setRemoveToggle] = useState(false);
 
 
    useEffect(() => {
 
        (async function() {
            try {
                const data = JSON.parse(localStorage.getItem("mahadhanam_cart")).cart_data
 
                let cart_coupon = 0;
                data.forEach((i) => {
                    cart_coupon = i.coupons_to_distribute
                    console.log(i);
                });
                setDistributionRecords([...data]);
                setTotalCouponsToDistribute(cart_coupon);
            } catch (err) {
                console.log('qwerty')
                console.error('Error fetching data:', err);
            }
        })()
    }, [removeToggle]);
 
 
    //handleRemove
 
    async function handleRemove(UId) {
        try {
 
            const initial_data =  JSON.parse(localStorage.getItem("mahadhanam_cart")).cart_data
            const retrieved_data = initial_data.filter(i => {
                return  i.UId === UId
            })
            let coupon_revoke = [...filterState.meditatorsData];
            console.log(retrieved_data);
            coupon_revoke.forEach(i => {
                if(i.UId === UId) {
                    i.coupons = Number(i.coupons) + Number(retrieved_data[0].coupons_to_distribute)
                }
            })
            const removed_data = initial_data.filter(i => {
                return i.UId != UId
            })
            localStorage.removeItem("mahadhanam_cart")
            localStorage.setItem("mahadhanam_cart", JSON.stringify({ cart_data : [...removed_data] }))
            filterState.setMeditatorsData([...coupon_revoke])
 
            setRemoveToggle(!removeToggle);
            console.log(response.data, "fbnujk")
 
        } catch (error) {
            console.error('Error occurred while removing:', error);
        }
    };
 
 
    // handleRemoveAll
 
    async function handleRemoveAll(UIds) {
        try {
            const UIdfrom = distributionRecords.map((i, ind) => {
                return i.UId
            });
 
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/superadmin/dummy-revoke`, {
                UIds: [...UIdfrom]
            });
            console.log(response.data, "fbnujk")
        } catch (error) {
            console.error('Error occurred while removing:', error);
        }
    };
 
 
 
    //handleSend
 
    async function handleSend(UIds) {
        try {
            const UIdfrom = distributionRecords.map((i, ind) => {
                return i.UId
            })
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/superadmin/dummy-distribution`, {
                UIds: [...UIdfrom]
            });
            console.log(response, "fbnujk")
            if (response.data.message) {
                setCartToggle(false);
            }
        } catch (error) {
            console.error('Error occurred while removing:', error);
        }
    };
 
 
 
    return (
 
        <div className="w-[100vw] h-[100vh] bg-[#000000af] absolute left-0 top-0 flex justify-center items-center">
 
            <div className='w-[1000px] h-[600px] p-5 bg-[#D9D9D9] rounded relative'>
 
                <button 
                      className='h-9 w-9 text-black text-5xl absolute right-[5px] top-[5px] rotate-45 rounded-full flex justify-center items-center hover:bg-blue-400 hover:text-white' 
                      onClick=  {() => { setCartToggle(false) }}
                >+</button>
 
                    {/* ----heading and coupon count---- */}
                <div className="w-full h-[15%] pt-5 flex items-center">
                    <div className="w-[70%] h-full flex items-center text-3xl text-black font-medium">Cart Items</div>
                    <div className="w-[30%] h-full flex justify-end items-center">
                        <p className="h-8 me-3 flex items-center font-medium text-black">Total coupons</p>
                        <p className="w-24 h-8 bg-white text-black flex justify-center items-center font-medium">{ totalCouponsToDistribute }</p>
                    </div>
                </div>
 
                    {/*------Cart table------- */}
                <div className="w-full h-[70%] overflow-y-auto">
                    <table className="w-full table">
                        <thead className="bg-[#5799FD] text-white sticky top-0 text-sm">
                            <th className="text-center">User name</th>
                            <th className="text-center">User Id</th>
                            <th className="text-center">Coupon Distribute</th>
                            <th className="text-center">Remove</th>
                        </thead>
                        <tbody className="bg-white">
 
                            {
                                distributionRecords[0] ? (
                                    distributionRecords.map((item, index) => (
 
                                        <tr 
                                            key={index}
                                            className="font-medium text-sm bg-white text-black"
                                        >
                                            <td className="text-center">{ item.firstName }</td>
                                            <td className="text-center">{ item.UId }</td>
                                            <td className="text-center flex justify-center">
                                                <p className="w-20 h-6 flex justify-center items-center bg-[#D9D9D9]">
                                                    { item.coupons_to_distribute }
                                                </p>
                                            </td>
                                            <td className="text-center">
                                                <button 
                                                    className="text-[#FF0505] hover:underline"
                                                    onClick={() => {
                                                        handleRemove(item.UId);
                                                    }}
                                                >
                                                    Remove
                                                </button>
                                            </td> 
                                        </tr>
                                    ))
                                ) : (
                                    <tr className="w-full text-sm bg-white text-black">
                                        <td>No coupons available</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                )
                            }
 
 
                        </tbody>
                    </table>
                </div>
 
 
                    {/*------bottom bar buttons------- */}
 
                <div className="w-full h-[15%] flex justify-end items-center">
                    <button
                        className="w-28 h-8 me-3 bg-[#FF7979] text-white hover:bg-[#fc6262] rounded"
                        onClick={() => {
                            handleRemoveAll();
                        }}
                    >
                        Remove All
                    </button>
 
                    <button
                        className="w-24 h-8 bg-[#5799FD] text-white hover:bg-[#577efd] rounded"
                        onClick={() => {
                            handleSend();
                        }}
                    >
                        Send</button>
                </div>
 
 
            </div>
        </div>
    );
}
 
export default MahadhanamCart;