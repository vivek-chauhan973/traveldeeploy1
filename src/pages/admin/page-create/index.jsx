import { useState } from "react"

import Layout from "@/components/admin/Layout"
import { LuPackagePlus } from "react-icons/lu";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import TermandCondition from "@/components/admin/allPages/Term&Condition";
import AboutUs from "@/components/admin/allPages/aboutUs";
import PrivacyPolicy from "@/components/admin/allPages/privacyPolicy";
import RefundandCancellation from "@/components/admin/allPages/Refund&Cancellation";
import ContactUs from "@/components/admin/allPages/ContactUs";
import Payment from "@/components/admin/allPages/Payment";
import { MdAddToPhotos } from "react-icons/md";
import { AppProvider } from "@/components/admin/context/Package/AddGuest";


const Index= () => {
    const [activeTab, setActiveTab] = useState('Tab1')



    const handleTabClick = (tabname) => {
        setActiveTab(tabname)
    }


    return (
        <AppProvider>
        <Layout>
            <div className="flex items-center gap-5 text-primary pb-3">
                <LuPackagePlus size={28} className="font-semibold" />
                <p className="text-[28px] text-black">Create Page</p>
                <HiOutlineArrowNarrowRight size={28} className=" text-teal-700" />
            </div>
            {/* <h3 className="text-lg">Edit Itinerary</h3> */}
            <div className="border-b border-slate-300 mb-5">
                <div className="flex gap-2 text-[14px] pt-5 pb-2 flex-wrap">
                    <button onClick={() => handleTabClick('Tab1')} className={`${activeTab === "Tab1" ? "border-b-2 scale-105 border-black text-black" : "border-black text-slate-400"}  px-3 py-1`}>About us</button>
                    <button onClick={() => handleTabClick('Tab2')} className={`${activeTab === "Tab2" ? "border-b-2 scale-105 border-black text-black" : "border-black text-slate-400"}  px-3 py-1`}>Contact us</button>
                    <button onClick={() => handleTabClick('Tab3')} className={`${activeTab === 'Tab3' ? "border-b-2 scale-105 border-black text-black" : "border-black text-slate-400"}  px-3 py-1`}>Payment</button>
                    <button onClick={() => handleTabClick('Tab4')} className={`${activeTab === 'Tab4' ? "border-b-2 scale-105 border-black text-black" : "border-black text-slate-400"}  px-3 py-1`}>Privacy Policy</button>
                    <button onClick={() => handleTabClick('Tab5')} className={`${activeTab === "Tab5" ? "border-b-2 scale-105 border-black text-black" : "border-black text-slate-400"}  px-3 py-1`}>Refund/Cancellation</button>
                    <button onClick={() => handleTabClick('Tab6')} className={`${activeTab === "Tab6" ? "border-b-2 scale-105 border-black text-black" : "border-black text-slate-400"}  px-3 py-1`}>Term/Condition</button>
                    {/* dynamically tabs and create page enable and change name of tab also  */}
                    <button><MdAddToPhotos size={22}  className="font-semibold hover:text-primary"/></button>
                </div>
            </div>
            <div className={`tab-content ${activeTab === 'Tab1' ? 'block' : 'hidden'}`}>
                <AboutUs />
            </div>
            <div className={` ${activeTab === 'Tab2' ? 'block' : 'hidden'}`}>
                <ContactUs />
            </div>
            <div className={` ${activeTab === 'Tab3' ? 'block' : 'hidden'}`}>
                <Payment />
            </div>
            <div className={` ${activeTab === 'Tab4' ? 'block' : 'hidden'}`}>
                <PrivacyPolicy />
            </div>
            <div className={` ${activeTab === 'Tab5' ? 'block' : 'hidden'}`}>
                <RefundandCancellation />
            </div>
            <div className={` ${activeTab === 'Tab6' ? 'block' : 'hidden'}`}>
                <TermandCondition />
            </div>
            {/* here is also create a new dynamic page to pushlish and rename the value of tab */}
            {/* <div className={` ${activeTab === 'Tab6' ? 'block' : 'hidden'}`}>
                <TermandCondition />
            </div> */}

        </Layout>
        </AppProvider>
    )
}

export default Index;