import { useEffect, useState } from "react";
import "../../../app/globals.css";
import { useAppContext } from "@/components/admin/context/Package/AddGuest";
import Image from 'next/image'

const CarItineraryTourDetails = ({ carPackage }) => {
    const [activeTab, setActiveTab] = useState("tab1");
    const handleTabClick = (tour_details) => {
        setActiveTab(tour_details);
    };
    return (
        <>
            <div id="TourDetailsSection">
                <div className="mt-7">
                    <p className="md:text-lg text-md font-semibold text-graytext">Car Tour Information</p>
                    <p className="md:text-md text-para italic text-slate-600">Top-notch facilities at no extra charge.</p>
                </div>
                <div className="flex justify-between mt-3 gap-2 border-b-2 border-navyblack">
                    <div onClick={() => handleTabClick('tab1')}
                        className={`cursor-pointer rounded-t-lg py-2 grow text-center text-[16px] ${activeTab === 'tab1' ? 'bg-navyblack text-white' : 'text-slate-400 border-x-[1px] border-t-[1px] border-navyblacklite  bg-slate-200'}`}>
                        <p className='text-sm '>Inclusion </p>
                    </div>
                    <div onClick={() => handleTabClick('tab2')}
                        className={`cursor-pointer rounded-t-lg py-2 grow text-center text-[16px] ${activeTab === 'tab2' ? 'bg-navyblack text-white' : 'text-slate-400 border-x-[1px] border-t-[1px] border-navyblacklite bg-slate-200'}`}>
                        <p className='text-sm '>Exclusion </p>
                    </div>
                </div>
                <div className="border rounded-b-lg  overflow-hidden">
                    <div className={`py-4  pl-5 pr-4  ${activeTab === 'tab1' ? 'block' : 'hidden'}`}>
                        {
                            <p className="text-para marker:text-green-800 payment-margin"
                                dangerouslySetInnerHTML={{ __html: carPackage?.TourInformations?.inclusion?.description }}
                            >
                            </p>
                        }
                    </div>
                    <div className={` py-4  pl-5 pr-4 ${activeTab === 'tab2' ? 'block' : 'hidden'}`}>
                        {
                            <p className="text-para marker:text-red-800 payment-margin"
                                dangerouslySetInnerHTML={{ __html: carPackage?.TourInformations?.exclusion?.description }}
                            >
                            </p>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
export default CarItineraryTourDetails