// import Layout from "@/components/admin/Layout";
// import SparklineChart from "@/components/admin/dashboard/Sparkline";
// import SparklineChart2 from "@/components/admin/dashboard/Sparkline2";
// import SparklineChart3 from "@/components/admin/dashboard/Sparkline3";
// import SparklineChart4 from "@/components/admin/dashboard/Sparkline4";
// import { GrAd } from "react-icons/gr";
// import { LuPackageOpen } from "react-icons/lu";
// import { PiCarProfileLight } from "react-icons/pi";
// import { RiHotelLine } from "react-icons/ri";
// import { GiMoneyStack } from "react-icons/gi";
// import { PiPackageDuotone } from "react-icons/pi";

// import Chart1 from "@/components/admin/dashboard/charts/chart1";
// import Chart2 from "@/components/admin/dashboard/charts/radialchart";
// import List from "@/components/admin/dashboard/transaction/index";
// import BlogTable from "@/components/admin/dashboard/BlogTable";


// export default function AdminDashboard() {


//     return (
//         <Layout>
//             <div className="w-full ">

//                 {/* Main Content */}
//                 <div className="container mx-auto p-4">
//                     <h1 className="text-para font-bold mb-4">Dashboard</h1>

//                     <div className="grid grid-cols-4 gap-5 ">
//                         <div>
//                             <div className="relative group border-l-2 border-teal-700 backdrop-blur-xl bg-amber-50/40  pt-5 overflow-hidden rounded-lg shadow-md  max-w-[320px]">
//                                 <SparklineChart />
//                                 {/* <MixedChart/> */}
//                                 {/* <OverviewChart /> */}
//                             <div className="absolute  right-5 top-5">
//                                 <PiPackageDuotone className="text-[#004080]/20 group-hover:text-[#004080] group-hover:scale-105 group-hover:drop-shadow-lg" size={40}/>
//                             </div>
//                             </div>
//                         </div>
//                         <div>
//                             <div className="relative group border-l-2 border-teal-700 backdrop-blur-xl bg-amber-50/40  pt-5 overflow-hidden rounded-lg shadow-md  max-w-[320px]">
//                                 <SparklineChart2 />
//                                 {/* <MixedChart/> */}
//                                 {/* <OverviewChart /> */}
//                             <div className="absolute  right-5 top-5">
//                                 <PiCarProfileLight className="text-[#004080]/20 group-hover:text-[#004080] group-hover:scale-105 group-hover:drop-shadow-lg" size={40}/>
//                             </div>
//                             </div>
//                         </div>
//                         <div>
//                             <div className="relative group border-l-2 border-teal-700 backdrop-blur-xl bg-amber-50/40  pt-5 overflow-hidden rounded-lg shadow-md  max-w-[320px]">
//                                 <SparklineChart3 />
//                                 {/* <MixedChart/> */}
//                                 {/* <OverviewChart /> */}
//                             <div className="absolute  right-5 top-5">
//                                 <RiHotelLine className="text-[#004080]/20 group-hover:text-[#004080] group-hover:scale-105 group-hover:drop-shadow-lg" size={40}/>
//                             </div>
//                             </div>
//                         </div>
//                         <div>
//                             <div className="relative group border-l-2 border-teal-700 backdrop-blur-xl bg-gradient-to-r from-cyan-500/50 to-blue-500/50    pt-5 overflow-hidden rounded-lg shadow-md  max-w-[320px]">
//                                 <SparklineChart4 />
//                                 {/* <MixedChart/> */}
//                                 {/* <OverviewChart /> */}
//                             <div className="absolute right-5 top-5 ">
//                                 <GiMoneyStack className="text-white group-hover:scale-105 group-hover:drop-shadow-lg" size={40}/>
//                             </div>
//                             </div>
//                         </div>
//                         {/* <div>
//                             <div className="border-l-2 border-teal-700 bg-gradient-to-r from-[#c2cada] to-[#8cdac3]  p-5 rounded-lg shadow-md  max-w-[320px]">
//                                 <SparklineChart />
                               
                            
//                             </div>
//                         </div> */}
                        
                        
                            
//                         {/* <div className="bg-white p-5 rounded-lg shadow-md">
//                             <PieChart/>
//                             <SparklineChart/>
//                             <GaugeChart/>
//                         </div> */}
//                     </div>
                    
//                     <div className="grid grid-cols-[50vw,auto] gap-5 mt-5">
//                         <div className="border-l-2 border-teal-700 pt-2 bg-white/30 backdrop-blur-lg  rounded-lg shadow-md mt-5">
//                             <Chart1/>
//                         </div>
//                         <div className="border-l-2 border-teal-700 pt-2 bg-white/30 backdrop-blur-lg  rounded-lg shadow-md mt-5">
//                             <div className=" w-72 m-auto">
//                                 <Chart2/>
//                             </div>
//                             <div className="flex">
//                                 <p className="m-auto font-semibold text-md">Income</p>
//                             </div>
//                         </div>

//                     </div>
                    

//                     {/* repeat code is here */}
//                     <div className="grid grid-cols-[auto,50vw] gap-5 mt-5">
//                         <div className="border-l-2 border-teal-700 p-2 bg-white/30 backdrop-blur-lg  rounded-lg shadow-md mt-5">
                           
//                             <div>
//                                 <List/>
//                             </div>
//                         </div>
//                         <div className="border-l-2 border-teal-700 bg-white/30 backdrop-blur-lg  rounded-lg shadow-md mt-5">
//                             <div className="">
//                                 <div className="px-2 py-1">
//                                     <p className="font-semibold text-md">Recent Post</p>
//                                 </div>
//                                 <div className="h-96 overflow-y-auto ">
//                                     <BlogTable/>
//                                     <BlogTable/>
//                                     <BlogTable/>
//                                     <BlogTable/>
//                                     <BlogTable/>
//                                     <BlogTable/>
//                                     <BlogTable/>
//                                 </div>
//                             </div>
//                         </div>

//                     </div>
//                     {/* repeat code is here */}


//                     {/* Your other dashboard components go here */}
//                 </div>
//             </div>
//         </Layout>
//     );x
// }

// ====================Today(06/07/24) changes (Rakesh)================================

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
import Chart2 from "@/components/admin/dashboard/charts/radialchart";
import List from "@/components/admin/dashboard/transaction/index";
import BlogTable from "@/components/admin/dashboard/BlogTable";
import { AppProvider } from "@/components/admin/context/Package/AddGuest";

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
                            <Chart2 />
                        </div>
                        <div className="flex">
                            <p className="m-auto font-semibold text-md">Income</p>
                        </div>
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
