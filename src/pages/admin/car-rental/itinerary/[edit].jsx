import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/router";
import CarCalendar from "@/components/admin/itineraryCreate/CarCalender";
import ItineraryText from "@/components/admin/itineraryCreate/CarItineraryText_Faq";
import PackageFaq from "@/components/admin/itineraryCreate/CarPackageFaq";
import { useSearchParams } from "next/navigation";
import GoogleMap from "@/components/admin/itineraryCreate/GoogleMap";
import dynamic from 'next/dynamic';
const LuPackagePlus = dynamic(() => import('react-icons/lu').then(mod => mod.LuPackagePlus));
const HiOutlineArrowNarrowRight = dynamic(() => import('react-icons/hi').then(mod => mod.HiOutlineArrowNarrowRight));
import Layout from "@/components/admin/Layout";
import CarPrimaryItinerary from "@/components/admin/itineraryCreate/CarPrimaryItinerary";
import CarImageUploading from "@/components/admin/itineraryCreate/CarImageUploading";
import CarHighlightAbout from "@/components/admin/itineraryCreate/CarHighlightAbout";
import CarTourInformation from "@/components/admin/itineraryCreate/CarTourInformation";
import CarSeoField from "@/components/admin/itineraryCreate/CarSeoField";
import CarFixedDeparture from "@/components/admin/itineraryCreate/CarFixedDeparture";
import CarIndex from "@/components/dy/CarIndex";
export default function CreatePackage() {
    const [pricingPopup, setPricingPopup] = useState(true);
    const router = useRouter();
    const { edit } = router.query;
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
            const reponse = await fetch(`/api/cars/package/table/${itinerary?._id}`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ tableData, tableColumn })
            });
        } catch (error) {
            console.log("error :: ", error);
        }

    }

    const handleTabClick = (tabname) => {
        setActiveTab(tabname);
    };

    const getItinerary = useCallback(async () => {
        try {
            const itinerary = await (await fetch('/api/cars/package/' + edit)).json();

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
    console.log("itinineary --- > ",itinerary);
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
                        {/* <button onClick={() => handleTabClick('Tab6')} className={`${activeTab === "Tab6" ? "border-b-2 scale-105 border-black text-black" : "border-black text-slate-400"} px-3 py-1`}>
                            Flight {flightDot ? <span className="text-[12px] text-green-500">●</span> : <span className="text-[12px] text-red-500">●</span>}
                        </button> */}
                        <button onClick={() => handleTabClick('Tab6')} className={`${activeTab === "Tab6" ? "border-b-2 scale-105 border-black text-black" : "border-black text-slate-400"} px-3 py-1`}>
                            Tour Info {tourDot ? <span className="text-[12px] text-green-500">●</span> : <span className="text-[12px] text-red-500">●</span>}
                        </button>
                        <button onClick={() => handleTabClick('Tab7')} className={`${activeTab === "Tab7" ? "border-b-2 scale-105 border-black text-black" : "border-black text-slate-400"} px-3 py-1`}>
                            SEO Field {seoDot ? <span className="text-[12px] text-green-500">●</span> : <span className="text-[12px] text-red-500">●</span>}
                        </button>
                        <button onClick={() => handleTabClick('Tab8')} className={`${activeTab === "Tab8" ? "border-b-2 scale-105 border-black text-black" : "border-black text-slate-400"} px-3 py-1`}>
                           Car Pricing Management {priceManagementDot ? <span className="text-[12px] text-green-500">●</span> : <span className="text-xxs text-red-500">●</span>}
                        </button>                   
                        <button onClick={() => handleTabClick('Tab9')} className={`${activeTab === "Tab9" ? "border-b-2 scale-105 border-black text-black" : "border-black text-slate-400"} px-3 py-1`}>
                            FAQ {faqDot ? <span className="text-[12px] text-green-500">●</span> : <span className="text-[12px] text-red-500">●</span>}
                        </button>
                        <button onClick={() => handleTabClick('Tab10')} className={`${activeTab === "Tab10" ? "border-b-2 scale-105 border-black text-black" : "border-black text-slate-400"} px-3 py-1`}>
                            Table {tableDot ? <span className="text-[12px] text-green-500">●</span> : <span className="text-[12px] text-red-500">●</span>}
                        </button>
                        {showCalendarTab && (
                        <button onClick={() => handleTabClick('Tab11')} className={`${activeTab === "Tab11" ? "border-b-2 scale-105 border-black text-black" : "border-black text-slate-400"} px-3 py-1`}>
                            AddGuestCalendar  {calenderDot ? <span className="text-[12px] text-green-500">●</span> : <span className="text-[12px] text-red-500">●</span>}
                        </button>
                        )}
                       
                    </div>
                </div>

                <div className={`tab-content ${activeTab === 'Tab1' ? 'block' : 'hidden'}`}>
                    <CarPrimaryItinerary setActiveTab={setActiveTab} itinerary={itinerary} itineraryInfo={undefined} setItineraryInfo={undefined} setBasicDot={setBasicDot} />
                </div>
                <div className={`tab-content ${activeTab === 'Tab2' ? 'block' : 'hidden'}`}>
                    <div className=" border rounded p-4">
                        <div>
                            <p className="text-[15px] font-semibold">Image Upload</p>
                        </div>
                        <CarImageUploading itinerary={itinerary} setActiveTab={setActiveTab} setImageDot={setImageDot} />
                    </div>
                </div>
                <div className={` ${activeTab === 'Tab3' ? 'block' : 'hidden'}`}>
                    <CarHighlightAbout setActiveTab={setActiveTab} itinerary={itinerary} itineraryInfo={undefined} setItineraryInfo={undefined} setHighlightDot={setHighlightDot} />
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
                    <CarTourInformation itinerary={itinerary} setActiveTab={setActiveTab} setTourDot={setTourDot} />
                </div>
                <div className={` ${activeTab === 'Tab7' ? 'block' : 'hidden'}`}>
                    <CarSeoField itinerary={itinerary} setActiveTab={setActiveTab} setSeoDot={setSeoDot} />
                </div>
                <div className={` ${activeTab === 'Tab8' ? 'block' : 'hidden'}`}>    
                     <CarFixedDeparture  itinerary={itinerary} setActiveTab={setActiveTab} setPriceManagementDot={setPriceManagementDot} />
                </div>
                <div className={` ${activeTab === 'Tab9' ? 'block' : 'hidden'}`}>
                    <PackageFaq itinerary={itinerary} setActiveTab={setActiveTab} setFaqDot={setFaqDot} />
                </div>

                <div className={`${activeTab === 'Tab10' ? 'block' : 'hidden'}`}>
                    <CarIndex setTableData={setTableData} tableData={tableData} setTableColumn={setTableColumn} tableColumn={tableColumn} setTableDot={setTableDot} setActiveTab={setActiveTab} itinerary={itinerary}/>
                    <button className=" bg-black text-white py-1.5 md:w-auto w-full mt-3 md:ml-2 px-3 rounded-md" onClick={handleSubmit}>Save Data</button>
                </div>
                {showCalendarTab && (
                <div className={` ${activeTab === 'Tab11' ? 'block' : 'hidden'}`}>
                    <CarCalendar itinerary={itinerary} setActiveTab={setActiveTab} setCalenderDot={setCalenderDot} />
                </div>
                )}
               
            </Layout>
    
    );
}
