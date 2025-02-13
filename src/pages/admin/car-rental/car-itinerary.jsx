import Layout from "@/components/admin/Layout"
import CarPrimaryItinerary from "@/components/admin/itineraryCreate/CarPrimaryItinerary";
import { useState } from "react";

export default function Itinerary() {
    const [itineraryInfo, setItineraryInfo] = useState()
    const [activeTab, setActiveTab] = useState('Tab1')
    const handleTabClick = (tabname) => {
        setActiveTab(tabname)
    }
    return (

            <Layout>
                <h3 className="text-lg font-medium">Add Car Itinerary</h3>
                <div className="border-b border-slate-300 mb-5">
                    <div className="flex gap-2 text-[14px] pt-5 pb-2 flex-wrap">
                        <button onClick={() => handleTabClick('Tab1')} className={`${activeTab === "Tab1" ? "border-b-2 scale-105 border-black text-black" : "border-black text-slate-400"}  px-3 py-1`}>Basic info</button>
                    </div>
                </div>
                <div className={`tab-content ${activeTab === 'Tab1' ? 'block' : 'hidden'}`}>
                    <CarPrimaryItinerary itineraryInfo={itineraryInfo} setItineraryInfo={setItineraryInfo} setActiveTab={setActiveTab} />
                </div>

            </Layout>
    )
}