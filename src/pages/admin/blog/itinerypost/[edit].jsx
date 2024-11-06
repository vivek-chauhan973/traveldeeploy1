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
import { AppProvider, useAppContext } from "@/components/admin/context/Package/AddGuest";
import PriceRange from "@/components/admin/itineraryCreate/PriceRange";
import ImageUploading from "@/components/admin/itineraryCreate/ImageUploading";
import SelectedDatePrice from "@/components/admin/itineraryCreate/SelectedDatePrice";
import BlogDetailBanner from "@/components/admin/blog/Blog Detail/BlogDetailBanner";
import BlogDetailSeo from "@/components/admin/blog/Blog Detail/BlogDetailSeo";
import DetailsQuestion from "@/components/admin/blog/Blog Detail/DetailsQuestion";


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
        } catch (error) {
            console.log("error :: ", error);
        }

    }

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

    return (
        <AppProvider>
            <Layout>
                <div className="flex items-center gap-5 text-primary pb-3">
                    <LuPackagePlus size={28} className="font-semibold" />
                    <p className="md:text-[28px] text-2xl text-black">Create Package</p>
                    <HiOutlineArrowNarrowRight size={28} className=" text-teal-700" />
                </div>
                <div className="border-b border-slate-300 mb-5">
                    <div className="flex gap-2 text-[14px] pt-5 pb-2 flex-wrap">
                        <button onClick={() => handleTabClick('Tab1')} className={`${activeTab === "Tab1" ? "border-b-2 scale-105 border-black text-black" : "border-black text-slate-400"} px-3 py-1`}>
                            Basic info 
                        </button>
                        <button onClick={() => handleTabClick('Tab2')} className={`${activeTab === "Tab2" ? "border-b-2 scale-105 border-black text-black" : "border-black text-slate-400"} px-3 py-1`}>
                            Images 
                        </button>
                        <button onClick={() => handleTabClick('Tab3')} className={`${activeTab === "Tab3" ? "border-b-2 scale-105 border-black text-black" : "border-black text-slate-400"} px-3 py-1`}>
                            Seo Field 
                        </button>                                        
                    </div>
                </div>

                <div className={`tab-content ${activeTab === 'Tab1' ? 'block' : 'hidden'}`}>
                    <BlogDetailBanner setActiveTab={setActiveTab} itinerary={itinerary} itineraryInfo={undefined} setItineraryInfo={undefined}  />
                </div>
                <div className={`tab-content ${activeTab === 'Tab2' ? 'block' : 'hidden'}`}>
                    <DetailsQuestion itinerary={itinerary} setActiveTab={setActiveTab} />
                </div>
                <div className={` ${activeTab === 'Tab3' ? 'block' : 'hidden'}`}>
                <BlogDetailSeo/>
                </div>
              
               
               
            </Layout>
        </AppProvider>
    );
}
