import React, { useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { RiLoginCircleFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import FlyoutLink from "./FlyoutLink";
import { header } from "./Data";
import Header2 from "../../MobileHeader";
import Image from 'next/image'

const Header3 = () => {
const [headerLogo,setHeaderLogo]=useState(null);
  async function fetchImage() {
    try {
      const res = await fetch('/api/logo/logo1');
      const data = await res.json();
      return data;
    } catch (error) {
      console.error('Error fetching image:', error);
    }
  }

  // Fetch existing image on component mount
  useEffect(() => {
    fetchImage().then(res=>setHeaderLogo(res?.data));
  }, [headerLogo]);
  // console.log(header);
  return (
    <div className=" top-0 sticky z-[999]">
      {/* Navbar*/}
      <div className="bg-navyblack">
        <div className="container-wrapper">
        
          <div className="flex items-center justify-between gap-5 py-3 ">
          <div className=" relative flex gap-2">
              <div className=" absolute xl:hidden">
                <Header2 />
              </div>
              
            </div>
            <div className=" ">
            <Image
                src={headerLogo && headerLogo[0].path}
                alt="Logo"
                className="w-[150px] md:w-[240px] lg:w-[280px]"
              />
              </div>
            <div className="flex justify-between border-indigo-500 bg-white rounded-full w-full md:w-4/12 px-[8px] border-[2px] overflow-hidden   p-[5px] items-center">
              <IoIosSearch size={28} />
              <input
                className="border-none focus:outline-none placeholder:text-sm placeholder-black w-full px-2 text-sm"
                placeholder="Search Your Next Destination"
                type="text"
                name=""
                id=""
              />
              <button className="bg-navyblack rounded-full text-white text-sm rounded-badge px-4 py-1">
                Search
              </button>
            </div>
            <div className="hidden md:flex gap-3">
              <button className="flex items-center gap-2  px-2 py-1 bg-white text-navyblack rounded-lg">
                <span>
                  <RiLoginCircleFill />
                </span>{" "}
                Login{" "}
              </button>
              <button className="flex items-center gap-2 border-white border text-white px-2 py-1 rounded-lg">
                <span>
                  <FaUser />
                </span>{" "}
                Sign up{" "}
              </button>
            </div>
            
          </div>
        </div>
      </div>
      <div className="border-b shadow-sm py-1 bg-white hidden xl:block">
        <ul className="container-wrapper flex gap-x-10 text-para">
          <li className="capitalize flex items-center gap-1 cursor-pointer hover:text-primary">
            <span>
              <FaHome />
            </span>
            Home
          </li>
          {header?.map((item, i) => (
            <li
              key={i}
              className="capitalize flex items-center gap-1 cursor-pointer hover:text-primary"
            >
              <span>{item.icon}</span>
              <FlyoutLink href={item.href} FlyoutContent={item.element}>
                {item.name}
              </FlyoutLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header3;
