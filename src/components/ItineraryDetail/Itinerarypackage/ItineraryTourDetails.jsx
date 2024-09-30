import { useEffect, useState } from "react";
import "../../../app/globals.css";
import { useAppContext } from "@/components/admin/context/Package/AddGuest";
import Image from 'next/image'
const ItineraryTourDetails = () => {
    const { addPackage } = useAppContext();
    const [activeTab, setActiveTab] = useState("");
    useEffect(()=>{
        if(addPackage?.flights){
            setActiveTab("tab1");
        }
        else{
            setActiveTab("tab2");
        }
    },[addPackage])
    
    const handleTabClick = (tour_details) => {
        setActiveTab(tour_details);
    };
    return (
        <>
            <div id="TourDetailsSection">
                <div className="mt-7">
                    <p className="md:text-lg text-md font-semibold text-graytext">Tour Information</p>
                    <p className="md:text-md text-para italic text-slate-600">Top-notch facilities at no extra charge.</p>
                </div>
                <div className="flex justify-between mt-3 gap-2 border-b-2 border-navyblack">
                    {addPackage?.flights&&<div onClick={() => handleTabClick('tab1')} 
                        className={`cursor-pointer rounded-t-lg py-2 grow text-center text-[16px] ${activeTab === 'tab1' ? 'bg-navyblack text-white' : 'text-slate-400 border-x-[1px] border-t-[1px] border-navyblacklite  bg-slate-200'}`}>
                        <p className='text-sm  '>Flight Details </p>
                    </div> }
                    <div onClick={() => handleTabClick('tab2')} 
                        className={`cursor-pointer rounded-t-lg py-2 grow text-center text-[16px] ${activeTab === 'tab2' ? 'bg-navyblack text-white' : 'text-slate-400 border-x-[1px] border-t-[1px] border-navyblacklite  bg-slate-200'}`}>
                        <p className='text-sm '>Inclusion </p>
                    </div>
                    <div onClick={() => handleTabClick('tab3')} 
                        className={`cursor-pointer rounded-t-lg py-2 grow text-center text-[16px] ${activeTab === 'tab3' ? 'bg-navyblack text-white' : 'text-slate-400 border-x-[1px] border-t-[1px] border-navyblacklite bg-slate-200'}`}>
                        <p className='text-sm '>Exclusion </p>
                    </div>

                </div>
                <div className="border rounded-b-lg  overflow-hidden">
                    {addPackage?.flights&&<div className={`md:p-5 xs:p-0 xs:overflow-x-auto list-disc mx-5 ${activeTab === 'tab1' ? 'block' : 'hidden'}`}>
                        <div>
                            <div className=' md:my-0 my-3'>
                                <p className='text-sm font-semibold text-graytext'>Departure & Arrival</p>
                            </div>

                            {addPackage?.flights?.flights?.map((item, i) => <div key={i} className='flex mb-3 mt-3'>
                                <div className='grow'>
                                    <p className='text-base font-semibold text-graytext'>{item?.start?.to}</p>
                                    <p className='text-sm  '>{item?.start?.time}</p>
                                </div>
                                <div className='grow flex flex-col justify-center items-center' >
                                    <div >
                                        <Image className='w-20' src="https://seeklogo.com/images/I/indigo-airlines-logo-B3BBFD5004-seeklogo.com.png" alt="" width="125"
                                            height="150" />
                                    </div>
                                    <div className='flex relative items-center mt-2'>

                                        <hr className=' w-10' />

                                        <div className='border px-7 rounded-full flex'>
                                            <span className='md:text-[15px] text-[10px]' >-:-</span>
                                        </div>
                                        <hr className=' w-10' />
                                    </div>
                                </div>
                                <div className='grow text-right'>
                                    <p className='text-base font-semibold text-graytext'>{item?.end?.to}</p>
                                    <p className='text-sm '>{item?.end?.time}</p>
                                </div>

                            </div>)}
                        </div>
                    </div>}

                    <div className={`py-4  pl-5 pr-4  ${activeTab === 'tab2' ? 'block' : 'hidden'}`}>
                        {


                            <p className="text-para marker:text-green-800 payment-margin" dangerouslySetInnerHTML={{ __html: addPackage?.TourInformations?.inclusion?.description }} />

                        }

                    </div>
                    {/* <div className={` ${activeTab === 'tab3' ? 'block' : 'hidden'}`}>

                        {

                            <p className="py-3 pl-2" dangerouslySetInnerHTML={{ __html: addPackage?.TourInformations?.exclusion?.description }} />
                        }

                    </div> */}




                    <div className={` py-4  pl-5 pr-4 ${activeTab === 'tab3' ? 'block' : 'hidden'}`}>
                        {

                            <p className="text-para marker:text-red-800 payment-margin" dangerouslySetInnerHTML={{ __html: addPackage?.TourInformations?.exclusion?.description }} />
                        }
                    </div> 
                </div>

            </div>
        </>
    )
}
export default ItineraryTourDetails