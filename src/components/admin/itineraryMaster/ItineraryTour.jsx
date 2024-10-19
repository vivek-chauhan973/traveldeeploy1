import React, { useState } from 'react'
import TourInclusion from './TourInclusion'
import TourExclusion from './TourExclusion'
import Cancellation from './Cancellation'
import PaymentTerm from './PaymentTerm'
import NeedToKnow from './NeedToKnow'

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
                <p className='text-para font-semibold'>Tour Information</p>
                <div className="border   rounded p-2">
                    <div className="flex gap-2 text-[12px] py-5 flex-wrap">
                        <button onClick={() => handleTabClick('Tab1')} className={`border ${activeTab === "Tab1" ? "bg-black text-white" : "border-navyblack text-navyblack"}  rounded-badge px-3 py-1`}>Tour Inclusion</button>
                        <button onClick={() => handleTabClick('Tab2')} className={`border ${activeTab === "Tab2" ? "bg-black text-white" : "border-navyblack text-navyblack"}  rounded-badge px-3 py-1`}>Tour Exclusion</button>
                        <button onClick={() => handleTabClick('Tab3')} className={`border ${activeTab === 'Tab3' ? "bg-black text-white" : "border-navyblack text-navyblack"}  rounded-badge px-3 py-1`}>Cancelation Policy</button>
                        <button onClick={() => handleTabClick('Tab4')} className={`border ${activeTab === "Tab4" ? "bg-black text-white" : "border-navyblack text-navyblack"}  rounded-badge px-3 py-1`}>Payment Term</button>
                        <button onClick={() => handleTabClick('Tab5')} className={`border ${activeTab === "Tab5" ? "bg-black text-white" : "border-navyblack text-navyblack"}  rounded-badge px-3 py-1`}>Need to Know</button>
                    </div>
                    <div className={` ${activeTab === 'Tab1' ? 'block' : 'hidden'}`}>
                        <TourInclusion />
                    </div>
                    <div className={` ${activeTab === 'Tab2' ? 'block' : 'hidden'}`}>
                        <TourExclusion />
                    </div>
                    <div className={` ${activeTab === 'Tab3' ? 'block' : 'hidden'}`}>
                        <Cancellation />
                    </div>
                    <div className={` ${activeTab === 'Tab4' ? 'block' : 'hidden'}`}>
                        <PaymentTerm />
                    </div>
                    <div className={` ${activeTab === 'Tab5' ? 'block' : 'hidden'}`}>
                        <NeedToKnow />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItineraryTour