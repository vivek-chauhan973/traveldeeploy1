// import React, { useEffect, useState } from 'react'
// import "../../app/globals.css";
// import Image from 'next/image';
// import { Link as ScrollLink } from "react-scroll";
// import Footer from '@/components/Footer';
// import Link from 'next/link';
// import { Html } from 'next/document';
// import DesktopHeader from './../../components/Header/DesktopHeader/desktopHeader';
// import Breadcrumbs from './../../components/Breadcrumbs';

// const fetchAboutUsPage = async () => {
//   const res = await fetch(`/api/static-page/static-page-type?name=about-us`);
//   return await res.json();
// };
// const BackendAbout = () => {
//   const [aboutData,setAboutData]=useState();

//   useEffect(()=>{
//     fetchAboutUsPage().then(res=>{
//       console.log("about page is here ---> ",res?.data)
//       setAboutData(res?.data);
//     })
//   },[])

//   const [activeIndex, setActiveIndex] = useState(null);

//   console.log("aboutData",aboutData);
  
//   return (
//     <div>
//       <DesktopHeader/>
//       <Breadcrumbs />
//       <div>
//         {/* herosection start */}
//         {/* medium devices */}
//         <div className='md:block hidden'>
//           <div className='w-full md:h-[400px] xl:h-[500px] flex relative'>
//             <div className='w-[30%] h-full bg-black flex items-center justify-end'>
//             </div>
//             <div className='relative w-[80%] h-full flex'>
//               <Image src="/assets/staticimage/aboutUs.jpg" width={200} height={200} alt="" className='relative w-full h-full' />
//               <div className="absolute w-full h-full bg-gradient-to-r from-black to-gray">
//               </div>
//             </div>
//             <div className='w-full h-full absolute'>
//               <div className='w-[60%] h-full flex items-center justify-end px-16'>
//                 <div className='w-full flex flex-col justify-center items-center'>
//                   <h2 className="xl:text-[55px] md:text-[35px] leading-tight uppercase font-bold text-[#D45426] text-center">
//                     About us <br /> <span className='text-white'>Excellence Defined</span>
//                   </h2>
//                   <p className="my-5 text-base text-white text-center">
//                     At BizareXpedtion, we believe that travel should be an experience that transcends ordinary expectaions.
//                     we do not just plan trips; we craft unforgeetable journeys that embody the highest standard of service, comfort, and luxury.
//                   </p>
//                   <Link href="#">
//                     <button className="mt-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-2.5 px-4 rounded text-sm">
//                       Explore Now
//                     </button>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* small devices */}
//         <div className='md:hidden'>
//           <div className='w-full flex items-center justify-center bg-black p-5'>
//             <div className='w-full flex flex-col justify-center items-center'>
//               <h2 className="text-[29px] leading-tight uppercase font-bold text-[#D45426] text-center">
//                 About us <br /> <span className='text-white'>Excellence Defined</span>
//               </h2>
//               <p className="my-5 text-sm  text-white text-center">
//                 At BizareXpedtion, we believe that travel should be an experience that transcends ordinary expectaions.
//                 we do not just plan trips; we craft unforgeetable journeys that embody the highest standard of service, comfort, and luxury.
//               </p>
//               <Link href="#">
//                 <button className="mt-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold  py-1.5 px-3 rounded text-sm">
//                   Explore Now
//                 </button>
//               </Link>
//             </div>
//           </div>
//           <div className='relative w-full h-72'>
//             <Image src="/assets/staticimage/aboutUs.jpg" width={200} height={200} alt="" className='relative w-full h-full' />
//           </div>
//         </div>
//         {/* herosection end */}
//         <div className="container-wrapper py-10">
//           <div className="  grid grid-cols-1 xl:grid-cols-[1fr,2fr] gap-7">
//             <div className="">
//               <div className="sticky top-40 z-10 bg-white shadow-xl rounded-xl md:p-7 p-5">
//                 <h4 className="text-md font-semibold mb-4 capitalize pl-3">About US</h4>
//                 <div>
//                   {aboutData?.topics?.map((item, index) => (
//                     <ScrollLink
//                       key={index}
//                       to={index}
//                       spy={true}
//                       smooth={true}
//                       offset={-100}
//                       duration={500}
//                       onClick={() => setActiveIndex(index)}
//                     >
//                       <p
//                         className={`pl-3 text-md font-medium mb-4 hover:cursor-pointer ${activeIndex === index
//                           ? "border-l-4 border-l-primary text-black"
//                           : " text-gray-400"
//                           }`}
//                       >
//                         {item.title}
//                       </p>
//                     </ScrollLink>
//                   ))}
//                 </div>
//               </div>
//             </div>
//             <div className="md:p-10 p-5 bg-white shadow-xl rounded-xl">
//               <div id="ItinerarySubSection" className="mt-5 pb-5 border-b-2">
//                 <p className="text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: aboutData?.contentSummary }} ></p>
//               </div>
//               {aboutData?.topics?.map((item, index) => (
//                 <div key={index} className="pt-7" id={index}>
//                   <h3 className="md:text-2xl text-xl font-medium mb-4">
//                     {item.title} 
//                   </h3>
//                   <p className="text-base leading-relaxed about-margin"  dangerouslySetInnerHTML={{ __html: item.description }}> 
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//         {/* footer is here */}
//         <Footer />
//       </div>
//     </div>
//   )
// }

// export default BackendAbout;