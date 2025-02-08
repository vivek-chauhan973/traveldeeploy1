// import Image from 'next/image';
// import { useState, useEffect, useRef } from "react";
// import "../../../app/globals.css";
// import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
// import Link from 'next/link';

// const fetchCrouselData = async () => {
//   const data = await fetch("/api/home/crousel");
//   return await data.json();
// }

// const Cardwork = () => {

//   const [bannerData, setBannerData] = useState([])
//   useEffect(() => {
//     fetchCrouselData().
//       then((res) => {
//         // console.log("res----->13 ", res?.data);
//         setBannerData(res?.data || [])
//       })
//       .catch(err => console.log("err------ > ", err))
//   }, [])
//   // console.log("bannerData", bannerData);

//   const [startIndex, setStartIndex] = useState(0);

//   const nextSlide = () => {
//     setStartIndex((startIndex) => (startIndex + 1) % bannerData.length);
//   };

//   const prevSlide = () => {
//     setStartIndex(
//       (startIndex) => (startIndex - 1 + bannerData.length) % bannerData.length
//     );
//   };

//   const boxShadowStyle = {
//     boxShadow: "inset 0px -400px 20px  rgba(0, 0, 0, 0.2)",
//   };

//   return (
//     <>
//       <div className="relative w-full">
//         <BsArrowLeftCircleFill
//           size={30}
//           onClick={prevSlide}
//           className="z-10 cursor-pointer absolute md:left-3 left-1 top-2/4 -translate-y-1/2 text-white"
//         />
//         <div className="relative flex justify-center items-center overflow-hidden w-full md:h-96 h-56 md:rounded-md rounded">
//           {bannerData?.length > 0 && bannerData?.map((item, index) => (
//             <div key={index} className={`h-full w-full absolute transition-transform transform 
//               ${index === startIndex ? "translate-x-0" : "translate-x-full"}`}
//             >
//               <div className="">
//                 <Image className="relative  object-cover h-full w-[1320px] md:h-[400px]"
//                 layout='fill'
//                   src={item.path}
//                   alt="images"
//                 />
//                 <div
//                   style={boxShadowStyle}
//                   className="absolute w-full h-full text-white"
//                 >
//                   <div className='absolute bottom-10 md:left-20 left-10'>
//                     <div className='md:w-3/4 w-full'>
//                       <h2 className="md:text-xl text-lg font-bold">{item.title}</h2>
//                       <p className="mb-2 md:text-para text-sm md:line-clamp-4 line-clamp-2">{item.description}</p>
//                       <Link href={item.url}>
//                         <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold md:py-2 py-1.5 md:px-4 px-3 rounded text-sm">
//                           Know More
//                         </button>
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         <BsArrowRightCircleFill
//           size={30}
//           onClick={nextSlide}
//           className="cursor-pointer absolute md:right-3 right-1 top-2/4 -translate-y-1/2 text-white"
//         />
//       </div>
//     </>
//   );
// };

// export default Cardwork;


import "../../../app/globals.css";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const fetchCrouselData = async () => {
  const data = await fetch("/api/home/crousel");
  return await data.json();
}

const Cardwork = () => {
  const [bannerData, setBannerData] = useState([])
  useEffect(() => {
    fetchCrouselData().
      then((res) => {
        // console.log("res----->13 ", res?.data);
        setBannerData(res?.data || [])
      })
      .catch(err => console.log("err------ > ", err))
  }, [])
  // console.log("bannerData", bannerData);

  const carouselRef = useRef(null);

  const scrollNext = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: carouselRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollPrev = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -carouselRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        // Enable mouse scroll for small devices
        carouselRef.current.style.overflowX = "scroll";
      } else {
        // Disable mouse scroll for medium and larger devices
        carouselRef.current.style.overflowX = "hidden";
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Initialize on mount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="">
      <div className="carousel-container relative">
        <div className="carousel gap-5" ref={carouselRef}>
          {bannerData?.length > 0 &&
            bannerData?.map((items, i) => {
              return (
                <div key={i} className="carousel-item md:w-full w-[92%] ">
                  <div className="shadow-md overflow-hidden">
                    <div className="relative">
                      <Link href={items?.url}>
                        <div className="w-full md:h-96 h-60">
                          <Image
                            className="relative object-cover rounded-md"
                            layout="fill"
                            src={items?.path}
                            alt="images"
                          />
                          <div
                            className="absolute bg-gradient-to-r from-black to-gray pb-3 text-white md:text-xl text-lg font-semibold flex justify-start items-center w-full md:h-96 h-60 md:rounded-md rounded"
                          >
                            <div className="grid md:grid-cols-2 grid-cols-1 md:h-44 h-36 md:max-h-52 max-h-44">
                              <div className="flex flex-col justify-between items-start md:ml-16 ml-5 md:mr-0 mr-5">
                                <h2 className="md:text-xl text-base font-bold">
                                  {items.title}
                                </h2>
                                <p className="mb-2 md:text-sm text-xs md:line-clamp-4 line-clamp-3">
                                  {items.description}
                                </p>
                                <Link href={items.url}>
                                  <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold md:py-2 py-1.5 md:px-4 px-3 rounded md:text-sm text-xs">
                                    Know More
                                  </button>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        {bannerData?.length > 0 && (
          <div className=" hidden md:block absolute top-2/4 -translate-y-[40px] justify-between w-full">
            <div className=" justify-between flex px-2">
              <FontAwesomeIcon
                icon={faChevronRight}
                onClick={scrollPrev}
                className="h-5 w-5 p-2 rounded-full  bg-slate-900 hover:bg-slate-800 text-white rotate-180"
              />
              <FontAwesomeIcon
                icon={faChevronRight}
                onClick={scrollNext}
                className="h-5 w-5 p-2 rounded-full bg-black/50 hover:bg-slate-800 text-white"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cardwork;

