import React, { useState, useEffect, useCallback } from 'react';
import Data from './Data';
import {
  DownArrow, WhatAppIcon,
} from "@/components/icons/index"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown, faClock, faPhone, faXmark, faUser } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { useCarPopupContext } from '@/components/admin/context/CarPopupCalculation';
import Cookies from "js-cookie";

const Header1 = ({ setTogle, togle }) => {

  const { setLoginPopup } = useCarPopupContext();
  const [isVisible, setIsVisible] = useState(true);
  const [openClose, setOpenClose] = useState(false);
  const [renderedComponent, setRenderedComponent] = useState(null);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isVisible1, setIsVisible1] = useState(true);
  const [travel, setTravel] = useState(false);
  const { data: session } = useSession();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = Cookies.get("token");
    setIsLoggedIn(!!token);
  }, [isLoggedIn]);

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

  const handleLogout = async () => {
    try {
      const res = await fetch("/api/authentication/logout", { method: "POST" });
      const data = await res.json();
      if (data?.success) {
        Cookies.remove("token");
        setIsLoggedIn(false); // Update login state
        alert("User Logout Successfully");
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      console.error('Logout error:', error);
      alert("Something went wrong during logout");
    }
  };

  const handleLogin = () => {
    setLoginPopup(true); // Open login popup
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/919897581113`, "_blank");
  };

  return (
    <div
      className={`fixed top-0 right-0 w-full h-full bg-white shadow-sm border transition-transform duration-300 ease-in-out ${isVisible ? 'translate-x-0' : 'translate-x-full'
        }`} style={{ zIndex: 1000 }}>
      <div className={`fixed top-0 right-0 h-full w-full  transform transition-transform duration-1000 ease-in-out ${togle ? 'translate-x-0' : 'translate-x-full'} `}>
        <div className="h-[10vh] w-full px-2 sm:px-4 bg-[#0e1e2c] flex items-center justify-between">
          <div className=""
            onClick={() => {
              setIsVisible(false);
              setTimeout(() => setTogle(false), 300); // Ensure this matches the duration of the transition
            }}>
            <FontAwesomeIcon icon={faXmark} className='text-xl cursor-pointer text-white ml-2' />
          </div>
          <div className="flex px-2">
            {(session !== null || Cookies.get("token") !== undefined || isLoggedIn) ? (
              <div className="flex px-2">
                <button className="items-center flex justify-center gap-2 px-2 py-2 text-md font-semibold text-white"
                  onClick={session === null ? handleLogout : signOut}
                >
                  <FontAwesomeIcon icon={faUser} className='font' />
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex px-2">
                <button className="items-center flex justify-center gap-2 px-2 py-2 text-md font-semibold text-white"
                  onClick={handleLogin}
                >
                  <FontAwesomeIcon icon={faUser} className='font' />
                  Login
                </button>
              </div>
            )}
          </div>
        </div>
        {openClose ? (
          <div onMouseLeave={() => setOpenClose(false)}>
            {Data[renderedComponent] && Data[renderedComponent]({ setOpenClose })}
          </div>
        ) : (
          <div>
            <div className="  ml-1 h-[80vh] w-full overflow-y-scroll   scrollbar-thin scrollbar-thumb-gray-400">
              <div className="flex w-full gap-3     flex-col px-2 sm:px-4 my-2">
                <Link className="cursor-pointer font-semibold"
                  onClick={() => setTogle(false)} href="/">
                  Home
                </Link>
                <div className="flex justify-between">
                  <h3 className="cursor-pointer font-semibold"
                    onClick={() => { setOpenClose(true); setRenderedComponent(0) }}
                  >
                    Destination
                  </h3>
                  <div className="cursor-pointer ">
                    <div className=' text-2xl rotate-[270deg]'
                      onClick={() => { setOpenClose(true); setRenderedComponent(0) }}
                    >
                      <DownArrow />
                    </div>
                  </div>
                </div>
                <div className="flex justify-between">
                  <h3 className="cursor-pointer font-semibold"
                    onClick={() => { setOpenClose(true); setRenderedComponent(2) }}>
                    Speciality Tours
                  </h3>
                  <div className="cursor-pointer">
                    <div className=' text-2xl rotate-[270deg]'
                      onClick={() => { setOpenClose(true); setRenderedComponent(2) }}
                    >
                      <DownArrow />
                    </div>
                  </div>
                </div>
                <div className="flex justify-between">
                  <h3 className="cursor-pointer font-semibold"
                    onClick={() => { setOpenClose(true); setRenderedComponent(3) }}
                  >
                    Holidays
                  </h3>
                  <div className="cursor-pointer">
                    <div className=' text-2xl rotate-[270deg] '
                      onClick={() => { setOpenClose(true); setRenderedComponent(3) }}
                    >
                      <DownArrow />
                    </div>
                  </div>
                </div>
                <Link className="cursor-pointer font-semibold"
                  onClick={() => setTogle(false)} href="/car-rental">
                  Car Hire
                </Link>
                <div>
                  <div className='flex justify-between pr-2 cursor-pointer'
                    onClick={() => setTravel((prev) => !prev)}
                  >
                    <h3 className="font-semibold">
                      Travel
                    </h3>
                    {travel ?
                      <FontAwesomeIcon icon={faAngleUp} />
                      : <FontAwesomeIcon icon={faAngleDown} />
                    }
                  </div>
                  {travel &&
                    <div className='flex flex-col gap-2 mx-4 mt-2' >
                      <Link className="cursor-pointer text-para font-medium"
                        onClick={() => { setTogle(false); setTravel(false) }} href="/travel/blog">
                        Blog
                      </Link>
                      <Link className="cursor-pointer text-para font-medium"
                        onClick={() => { setTogle(false); setTravel(false) }} href="/travel/travel-guide">
                        Travel Guide
                      </Link>
                      <Link className="cursor-pointer text-para font-medium"
                        onClick={() => { setTogle(false); setTravel(false) }} href="/travel/news">
                        News
                      </Link>
                    </div>}
                </div>
              </div>
              <hr className="mx-1" />
              <div className="w-full flex flex-col gap-3 px-2 sm:px-4 my-2">
                <Link className="cursor-pointer font-semibold"
                  onClick={() => setTogle(false)} href="/contact-us">
                  Contact Us
                </Link>
                <Link className="cursor-pointer font-semibold"
                  onClick={() => setTogle(false)} href="/about-us">
                  About Us
                </Link>
                <Link className="cursor-pointer font-semibold"
                  onClick={() => setTogle(false)} href="/careers">
                  Career
                </Link>
              </div>
              <hr className="mx-1" />
              <div className="w-full flex flex-col gap-3 px-2 sm:px-4 my-3">
                <div className="flex gap-2">
                  <div className="">
                    <FontAwesomeIcon icon={faPhone} className='text-sm mr-2' />
                  </div>
                  <div className="flex gap-0.5 flex-col">
                    <h6 className=' font-semibold'>Customer Support Number</h6>
                    <Link href="tel:+919873152953" className="cursor-pointer text-blue-500 hover:underline">+91-98731-52953</Link>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="">
                    <FontAwesomeIcon icon={faPhone} className='text-sm mr-2' />
                  </div>
                  <div className="flex gap-0.5 flex-col">
                    <h6 className=' font-semibold'>You can also call on :</h6>
                    <Link href="tel:+917252885525" className="cursor-pointer text-blue-500 hover:underline">+91-7252-885-525</Link>
                    <Link href="tel:+919897581113" className="cursor-pointer text-blue-500 hover:underline">+91-9897-581-113</Link>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="pt-1.5 ">
                    <WhatAppIcon onClick={handleWhatsApp} />
                  </div>
                  <div className="flex gap-0.5 flex-col cursor-pointer"
                    onClick={handleWhatsApp}
                  >
                    <h6 className='font-semibold'>Chat on Whatsapp</h6>
                    <p className="cursor-pointer text-blue-500 hover:underline">+91-9897-581-113</p>
                  </div>
                </div>
                <div className="flex gap-2 ">
                  <div className=''>
                    <FontAwesomeIcon icon={faClock} className='text-para mr-1.5' />
                  </div>
                  <div className="flex gap-0.5 flex-col">
                    <h6 className="font-semibold">Business hours</h6>
                    <p>10am - 6pm</p>
                  </div>
                </div>
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


