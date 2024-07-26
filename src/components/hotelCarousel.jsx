import React, { useRef, useEffect } from 'react';
import Image from 'next/image'
import "../app/globals.css"
// Import the custom CSS file
import { IoIosArrowForward } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";
const HotelCarousel = () => {
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
        <div className="carousel-container relative container-wrapper">
            <div className="carousel gap-5" ref={carouselRef}>
                {/* start is here code  */}

                <div className="carousel-item w-60 md:w-80 mb-11  rounded-md">
                    <div className="shadow-md  rounded-lg overflow-hidden">
                        <figure className=" relative">
                            <Image className="w-full h-32 object-cover rounded-t-lg" src="https://plus.unsplash.com/premium_photo-1661964225206-fd5d445a6edd?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Shoes" />
                        </figure>
                        <div className="py-3 px-2 border-x border-b bg-white rounded-b-lg">
                            <h2 className="text-lg leading-5 font-semibold">Luxe Property In India</h2>
                            <div className="line-clamp-3 my-2">
                                <p className="text-sm ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam odit aspernatur provident.</p>
                            </div>
                            <div>
                                <div className=" flex justify-between items-center">
                                    <div className="flex gap-1 items-center">
                                        <MdLocationPin size={15} />
                                        <span className="text-sm font-semibold">Haridwar...........</span>
                                    </div>
                                    <div>
                                        <p className="text-md font-semibold">rs20,000</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="carousel-item w-60 md:w-80 mb-11  rounded-md">
                <div className="shadow-md  rounded-lg overflow-hidden">
                        <figure className="">
                            <Image className="w-full h-32 object-cover rounded-t-lg" src="https://plus.unsplash.com/premium_photo-1661964225206-fd5d445a6edd?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Shoes" />
                        </figure>
                        <div className="py-3 px-2 border-x border-b bg-white rounded-b-lg">
                            <h2 className="text-lg leading-5 font-semibold">Luxe Property In India</h2>
                            <div className="line-clamp-3 my-2">
                                <p className="text-sm ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam odit aspernatur provident.</p>
                            </div>
                            <div>
                                <div className=" flex justify-between items-center">
                                    <div className="flex gap-1 items-center">
                                        <MdLocationPin size={15} />
                                        <span className="text-sm font-semibold">Haridwar</span>
                                    </div>
                                    <div>
                                        <p className="text-md font-semibold">rs20,000</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item w-60 md:w-80 mb-11  rounded-md">
                <div className="shadow-md  rounded-lg overflow-hidden">
                        <figure className="">
                            <Image className="w-full h-32 object-cover rounded-t-lg" src="https://plus.unsplash.com/premium_photo-1661964225206-fd5d445a6edd?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Shoes" />
                        </figure>
                        <div className="py-3 px-2 border-x border-b bg-white rounded-b-lg">
                            <h2 className="text-lg leading-5 font-semibold">Luxe Property In India</h2>
                            <div className="line-clamp-3 my-2">
                                <p className="text-sm ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam odit aspernatur provident.</p>
                            </div>
                            <div>
                                <div className=" flex justify-between items-center">
                                    <div className="flex gap-1 items-center">
                                        <MdLocationPin size={15} />
                                        <span className="text-sm font-semibold">Haridwar</span>
                                    </div>
                                    <div>
                                        <p className="text-md font-semibold">rs20,000</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item w-60 md:w-80 mb-11  rounded-md">
                <div className="shadow-md  rounded-lg overflow-hidden">
                        <figure className="">
                            <Image className="w-full h-32 object-cover rounded-t-lg" src="https://plus.unsplash.com/premium_photo-1661964225206-fd5d445a6edd?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Shoes" />
                        </figure>
                        <div className="py-3 px-2 border-x border-b bg-white rounded-b-lg">
                            <h2 className="text-lg leading-5 font-semibold">Luxe Property In India</h2>
                            <div className="line-clamp-3 my-2">
                                <p className="text-sm ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam odit aspernatur provident.</p>
                            </div>
                            <div>
                                <div className=" flex justify-between items-center">
                                    <div className="flex gap-1 items-center">
                                        <MdLocationPin size={15} />
                                        <span className="text-sm font-semibold">Haridwar</span>
                                    </div>
                                    <div>
                                        <p className="text-md font-semibold">rs20,000</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item w-60 md:w-80 mb-11  rounded-md cursor-pointer">
                <div className="shadow-md  rounded-lg overflow-hidden">
                        <figure className="">
                            <Image className="w-full h-32 object-cover rounded-t-lg" src="https://plus.unsplash.com/premium_photo-1661964225206-fd5d445a6edd?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Shoes" />
                        </figure>
                        <div className="py-3 px-2 border-x border-b bg-white rounded-b-lg">
                            <h2 className="text-lg leading-5 font-semibold">Luxe Property In India</h2>
                            <div className="line-clamp-3 my-2">
                                <p className="text-sm ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam odit aspernatur provident.</p>
                            </div>
                            <div>
                                <div className=" flex justify-between items-center">
                                    <div className="flex gap-1 items-center">
                                        <MdLocationPin size={15} />
                                        <span className="text-sm font-semibold">Haridwar</span>
                                    </div>
                                    <div>
                                        <p className="text-md font-semibold">rs20,000</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                {/* end is here code */}

            </div>
            <div className=" hidden md:block absolute top-2/4 -translate-y-[60px] justify-between w-full">
                <div className=' justify-between flex pl-2 '>

                    <button onClick={scrollPrev} className="rounded-full bg-black/50 hover:bg-black p-2 text-white rotate-180"><IoIosArrowForward size={20} /></button>
                    <button onClick={scrollNext} className="rounded-full bg-black/50 hover:bg-black p-2 text-white"><IoIosArrowForward size={20} /></button>
                </div>
            </div>
        </div>
    );
}

export default HotelCarousel;
