import { useEffect, useState, useCallback } from "react";
import PrimaryItinerary from "@/components/admin/itineraryCreate/PrimaryItinerary";
import { useRouter } from "next/router";
import Layout from "@/components/admin/Layout";
import HighlightAbout from "@/components/admin/itineraryCreate/HighlightAbout";
import Calendar from "@/components/admin/itineraryCreate/Calender";
import ItineraryText from "@/components/admin/itineraryCreate/ItineraryText_Faq";
import PackageFaq from "@/components/admin/itineraryCreate/PackageFaq";
import FlightBooking from "@/components/admin/itineraryCreate/FlightBooking";
import TourInformation from "@/components/admin/itineraryCreate/TourInformation";
import SeoField from "@/components/admin/itineraryCreate/SeoField";
import { useSearchParams } from "next/navigation";
import GoogleMap from "@/components/admin/itineraryCreate/GoogleMap";
import PricingManagement from "@/components/admin/itineraryCreate/PricingManagement";
import PricingManagementPopup from '@/components/admin/itineraryCreate/PricingManagementPopup';
import dynamic from 'next/dynamic';
import Index from "@/components/dy/Index";
// Dynamically import icons
const LuPackagePlus = dynamic(() => import('react-icons/lu').then(mod => mod.LuPackagePlus));
const HiOutlineArrowNarrowRight = dynamic(() => import('react-icons/hi').then(mod => mod.HiOutlineArrowNarrowRight));

import FixedDeparture from "@/components/admin/itineraryCreate/FixedDeparture";
import ImageUploading from "@/components/admin/itineraryCreate/ImageUploading";



export default function CreatePackage() {



    const [pricingPopup, setPricingPopup] = useState(true);

    const router = useRouter();
    const { edit } = router.query;
    // console.log("iternary :::",router);
    const formType = useSearchParams()?.get("type");
    const [tableData, setTableData] = useState([]);
    const [itinerary, setItinerary] = useState();
    const [activeTab, setActiveTab] = useState(formType ? 'Tab1' : 'Tab2');
    const [tableColumn, setTableColumn] = useState([]);

    const [basicDot, setBasicDot] = useState(false);


    // show calendar Tab
    const [calendarPricemanagement, setCalendarPricemanagement] = useState("") 
    const [calendarPricemanagementf, setCalendarPricemanagementf] = useState("") 
    const [showCalendarTab, setShowCalendarTab] = useState(false)
    
    useEffect(() => {
        if (calendarPricemanagement||itinerary) {
           
            if (calendarPricemanagement==="addGuest"||itinerary?.addguest==="addGuest") {
              
                setShowCalendarTab(true);
            } else {
                setShowCalendarTab(false);
            }
        }

    }, [calendarPricemanagement,itinerary]);

    const [imageDot, setImageDot] = useState(false);
    const [calenderDot, setCalenderDot] = useState(false);
    const [highlightDot, setHighlightDot] = useState(false);
    const [itenaryDot, setItenaryDot] = useState(false);
    const [mapDot, setMapDot] = useState(false);
    const [flightDot, setFlightDot] = useState(false);
    const [tourDot, setTourDot] = useState(false);
    const [seoDot, setSeoDot] = useState(false);
    const [priceManagementDot, setPriceManagementDot] = useState(false);
    const [faqDot, setFaqDot] = useState(false);
    const [tableDot, setTableDot] = useState(false);
    // print dot status

    // console.log("table columns id :: ",itinerary);
    const handleSubmit = async () => {
        try {
            const reponse = await fetch(`/api/package/table/${itinerary?._id}`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ tableData, tableColumn })
            });
            if (reponse.ok) {
                setActiveTab("Tab12");
              }
        } catch (error) {
            console.log("error :: ", error);
        }

    };
    // console.log("tableData is here ------> ",tableData);
    useEffect(()=>{
        if(tableData.length > 0){
            setTableDot(true);
        }
    },[tableData]);

    const handleTabClick = (tabname) => {
        setActiveTab(tabname);
    };

    const getItinerary = useCallback(async () => {
        try {
            const itinerary = await (await fetch('/api/package/' + edit)).json();

            setItinerary(itinerary.updatedPackage);
        } catch (error) {
            console.log(error);
        }
    }, [edit]);

    useEffect(() => {
        if (edit) {
            getItinerary();
        }
    }, [edit, getItinerary]);
    useEffect(() => {
        setTableData(itinerary?.tableData || []);
        setTableColumn(itinerary?.tableColumn || []);
    }, [itinerary])
    const [select, setSelect] = useState("");
    const [selectedOption, setSelectedOption] = useState("");

    const handleOnChange = (e) => {
        setSelect(e.target.value);
    };

    const handleCheckbox = (a) => {
        if (a) {
            setSelectedOption(select);
            setPricingPopup(false);
        }
    };

    useEffect(() => { }, [select]);
// console.log("itinary is here ------> ",itinerary);

    return (
        
            <Layout>
                <div className="flex items-center gap-5 text-primary pb-3">
                    <LuPackagePlus size={28} className="font-semibold" />
                    <p className="md:text-[28px] text-2xl text-black">Create Package</p>
                    <HiOutlineArrowNarrowRight size={28} className=" text-teal-700" />
                </div>
                <div className="border-b border-slate-300 mb-5">
                    <div className="flex gap-2 text-[14px] pt-5 pb-2 flex-wrap">
                        <button onClick={() => handleTabClick('Tab1')} className={`${activeTab === "Tab1" ? "border-b-2 scale-105 border-black text-black" : "border-black text-slate-400"} px-3 py-1`}>
                            Basic info {basicDot ? <span className="text-[12px] text-green-500">●</span> : <span className="text-[12px] text-red-500">●</span>}
                        </button>
                        <button onClick={() => handleTabClick('Tab2')} className={`${activeTab === "Tab2" ? "border-b-2 scale-105 border-black text-black" : "border-black text-slate-400"} px-3 py-1`}>
                            Images  {imageDot ? <span className="text-[12px] text-green-500">●</span> : <span className="text-[12px] text-red-500">●</span>}
                        </button>
                        <button onClick={() => handleTabClick('Tab3')} className={`${activeTab === "Tab3" ? "border-b-2 scale-105 border-black text-black" : "border-black text-slate-400"} px-3 py-1`}>
                            Highlight About {highlightDot ? <span className="text-[12px] text-green-500">●</span> : <span className="text-[12px] text-red-500">●</span>}
                        </button>
                        <button onClick={() => handleTabClick('Tab4')} className={`${activeTab === 'Tab4' ? "border-b-2 scale-105 border-black text-black" : "border-black text-slate-400"} px-3 py-1`}>
                            Itinerary Text {itenaryDot ? <span className="text-[12px] text-green-500">●</span> : <span className="text-[12px] text-red-500">●</span>}
                        </button>
                        <button onClick={() => handleTabClick('Tab5')} className={`${activeTab === 'Tab5' ? "border-b-2 scale-105 border-black text-black" : "border-black text-slate-400"} px-3 py-1`}>
                            Map Embedded {mapDot ? <span className="text-[12px] text-green-500">●</span> : <span className="text-[12px] text-red-500">●</span>}
                        </button>
                        <button onClick={() => handleTabClick('Tab6')} className={`${activeTab === "Tab6" ? "border-b-2 scale-105 border-black text-black" : "border-black text-slate-400"} px-3 py-1`}>
                            Flight {flightDot ? <span className="text-[12px] text-green-500">●</span> : <span className="text-[12px] text-red-500">●</span>}
                        </button>
                        <button onClick={() => handleTabClick('Tab7')} className={`${activeTab === "Tab7" ? "border-b-2 scale-105 border-black text-black" : "border-black text-slate-400"} px-3 py-1`}>
                            Tour Info {tourDot ? <span className="text-[12px] text-green-500">●</span> : <span className="text-[12px] text-red-500">●</span>}
                        </button>
                        <button onClick={() => handleTabClick('Tab8')} className={`${activeTab === "Tab8" ? "border-b-2 scale-105 border-black text-black" : "border-black text-slate-400"} px-3 py-1`}>
                            SEO Field {seoDot ? <span className="text-[12px] text-green-500">●</span> : <span className="text-[12px] text-red-500">●</span>}
                        </button>
                        <button onClick={() => handleTabClick('Tab9')} className={`${activeTab === "Tab9" ? "border-b-2 scale-105 border-black text-black" : "border-black text-slate-400"} px-3 py-1`}>
                            Pricing Management {priceManagementDot ? <span className="text-[12px] text-green-500">●</span> : <span className="text-xxs text-red-500">●</span>}
                        </button>                   
                        <button onClick={() => handleTabClick('Tab10')} className={`${activeTab === "Tab10" ? "border-b-2 scale-105 border-black text-black" : "border-black text-slate-400"} px-3 py-1`}>
                            FAQ {faqDot ? <span className="text-[12px] text-green-500">●</span> : <span className="text-[12px] text-red-500">●</span>}
                        </button>
                        <button onClick={() => handleTabClick('Tab11')} className={`${activeTab === "Tab11" ? "border-b-2 scale-105 border-black text-black" : "border-black text-slate-400"} px-3 py-1`}>
                            Table {tableDot ? <span className="text-[12px] text-green-500">●</span> : <span className="text-[12px] text-red-500">●</span>}
                        </button>
                        {showCalendarTab && (
                        <button onClick={() => handleTabClick('Tab12')} className={`${activeTab === "Tab12" ? "border-b-2 scale-105 border-black text-black" : "border-black text-slate-400"} px-3 py-1`}>
                            AddGuestCalendar  {calenderDot ? <span className="text-[12px] text-green-500">●</span> : <span className="text-[12px] text-red-500">●</span>}
                        </button>
                        )}
                       
                    </div>
                </div>

                <div className={`tab-content ${activeTab === 'Tab1' ? 'block' : 'hidden'}`}>
                    <PrimaryItinerary setActiveTab={setActiveTab} itinerary={itinerary} itineraryInfo={undefined} setItineraryInfo={undefined} setBasicDot={setBasicDot} />
                </div>
                <div className={`tab-content ${activeTab === 'Tab2' ? 'block' : 'hidden'}`}>
                    <div className=" border rounded p-4">
                        <div>
                            <p className="text-[15px] font-semibold">Image Upload</p>
                        </div>
                        <ImageUploading itinerary={itinerary} setActiveTab={setActiveTab} setImageDot={setImageDot} />
                    </div>
                </div>
                <div className={` ${activeTab === 'Tab3' ? 'block' : 'hidden'}`}>
                    <HighlightAbout setActiveTab={setActiveTab} itinerary={itinerary} itineraryInfo={undefined} setItineraryInfo={undefined} setHighlightDot={setHighlightDot} />
                </div>
                <div className={` ${activeTab === 'Tab4' ? 'block' : 'hidden'}`}>
                    <div className="my-5">
                        <div className="bg-white rounded-md px-3m p-2">
                            <ItineraryText setActiveTab={setActiveTab} itinerary={itinerary} setItenaryDot={setItenaryDot} />
                        </div>
                    </div>
                </div>
                <div className={` ${activeTab === 'Tab5' ? 'block' : 'hidden'}`}>
                    <GoogleMap setActiveTab={setActiveTab} itinerary={itinerary} setMapDot={setMapDot} />
                </div>
                <div className={` ${activeTab === 'Tab6' ? 'block' : 'hidden'}`}>
                    <FlightBooking setActiveTab={setActiveTab} itinerary={itinerary} setFlightDot={setFlightDot} />
                </div>
                <div className={` ${activeTab === 'Tab7' ? 'block' : 'hidden'}`}>
                    <TourInformation itinerary={itinerary} setActiveTab={setActiveTab} setTourDot={setTourDot} />
                </div>
                <div className={` ${activeTab === 'Tab8' ? 'block' : 'hidden'}`}>
                    <SeoField itinerary={itinerary} setActiveTab={setActiveTab} setSeoDot={setSeoDot} />
                </div>
                <div className={` ${activeTab === 'Tab9' ? 'block' : 'hidden'}`}>
                    <div className="relative">
                        {itinerary?.prices === null && pricingPopup && <PricingManagementPopup setPricingPopup={setPricingPopup} handleOnChange={handleOnChange} handleCheckbox={handleCheckbox} />}
                        {(itinerary?.prices?.addguest === "addGuest" || selectedOption === "addGuest") && (
                            <PricingManagement itinerary={itinerary} setActiveTab={setActiveTab} setPriceManagementDot={setPriceManagementDot} setCalendarPricemanagement={setCalendarPricemanagement}/>
                        )}
                        {(itinerary?.prices?.departure1 === "fixedDeparture" || selectedOption === "fixedDeparture") && (
                            <div>
                                <p><FixedDeparture  itinerary={itinerary} setActiveTab={setActiveTab} setPriceManagementDot={setPriceManagementDot} /></p>
                                {/* <SelectedDatePrice itinerary={itinerary} /> */}
                            </div>
                        )}
                    </div>
                </div>
                <div className={` ${activeTab === 'Tab10' ? 'block' : 'hidden'}`}>
                    <PackageFaq itinerary={itinerary} setActiveTab={setActiveTab} setFaqDot={setFaqDot} />
                </div>

                <div className={`${activeTab === 'Tab11' ? 'block' : 'hidden'}`}>
                    <Index setTableData={setTableData} tableData={tableData} setTableColumn={setTableColumn} tableColumn={tableColumn} setTableDot={setTableDot} setActiveTab={setActiveTab} itinerary={itinerary}/>
                    <button className=" bg-black text-white py-1.5 md:w-auto w-full mt-3 md:ml-2 px-3 rounded-md" onClick={handleSubmit}>Save Data</button>
                </div>
                {showCalendarTab && (
                <div className={` ${activeTab === 'Tab12' ? 'block' : 'hidden'}`}>
                    <Calendar itinerary={itinerary} setActiveTab={setActiveTab} setCalenderDot={setCalenderDot} />
                </div>
                )}
               
            </Layout>
       
    );
}
