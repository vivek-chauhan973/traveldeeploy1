import "../app/globals.css";
import React, { useState, useRef, useEffect } from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark} from '@fortawesome/free-solid-svg-icons';




const Carousel = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleReadMore = () => {
      setIsOpen(true);
    };
  
    const handleClose = () => {
      setIsOpen(false);
    };
    // for fixed card pop up
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        // Clean up the effect
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

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
                    <h3 className="text-xl leading-8 font-medium text-white">Bizare Expenditure tour reviews</h3>
                    <p className="text-xs leading-8 font-semibold text-white"> What are you waiting for? Chalo Bag Bharo Nikal Pado!</p>
                </div>
                <div className="carousel gap-5 pb-10" ref={carouselRef}>
                    {/* start is here code  */}  
                        <div className="  bg-white min-w-80 rounded-lg ">
                            <div className="flex justify-between items-center px-4 mt-4">
                                <div className="p-1  flex item-center gap-1 ">
                                    <FaStar size={18} className=" text-primary" />
                                    <span className="text-sm">5</span>
                                </div>

                                <p className=" text-sm text-gray-400 uppercase">Recommended</p>
                            </div>

                            <div className=" px-3 py-1 ">
                                <h1 className=" text-lg font-semibold">Dream big and dare to fail </h1>
                                <p className="mt-1   text-sm line-clamp-3">
                                    If you are looking for comment and review cards suitable for
                                    different projects and concepts, then look at our cards pack!
                                    If you are looking for comment and review cards suitable for
                                    different projects and concepts, then look at our cards pack!
                                </p>
                                <button onClick={handleReadMore} className="text-blue-500 text-para">read more..</button>
                            </div>
                            <hr />
                            <div className="flex justify-between px-4 py-2 text-para">
                                <span className="font-bold text-gray-700">Someone Name</span>
                                <span>07 Sept</span>
                            </div>
                        </div>
                        {/* reviewsCard pop up here */}
                        {isOpen && (
                            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                                <div className="relative bg-white rounded-lg w-11/12 md:w-1/2 lg:w-1/3">                 
                                    <div className='pr-3 pt-1 flex justify-end items-center '>
                                        <button className='cursor-pointer py-0.5 px-2' onClick={handleClose}>


                                        <FontAwesomeIcon icon={faCircleXmark}  className='font'  />
                                        </button>
                                    </div>
                                    <div className="  bg-white min-w-80 rounded-lg">
                                        <div className="flex justify-between items-center px-4">
                                            <div className="p-1 border flex item-center gap-1 rounded-md border-black  ">
                                                <FaStar size={18} className=" text-primary" />
                                                <span className="text-sm">5</span>
                                            </div>

                                            <p className=" text-sm text-gray-400 uppercase">Recommended</p>
                                        </div>

                                        <div className=" px-4 py-3">
                                            <h1 className=" text-lg font-semibold">Lorem Ipsum is simply dummy..</h1>
                                            <p className="mt-3 text-sm">
                                                If you are looking for comment and review cards suitable for
                                                different projects and concepts, then look at our cards pack!
                                                If you are looking for comment and review cards suitable for
                                                different projects and concepts, then look at our cards pack!
                                            </p>
                                        </div>
                                        <hr />
                                        <div className="flex justify-between px-4 py-2 text-para">
                                            <span className="font-bold text-gray-700">Someone Name</span>
                                            <span>06 Sept</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {/* here start second code */}
                        <div className="  bg-white min-w-80 rounded-lg ">
                            <div className="flex justify-between items-center px-4 mt-4">
                                <div className="p-1  flex item-center gap-1 ">
                                    <FaStar size={18} className=" text-primary" />
                                    <span className="text-sm">5</span>
                                </div>

                                <p className=" text-sm text-gray-400 uppercase">Recommended</p>
                            </div>

                            <div className=" px-3 py-1 ">
                                <h1 className=" text-lg font-semibold">Dream big and dare to fail </h1>
                                <p className="mt-1   text-sm line-clamp-3">
                                    If you are looking for comment and review cards suitable for
                                    different projects and concepts, then look at our cards pack!
                                    If you are looking for comment and review cards suitable for
                                    different projects and concepts, then look at our cards pack!
                                </p>
                                <button onClick={handleReadMore} className="text-blue-500 text-para">read more..</button>
                            </div>
                            <hr />
                            <div className="flex justify-between px-4 py-2 text-para">
                                <span className="font-bold text-gray-700">Someone Name</span>
                                <span>06 Sept</span>
                            </div>
                        </div>
                        <div className="  bg-white min-w-80 rounded-lg ">
                            <div className="flex justify-between items-center px-4 mt-4">
                                <div className="p-1  flex item-center gap-1 ">
                                    <FaStar size={18} className=" text-primary" />
                                    <span className="text-sm">5</span>
                                </div>

                                <p className=" text-sm text-gray-400 uppercase">Recommended</p>
                            </div>

                            <div className=" px-3 py-1 ">
                                <h1 className=" text-lg font-semibold">Dream big and dare to fail </h1>
                                <p className="mt-1   text-sm line-clamp-3">
                                    If you are looking for comment and review cards suitable for
                                    different projects and concepts, then look at our cards pack!
                                    If you are looking for comment and review cards suitable for
                                    different projects and concepts, then look at our cards pack!
                                </p>
                                <button onClick={handleReadMore} className="text-blue-500 text-para">read more..</button>
                            </div>
                            <hr />
                            <div className="flex justify-between px-4 py-2 text-para">
                                <span className="font-bold text-gray-700">Someone Name</span>
                                <span>06 Sept</span>
                            </div>
                        </div>
                        <div className="  bg-white min-w-80 rounded-lg ">
                            <div className="flex justify-between items-center px-4 mt-4">
                                <div className="p-1  flex item-center gap-1 ">
                                    <FaStar size={18} className=" text-primary" />
                                    <span className="text-sm">5</span>
                                </div>

                                <p className=" text-sm text-gray-400 uppercase">Recommended</p>
                            </div>

                            <div className=" px-3 py-1 ">
                                <h1 className=" text-lg font-semibold">Dream big and dare to fail </h1>
                                <p className="mt-1   text-sm line-clamp-3">
                                    If you are looking for comment and review cards suitable for
                                    different projects and concepts, then look at our cards pack!
                                    If you are looking for comment and review cards suitable for
                                    different projects and concepts, then look at our cards pack!
                                </p>
                                <button onClick={handleReadMore} className="text-blue-500 text-para">read more..</button>
                            </div>
                            <hr />
                            <div className="flex justify-between px-4 py-2 text-para">
                                <span className="font-bold text-gray-700">Someone Name</span>
                                <span>06 Sept</span>
                            </div>
                        </div>
                        <div className="  bg-white min-w-80 rounded-lg ">
                            <div className="flex justify-between items-center px-4 mt-4">
                                <div className="p-1  flex item-center gap-1 ">
                                    <FaStar size={18} className=" text-primary" />
                                    <span className="text-sm">5</span>
                                </div>

                                <p className=" text-sm text-gray-400 uppercase">Recommended</p>
                            </div>

                            <div className=" px-3 py-1 ">
                                <h1 className=" text-lg font-semibold">Dream big and dare to fail </h1>
                                <p className="mt-1   text-sm line-clamp-3">
                                    If you are looking for comment and review cards suitable for
                                    different projects and concepts, then look at our cards pack!
                                    If you are looking for comment and review cards suitable for
                                    different projects and concepts, then look at our cards pack!
                                </p>
                                <button onClick={handleReadMore} className="text-blue-500 text-para">read more..</button>
                            </div>
                            <hr />
                            <div className="flex justify-between px-4 py-2 text-para">
                                <span className="font-bold text-gray-700">Someone Name</span>
                                <span>06 Sept</span>
                            </div>
                        </div>
                        {/* reviewsCard pop up end */}

                        
                </div>
                <div className=" bg-gradient-to-l from-white opacity-95 w-10 h-[60%] mt-36 -right-5  md:hidden absolute z-30  top-0"></div>
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
