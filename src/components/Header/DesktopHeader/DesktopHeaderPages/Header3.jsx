
import React from "react";
import { FaHome } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { RiLoginCircleFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import FlyoutLink from "./FlyoutLink";
import { header } from "./Data";
import Header2 from "../../MobileHeader";
// import Image from "next/image";
// import Logo from "../../../../../public/HEAD.png";
import { CiSearch } from "react-icons/ci";


const Header3 = () => {
  // console.log(header);
  return (
    <div className=" top-0 sticky z-[999]">
      {/* Navbar*/}
      <div className="bg-navyblack">
        <div className="container-wrapper">
          <div className="flex md:items-center md:justify-between md:gap-5 py-3 ">
            <div className=" justify-between  ">
              <div className=" relative flex gap-2 xl:hidden">
                <div className=" mt-3">
                  <Header2 />
                </div>
                <div className="flex justify-between  ">
                  {/* <Image className="w-44  md:w-52" src={Logo} alt="" /> */}
                </div>
                
              </div>
              <CiSearch size={24} className="text-white mt-3 md:hidden" />
            </div>

            <div className=" justify-between   hidden md:block border-indigo-500 bg-white rounded-full w-full md:w-4/12 px-[8px] border-[2px] overflow-hidden   p-[5px] items-center">

              <div className="flex">
                <IoIosSearch size={28} />
                <input
                  className="border-none focus:outline-none  placeholder:text-sm placeholder-black w-full px-2 text-sm"
                  placeholder="Search Your Next Destination"
                  type="text"
                  name=""
                  id=""
                />
              </div>


            </div>
            <div className="hidden md:flex gap-3">
              <button className="md:flex items-center gap-2 block px-2 py-1 bg-white text-navyblack rounded-lg">
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
            {/* <div className="md:hidden text-white">
              <FaBars />
            </div> */}
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


