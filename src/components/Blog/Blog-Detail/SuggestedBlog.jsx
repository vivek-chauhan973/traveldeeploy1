import "../../../app/globals.css";
import React, { useRef, useEffect } from 'react';
import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
const SuggestedBlog = () => {
    const suggestedBlog = [
        {
            img: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0c/04/55/9b.jpg",
            date: "04/10/24",
            title: "Best app for business travellers",
            desc: `From dedicated customer support to itinerary tracking to spend management tools, 
            today’s corporate travel tools take the hard work out of the business planning process.`,
        },
        {
            img: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0c/04/55/9b.jpg",
            date: "04/10/24",
            title: "Best app for business travellers",
            desc: `From dedicated customer support to itinerary tracking to spend management tools, 
            today’s corporate travel tools take the hard work out of the business planning process.`,
        },
        {
            img: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0c/04/55/9b.jpg",
            date: "04/10/24",
            title: "Best app for business travellers",
            desc: `From dedicated customer support to itinerary tracking to spend management tools, 
            today’s corporate travel tools take the hard work out of the business planning process.`,
        },
        {
            img: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0c/04/55/9b.jpg",
            date: "04/10/24",
            title: "Best app for business travellers",
            desc: `From dedicated customer support to itinerary tracking to spend management tools, 
            today’s corporate travel tools take the hard work out of the business planning process.`,
        },
        {
            img: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0c/04/55/9b.jpg",
            date: "04/10/24",
            title: "Best app for business travellers",
            desc: `From dedicated customer support to itinerary tracking to spend management tools, 
            today’s corporate travel tools take the hard work out of the business planning process.`,
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
        <div className="md:mt-9 mt-4 bg-slate-100">
            {suggestedBlog?.length > 0 &&
                <div className="container-wrapper py-7">
                    <p className='md:text-[25px] text-xl font-medium mb-1 capitalize'>
                        Suggested articles
                    </p>
                </div>
            }
            <div className="carousel-container relative container-wrapper ">
                <div className="carousel gap-5" ref={carouselRef}>
                    {suggestedBlog?.length > 0 && suggestedBlog?.map((items, i) => {

                        return (
                            <div key={i} className="carousel-item w-60 md:w-80 mb-11  rounded-md">
                                <div className="shadow-md rounded-lg overflow-hidden">
                                    <div className="relative">
                                        <div className=" w-full h-52">
                                            <Image className=" relative  object-cover " layout="fill"
                                                src={items?.img}
                                                alt="images"
                                            />
                                        </div>
                                    </div>
                                    <div className=" flex flex-col gap-3 px-3 pt-3 pb-5 bg-white">
                                        <div className='flex gap-3 w-full justify-between'>
                                            <p className="font-semibold md:text-base text-sm text-black w-[20%]">{items?.date}</p>
                                            {/* <p className="font-semibold md:text-base text-sm text-black w-[80%]">Started From</p> */}
                                        </div>
                                        <div className="w-full md:h-7 h-8">
                                            <p className="md:text-lg text-base font-semibold">{items?.title}</p>
                                        </div>
                                        <p
                                            // dangerouslySetInnerHTML={{ __html: items?.about }}
                                            className="text-para line-clamp-3 mb-4">
                                                {items?.desc}
                                        </p>
                                        <div>
                                            <div className="flex gap-5 items-center justify-between pr-4 pt-1">
                                                {/* <p className="text-lg font-semibold">
                                                    {items?.price?.toLocaleString('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                                                </p> */}
                                                {/* <Link href={"/package/"+items?.pageUrl}> */}
                                                <a 
                                                href="#"
                                                // href={"/car-rental/" + items.location.url + "/" + items.pageUrl} 
                                                className="badge text-sm px-3 py-1.5 rounded-full text-white bg-gradient-to-r from-orange-500 to-red-500">
                                                    Know More
                                                </a>
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
                {suggestedBlog?.length > 0 &&
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
    )
}

export default SuggestedBlog