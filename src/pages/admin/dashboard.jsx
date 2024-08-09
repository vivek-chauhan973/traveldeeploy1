

import Layout from "@/components/admin/Layout";
import SparklineChart from "@/components/admin/dashboard/Sparkline";
import SparklineChart2 from "@/components/admin/dashboard/Sparkline2";
import SparklineChart3 from "@/components/admin/dashboard/Sparkline3";
import SparklineChart4 from "@/components/admin/dashboard/Sparkline4";
import { GrAd } from "react-icons/gr";
import { LuPackageOpen } from "react-icons/lu";
import { PiCarProfileLight } from "react-icons/pi";
import { RiHotelLine } from "react-icons/ri";
import { GiMoneyStack } from "react-icons/gi";
import { PiPackageDuotone } from "react-icons/pi";
import Chart1 from "@/components/admin/dashboard/charts/chart1";

import List from "@/components/admin/dashboard/transaction/index";
import BlogTable from "@/components/admin/dashboard/BlogTable";
import { AppProvider } from "@/components/admin/context/Package/AddGuest";
// import Gst from "@/components/admin/dashboard/Gst";

export default function AdminDashboard() {
    return (
        <AppProvider>
        <Layout>
            <div className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">
            
                {/* Main Content */}
                <h1 className="text-para font-bold mb-4">Dashboard</h1>

                {/* Cards Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="relative group border-l-2 border-teal-700 backdrop-blur-xl bg-amber-50/40 pt-5 overflow-hidden rounded-lg shadow-md">
                        <SparklineChart />
                        <div className="absolute right-5 top-5">
                            <PiPackageDuotone className="text-[#004080]/20 group-hover:text-[#004080] group-hover:scale-105 group-hover:drop-shadow-lg" size={40} />
                        </div>
                    </div>

                    <div className="relative group border-l-2 border-teal-700 backdrop-blur-xl bg-amber-50/40 pt-5 overflow-hidden rounded-lg shadow-md">
                        <SparklineChart2 />
                        <div className="absolute right-5 top-5">
                            <PiCarProfileLight className="text-[#004080]/20 group-hover:text-[#004080] group-hover:scale-105 group-hover:drop-shadow-lg" size={40} />
                    </div>
                    </div>

                    <div className="relative group border-l-2 border-teal-700 backdrop-blur-xl bg-amber-50/40 pt-5 overflow-hidden rounded-lg shadow-md">
                        <SparklineChart3 />
                        <div className="absolute right-5 top-5">
                            <RiHotelLine className="text-[#004080]/20 group-hover:text-[#004080] group-hover:scale-105 group-hover:drop-shadow-lg" size={40} />
                        </div>
                    </div>

                    <div className="relative group border-l-2 border-teal-700 bg-gradient-to-r from-cyan-500/50 to-blue-500/50 pt-5 overflow-hidden rounded-lg shadow-md">
                        <SparklineChart4 />
                        <div className="absolute right-5 top-5">
                            <GiMoneyStack className="text-white group-hover:scale-105 group-hover:drop-shadow-lg" size={40} />
                        </div>
                    </div>
                </div>

                {/* Charts Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5">
                    <div className="border-l-2 border-teal-700 pt-2 bg-white/30 backdrop-blur-lg rounded-lg shadow-md mt-5">
                        <Chart1 />
                    </div>
                    <div className="border-l-2 border-teal-700 pt-2 bg-white/30 backdrop-blur-lg rounded-lg shadow-md mt-5">
                        <div className="w-72 m-auto">
                           {/* <Gst /> */}
                        </div>
                        <div className="flex">
                            <p className="m-auto font-semibold text-md">Income</p>
                        </div>
                        {/* ------------- */}
                        <div className="p-3"> 
                            <div className="p-4 rounded mb-2 overflow-scroll">
                                <div className=" sm:flex items-center md:mb-5 mb-2">
                                    <label htmlFor="ratingValue" className=" font-semibold w-36 text-para">Rating Value :</label>
                                    <input type="text" id="ratingValue" className='  border w-full  rounded-md h-8 px-2 focus:border-primary outline-none text-para'
                                        placeholder="Enter Rating Value " />
                                </div>
                                <div className=" sm:flex items-center md:mb-5 mb-2">
                                    <label htmlFor="ratingCount" className=" font-semibold w-36 text-para">Rating Count :</label>
                                    <input type="text" id="ratingCount" className='  border w-full  rounded-md h-8 px-2 focus:border-primary outline-none text-para'
                                        placeholder="Enter Rating Count " />
                                </div>
                                <div className=" sm:flex items-center md:mb-4 mb-2">
                                    <label htmlFor="startDate" className=" font-semibold w-36 text-para">Start Date :</label>
                                    <input type="date" id="startDate" className='  border w-full  rounded-md h-8 px-2 focus:border-primary outline-none text-para'
                                        placeholder="Enter Start Date"/>
                                </div>
                                <div className=" sm:flex items-center md:mb-5 mb-2">
                                    <label htmlFor="endDate" className=" font-semibold w-36 text-para">Price Valid Until/End Date :</label>
                                    <input type="Date" id="endDate" className='  border w-full  rounded-md h-8 px-2 focus:border-primary outline-none text-para'
                                        placeholder="Enter End Date "/>
                                </div>
                                
                                <button className="w-full rounded py-2 bg-black text-white">
                                    Save
                                </button>      
                            </div>
                        </div>
                        {/* ---------- */}
                    </div>
                </div>

                {/* Lists and Tables Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5">
                    <div className="border-l-2 border-teal-700 p-2 bg-white/30 backdrop-blur-lg rounded-lg shadow-md mt-5">
                        <List />
                    </div>
                    <div className="border-l-2 border-teal-700 bg-white/30 backdrop-blur-lg rounded-lg shadow-md mt-5">
                        <div className="px-2 py-1">
                            <p className="font-semibold text-md">Recent Post</p>
                        </div>
                        <div className="h-96 overflow-y-auto">
                            <BlogTable />
                            <BlogTable />
                            <BlogTable />
                            <BlogTable />
                            <BlogTable />
                            <BlogTable />
                            <BlogTable />
                        </div>
                    </div>
                </div>

            </div>
        </Layout>
        </AppProvider>
    );
}
