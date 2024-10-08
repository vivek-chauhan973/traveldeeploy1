import React, { useState, useEffect } from "react";

import FlyoutLink from "./FlyoutLink";
import { header } from "./Data";
import Header2 from "../../MobileHeader";
// import Image from "next/image";
import Image from 'next/image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faArrowAltCircleRight, faHome,faAddressBook,faHandshakeSimple } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";


const Header3 = () => {
  const [logo, setLogo] = useState(null);
  // console.log("imaheeee", logo?.path)
  // console.log("logo", logo)


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/logo/logo1');
        if (response.ok) {
          const result = await response.json();
          setLogo(result);
        } else {
          console.error('Network response was not ok');
        }
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };
    fetchData();
  }, []);

  const [imageSrc, setImageSrc] = useState('/logo.png');

  useEffect(() => {
    if (logo?.data?.[0]?.path) {
      setImageSrc(logo.data[0].path);
    } else {
      setImageSrc('/logo.png');
    }
  }, [logo]);
  // console.log("logo is here :: ",imageSrc)

  return (
    <div className=" top-0 sticky z-[999]">
      {/* Navbar*/}
      <div className="bg-[#272727]">
        <div className="container-wrapper">
          <div className="flex md:items-center md:justify-between md:gap-5 py-3 ">
            <div className=" flex w-full md:w-auto justify-between ">

              {/* images... */}
              <div>
                <Image
                  src={imageSrc}
                  height={200}
                  width={200}
                  alt="Logo"
                  onError={() => setImageSrc('/logo.png')} // Ensure fallback if image fails to load
                />
              </div>
              <div className=" relative  flex gap-2 md:hidden xl:hidden">
                <Header2 />
              </div>
            </div>

            <div className=" justify-between   hidden md:block border-indigo-500 bg-white rounded-full w-full md:w-4/12 px-[8px] border-[2px] overflow-hidden  p-[5px] items-center">
              <div className="flex gap-1 ">
                <span className="">
                  <FontAwesomeIcon icon={faSearch} className='font' />
                </span>
                <input
                  className="border-none focus:outline-none  placeholder:text-sm placeholder-black w-full  text-sm"
                  placeholder="Search Your Next Destination"
                  type="text"
                  name=""
                  id=""
                />
              </div>

            </div>
            <div className="hidden md:flex gap-3">
              <button className="md:flex items-center gap-2 block px-2 py-1 text-sm bg-white text-navyblack rounded-lg">
                <span className=" ">

                  <FontAwesomeIcon icon={faArrowAltCircleRight} className='font' />
                </span>{" "}

                <h6 className=" ">
                  Login{" "}
                </h6>
              </button>
              <button className=" items-center flex justify-center gap-2 px-2 py-2 text-sm border-white border text-white rounded-lg">
                <FontAwesomeIcon icon={faUser} className='font' />

                <h6 className=" ">
                  Sign up

                </h6>
                {" "}
              </button>
            </div>
            {/* <div className="md:hidden text-white"align-items: flex-end;>
              <FaBars />
            </div> */}
          </div>
        </div>
      </div>
      <div className="border-b shadow-sm py-1 bg-white hidden xl:block">
        <ul className="container-wrapper     flex items-end gap-x-10 text-para">
          <li  className="capitalize flex items-center gap-1  cursor-pointer hover:text-primary">
          <Link href='/'>

            <FontAwesomeIcon icon={faHome} className='font' />

            <span >
              Home
            </span>
          </Link>
          </li>

          {header?.map((item, i) => (
            <li
              key={i}
              className="capitalize items-center flex  gap-1 cursor-pointer hover:text-primary"
            >
              {/* <span className="">{item.icon}</span> */}
              {item.icon}
              <spam>
              {item?.name==='Car Hire'&&<Link href='/car-rental'>car hire</Link>}

              {item?.name!=='Car Hire'&&  <FlyoutLink  FlyoutContent={item.element}>
                {item.name}
              </FlyoutLink>}
              </spam>

            </li>
            
          ))}
          <li  className="capitalize flex items-center gap-1  cursor-pointer hover:text-primary">
          <Link href='/deals'>
          <FontAwesomeIcon icon={faHandshakeSimple}  className='font'  />
            <span>
            Deals
            </span>
          </Link>
          </li>
          <li  className="capitalize flex items-center gap-1  cursor-pointer hover:text-primary">
          <Link href='/contact'>
          <FontAwesomeIcon icon={  faAddressBook}  className='font'  />
            <span>
            Contact Us
            </span>
          </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header3;