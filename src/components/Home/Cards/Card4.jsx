import "../../../app/globals.css";
import React, { useRef, useEffect } from 'react';
import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Card4 = () => {

    const card4Data = [
        {
            img: "https://plus.unsplash.com/premium_photo-1663127576306-9d9de0a47318?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Treasures of Anatolia",
            desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
                    officiis non, hic quod magni id eligendi tempore quia dolores sed, voluptas perspiciatis aliquam
                    accusantium rem ex nesciunt excepturi qui placeat?`,
            days: "12",
            disc: "40%",
        },
        {
            img: "https://plus.unsplash.com/premium_photo-1663127576306-9d9de0a47318?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Treasures of Anatolia",
            desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
                    officiis non, hic quod magni id eligendi tempore quia dolores sed, voluptas perspiciatis aliquam
                    accusantium rem ex nesciunt excepturi qui placeat?`,
            days: "11",
            disc: "30%",
        },
        {
            img: "https://plus.unsplash.com/premium_photo-1663127576306-9d9de0a47318?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Treasures of Anatolia",
            desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
                    officiis non, hic quod magni id eligendi tempore quia dolores sed, voluptas perspiciatis aliquam
                    accusantium rem ex nesciunt excepturi qui placeat?`,
            days: "8",
            disc: "40%",
        },
        {
            img: "https://plus.unsplash.com/premium_photo-1663127576306-9d9de0a47318?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Treasures of Anatolia",
            desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
                    officiis non, hic quod magni id eligendi tempore quia dolores sed, voluptas perspiciatis aliquam
                    accusantium rem ex nesciunt excepturi qui placeat?`,
            days: "13",
            disc: "50%",
        },
        {
            img: "https://plus.unsplash.com/premium_photo-1663127576306-9d9de0a47318?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Treasures of Anatolia",
            desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
                    officiis non, hic quod magni id eligendi tempore quia dolores sed, voluptas perspiciatis aliquam
                    accusantium rem ex nesciunt excepturi qui placeat?`,
            days: "15",
            disc: "40%",
        },
        {
            img: "https://plus.unsplash.com/premium_photo-1663127576306-9d9de0a47318?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Treasures of Anatolia",
            desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
                    officiis non, hic quod magni id eligendi tempore quia dolores sed, voluptas perspiciatis aliquam
                    accusantium rem ex nesciunt excepturi qui placeat?`,
            days: "5",
            disc: "30%",
        },
    ]
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
        <div className="md:mt-9 mt-4 bg-slate-100 ">
            {card4Data?.length > 0 &&
                <div className="container-wrapper  text-center py-7">
                    <p className='md:text-[25px] text-xl font-medium mb-1'>
                        Handpicked Highlights for Your Perfect Tour Package
                    </p>
                    <p className="md:text-md text-para font-normal">
                        Discovered expertly curated travel package tailored to offer you unforgettable experiences.
                    </p>
                </div>
            }
            <div className="carousel-container relative container-wrapper ">
                <div className="carousel gap-5" ref={carouselRef}>
                    {card4Data?.length > 0 && card4Data?.map((items, i) => {
                        return (
                            <div key={i} className="carousel-item w-60 md:w-80 mb-11  rounded-md">
                                <div className="shadow-md  rounded-lg overflow-hidden">
                                    <div className="relative">
                                        <div className=" w-full h-52">
                                            <Image className=" relative  object-cover " layout="fill"
                                                src={items.img}
                                                alt=""
                                            />
                                        </div>
                                        <div className="flex gap-4 absolute bottom-0 z-20 px-2">
                                            {/* <p className="font-semibold text-md text-white ">Turkey</p> */}
                                            <p className="font-semibold text-md text-white">{items.days} Days</p>
                                        </div>
                                    </div>
                                    <div className=" flex flex-col gap-3 px-3 py-3 bg-white">
                                        <p className="text-lg font-semibold">{items.title}</p>
                                        <p className="text-para line-clamp-3">{items.desc}</p>
                                        <div>
                                            <p className=" line-through text-sm">Rs. 1,199</p>
                                            <div className="flex gap-5 items-center">
                                                <p className="text-md font-semibold">Rs. 599</p>
                                                <button className="badge text-sm px-3 py-1.5 rounded-full text-white bg-gradient-to-r from-orange-500 to-red-500">-{items.disc}</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    {/* end is here code */}
                </div>
                {card4Data?.length > 0 &&
                    <div className=" hidden md:block absolute top-2/4 -translate-y-[60px] justify-between w-full">
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

export default Card4;