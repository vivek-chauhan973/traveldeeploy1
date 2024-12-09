import React, { useState, useEffect, useCallback } from 'react';
import Data from './Data';
import {
  DownArrow, WhatAppIcon,
} from "@/components/icons/index"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleUp,faAngleDown,faClock, faPhone, faXmark } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
const Header1 = ({ setTogle, togle }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [openClose, setOpenClose] = useState(false);
  const [renderedComponent, setRenderedComponent] = useState(null);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isVisible1, setIsVisible1] = useState(true);
  const [travel, setTravel] = useState(false);

  const handleScroll = useCallback(() => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop && isVisible1) {
      setIsVisible1(false); // Scrolling down
    } else if (scrollTop < lastScrollTop && !isVisible1) {
      setIsVisible1(true); // Scrolling up
    }
    setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop); // For Mobile or negative scrolling
  }, [isVisible1, lastScrollTop]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <div
      className={`fixed top-0 right-0 w-full h-full bg-white shadow-sm border transition-transform duration-300 ease-in-out ${isVisible ? 'translate-x-0' : 'translate-x-full'
        }`} style={{ zIndex: 1000 }}>
      <div className={`fixed top-0 right-0 h-full w-full  transform transition-transform duration-1000 ease-in-out ${togle ? 'translate-x-0' : 'translate-x-full'} `}>
        <div className="h-[10vh] w-full px-2 sm:px-4 bg-[#0e1e2c] flex items-center justify-between">
          <div className="text-2xl cursor-pointer text-white" onClick={() => {
            setIsVisible(false);
            setTimeout(() => setTogle(false), 300); // Ensure this matches the duration of the transition
          }}>

            <FontAwesomeIcon icon={faXmark} className=' font1' />
          </div>
        </div>

        {openClose ? (
          <div onMouseLeave={() => setOpenClose(false)}>
            {Data[renderedComponent] && Data[renderedComponent]({ setOpenClose })}
          </div>
        ) : (
          <div>
            <div className="  ml-1 h-[80vh] w-full overflow-y-scroll   scrollbar-thin scrollbar-thumb-gray-400">
              <div className="flex w-full gap-4  flex-col px-2 sm:px-4 my-2">
                <Link className="cursor-pointer  sm:text-[16px] md:text-xl font-semibold" onClick={() => setTogle(false)} href="/">Home</Link>
                <div className="flex justify-between">

                  <h3 className="cursor-pointer  sm:text-[16px] md:text-xl font-semibold" onClick={() => { setOpenClose(true); setRenderedComponent(0) }}>Destination</h3>
                  <div className="cursor-pointer">

                    <div className=' text-2xl rotate-[270deg]' onClick={() => { setOpenClose(true); setRenderedComponent(0) }}>
                      <DownArrow />
                    </div>
                  </div>
                </div>
                {/* <div className="flex justify-between">
                  <h3 className="cursor-pointer  sm:text-[16px] md:text-xl font-semibold" onClick={() => { setOpenClose(true); setRenderedComponent(1) }}>World</h3>
                  <div className="cursor-pointer">
                    <div className=' text-2xl rotate-[270deg]' onClick={() => { setOpenClose(true); setRenderedComponent(1) }} >
                      <DownArrow />
                    </div>

                  </div>
                </div> */}
                <div className="flex justify-between">
                  <h3 className="cursor-pointer  sm:text-[16px] md:text-xl font-semibold" onClick={() => { setOpenClose(true); setRenderedComponent(2) }}>Speciality Tours</h3>
                  <div className="cursor-pointer">

                    <div className=' text-2xl rotate-[270deg]' onClick={() => { setOpenClose(true); setRenderedComponent(2) }} >
                      <DownArrow />
                    </div>
                  </div>
                </div>
                <div className="flex justify-between">
                  <h3 className="cursor-pointer  sm:text-[16px] md:text-xl font-semibold" onClick={() => { setOpenClose(true); setRenderedComponent(3) }}>Holidays</h3>
                  <div className="cursor-pointer">
                    <div className=' text-2xl rotate-[270deg]' onClick={() => { setOpenClose(true); setRenderedComponent(3) }} >
                      <DownArrow />
                    </div>
                  </div>
                </div>
                <Link className="cursor-pointer  sm:text-[16px] md:text-xl font-semibold" onClick={() => setTogle(false)} href="/car-rental"> Car Hire</Link>
                <div>
                  <div className='flex justify-between'>
                  <h3 className="cursor-pointer  sm:text-[16px] md:text-xl font-semibold" onClick={() => { setTravel(true) }} >Travel</h3>
                   {travel?<FontAwesomeIcon icon={faAngleUp} onClick={()=>setTravel(false)}/>:<FontAwesomeIcon icon={faAngleDown} onClick={()=>setTravel(true)}/>}
                  </div>
                  {travel && <div className=' flex flex-col gap-2 mx-4 mt-2' ><Link className="cursor-pointer  sm:text-[16px] md:text-xl " onClick={() => { setTogle(false); setTravel(false) }} href="/travel/blog"> Blog</Link>
                    <Link className="cursor-pointer  sm:text-[16px] md:text-xl" onClick={() => { setTogle(false); setTravel(false) }} href="/travel/travel-guide"> Travel Guide</Link>
                    <Link className="cursor-pointer  sm:text-[16px] md:text-xl " onClick={() => { setTogle(false); setTravel(false) }} href="/travel/news"> News</Link>
                  </div>}
                </div>

                <h3 className="cursor-pointer md: sm:text-[16px] md:text-xl font-semibold" onClick={() => setTogle(false)} href="#">Contact Us</h3>
              </div>
              <hr className="mx-1" />
              <div className="w-full flex flex-col gap-4 px-2 sm:px-4 my-2">
                <h6 className="cursor-pointer" onClick={() => setTogle(false)} href="#">About Us</h6>
                <h6 className="cursor-pointer" onClick={() => setTogle(false)} href="#">Career</h6>
              </div>
              <hr className="mx-1" />
              <div className="w-full flex flex-col gap-6 px-2 sm:px-4 my-2">
                <div className="flex gap-2 items-center">
                  <div>
                    {/* <Image src="" className=" sm:text-[16px] md:text-2xl" alt='pic' width="125"
                    height="150" /> */}
                  </div>
                  <div className="flex gap-1 flex-col">
                    <h6 className=' font-semibold'>Toll free number</h6>
                    <p className="cursor-pointer">1800 22 7979</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="pt-2 sm:text-[10px] md:text-2xl">

                    <FontAwesomeIcon icon={faPhone} className='font' />

                  </div>
                  <div className="flex gap-1 flex-col">
                    <h6 className=' font-semibold'>You can also call on:</h6>
                    <p className="cursor-pointer ">+91 22 2101 7979</p>
                    <p className="cursor-pointer ">+91 22 2101 6969</p>
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <div><WhatAppIcon className=" sm:text-[10px] md:text-2xl text-green-500" /></div>
                  <div className="flex gap-1 flex-col">
                    <h6 className='  font-semibold'>Chat on WhatsApp</h6>
                    <p className="cursor-pointer ">+91 88799 00414</p>
                  </div>
                </div>
                <div className="flex gap-2 items-center sm:text-[10px] md:text-2xl">
                  <FontAwesomeIcon icon={faClock} className='font' />
                  <div>

                  </div>
                  <div className="flex gap-1 flex-col">
                    <h6 className="font-semibold">Business hours</h6>
                    <p>10am - 6pm</p>
                  </div>
                </div>
              </div>
              <hr className="mx-1" />
              <div className="flex gap-4 flex-col px-2 sm:mx-4 my-2">
                <p className="cursor-pointer text-blue-600  sm:text-[10px] md:text-xl" onClick={() => setTogle(false)} href="#">Nearest office</p>
                <p className="cursor-pointer text-blue-600  sm:text-[10px] md:text-xl" onClick={() => setTogle(false)} href="#">Leave your feedback here</p>
              </div>
            </div>
            <div className="h-[10vh] w-full"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header1;


