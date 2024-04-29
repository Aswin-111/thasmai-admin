import React, { useState, useEffect} from 'react'
import axios from "axios";


function MeditationCount() {

    const [newJoineesCount, setNewJoineesCount] = useState(0);
    const [beneficiariesCount, setBeneficiariesCount] = useState(0);
    const [totalMeditatorsCount, setTotalMeditatorsCount] = useState(0);
    const [waitingListCount, setWaitingListCount] = useState(0);


    useEffect(() => {
        const fetchData = async () => {
        
            try {
                const response1 = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/superadmin/this-month`);
                // console.log(response1);
                // setNewJoineesCount(response.data.events);
    
            } catch (error) {
                console.error('Error fetching data:', error);
            }


            try {
                const response2 = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/superadmin/beneficiaries`);
                // console.log(response2.data.count);
                setBeneficiariesCount(response2.data.count);
    
            } catch (error) {
                console.error('Error fetching data:', error);
            }

            try {
                const response3 = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/superadmin/meditation`);
                // console.log(response3.data.list);
                setTotalMeditatorsCount(response3.data.list);
    
            } catch (error) {
                console.error('Error fetching data:', error);
            }

            try {
                const response4 = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/superadmin/waiting-list`);
                // console.log(response4.data.list);
                setWaitingListCount(response4.data.list);
    
            } catch (error) {
                console.error('Error fetching data:', error);
            }

        };
    
        fetchData();
    }, []);
    

  return (
    <>
        <div className="flex justify- items-center bg-white p-2 h-[80%] w-[22%] rounded-xl shadow-md">
                    <div className="rounded-full bg-[#A2BCFF] w-[25%] p-3">
                        <img className="w-[100%] rounded-full" src="../new-joinees.png" alt="" />
                        
                    </div>
                    <div className="w-[75%] ps-2">
                        <h3 className="text-[28px] font-medium">75</h3>
                        <p className="text-[16px] text-gray-400 font-medium">New Joinees</p>
                    </div>
                </div>
                <div className="flex justify- items-center bg-white p-2 h-[80%] w-[22%] rounded-xl shadow-md">
                    <div className="rounded-full bg-[#A2BCFF] w-[25%] p-3">
                        <img className="w-full" src="../beneficiary.png" alt="" />
                        
                    </div>
                    <div className="w-[75%] ps-2">
                        <h3 className="text-[28px] font-medium">{ beneficiariesCount }</h3>
                        <p className="text-[16px] text-gray-400 font-medium">Beneficiaries</p>
                    </div>
                </div>
                <div className="flex justify- items-center bg-white p-2 h-[80%] w-[22%] rounded-xl shadow-md">
                    <div className="rounded-full bg-[#A2BCFF] w-[25%] p-3">
                        <img className="w-[100%]" src="../total-meditators.png" alt="" />   
                    </div>
                    <div className="w-[75%] ps-2">
                        <h3 className="text-[28px] font-medium">{ totalMeditatorsCount }</h3>
                        <p className="text-[16px] text-gray-400 font-medium">Total Meditators</p>
                    </div>
                </div>
                <div className="flex justify- items-center bg-white p-2 h-[80%] w-[22%] rounded-xl shadow-md">
                    <div className="rounded-full bg-[#A2BCFF] w-[25%] p-3">
                        <img className="w-[100%]" src="../waiting-list.png" alt="" />    
                    </div>
                    <div className="w-[75%] ps-2">
                        <h3 className="text-[28px] font-medium">{ waitingListCount }</h3>
                        <p className="text-[16px] text-gray-400 font-medium">Waiting List</p>
                    </div>
                </div>    
    </>
  )
}

export default MeditationCount