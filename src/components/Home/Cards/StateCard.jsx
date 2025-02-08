import "../../../app/globals.css";
import React, { useRef, useEffect } from 'react';
import Image from 'next/image'
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const StateCard = ({ states }) => {
    // console.log("Four Card states", states);

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
    const boxShadowStyle = {
        boxShadow: "inset 0px -50px 20px  rgba(0, 0, 0, 0.8)",
    };
    return (
        <div className="md:mt-9 mt-4">
            <div className="carousel-container relative container-wrapper ">
                <div className="carousel gap-5" ref={carouselRef}>
                    {states?.length > 0 && states?.map((items, i) => {
                        const data=items?.selectedItem?.toLowerCase()?.split(" ")?.join("-");
                        // console.log("item poster path -----------> ",items?.posterPath)
                        return (
                            <div key={i} className="carousel-item md:w-[280px] w-64 mb-11  rounded-[17px]">
                                <div className="shadow-md  rounded-[17px] overflow-hidden">
                                    <Link href={"/india/"+data+"-tour-packages"}>
                                    <div className="relative">
                                        <div className=" w-full h-64">
                                            <Image className=" relative  object-cover rounded-[17px]" layout="fill"
                                                src={items?.posterPath}
                                                alt="images"
                                            />
                                            <div
                                                style={boxShadowStyle}
                                                className="absolute  pb-3 text-white md:text-xl text-lg font-semibold flex justify-center items-end w-full h-64 rounded-[17px]"
                                            >
                                                {items?.selectedItem}
                                            </div>
                                        </div>
                                    </div> 
                                    </Link>                                
                                </div>
                            </div>
                        )
                    })}
                    {/* end is here code */}
                </div>
                {states?.length > 0 &&
                    <div className=" hidden md:block absolute top-2/4 -translate-y-[40px] justify-between w-full">
                        <div className=' justify-between flex px-2'>
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

export default StateCard;