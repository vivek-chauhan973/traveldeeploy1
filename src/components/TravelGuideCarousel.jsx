import "../app/globals.css";
import React, { useRef, useEffect } from 'react';
import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const TravelGuideCarousel = ({ carPackageData }) => {

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
                        Your Guide to Extraordinary Travel Destinations Around the planet
                    </p>
                    <p className="md:text-md text-para font-normal">
                    Your Comprehensive Travel Companion for Exploring the Planets Most Captivating and Unique Destinations                    </p>
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
                                    <div className=" flex flex-col gap-3 px-3 pt-3 pb-5 bg-white">
                                        <div className='flex gap-3 w-full justify-between'>
                                            <p className="font-semibold md:text-base text-sm text-black w-[80%]">{new Date(items?.updatedAt).toLocaleDateString()}</p>
                                            <p className="font-semibold md:text-base text-sm text-black w-[20%]">{items?.time} min</p>
                                        </div>
                                        <div className="w-full md:h-7 h-8">
                                            <p className="md:text-lg text-base font-semibold">{items?.title}</p>
                                        </div>
                                        <p
                                            className="text-para line-clamp-3">
                                            {items?.description}
                                        </p>
                                        <div>
                                            <div className="flex gap-5 items-center justify-center pr-4 pt-1">
                                                {/* <p className="text-lg font-semibold">
                                                    {items?.price?.toLocaleString('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                                                </p> */}
                                                {/* <Link href={"/package/"+items?.pageUrl}> */}
                                                <Link href={"/travel/" + items?.blogType + "/" + items?.title?.split(" ")?.join("-")} className="badge text-sm px-3 py-1.5 rounded-full text-white bg-gradient-to-r from-orange-500 to-red-500">
                                                    Know More
                                                </Link>
                                                {/* </Link> */}
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

export default TravelGuideCarousel;