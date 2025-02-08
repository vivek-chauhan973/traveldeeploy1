import React, { useState, useEffect, useMemo } from "react";
import FlyoutLink from "./FlyoutLink";
import { header } from "./Data";
import Header2 from "../../MobileHeader";
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faArrowAltCircleRight, faHome, faAddressBook, faHandshakeSimple } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";
import { useCarPopupContext } from "@/components/admin/context/CarPopupCalculation";
import SearchPackage from "./SearchPackage";
import Cookies from "js-cookie";
import { useSession, signOut } from "next-auth/react";
const Header3 = () => {
  const [logo, setLogo] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { setLoginPopup, searchQuery, setSearchQuery } = useCarPopupContext();
  const [searchPackagePopup, setSearchPackagePopup] = useState(false);
  const { data: session } = useSession();
  useEffect(() => {
    const token = Cookies.get("token");
    setIsLoggedIn(!!token);
  }, [isLoggedIn]);

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

  const imageSrc = useMemo(() => {
    if (logo?.data?.[0]?.path) {
      return logo.data[0].path;
    }
    return '/logo.png';
  }, [logo]);

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

  return (
    <div className=" top-0 sticky z-[999]">
      {/* Navbar */}
      <div className="bg-[#272727]">
        <div className="container-wrapper">
          <div className="flex md:items-center md:justify-between md:gap-5 py-3 ">
            <div className="flex w-full md:w-auto justify-between ">
              {/* Logo */}
              <div>
                <Image
                  src={imageSrc}
                  height={200}
                  width={200}
                  alt="Logo"
                />
              </div>
              <div className=" relative flex gap-2 md:hidden xl:hidden">
                <Header2 />
              </div>
            </div>
            <div className="justify-between hidden md:block border-indigo-500 bg-white rounded-full w-full md:w-4/12 px-[8px] border-[2px] overflow-hidden  p-[5px] items-center">
              <div className="flex gap-1 " onClick={() => setSearchPackagePopup(true)}>
                <span className="mx-2">
                  <FontAwesomeIcon icon={faSearch} className='text-sm' />
                </span>
                <input
                  className="border-none focus:outline-none placeholder:text-sm placeholder-black w-full text-sm"
                  placeholder="Search Your Next Destination"
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            {searchPackagePopup && (
              <SearchPackage setSearchPackagePopup={setSearchPackagePopup} />
            )}
            {(session!==null||Cookies.get("token")!==undefined||isLoggedIn) ? (
              <div className="hidden md:flex gap-3">
              <button className="items-center flex justify-center gap-2 px-2 py-2 text-sm text-white rounded-lg"
                  onClick={session===null?handleLogout:signOut}
                >
                  <FontAwesomeIcon icon={faUser} className='font' />
                  <h6>Logout</h6>
                </button>
              </div>
            ) : (
              <div className="hidden md:flex gap-3">
                <button className="items-center flex justify-center gap-2 px-2 py-2 text-sm text-white rounded-lg"
                  onClick={handleLogin}
                >
                  <FontAwesomeIcon icon={faUser} className='font' />
                  <h6>Login</h6>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="border-b shadow-sm pt-1 bg-white hidden xl:block">
        <ul className="container-wrapper flex items-end gap-x-10 text-para">
          <li className="capitalize flex items-center gap-1 cursor-pointer hover:text-primary">
            <Link href='/'>
              <FontAwesomeIcon
                icon={faHome}
                className="text-xs mb-0.5 mr-0.5 hover:text-primary cursor-pointer"
              />
              <span>Home</span>
            </Link>
          </li>
          {header?.map((item, i) => (
            <li
              key={i}
              className="capitalize items-center flex gap-1 cursor-pointer hover:text-primary"
            >
              {item.icon}
              <span>
                {item?.name === 'Car Hire' ? (
                  <Link href='/car-rental'>car hire</Link>
                ) : (
                  <FlyoutLink FlyoutContent={item.element}>
                    {item.name}
                  </FlyoutLink>
                )}
              </span>
            </li>
          ))}
          {/* <li className="capitalize flex items-center gap-1 cursor-pointer hover:text-primary">
            <Link href='/deals'>
              <FontAwesomeIcon
                icon={faHandshakeSimple}
                className="text-sm mr-0.5 hover:text-primary cursor-pointer"
              />
              <span>Deals</span>
            </Link>
          </li> */}
          <li className="capitalize flex items-center gap-1 cursor-pointer hover:text-primary">
            <Link href='/contact-us'>
              <FontAwesomeIcon
                icon={faAddressBook}
                className="text-sm mr-0.5 hover:text-primary cursor-pointer"
              />
              <span>Contact Us</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header3;
