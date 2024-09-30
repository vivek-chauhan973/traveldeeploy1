import React, { useState } from 'react'
import PackageTerm from './PackageTerm'
import GroupDepartureTerm from './GroupDepartureTerm'
import ChartureTerm from './ChartureTerm'
const ItineraryTour = () => {
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
                        <button onClick={() => handleTabClick('Tab1')} className={`border ${activeTab === "Tab1" ? "bg-black text-white" : "border-navyblack text-navyblack"}  rounded-badge px-3 py-1`}>Package</button>
                        <button onClick={() => handleTabClick('Tab2')} className={`border ${activeTab === "Tab2" ? "bg-black text-white" : "border-navyblack text-navyblack"}  rounded-badge px-3 py-1`}>GroupDeparture</button>
                        <button onClick={() => handleTabClick('Tab3')} className={`border ${activeTab === 'Tab3' ? "bg-black text-white" : "border-navyblack text-navyblack"}  rounded-badge px-3 py-1`}>Charter</button>    
                    </div>
                    <div className={` ${activeTab === 'Tab1' ? 'block' : 'hidden'}`}>
                        <PackageTerm />
                    </div>
                    <div className={` ${activeTab === 'Tab2' ? 'block' : 'hidden'}`}>
                        <GroupDepartureTerm />
                    </div>
                    <div className={` ${activeTab === 'Tab3' ? 'block' : 'hidden'}`}>
                        <ChartureTerm />
                    </div>
                   
                </div>
            </div>
        </>
    )
}

export default ItineraryTour