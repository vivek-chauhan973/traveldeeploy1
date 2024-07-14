import { image } from "jodit/esm/plugins/image/image";
import "../../../app/globals.css";
import React, { useRef, useEffect } from 'react';
// import '../../app/globals.css'; // Import the custom CSS file
import { IoIosArrowForward } from "react-icons/io";
import Image from 'next/image'
const Card4 = () => {
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





                {/* Testing */}
            
                <div className="carousel-item w-60 md:w-80 mb-11  rounded-md">
                    <div className="shadow-md  rounded-lg overflow-hidden">
                        <div className="relative">
                            <Image className=" relative w-full h-52 object-cover "
                                src="https://plus.unsplash.com/premium_photo-1663127576306-9d9de0a47318?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="" />
                            <div className="flex gap-4 absolute bottom-0 z-20 px-2">
                                <p className="font-semibold text-md text-white ">Turkey</p>
                                <p className="font-semibold text-md text-white">11 Days</p>
                            </div>
                        </div>
                        <div className=" flex flex-col gap-5 px-2 py-2 bg-white">
                            <p className="text-lg font-semibold">Treasures of Anatolia</p>
                            <p className="text-para line-clamp-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
                                officiis non, hic quod magni id eligendi tempore quia dolores sed, voluptas perspiciatis aliquam
                                accusantium rem ex nesciunt excepturi qui placeat?</p>
                            <div>
                                <p className=" line-through text-sm">Rs. 1,199</p>
                                <div className="flex gap-5 items-center">
                                    <p className="text-md font-semibold">Rs. 599</p>
                                    <button className="bg-primary text-xs py-2 px-3 text-white ">-50%</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item w-60 md:w-80  rounded-md">
                    <div className="shadow-md  rounded-lg overflow-hidden">
                        <div className="relative">
                            <Image className=" relative w-full h-52 object-cover "
                                src="https://plus.unsplash.com/premium_photo-1663127576306-9d9de0a47318?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="" />
                            <div className="flex gap-4 absolute bottom-0 z-20 px-2">
                                <p className="font-semibold text-md text-white ">Turkey</p>
                                <p className="font-semibold text-md text-white">11 Days</p>
                            </div>
                        </div>
                        <div className=" flex flex-col gap-5 px-2 py-2 bg-white">
                            <p className="text-lg font-semibold">Treasures of Anatolia</p>
                            <p className="text-para line-clamp-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
                                officiis non, hic quod magni id eligendi tempore quia dolores sed, voluptas perspiciatis aliquam
                                accusantium rem ex nesciunt excepturi qui placeat?</p>
                            <div>
                                <p className=" line-through text-sm">Rs. 1,199</p>
                                <div className="flex gap-5 items-center">
                                    <p className="text-md font-semibold">Rs. 599</p>
                                    <button className="bg-primary text-xs py-2 px-3 text-white ">-50%</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item w-60 md:w-80  rounded-md">
                    <div className="shadow-md  rounded-lg overflow-hidden">
                        <div className="relative">
                            <Image className=" relative w-full h-52 object-cover "
                                src="https://plus.unsplash.com/premium_photo-1663127576306-9d9de0a47318?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="" />
                            <div className="flex gap-4 absolute bottom-0 z-20 px-2">
                                <p className="font-semibold text-md text-white ">Turkey</p>
                                <p className="font-semibold text-md text-white">11 Days</p>
                            </div>
                        </div>
                        <div className=" flex flex-col gap-5 px-2 py-2 bg-white">
                            <p className="text-lg font-semibold">Treasures of Anatolia</p>
                            <p className="text-para line-clamp-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
                                officiis non, hic quod magni id eligendi tempore quia dolores sed, voluptas perspiciatis aliquam
                                accusantium rem ex nesciunt excepturi qui placeat?</p>
                            <div>
                                <p className=" line-through text-sm">Rs. 1,199</p>
                                <div className="flex gap-5 items-center">
                                    <p className="text-md font-semibold">Rs. 599</p>
                                    <button className="bg-primary text-xs py-2 px-3 text-white ">-50%</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item w-60 md:w-80  rounded-md">
                    <div className="shadow-md  rounded-lg overflow-hidden">
                        <div className="relative">
                            <Image className=" relative w-full h-52 object-cover "
                                src="https://plus.unsplash.com/premium_photo-1663127576306-9d9de0a47318?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="" />
                            <div className="flex gap-4 absolute bottom-0 z-20 px-2">
                                <p className="font-semibold text-md text-white ">Turkey</p>
                                <p className="font-semibold text-md text-white">11 Days</p>
                            </div>
                        </div>
                        <div className=" flex flex-col gap-5 px-2 py-2 bg-white">
                            <p className="text-lg font-semibold">Treasures of Anatolia</p>
                            <p className="text-para line-clamp-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
                                officiis non, hic quod magni id eligendi tempore quia dolores sed, voluptas perspiciatis aliquam
                                accusantium rem ex nesciunt excepturi qui placeat?</p>
                            <div>
                                <p className=" line-through text-sm">Rs. 1,199</p>
                                <div className="flex gap-5 items-center">
                                    <p className="text-md font-semibold">Rs. 599</p>
                                    <button className="bg-primary text-xs py-2 px-3 text-white ">-50%</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item w-60 md:w-80  rounded-md">
                    <div className="shadow-md  rounded-lg overflow-hidden">
                        <div className="relative">
                            <Image className=" relative w-full h-52 object-cover "
                                src="https://plus.unsplash.com/premium_photo-1663127576306-9d9de0a47318?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="" />
                            <div className="flex gap-4 absolute bottom-0 z-20 px-2">
                                <p className="font-semibold text-md text-white ">Turkey</p>
                                <p className="font-semibold text-md text-white">11 Days</p>
                            </div>
                        </div>
                        <div className=" flex flex-col gap-5 px-2 py-2 bg-white">
                            <p className="text-lg font-semibold">Treasures of Anatolia</p>
                            <p className="text-para line-clamp-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
                                officiis non, hic quod magni id eligendi tempore quia dolores sed, voluptas perspiciatis aliquam
                                accusantium rem ex nesciunt excepturi qui placeat?</p>
                            <div>
                                <p className=" line-through text-sm">Rs. 1,199</p>
                                <div className="flex gap-5 items-center">
                                    <p className="text-md font-semibold">Rs. 599</p>
                                    <button className="bg-primary text-xs py-2 px-3 text-white ">-50%</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item w-60 md:w-80  rounded-md">
                    <div className="shadow-md  rounded-lg overflow-hidden">
                        <div className="relative">
                            <Image className=" relative w-full h-52 object-cover "
                                src="https://plus.unsplash.com/premium_photo-1663127576306-9d9de0a47318?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="" />
                            <div className="flex gap-4 absolute bottom-0 z-20 px-2">
                                <p className="font-semibold text-md text-white ">Turkey</p>
                                <p className="font-semibold text-md text-white">11 Days</p>
                            </div>
                        </div>
                        <div className=" flex flex-col gap-5 px-2 py-2 bg-white">
                            <p className="text-lg font-semibold">Treasures of Anatolia</p>
                            <p className="text-para line-clamp-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
                                officiis non, hic quod magni id eligendi tempore quia dolores sed, voluptas perspiciatis aliquam
                                accusantium rem ex nesciunt excepturi qui placeat?</p>
                            <div>
                                <p className=" line-through text-sm">Rs. 1,199</p>
                                <div className="flex gap-5 items-center">
                                    <p className="text-md font-semibold">Rs. 599</p>
                                    <button className="bg-primary text-xs py-2 px-3 text-white ">-50%</button>
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

export default Card4;
