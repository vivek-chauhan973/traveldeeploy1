import React, { useEffect, useState } from "react";
import Tourlist from "./Tourlist";
import CarList from "./CarList";
import HotelList from "./HotelList";
const fetchItineraryData = async () => {
    try {
      const response = await fetch("/api/package/get-packages");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching itinerary data:", error);
    }
  };
  const fetchCarItineraryData = async () => {
    try {
      const response = await fetch("/api/cars/package/get-packages");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching itinerary data:", error);
    }
  };
const Transaction = () => {
    const [activeTab, setActiveTab] = useState('Tab1');
    const [allPackageData,setAllPackageData]=useState([]);
    const [allCarPackageData,setAllCarPackageData]=useState([]);
    useEffect(()=>{
        fetchItineraryData().then(res=>{
            setAllPackageData(res?.packages||[]);
        });
        fetchCarItineraryData().then(res=>{  setAllCarPackageData(res?.packages||[])})
    },[])

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <div>
            <div className="border-b border-slate-300 mb-5">
                <div className="flex flex-nowrap text-[14px] lg:justify-between lg:flex-wrap overflow-x-scroll overflow-y-hidden lg:overflow-x-hidden lg:overflow-y-hidden">
                    <button onClick={() => handleTabClick('Tab1')} className={`${activeTab === "Tab1" ? "border-b-2 scale-105 border-black text-black" : "border-black text-slate-400"} w-24 px-3 py-1 text-nowrap mb-3`}>Tour Package</button>
                    <button onClick={() => handleTabClick('Tab2')} className={`${activeTab === "Tab2" ? "border-b-2 scale-105 border-black text-black" : "border-black text-slate-400"} w-24 px-3 py-1 text-nowrap mb-3`}>Car Rental</button>
                    <button onClick={() => handleTabClick('Tab3')} className={`${activeTab === 'Tab3' ? "border-b-2 scale-105 border-black text-black" : "border-black text-slate-400"} w-24 px-3 py-1 text-nowrap mb-3`}>Hotel</button>
                </div>
            </div>
            <div className={`tab-content ${activeTab === 'Tab1' ? 'block' : 'hidden'}`}>
                <Tourlist allTypeData={allPackageData}/>
            </div>
            <div className={`tab-content ${activeTab === 'Tab2' ? 'block' : 'hidden'}`}>
                <CarList allTypeData={allCarPackageData}/>
            </div>
            <div className={`tab-content ${activeTab === 'Tab3' ? 'block' : 'hidden'}`}>
                <HotelList allTypeData={allCarPackageData}/>
            </div>
        </div>
    );
};

export default Transaction;
