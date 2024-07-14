

import "../app/globals.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";


// import Slider from "react-slick";

// const Reviews = () => {
//     return (
//         <>
//             <div className="flex items-start bg-white p-4 rounded">
//                 <div className="flex-shrink-0">
//                     <div className="inline-block relative">
//                         <div className="relative w-16 h-16 rounded-full overflow-hidden">
//                             <img className="absolute top-0 left-0 w-full h-full bg-cover object-fit object-cover" src="https://picsum.photos/id/646/200/200" alt="Profile picture" />
//                             <div className="absolute top-0 left-0 w-full h-full rounded-full shadow-inner"></div>
//                         </div>
//                         <svg className="fill-current text-white bg-green-600 rounded-full p-1 absolute bottom-0 right-0 w-6 h-6 -mx-1 -my-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
//                             <path d="M19 11a7.5 7.5 0 0 1-3.5 5.94L10 20l-5.5-3.06A7.5 7.5 0 0 1 1 11V3c3.38 0 6.5-1.12 9-3 2.5 1.89 5.62 3 9 3v8zm-9 1.08l2.92 2.04-1.03-3.41 2.84-2.15-3.56-.08L10 5.12 8.83 8.48l-3.56.08L8.1 10.7l-1.03 3.4L10 12.09z" />
//                         </svg>
//                     </div>
//                 </div>
//                 <div className="ml-6">
//                     <p className="flex items-baseline">
//                         <span className="text-gray-600 font-bold">Mary T.</span>
//                         <span className="ml-2 text-green-600 text-xs">Verified Buyer</span>
//                     </p>
//                     <div className="flex items-center mt-1">
//                         <svg className="w-4 h-4 fill-current text-yellow-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
//                         <svg className="w-4 h-4 fill-current text-yellow-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
//                         <svg className="w-4 h-4 fill-current text-yellow-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
//                         <svg className="w-4 h-4 fill-current text-yellow-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
//                         <svg className="w-4 h-4 fill-current text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
//                     </div>
//                     {/* <div className="flex items-center mt-4 text-gray-600">
//                         <div className="flex items-center">
//                             <span className="text-sm">Product Quality</span>
//                             <div className="flex items-center ml-2">
//                                 <svg className="w-3 h-3 fill-current text-yellow-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
//                                 <svg className="w-3 h-3 fill-current text-yellow-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
//                                 <svg className="w-3 h-3 fill-current text-yellow-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
//                                 <svg className="w-3 h-3 fill-current text-yellow-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
//                                 <svg className="w-3 h-3 fill-current text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
//                             </div>
//                         </div>
//                         <div className="flex items-center ml-4">
//                             <span className="text-sm">Purchasing Experience</span>
//                             <div className="flex items-center ml-2">
//                                 <svg className="w-3 h-3 fill-current text-yellow-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
//                                 <svg className="w-3 h-3 fill-current text-yellow-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
//                                 <svg className="w-3 h-3 fill-current text-yellow-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
//                                 <svg className="w-3 h-3 fill-current text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
//                                 <svg className="w-3 h-3 fill-current text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
//                             </div>
//                         </div>
//                     </div> */}
//                     <div className="mt-3">
//                         <span className="font-bold">Sapien consequat eleifend!</span>
//                         <p className="mt-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
//                     </div>
//                     {/* <div className="flex items-center justify-between mt-4 text-sm text-gray-600 fill-current">
//                         <button className="flex items-center">
//                             <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.08 12.16A2.99 2.99 0 0 1 0 10a3 3 0 0 1 5.08-2.16l8.94-4.47a3 3 0 1 1 .9 1.79L5.98 9.63a3.03 3.03 0 0 1 0 .74l8.94 4.47A2.99 2.99 0 0 1 20 17a3 3 0 1 1-5.98-.37l-8.94-4.47z" /></svg>
//                             <span className="ml-2">Share</span>
//                         </button>
//                         <div className="flex items-center">
//                             <span>Was this review helplful?</span>
//                             <button className="flex items-center ml-6">
//                                 <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M11 0h1v3l3 7v8a2 2 0 0 1-2 2H5c-1.1 0-2.31-.84-2.7-1.88L0 12v-2a2 2 0 0 1 2-2h7V2a2 2 0 0 1 2-2zm6 10h3v10h-3V10z" /></svg>
//                                 <span className="ml-2">56</span>
//                             </button>
//                             <button className="flex items-center ml-4">
//                                 <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M11 20a2 2 0 0 1-2-2v-6H2a2 2 0 0 1-2-2V8l2.3-6.12A3.11 3.11 0 0 1 5 0h8a2 2 0 0 1 2 2v8l-3 7v3h-1zm6-10V0h3v10h-3z" /></svg>
//                                 <span className="ml-2">10</span>
//                             </button>
//                         </div>
//                     </div> */}
//                 </div>
//             </div>
//         </>
//     )
// }



// export default function () {
//     var settings = {
//         dots: false,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,

//     };
//     return (
//         <>

//             <div className="bg-cyan-950 mt-10">
//                 <div className=" ">
//                     <div className="text-center pt-10">
//                         <h3 className="text-2xl leading-8 font-semibold text-white">Bizare Expenditure tour reviews</h3>
//                         <p className="text-xs leading-8 font-semibold text-white"> What are you waiting for? Chalo Bag Bharo Nikal
//                             Pado!
//                         </p>
//                     </div>

//                     <div className=" my-5 mx-4 sm:px-3 sm:mx-0">
//                         <Slider {...settings}>
//                             <Reviews />
//                             <Reviews />
//                             <Reviews />





//                         </Slider>
//                     </div>
//                     {/*
//             <!-- button --> */}
//                     <div className="text-center pb-10">
//                         <button className="bg-primary p-3 px-5 text-base text-white rounded-md">Read More Reviews</button>
//                     </div>

//                 </div>
//             </div>
//         </>
//     )
// }

// import React from "react";



// const Review = () => {
//     return (
//         <div className=" bg-cyan-950 mt-10 ">
//             <div className=" container-wrapper bg-white min-w-80 rounded-lg">
//                 <div className="flex justify-between p-4">
//         items-center             <div className="p-2 border rounded-1d border-black  ">
//                     flex item-center gap-1     <FaStar size={20} className=" text-primarybg-yellow-200" />           </div>


//                     <p className=" font-bold  uppermtext-sm text-gray-400mended</p>
//                 </div>

//                 <div className=" p-3 ">
//                     <h1 className=" text-lg font-bold">Lorem Ipsum is simply dummy..</h1>
//                     <p className="mt-3">
//                         If you are looking for comment and review cards suitable for
//                    text-para      different projects and concepts, then look at our cards pack!...
//                     </p>
//                 </div>
//                 <hr />

//                 <div className="flex justify-between p-4">
//                     <span className="font-bold ">Someone Name</span>
//                     <span>06 Sept</span>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Review;






import React, { useRef, useEffect } from 'react';
// import '../../app/globals.css'; // Import the custom CSS file
import { IoIosArrowForward } from "react-icons/io";
import { FaStar } from "react-icons/fa";

const Carousel = () => {
    const carouselRef = useRef(null);

    const scrollNext = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: carouselRef.current.clientWidth, behavior: 'smooth' });
        }
    };

    const scrollPrev = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: -carouselRef.current.clientWidth, behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                // Enable mouse scroll for small devices
                carouselRef.current.style.overflowX = 'scroll';
            } else {
                // Disable mouse scroll for medium and larger devices
                carouselRef.current.style.overflowX = 'hidden';
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Initialize on mount

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="bg-cyan-950">
            <div className="carousel-container relative container-wrapper ">

                <div className="text-center pt-10 pb-5">
                    <h3 className="md:text-[22px] text-xl leading-8 font-medium text-white">Bizare Expenditure tour reviews</h3>
                    <p className="text-xs leading-8 font-semibold text-white"> What are you waiting for? Chalo Bag Bharo Nikal
                        Pado!
                    </p>
                </div>
                <div className="carousel gap-5 pb-10" ref={carouselRef}>
                    {/* start is here code  */}
                    
                        <div className="  bg-white min-w-80 rounded-lg">
                            <div className="flex justify-between items-center p-4">
                                <div className="p-1 border flex item-center gap-1 rounded-md border-black  ">
                                    <FaStar size={18} className=" text-primary" />
                                    <span className="text-sm">5</span>
                                </div>

                                <p className=" text-sm text-gray-400 uppercase">Recommended</p>
                            </div>

                            <div className=" p-3 ">
                                <h1 className=" text-lg font-bold">Lorem Ipsum is simply dummy..</h1>
                                <p className="mt-3 text-sm">
                                    If you are looking for comment and review cards suitable for
                                    different projects and concepts, then look at our cards pack!...
                                </p>
                                <span className="text-blue-500 text-para">read more..</span>
                            </div>
                            <hr />
                            <div className="flex justify-between px-4 py-2 text-para">
                                <span className="font-bold text-gray-700">Someone Name</span>
                                <span>06 Sept</span>
                            </div>
                        </div>
                        <div className="  bg-white min-w-80 rounded-lg">
                            <div className="flex justify-between items-center p-4">
                                <div className="p-1 border flex item-center gap-1 rounded-md border-black  ">
                                    <FaStar size={18} className=" text-primary" />
                                    <span className="text-sm">5</span>
                                </div>

                                <p className=" text-sm text-gray-400 uppercase">Recommended</p>
                            </div>

                            <div className=" p-3 ">
                                <h1 className=" text-lg font-bold">Lorem Ipsum is simply dummy..</h1>
                                <p className="mt-3 text-sm">
                                    If you are looking for comment and review cards suitable for
                                    different projects and concepts, then look at our cards pack!...
                                </p>
                                <span className="text-blue-500 text-para">read more..</span>
                            </div>
                            <hr />
                            <div className="flex justify-between px-4 py-2 text-para">
                                <span className="font-bold text-gray-700">Someone Name</span>
                                <span>06 Sept</span>
                            </div>
                        </div>
                        <div className="  bg-white min-w-80 rounded-lg">
                            <div className="flex justify-between items-center p-4">
                                <div className="p-1 border flex item-center gap-1 rounded-md border-black  ">
                                    <FaStar size={18} className=" text-primary" />
                                    <span className="text-sm">5</span>
                                </div>

                                <p className=" text-sm text-gray-400 uppercase">Recommended</p>
                            </div>

                            <div className=" p-3 ">
                                <h1 className=" text-lg font-bold">Lorem Ipsum is simply dummy..</h1>
                                <p className="mt-3 text-sm">
                                    If you are looking for comment and review cards suitable for
                                    different projects and concepts, then look at our cards pack!...
                                </p>
                                <span className="text-blue-500 text-para">read more..</span>
                            </div>
                            <hr />
                            <div className="flex justify-between px-4 py-2 text-para">
                                <span className="font-bold text-gray-700">Someone Name</span>
                                <span>06 Sept</span>
                            </div>
                        </div>
                        <div className="  bg-white min-w-80 rounded-lg">
                            <div className="flex justify-between items-center p-4">
                                <div className="p-1 border flex item-center gap-1 rounded-md border-black  ">
                                    <FaStar size={18} className=" text-primary" />
                                    <span className="text-sm">5</span>
                                </div>

                                <p className=" text-sm text-gray-400 uppercase">Recommended</p>
                            </div>

                            <div className=" p-3 ">
                                <h1 className=" text-lg font-bold">Lorem Ipsum is simply dummy..</h1>
                                <p className="mt-3 text-sm">
                                    If you are looking for comment and review cards suitable for
                                    different projects and concepts, then look at our cards pack!...
                                </p>
                                <span className="text-blue-500 text-para">read more..</span>
                            </div>
                            <hr />
                            <div className="flex justify-between px-4 py-2 text-para">
                                <span className="font-bold text-gray-700">Someone Name</span>
                                <span>06 Sept</span>
                            </div>
                        </div>
                        <div className="  bg-white min-w-80 rounded-lg">
                            <div className="flex justify-between items-center p-4">
                                <div className="p-1 border flex item-center gap-1 rounded-md border-black  ">
                                    <FaStar size={18} className=" text-primary" />
                                    <span className="text-sm">5</span>
                                </div>

                                <p className=" text-sm text-gray-400 uppercase">Recommended</p>
                            </div>

                            <div className=" p-3 ">
                                <h1 className=" text-lg font-bold">Lorem Ipsum is simply dummy..</h1>
                                <p className="mt-3 text-sm">
                                    If you are looking for comment and review cards suitable for
                                    different projects and concepts, then look at our cards pack!...
                                </p>
                                <span className="text-blue-500 text-para">read more..</span>
                            </div>
                            <hr />
                            <div className="flex justify-between px-4 py-2 text-para">
                                <span className="font-bold text-gray-700">Someone Name</span>
                                <span>06 Sept</span>
                            </div>
                         
                        </div>
                        
                    
                    {/* end is here code */}
                    {/* <div className=" bg-gradient-to-l from-white mt-[14 0px] opacity-95 w-10 h-72 -right-5  md:hidden absolute z-30  top-0"></div> */}
                    {/* shadow hold */}
                    {/* <div className=" bg-gradient-to-l from-white  opacity-95 w-10 h-full -right-5  md:hidden absolute z-30  top-0"></div> */}
                 
                </div>
                <div className=" bg-gradient-to-l from-white opacity-95 w-10 h-[60%] mt-36 -right-5  md:hidden absolute z-30  top-0"></div>
                
                {/* <div className=" bg-gradient-to-l from-white opacity-95 w-10 h-full -right-5  md:hidden absolute z-30  top-0"></div> */}
                <div className=" hidden md:block absolute top-3/4 -translate-y-[60px] justify-between w-full">
                    <div className=' justify-between flex pl-2 '>

                        <button onClick={scrollPrev} className="rounded-full   bg-black/50 hover:bg-black p-2 text-white rotate-180"><IoIosArrowForward size={20} /></button>
                        <button onClick={scrollNext} className="rounded-full  bg-black/50 hover:bg-black p-2 text-white"><IoIosArrowForward size={20} /></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Carousel;
