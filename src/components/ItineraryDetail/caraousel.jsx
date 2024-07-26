import React, { useRef, useEffect } from 'react';
import '../../app/globals.css'; 
import { IoIosArrowForward } from "react-icons/io";
import Image from 'next/image'
const Carousel = () => {
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
                
                carouselRef.current.style.overflowX = 'scroll';
            } else {
                
                carouselRef.current.style.overflowX = 'hidden';
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); 

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="carousel-container relative container-wrapper">
            <div className="carousel gap-5" ref={carouselRef}>
                <div className="carousel-item relative rounded-md overflow-hidden">
                    <Image src="https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" alt="Image 1" className="w-full rounded-md shadow-lg h-full object-cover" />
                    <div className='absolute inset-0 bg-gradient-to-t from-black/40 via-gray-500/40'></div>
                </div>
                <div className="carousel-item relative rounded-md overflow-hidden">
                    <Image src="https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" alt="Image 2" className="w-full rounded-md shadow-lg h-full object-cover" />
                    <div className='absolute inset-0 bg-gradient-to-t from-black/40 via-gray-500/40'></div>
                </div>
                <div className="carousel-item relative rounded-md overflow-hidden">
                    <Image src="https://images.unsplash.com/photo-1622890806166-111d7f6c7c97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" alt="Image 3" className="w-full rounded-md shadow-lg h-full object-cover" />
                    <div className='absolute inset-0 bg-gradient-to-t from-black/40 via-gray-500/40'></div>
                </div>
                <div className="carousel-item relative rounded-md overflow-hidden">
                    <Image src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" alt="Image 4" className="w-full rounded-md shadow-lg h-full object-cover" />
                    <div className='absolute inset-0 bg-gradient-to-t from-black/40 via-gray-500/40'></div>
                </div>
                <div className="carousel-item relative rounded-md overflow-hidden">
                    <Image src="https://images.unsplash.com/photo-1575424909138-46b05e5919ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" alt="Image 5" className="w-full rounded-md shadow-lg h-full object-cover" />
                    <div className='absolute inset-0 bg-gradient-to-t from-black/40 via-gray-500/40'></div>
                </div>
                <div className="carousel-item relative rounded-md overflow-hidden">
                    <Image src="https://images.unsplash.com/photo-1559333086-b0a56225a93c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" alt="Image 6" className="w-full rounded-md shadow-lg h-full object-cover" />
                    <div className='absolute inset-0 bg-gradient-to-t from-black/40 via-gray-500/40'></div>
                </div>
            </div>
            <div className=" hidden md:block absolute top-2/4 -translate-y-2/4 justify-between w-full">
                <div className=' justify-between flex'>

                <button onClick={scrollPrev} className="rounded-full bg-black/50 hover:bg-black p-2 text-white rotate-180"><IoIosArrowForward size={20}/></button>
                <button onClick={scrollNext} className="rounded-full bg-black/50 hover:bg-black p-2 text-white"><IoIosArrowForward size={20}/></button>
                </div>
            </div>
        </div>
    );
}

export default Carousel;
