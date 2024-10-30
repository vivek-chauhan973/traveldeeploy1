// import "../../app/globals.css";
// import Image from 'next/image'

// export default function Promo() {
//     return (
//         <>
//             <div className="container-wrapper py-3 font-lora">
//                 <div className="flex justify-end">
//                     <input className="border " type="text" />
//                 </div>
//                 <div className="grid grid-cols-1 lg:grid-cols-[2fr,1fr]">
//                     <div>
//                         <div className=" py-5 rounded flex flex-col md:flex-row md:items-center gap-5">
//                             <div>
//                                 <Image
//                                     className="w-[500px] h-[180px] object-cover rounded-xl shadow-md"
//                                     src="https://images.unsplash.com/photo-1468818438311-4bab781ab9b8?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                                     alt=""
//                                     width={200}
//                                     height={200}
//                                 />                            </div>
//                             <div className="px-3">
//                                 <p className="font-semibold text-2xl pb-3">Lorem ipsum dolor sit.</p>
//                                 <div className=" line-clamp-2">
//                                     <p className="text-para">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus nobis repellat magnam, fugit maxime iste, ex est, dicta explicabo non ipsa exercitationem!</p>
//                                 </div>

//                                 <div className="flex mt-3 gap-3 mb-3">
//                                     <p className="px-2 text-[11px] font-semibold border rounded-badge text-white  bg-black">Hotel</p>
//                                     <p className="px-2 text-[11px] font-semibold border rounded-badge text-white  bg-black">Hotel</p>
//                                     <p className="px-2 text-[11px] font-semibold border rounded-badge text-white  bg-black">Hotel</p>
//                                 </div>
//                                 <button className="font-semibold text-para hover:underline cursor-pointer text-indigo-800">Read More...</button>
//                             </div>
//                         </div>
//                         <div className=" py-5 rounded flex flex-col md:flex-row md:items-center gap-5">
//                             <div>
//                                 <Image
//                                     className="w-[500px] h-[180px] object-cover rounded-xl shadow-md"
//                                     src="https://images.unsplash.com/photo-1468818438311-4bab781ab9b8?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                                     alt=""
//                                     width={200}
//                                     height={200}
//                                 />
//                             </div>
//                             <div className="px-3">
//                                 <p className="font-semibold text-2xl pb-3">Lorem ipsum dolor sit.</p>
//                                 <div className=" line-clamp-2">
//                                     <p className="text-para">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus nobis repellat magnam, fugit maxime iste, ex est, dicta explicabo non ipsa exercitationem!</p>
//                                 </div>

//                                 <div className="flex mt-3 gap-3 mb-3">
//                                     <p className="px-2 text-[11px] font-semibold border rounded-badge text-white  bg-black">Hotel</p>
//                                     <p className="px-2 text-[11px] font-semibold border rounded-badge text-white  bg-black">Hotel</p>
//                                     <p className="px-2 text-[11px] font-semibold border rounded-badge text-white  bg-black">Hotel</p>
//                                 </div>
//                                 <button className="font-semibold text-para hover:underline cursor-pointer text-indigo-800">Read More...</button>
//                             </div>
//                         </div>

//                         <div>
//                             <div className="flex gap-5 items-center justify-center">
//                                 <span className="border px-2 rounded-xl hover:text-white hover:bg-black cursor-pointer">Prev</span>
//                                 <div className="flex gap-2">
//                                     <span className="border px-2 rounded-xl hover:text-white hover:bg-black cursor-pointer">1</span>
//                                     <span className="border px-2 rounded-xl hover:text-white hover:bg-black cursor-pointer">2</span>
//                                     <span className="border px-2 rounded-xl hover:text-white hover:bg-black cursor-pointer">3</span>
//                                 </div>
//                                 <span className="border px-2 rounded-xl hover:text-white hover:bg-black cursor-pointer">Next</span>
//                             </div>
//                         </div>
//                     </div>
//                     {/* sidebar information code is here down */}
//                     <div>

//                     </div>

//                 </div>
//             </div>

//         </>
//     )
// }


import DesktopHeader from "@/components/Header/DesktopHeader/desktopHeader";
import "../../../src/app/globals.css";
import { Breadcrumbs } from "@mui/material";
import Footer from "@/components/Footer";
import Image from 'next/image';
import BlogPromoFilter from "@/components/Blog/Blog-Detail/Blog-Promo/BlogPromoFilter";
import BlogPromoPackageList from "@/components/Blog/Blog-Detail/Blog-Promo/BlogPromoPackageList";

export default function Promo() {


    return (
        <>
            {/* CarPromoSkeleton */}
            <div className='bg-slate-100'>
                <DesktopHeader />
                <Breadcrumbs />
                {/* <CarPromoHeroSection/> */}
                {/* <SearchHeaderWpr /> */}
                <div className="mb-10">
                    <div className="relative w-full h-80 md:h-96 lg:h-[32rem] overflow-hidden">
                        <Image
                            className=" top-0 left-0 w-full h-full object-cover object-center"
                            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Favit.ac.in%2Fcontact%2F&psig=AOvVaw2a30A9-VUVeov-cz3KWFaz&ust=1729578845164000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNCwxbntnokDFQAAAAAdAAAAABAE"
                            alt=""
                            width={100}
                            height={100}
                            onError={(e) => e.target.src = 'https://images.unsplash.com/photo-1719937050640-71cfd3d851be?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                        />
                    </div>
                    <div className='container-wrapper py-5'>
                        <h4 className="md:text-2xl text-md font-medium mb-2 capitalize">Blog Promo</h4>
                        <p className="text-para line-clamp-5">
                            A great About Us page comes across as human. It puts a face to a name,
                            showing your potential customers that you are a real person. Any well-written About page makes the reader feel a
                            sense of connection with the brand. It makes them feel like they know you and that you have something in common.
                            A great About Us page comes across as human. It puts a face to a name,
                            showing your potential customers that you are a real person. Any well-written About page makes the reader feel a
                            sense of connection with the brand. It makes them feel like they know you and that you have something in common.
                            A great About Us page comes across as human. It puts a face to a name,
                        </p>
                    </div>
                </div>
                <div className="container-wrapper grid grid-cols-1 xl:grid-cols-[300px,2fr] gap-5 relative">
                    <div className='relative'>
                        <div className='hidden xl:block'>
                            <BlogPromoFilter />
                        </div>
                    </div>
                    <div>
                        <BlogPromoPackageList />
                    </div>
                </div>
                <div className="border-t border">
                    <div className="w-full md:w-3/4 m-auto px-2 pb-5">
                        <div className="text-center mt-5 mb-10">
                            <p className="md:text-[22px] text-[20px] font-semibold mb-2 capitalize">
                                Frequently Asked Questions (FAQs) <span className='lowercase'>for</span>
                            </p>
                            <p className="text-para md:text-base">
                                We help you prepare for your trip and ensure an effortless and enjoyable travel experience.
                            </p>
                        </div>
                        {/* <CraPromoFaq /> */}
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}
