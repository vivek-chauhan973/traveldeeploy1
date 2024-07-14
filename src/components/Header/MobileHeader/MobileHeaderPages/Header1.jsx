import React, { useState, useEffect, useCallback } from 'react';
import { RxCross1 } from "react-icons/rx";
import { IoChevronForwardSharp } from "react-icons/io5";
import { ImWhatsapp } from "react-icons/im";
import { MdOutlineWatchLater } from "react-icons/md";
import Image from 'next/image'
import { MdOutlineAddIcCall } from "react-icons/md";

import Data from './Data';

const Header1 = ({ setTogle, togle }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [openClose, setOpenClose] = useState(false);
  const [renderedComponent, setRenderedComponent] = useState(null);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isVisible1, setIsVisible1] = useState(true);

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
    <div className={` sm:-ml-16 md:-ml-14 lg:-ml-28 relative w-[100vw] -ml-5 -mt-14 sm:w-60 md:w-64 lg:w-80 h-[100vh] shadow-sm border bg-white transition-transform duration-300 ease-in-out ${isVisible ? 'translate-x-0' : '-translate-x-full'} lg:-my-16 md:-mt-16 sm:-mt-14`}>
      <div className="h-[10vh] w-full px-2 sm:px-4 lg:pt-2 -mt-2 pt-1  sm:pt-1 bg-[#0e1e2c] lg:-mt-2 md:-mt-2 md:pt-2 sm:-mt-2">
        <RxCross1 className="text-2xl cursor-pointer text-white" onClick={() => { setIsVisible(false); setTimeout(() => setTogle(false), 300); }} />
      </div>
      {openClose ? (
        <div onMouseLeave={() => setOpenClose(false)}>
          {Data[renderedComponent] && Data[renderedComponent]({ setOpenClose })}
        </div>
      ) : (
        <div>
          <div className="h-[80vh] w-full overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400">
            <div className="flex w-full gap-4 flex-col px-2 sm:px-4 my-2">
              <div className="flex justify-between">
                <p className="cursor-pointer  sm:text-[10px] md:text-xl font-semibold" onClick={() => { setOpenClose(true); setRenderedComponent(0) }}>India</p>
                <p className="cursor-pointer"><IoChevronForwardSharp className=' text-2xl' onClick={() => { setOpenClose(true); setRenderedComponent(0) }} /></p>
              </div>
              <div className="flex justify-between">
                <p className="cursor-pointer  sm:text-[10px] md:text-xl font-semibold" onClick={() => { setOpenClose(true); setRenderedComponent(1) }}>World</p>
                <p className="cursor-pointer"><IoChevronForwardSharp className=' text-2xl' onClick={() => { setOpenClose(true); setRenderedComponent(1) }} /></p>
              </div>
              <div className="flex justify-between">
                <p className="cursor-pointer  sm:text-[10px] md:text-xl font-semibold" onClick={() => { setOpenClose(true); setRenderedComponent(2) }}>Speciality Tours</p>
                <p className="cursor-pointer"><IoChevronForwardSharp className=' text-2xl' onClick={() => { setOpenClose(true); setRenderedComponent(2) }} /></p>
              </div>
              <div className="flex justify-between">
                <p className="cursor-pointer  sm:text-[10px] md:text-xl font-semibold" onClick={() => { setOpenClose(true); setRenderedComponent(3) }}>Customized Holidays</p>
                <p className="cursor-pointer"><IoChevronForwardSharp className=' text-2xl' onClick={() => { setOpenClose(true); setRenderedComponent(3) }} /></p>
              </div>
              <p className="cursor-pointer  sm:text-[10px] md:text-xl font-semibold" onClick={() => setTogle(false)} href="#">Corporate Travel</p>
              <p className="cursor-pointer  sm:text-[10px] md:text-xl font-semibold" onClick={() => setTogle(false)} href="#">Inbound</p>
              <div className="flex justify-between">
                <p className="cursor-pointer  sm:text-[10px] md:text-xl font-semibold" onClick={() => { setOpenClose(true); setRenderedComponent(4) }}>Forex</p>
                <p className="cursor-pointer"><IoChevronForwardSharp className=' text-2xl' onClick={() => { setOpenClose(true); setRenderedComponent(4) }} /></p>
              </div>
              <p className="cursor-pointer md:text-xl font-semibold" onClick={() => setTogle(false)} href="#">Gift a Tour</p>
              <p className="cursor-pointer md: sm:text-[10px] md:text-xl font-semibold" onClick={() => setTogle(false)} href="#">Contact Us</p>
            </div>
            <hr className="mx-1" />
            <div className="w-full flex flex-col gap-4 px-2 sm:px-4 my-2">
              <p className="cursor-pointer" onClick={() => setTogle(false)} href="#">About Us</p>
              <p className="cursor-pointer" onClick={() => setTogle(false)} href="#">Career</p>
              <p className="cursor-pointer" onClick={() => setTogle(false)} href="#">Blogs</p>
              <p className="cursor-pointer" onClick={() => setTogle(false)} href="#">Contact js</p>
            </div>
            <hr className="mx-1" />
            <div className="w-full flex flex-col gap-6 px-2 sm:px-4 my-2">
              <div className="flex gap-2 items-center">
                <div><Image src="" className=" sm:text-[10px] md:text-2xl" alt='pic' /></div>
                <div className="flex gap-1 flex-col">
                  <p>Toll free number</p>
                  <p className="cursor-pointer font-semibold">1800 22 7979</p>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="pt-2"><MdOutlineAddIcCall className=" sm:text-[10px] md:text-2xl" /></div>
                <div className="flex gap-1 flex-col">
                  <p>You can also call on:</p>
                  <p className="cursor-pointer font-semibold">+91 22 2101 7979</p>
                  <p className="cursor-pointer font-semibold">+91 22 2101 6969</p>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <div><ImWhatsapp className=" sm:text-[10px] md:text-2xl text-green-500" /></div>
                <div className="flex gap-1 flex-col">
                  <p>Chat on WhatsApp</p>
                  <p className="cursor-pointer font-semibold">+91 88799 00414</p>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <div><MdOutlineWatchLater className=" sm:text-[10px] md:text-2xl" /></div>
                <div className="flex gap-1 flex-col">
                  <p className="font-semibold">Business hours</p>
                  <p className="font-semibold">10am - 6pm</p>
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
  );
};

export default Header1;
