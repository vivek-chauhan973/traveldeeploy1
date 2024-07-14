import { useState } from "react";
import "../../../app/globals.css";
import { useAppContext } from "@/components/admin/context/Package/AddGuest";
import Image from 'next/image'
 const ItineraryTourDetails=()=>{
    const[activeTab,setActiveTab]=useState('tab1')
const {addPackage} =useAppContext();
    const handleTabClick = (tour_details) => {
        setActiveTab(tour_details);
        // console.log(tour_details)
      };
    return(
        <>
            <div id="TourDetailsSection">
                <div className="md:mt-10 mt-8">
                    <p className="md:text-lg text-md font-semibold text-graytext">Tour Details</p>
                    <p className="md:text-md text-para italic text-slate-600">Best facilities with no added cost.</p>
                </div>
                <div className="flex justify-between mt-2 gap-2 border-b-2 border-navyblack">
                    <div onClick={() => handleTabClick('tab1')} className={`cursor-pointer rounded-t-lg py-2 grow text-center text-[16px]   ${activeTab === 'tab1' ? 'bg-navyblack text-white' : 'text-slate-400 border-x-[1px] border-t-[1px] border-navyblacklite  bg-slate-200'}`}>
                        <p className='text-sm  '>Flight Details </p>
                    </div>
                    <div onClick={() => handleTabClick('tab2')} className={`cursor-pointer rounded-t-lg py-2   grow text-center text-[16px]   ${activeTab === 'tab2' ? 'bg-navyblack text-white' : 'text-slate-400 border-x-[1px] border-t-[1px] border-navyblacklite  bg-slate-200'}`}>
                        <p className='text-sm '>Inclusion </p>
                    </div>
                    <div onClick={() => handleTabClick('tab3')} className={`cursor-pointer rounded-t-lg py-2   grow text-center text-[16px]   ${activeTab === 'tab3' ? 'bg-navyblack text-white' : 'text-slate-400 border-x-[1px] border-t-[1px] border-navyblacklite bg-slate-200'}`}>
                        <p className='text-sm '>Exclusion </p>
                    </div>

                </div>
                <div className="border rounded-b-lg  overflow-hidden">
                    <div className={`md:p-5 xs:p-0 xs:overflow-x-auto list-disc mx-5 ${activeTab === 'tab1' ? 'block' : 'hidden'}`}>
                        <div>
                            <div className='mb-5'>
                                <p className='text-sm font-semibold text-graytext'>Departure & Arrival</p>
                            </div>

                            {addPackage?.flights?.flights?.map((item,i)=><div key={i} className='flex'>
                                <div className='grow'>
                                    <p className='text-base font-semibold text-graytext'>{item?.start?.to}</p>
                                    <p className='text-sm  '>{item?.start?.time}</p>
                                </div>
                                <div className='grow flex flex-col justify-center items-center' >
                                    <div >
                                        <Image className='w-20' src="https://seeklogo.com/images/I/indigo-airlines-logo-B3BBFD5004-seeklogo.com.png" alt="" />
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
                    </div>
                    {/* use this tour informatio ref veena world */}
                    {/* <ul className={`p-5 list-disc ml-[20px] ${activeTab === 'tab1' ? 'block' : 'hidden'}`}>
                        <li className="leading-8 text-[15px]"><span></span>Tab 1</li>
                        <li className="leading-8 text-[15px]"><span></span>Tab 1</li>
                        <li className="leading-8 text-[15px]"><span></span>Tab 1</li>
                        <li className="leading-8 text-[15px]"><span></span>Tab 1</li>
                        <li className="leading-8 text-[15px]"><span></span>Tab 1</li>
                        <li className="leading-8 text-[15px]"><span></span>Tab 1</li>
                        
                    </ul> */}
                    <div className={`py-4 list-disc  ${activeTab === 'tab2' ? 'block' : 'hidden'}`}>
                        {/* <div className=''>
                             <table className='w-full'>
                               <tbody>
                                   <tr className='flex  justify-between '>
                                        <td className='grow md:text-base text-[14px] font-semibold text-center'>City - Country</td>
                                        <td className='grow md:text-base text-[14px] font-semibold  text-center'>Check In - Check Out</td>
                                       <td className='grow md:text-base text-[14px] font-semibold text-center'>Hotel</td>
                                  </tr>
                               </tbody>
                            </table> 

                        </div> */}
                        {/* <div className=''>
                            <table className='w-full'>
                                <tbody>
                                    <tr className='flex justify-between even:bg-white odd:bg-slate-100 text-center'>
                                        <td className='grow text-sm py-2  text-center'>City - Country</td>
                                        <td className='grow text-sm py-2  text-center'>Hotel</td>
                                        <td className='grow text-sm py-2  text-center'>Check In - Check Out</td>
                                    </tr>
                                    <tr className='flex justify-between even:bg-white odd:bg-slate-100 text-center'>
                                        <td className='grow text-sm py-2  text-center'>City - Country</td>
                                        <td className='grow text-sm py-2  text-center'>Hotel</td>
                                        <td className='grow text-sm py-2  text-center'>Check In - Check Out</td>
                                    </tr>
                                    <tr className='flex justify-between even:bg-white odd:bg-slate-100 text-center'>
                                        <td className='grow text-sm py-2  text-center'>City - Country</td>
                                        <td className='grow text-sm py-2  text-center'>Hotel</td>
                                        <td className='grow text-sm py-2  text-center'>Check In - Check Out</td>
                                    </tr>
                                    
                                </tbody>
                            </table>
                        </div> */}

                        {
                           <p className="py-3 pl-2" > {addPackage?.TourInformations?.inclusion?.groupName}</p>
                        }
                        
                    </div>
                    <div className={` ${activeTab === 'tab3' ? 'block' : 'hidden'}`}>
                        {/* <div className='grid grid-cols-[0.9fr,,2fr] border-b-2'>
                            <div className=' bg-slate-100 md:px-5 px-[6px]  pt-3 pb-2 '>
                                <p className='leading-7 text-sm'>Guest type</p>
                                <p className='leading-7 text-sm'>reporting time</p>
                                <p className='leading-7 text-sm'>dropping time</p>
                            </div>
                            <div className='px-5 pt-3 pb-2'>
                                <p className='leading-7 text-sm'>shkjs shfj sjh</p>
                                <p className='leading-7 text-sm'>lorem sdfsdfsf</p>
                                <p className='leading-7 text-sm'>sdfev rtr er slorem</p>
                            </div>
                            
                        </div>
                        <div className='grid grid-cols-[0.9fr,,2fr]'>
                            <div className=' bg-slate-100 md:px-5  px-[6px]  pt-3 pb-2 '>
                                <p className='leading-7 text-sm'>Guest type</p>
                                <p className='leading-7 text-sm'>reporting time</p>
                                <p className='leading-7 text-sm '>dropping time</p>
                            </div>
                            <div className='px-5 pt-3 pb-2'>
                                <p className='leading-7 text-sm'>shkjs shfj sjh</p>
                                <p className='leading-7 text-sm'>lorem sdfsdfsf</p>
                                <p className='leading-7 text-sm'>Done slorem</p>
                            </div>
                            
                        </div> */}
                        
                        {
                           <p className="py-3 pl-2"> {addPackage?.TourInformations?.exclusion?.groupName}</p>
                        }
                        
                    </div>

                </div>

            </div>
        </>
    )
}
export default  ItineraryTourDetails