import React, { useRef, useEffect, useState } from 'react';
import '../../app/globals.css'; // Import the custom CSS file
import { IoIosArrowForward } from "react-icons/io";
import Image from 'next/image';

const Carousel = () => {
    const carouselRef = useRef(null);
    const [itemWidth, setItemWidth] = useState(0);
    const scrollNext = () => {
        if (carouselRef.current && itemWidth > 0) {
            carouselRef.current.scrollBy({ left: itemWidth, behavior: 'smooth' });
        }
    };
 
    const scrollPrev = () => {
        if (carouselRef.current && itemWidth > 0) {
            carouselRef.current.scrollBy({ left: -itemWidth, behavior: 'smooth' });
        }
    };

        useEffect(() => {
            const handleResize = () => {
                if (carouselRef.current) {
                    const items = carouselRef.current.getElementsByClassName('carousel-item');
                    if (items.length > 0) {
                        const firstItem = items[0];
                        const itemWidth = firstItem.clientWidth + parseInt(getComputedStyle(firstItem).marginRight);
                        setItemWidth(itemWidth);
                    }
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
                <div className="carousel-item w-60 md:w-80  rounded-md">
                    <div className=" cursor-pointer px-2">
                        <figure className="rounded border bg-slate-50 relative">
                            <Image className="w-full  object-contain" 
                             src="https://img.freepik.com/free-vector/white-convertible-car-isolated-white-vector_53876-66815.jpg?w=900&t=st=1710935345~exp=1710935945~hmac=98c1fad0986c746d5845469bce6bb1c3596beb9fa2c0e1938a0ab54c648bf20d"
                             alt="Shoes" 
                             width={320}  //240 in phone 
                             height={213} //160
                             />
                            {/* <div className='absolute inset-0 bg-gradient-to-t from-black/40 via-gray-500/40'></div> */}
                        </figure>
                        <div className="py-3">
                            <div className="flex gap-3 items-center">
                                <h2 className="text-base font-semibold">Small Car</h2>
                                <div className="badge text-xs px-2 py-1 rounded-full bg-yellow-600 text-white">NEW</div>
                            </div>
                            <p className=" font-extralight text-base">Rs 20,902</p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item w-60 md:w-80  rounded-md">
                    <div className=" cursor-pointer px-2">
                        <figure className="rounded border bg-slate-50 relative">
                            <Image className="w-full  object-contain" 
                             src="https://img.freepik.com/free-vector/white-convertible-car-isolated-white-vector_53876-66815.jpg?w=900&t=st=1710935345~exp=1710935945~hmac=98c1fad0986c746d5845469bce6bb1c3596beb9fa2c0e1938a0ab54c648bf20d"
                             alt="Shoes" 
                             width={320}  //240 in phone 
                             height={213} //160
                            />
                            {/* <div className='absolute inset-0 bg-gradient-to-t from-black/40 via-gray-500/40'></div> */}
                        </figure>
                        <div className="py-3">
                            <div className="flex gap-3 items-center">
                                <h2 className="text-base font-semibold">Small Car</h2>
                                <div className="badge text-xs px-2 py-1 rounded-full bg-yellow-600 text-white">NEW</div>
                            </div>
                            <p className=" font-extralight text-base">Rs 20,902</p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item w-60 md:w-80  rounded-md">
                    <div className=" cursor-pointer px-2">
                        <figure className="rounded border bg-slate-50 relative">
                            <Image className="w-full  object-contain" 
                             src="https://img.freepik.com/free-vector/white-convertible-car-isolated-white-vector_53876-66815.jpg?w=900&t=st=1710935345~exp=1710935945~hmac=98c1fad0986c746d5845469bce6bb1c3596beb9fa2c0e1938a0ab54c648bf20d"
                             alt="Shoes" 
                             width={320}  //240 in phone 
                             height={213} //160
                            />
                            {/* <div className='absolute inset-0 bg-gradient-to-t from-black/40 via-gray-500/40'></div> */}
                        </figure>
                        <div className="py-3">
                            <div className="flex gap-3 items-center">
                                <h2 className="text-base font-semibold">Small Car</h2>
                                <div className="badge text-xs px-2 py-1 rounded-full bg-yellow-600 text-white">NEW</div>
                            </div>
                            <p className=" font-extralight text-base">Rs 20,902</p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item w-60 md:w-80  rounded-md">
                    <div className=" cursor-pointer px-2">
                        <figure className="rounded border bg-slate-50 relative">
                            <Image className="w-full  object-contain" 
                             src="https://img.freepik.com/free-vector/white-convertible-car-isolated-white-vector_53876-66815.jpg?w=900&t=st=1710935345~exp=1710935945~hmac=98c1fad0986c746d5845469bce6bb1c3596beb9fa2c0e1938a0ab54c648bf20d"
                             alt="Shoes" 
                             width={320}  //240 in phone 
                             height={213} //160
                            />
                            {/* <div className='absolute inset-0 bg-gradient-to-t from-black/40 via-gray-500/40'></div> */}
                        </figure>
                        <div className="py-3">
                            <div className="flex gap-3 items-center">
                                <h2 className="text-base font-semibold">Small Car</h2>
                                <div className="badge text-xs px-2 py-1 rounded-full bg-yellow-600 text-white">NEW</div>
                            </div>
                            <p className=" font-extralight text-base">Rs 20,902</p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item w-60 md:w-80  rounded-md">
                    <div className=" cursor-pointer px-2">
                        <figure className="rounded border bg-slate-50 relative">
                            <Image className="w-full  object-contain" 
                             src="https://img.freepik.com/free-vector/white-convertible-car-isolated-white-vector_53876-66815.jpg?w=900&t=st=1710935345~exp=1710935945~hmac=98c1fad0986c746d5845469bce6bb1c3596beb9fa2c0e1938a0ab54c648bf20d"
                             alt="Shoes"
                             width={320}  //240 in phone 
                             height={213} //160
                            />
                            {/* <div className='absolute inset-0 bg-gradient-to-t from-black/40 via-gray-500/40'></div> */}
                        </figure>
                        <div className="py-3">
                            <div className="flex gap-3 items-center">
                                <h2 className="text-base font-semibold">Small Car</h2>
                                <div className="badge text-xs px-2 py-1 rounded-full bg-yellow-600 text-white">NEW</div>
                            </div>
                            <p className=" font-extralight text-base">Rs 20,902</p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item w-60 md:w-80  rounded-md">
                    <div className=" cursor-pointer px-2">
                        <figure className="rounded border bg-slate-50 relative">
                            <Image className="w-full  object-contain" 
                             src="https://img.freepik.com/free-vector/white-convertible-car-isolated-white-vector_53876-66815.jpg?w=900&t=st=1710935345~exp=1710935945~hmac=98c1fad0986c746d5845469bce6bb1c3596beb9fa2c0e1938a0ab54c648bf20d"
                             alt="Shoes"
                             width={320}  //240 in phone 
                             height={213} //160
                            />
                            {/* <div className='absolute inset-0 bg-gradient-to-t from-black/40 via-gray-500/40'></div> */}
                        </figure>
                        <div className="py-3">
                            <div className="flex gap-3 items-center">
                                <h2 className="text-base font-semibold">Small Car</h2>
                                <div className="badge text-xs px-2 py-1 rounded-full bg-yellow-600 text-white">NEW</div>
                            </div>
                            <p className=" font-extralight text-base">Rs 20,902</p>
                        </div>
                    </div>
                </div>
                {/* end is here code */}
                
            </div>
            <div className=" hidden md:block absolute top-2/4 -translate-y-[60px] justify-between w-full">
                <div className=' justify-between flex pl-2 '>
                    <button onClick={scrollPrev} className="rounded-full bg-black/50 hover:bg-black p-2 text-white rotate-180"><IoIosArrowForward size={15} /></button>
                    <button onClick={scrollNext} className="rounded-full bg-black/50 hover:bg-black p-2 text-white"><IoIosArrowForward size={15} /></button>
                </div>
            </div>
        </div>
    );
}

export default Carousel;
