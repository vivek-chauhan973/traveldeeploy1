import "../app/globals.css";
import React, { useRef, useEffect } from 'react';
import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const BlogsCarousel = ({ carPackageData }) => {

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
        <div className="bg-slate-100">
            {carPackageData?.length > 0 &&
                <div className="container-wrapper  text-center py-7">
                    <p className='md:text-[25px] text-xl font-medium mb-1 capitalize'>
                    Unveiling the Beauty and Wonders of Must-Visit Locations all Around</p>
                    <p className="md:text-md text-para font-normal">
                    Your Ultimate Guide to Experiencing the Most Spectacular Destinations and Adventures.</p>
                </div>
            }
            <div className="carousel-container relative container-wrapper ">
                <div className="carousel gap-5" ref={carouselRef}>
                    {carPackageData?.length > 0 && carPackageData?.map((items, i) => {
                        return (
                            <div key={i} className="carousel-item w-60 md:w-80 mb-11  rounded-md">
                                <div className="shadow-md rounded-lg overflow-hidden">
                                    <div className="relative">
                                        <div className=" w-full h-52">
                                             <Image className=" relative  object-cover " layout="fill"
                                                src={items?.videoPath}
                                                alt="images"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-around px-3 pt-3 pb-5 bg-white">
                                        <div className="flex justify-between w-full max-h-16 md:text-para text-sm  font-semibold mb-1">
                                            <p className="md:line-clamp-2 overflow-hidden">{new Date(items?.updatedAt).toLocaleDateString()}</p>
                                            <p className="w-[20%] text-end text-nowrap">{items?.time} min</p>
                                        </div>
                                        <div className="w-full max-h-16 md:text-lg text-base font-semibold md:mb-0 mb-2">
                                            <p className="md:line-clamp-2  line-clamp-3">{items?.title}</p>
                                        </div>
                                        <div>
                                            <p dangerouslySetInnerHTML={{ __html: items?.description }} className="text-para line-clamp-3"></p>
                                        </div>
                                        <div>
                                            <div className="flex gap-5 items-center justify-center pr-4 pt-1 mt-1.5">
                                                <Link href={"/travel/" + items?.blogType + "/" + items?.title?.split(" ")?.join("-")}>
                                                    <button className="badge text-sm px-3 py-1.5 rounded-full text-white bg-gradient-to-r from-orange-500 to-red-500">
                                                        Know More
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    {/* end is here code */}
                </div>
                {carPackageData?.length > 0 &&
                    <div className=" hidden md:block absolute top-2/4 -translate-y-[80px] justify-between w-full">
                        <div className=' justify-between flex pl-2 '>
                            <FontAwesomeIcon
                                icon={faChevronRight} onClick={scrollPrev}
                                className="h-5 w-5 p-2 rounded-full  bg-black/50 hover:bg-black text-white rotate-180"
                            />
                            <FontAwesomeIcon
                                icon={faChevronRight} onClick={scrollNext}
                                className="h-5 w-5 p-2 rounded-full bg-black/50 hover:bg-black text-white"
                            />
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}

export default BlogsCarousel;