import "../../../app/globals.css";
import Image from 'next/image'
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useEffect, useState } from "react";
import { useAppContext } from "@/components/admin/context/Package/AddGuest";
// import { ItineraryFaq, Itineraryfaqheading } from "@/components/Itineraryfaq";


 const Itinerary= ()=> {

    // const [ faqData,setFaqData]=useState(null);
    const {addPackage}=useAppContext();
    // setFaqData(addPackage);
    const [dummy, setDummy] = useState([addPackage?.days])


    return (
        <div className='justify-between md:mt-2 -mt-1'>
            {addPackage?.days?.map((item, index) => (
                <Accordion className='mb-4 border-none shadow-none' key={index}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        className=' shadow-sm bg-lightgray m-0'
                    >
                        {/* itenaray heading is here */}
                        <div className="flex justify-between">
                            <div className=" ">
                                <div className="flex items-center gap-3">
                                    <div className="bg-navyblack text-white px-2 py-1 rounded-sm">
                                        <p className="text-xs font-semibold text-white">Day {index+1}</p>
                                    </div>
                                    <div>
                                        <p className="text-base font-semibold text-graytext">{item.title }</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p></p>
                        </div>
                    </AccordionSummary>
                    <AccordionDetails className='border-0 mt-2'>
                        {/* itenery data is here */}
                        <div className="relative">




                            {/* ------------------------------------------------------------------------ */}
                            <div className="relative text-para pl-10 border-l ml-4 border-limeyellow border-dashed pb-2">
                                {/* circle */}
                                <div className="-left-3 absolute bg-primary h-6 w-6 rounded-full">
                                </div>
                                <p className="text-base font-semibold text-black">Your Text Heading</p>
                                {/* <div contentEditable='true' dangerouslySetInnerHTML={{ __html:  }}></div> */}
                                <div dangerouslySetInnerHTML={{__html:item.information }}></div>
                                <p>Dress Color for today : Yellow</p>
                                {/* 2 Time Multiple */}
                                <div className='my-5' >
                                    <div className='flex gap-5'>
                                        <p className='text-base font-semibold' >Today’s Sightseeing</p>
                                    </div>
                                    {/* 2 time multiple  */}
                                    <div className="pl-5 py-3">
                                        <div className='flex gap-2'>
                                            <Image className='w-5'
                                                src="https://www.reshot.com/preview-assets/icons/TZCXQGV5F4/maps-TZCXQGV5F4.svg" alt=""  width="125"
                                                height="150" />
                                            <p className='text-sm leading-7' >Today’s Sightseeing</p>
                                        </div>
                                        <div className='flex gap-2'>
                                            <Image className='w-5 '
                                                src="https://www.reshot.com/preview-assets/icons/TZCXQGV5F4/maps-TZCXQGV5F4.svg" alt=""  width="125"
                                                height="150"/>
                                            <p className='text-sm leading-7' >Today’s Sightseeing</p>
                                        </div>
                                    </div>

                                </div>

                            </div>


                        </div>
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    );
}
export default  Itinerary