import React, { useState } from 'react'
import CarPackageTerm from './CarPackageTerm'
import CarGroupDepartureTerm from './CarGroupDepartureTerm'
import CarGroupDepartureTermOutstation from './CarGroupDepartureTermOutstaion'
const CarTermsAndCondition = () => {
    // tab editor content change
    const [activeTab, setActiveTab] = useState('Tab2')
    const handleTabClick = (tabname) => {
        setActiveTab(tabname)
        // console.log(tabname)
    }
    return (
        <>
            <div className="w-full  border-l-2 border-teal-600 bg-white mt-2 p-4 shadow-[0_0px_10px_-4px_rgba(0,0,0,0.3)] rounded-md">
                <p className='text-para font-semibold'>Terms and Conditions</p>
                <div className="border   rounded p-2">
                    <div className="flex gap-2 text-[12px] py-5 flex-wrap">
                        <button onClick={() => handleTabClick('Tab1')} className={`border ${activeTab === "Tab1" ? "bg-black text-white" : "border-navyblack text-navyblack"}  rounded-badge px-3 py-1`}>Car Package</button>
                        <button onClick={() => handleTabClick('Tab2')} className={`border ${activeTab === "Tab2" ? "bg-black text-white" : "border-navyblack text-navyblack"}  rounded-badge px-3 py-1`}>Local</button> 
                        <button onClick={() => handleTabClick('Tab3')} className={`border ${activeTab === "Tab3" ? "bg-black text-white" : "border-navyblack text-navyblack"}  rounded-badge px-3 py-1`}>Outstation</button> 
                    </div>
                    <div className={` ${activeTab === 'Tab1' ? 'block' : 'hidden'}`}>
                        <CarPackageTerm />
                    </div>
                    <div className={` ${activeTab === 'Tab2' ? 'block' : 'hidden'}`}>
                        <CarGroupDepartureTerm />
                    </div>   
                    <div className={` ${activeTab === 'Tab3' ? 'block' : 'hidden'}`}>
                        <CarGroupDepartureTermOutstation />
                    </div>   
                </div>
            </div>
        </>
    )
}

export default CarTermsAndCondition