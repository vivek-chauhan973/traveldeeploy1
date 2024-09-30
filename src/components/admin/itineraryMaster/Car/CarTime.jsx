import React, { useState } from 'react'
import LimitedTime from './LimitedTime'
import FlexibleTime from './FlexibleTime'

const CarTime = () => {
    // tab editor content change
    const [activeTab, setActiveTab] = useState('Tab2')
    const handleTabClick = (tabname) => {
        setActiveTab(tabname)
        // console.log(tabname)
    }
    return (
        <>
            <div className="w-full  border-l-2 border-teal-600 bg-white mt-2 p-4 shadow-[0_0px_10px_-4px_rgba(0,0,0,0.3)] rounded-md">
                <p className='text-para font-semibold'>Limited and Flexible Time</p>
                <div className="border   rounded p-2">
                    <div className="flex gap-2 text-[12px] py-5 flex-wrap">
                        <button onClick={() => handleTabClick('Tab1')} className={`border ${activeTab === "Tab1" ? "bg-black text-white" : "border-navyblack text-navyblack"}  rounded-badge px-3 py-1`}>Limited Time</button>
                        <button onClick={() => handleTabClick('Tab2')} className={`border ${activeTab === "Tab2" ? "bg-black text-white" : "border-navyblack text-navyblack"}  rounded-badge px-3 py-1`}>Flexible Time</button> 
                    </div>
                    <div className={` ${activeTab === 'Tab1' ? 'block' : 'hidden'}`}>
                       <LimitedTime/>
                    </div>
                    <div className={` ${activeTab === 'Tab2' ? 'block' : 'hidden'}`}>
                       <FlexibleTime/>
                    </div>   
                </div>
            </div>
        </>
    )
}

export default CarTime