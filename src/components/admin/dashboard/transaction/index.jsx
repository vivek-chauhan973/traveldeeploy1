import React, { useState } from "react";
import List from "./list";

const Transaction = () => {
    const [activeTab, setActiveTab] = useState('Tab1');

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <div>
            <div className="border-b border-slate-300 mb-5">
                <div className="flex text-[14px] justify-between flex-wrap">
                    <button onClick={() => handleTabClick('Tab1')} className={`${activeTab === "Tab1" ? "border-b-2 scale-105 border-black text-black" : "border-black text-slate-400"} w-24 px-3 py-1`}>Tour Package</button>
                    <button onClick={() => handleTabClick('Tab2')} className={`${activeTab === "Tab2" ? "border-b-2 scale-105 border-black text-black" : "border-black text-slate-400"} w-24 px-3 py-1`}>Car Rental</button>
                    <button onClick={() => handleTabClick('Tab3')} className={`${activeTab === 'Tab3' ? "border-b-2 scale-105 border-black text-black" : "border-black text-slate-400"} w-24 px-3 py-1`}>Hotel</button>
                </div>
            </div>
            <div className={`tab-content ${activeTab === 'Tab1' ? 'block' : 'hidden'}`}>
                <List />
            </div>
            <div className={`tab-content ${activeTab === 'Tab2' ? 'block' : 'hidden'}`}>
                <List />
            </div>
            <div className={`tab-content ${activeTab === 'Tab3' ? 'block' : 'hidden'}`}>
                <List />
            </div>
        </div>
    );
};

export default Transaction;
