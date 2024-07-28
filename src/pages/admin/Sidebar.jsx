import Link from 'next/link';
import { useState } from 'react';
// Import your TourPackage component
// Import your Location component
import Image from 'next/image'
import { IoIosArrowDown } from "react-icons/io";

import TourPackage from '@/pages/admin/tour-package';

import TourLocation from '@/pages/admin/location';

const Sidebar = () => {
  const [isWebsiteTab, setWebsiteTab] = useState(false);
  const [isHomePage, setHomePage] = useState(false);
  const [isPackageTab, setPackageTab] = useState(false);
  const [isCarRentalTab, setCarRentalTab] = useState(false);
  const [isDepartureTab, setDepartureTab] = useState(false);
  const [isHotelTab, setHotelTab] = useState(false);
  const [isBlogTab, setBlogTab] = useState(false);


  const handleWebsiteTab = () => {
    setWebsiteTab(!isWebsiteTab);
    setHomePage(false)
    setPackageTab(false)
    setCarRentalTab(false)
    setDepartureTab(false)
    setHotelTab(false)
    setBlogTab(false)
  };
  const handleHomePage = () => {
    setHomePage(!isHomePage);
    setWebsiteTab(false);
    setPackageTab(false)
    setCarRentalTab(false)
    setDepartureTab(false)
    setHotelTab(false)
    setBlogTab(false)
  };
  const handlePackageTab = () => {
    setPackageTab(!isPackageTab);
    setWebsiteTab(false)
    setHomePage(false)
    setCarRentalTab(false)
    setDepartureTab(false)
    setHotelTab(false)
    setBlogTab(false)
  };
  const handleCarRentalTab = () => {
    setCarRentalTab(!isCarRentalTab);
    setWebsiteTab(false)
    setHomePage(false)
    setPackageTab(false)
    setDepartureTab(false)
    setHotelTab(false)
    setBlogTab(false)
  };
  const handleDepartureTab = () => {
    setDepartureTab(!isDepartureTab);
    setWebsiteTab(false)
    setHomePage(false)
    setPackageTab(false)
    setCarRentalTab(false)
    setHotelTab(false)
    setBlogTab(false)
  };
  const handleHotelTab = () => {
    setHotelTab(!isHotelTab);
    setWebsiteTab(false)
    setHomePage(false)
    setPackageTab(false)
    setCarRentalTab(false)
    setDepartureTab(false)
    setBlogTab(false)
  };
  const handleBlogTab = () => {
    setBlogTab(!isBlogTab);
    setWebsiteTab(false)
    setHomePage(false)
    setPackageTab(false)
    setCarRentalTab(false)
    setDepartureTab(false)
    setHotelTab(false)
  };
  
  return (
    <>
      {/* sidebar */}
      <div className="bg-navyblack text-white p-4 h-[100vh] w-full">
        {/* <h2 className="text-2xl font-bold mb-4">Admin</h2>
        <ul>
          <li >
            <Link href="/admin/tour-package">
              Tour Package
            </Link>
          </li>
          <li>
            <Link href="/admin/location">
              Location
            </Link>
          </li>
          <li>
            <Link href="/admin/booking-management">
              Booking Management
            </Link>
          </li>
          <li>hello</li>
        </ul> */}
        <div className='flex flex-col gap-5'>
          <div>
            <Image className='bg-white mb-8 ' width={320} height={400} src="https://www.bizarexpedition.com/bx/images/logo/15903060991.png" alt="" />
          </div>
            <div>
              <div  onClick={handleWebsiteTab}   className='flex justify-between items-center cursor-pointer'>
                <p className='  hover:text-primary hover:font-semibold'>Website Function</p>
                <IoIosArrowDown className={`${isWebsiteTab?"rotate-360" :"rotate-180"}`}/>
              </div>
              <div  className={`pl-4 my-2 py-2 text-para bg-slate-50 rounded-md  text-black ${isWebsiteTab ? "block" : "hidden"}`}>
                <Link href={"admin/website-function/country-state-city"}>
                  <p className=' cursor-pointer hover:underline hover:font-semibold hover:text-primary' href="country-state-city">Country-state-city</p>
                </Link>
                <p className=' cursor-pointer hover:underline hover:font-semibold hover:text-primary'>Website Schema</p>
                <p className=' cursor-pointer hover:underline hover:font-semibold hover:text-primary'>Logo Management</p>
                <p className=' cursor-pointer hover:underline hover:font-semibold hover:text-primary'>Color Management</p>
                
              </div>
            </div>
            <div>
              <div onClick={handleHomePage} className='flex justify-between items-center cursor-pointer'>
                <p className=' cursor-pointer hover:text-primary'>Home Page</p>
                <IoIosArrowDown className={`${isHomePage ?"rotate-360" :"rotate-180"}`}/>
              </div>
              <div className={`pl-4 my-2 py-2 text-para bg-slate-50 rounded-md text-black ${isHomePage ? "block" : "hidden"}`}>
                <p className=' cursor-pointer hover:underline hover:font-semibold hover:text-primary'>Banner</p>
                <p className=' cursor-pointer hover:underline hover:font-semibold hover:text-primary'>Other Management</p>
              </div>
            </div>
            <div >
              <p className=' cursor-pointer hover:text-primary'>Header / Footer</p>
            </div>
            <div>
            <div onClick={handlePackageTab} className='flex justify-between items-center cursor-pointer'>
                <p className=' cursor-pointer hover:text-primary'>Package</p>
                <IoIosArrowDown className={`${isPackageTab ?"rotate-360" :"rotate-180"}`}/>
              </div>
              <div className={`pl-4 my-2 py-2 text-para bg-slate-50 rounded-md text-black ${isPackageTab ? "block" : "hidden"}`}>
                <p className=' cursor-pointer hover:underline hover:font-semibold hover:text-primary'>Package Master</p>
                <p className=' cursor-pointer hover:underline hover:font-semibold hover:text-primary'>Itinerary</p>
                <p className=' cursor-pointer hover:underline hover:font-semibold hover:text-primary'>Promo Management</p>
              </div>
            </div>
            <div>
            <div onClick={handleCarRentalTab} className='flex justify-between items-center cursor-pointer'>
                <p className=' cursor-pointer hover:text-primary'>Car Rental</p>
                <IoIosArrowDown className={`${isCarRentalTab ?"rotate-360" :"rotate-180"}`}/>
              </div>
              <div className={`pl-4 my-2 py-2 text-para bg-slate-50 rounded-md text-black ${isCarRentalTab ? "block" : "hidden"}`}>
                <p className=' cursor-pointer hover:underline hover:font-semibold hover:text-primary'>Package Master</p>
                <p className=' cursor-pointer hover:underline hover:font-semibold hover:text-primary'>Car Details Page</p>
                <p className=' cursor-pointer hover:underline hover:font-semibold hover:text-primary'>Car Promo Management</p>
              </div>
            </div>
            <div>
            <div onClick={handleDepartureTab} className='flex justify-between items-center cursor-pointer'>
                <p className=' cursor-pointer hover:text-primary'>Fixed Departures</p>
                <IoIosArrowDown className={`${isDepartureTab ?"rotate-360" :"rotate-180"}`}/>
              </div>
              <div className={`pl-4 my-2 py-2 text-para  bg-slate-50 rounded-md text-black ${isDepartureTab ? "block" : "hidden"}`}>
                <p className=' cursor-pointer hover:underline hover:font-semibold hover:text-primary'>Package Master</p>
                <p className=' cursor-pointer hover:underline hover:font-semibold hover:text-primary'>FXD Details Page</p>
                <p className=' cursor-pointer hover:underline hover:font-semibold hover:text-primary'>FXD Promo Management</p>
              </div>
            </div>
            <div >
            <div onClick={handleHotelTab} className='flex justify-between items-center cursor-pointer'>
                <p className=' cursor-pointer hover:text-primary'>Hotels</p>
                <IoIosArrowDown className={`${isHotelTab ?"rotate-360" :"rotate-180"}`}/>
              </div>
              <div className={`pl-4 my-2 py-2 text-para bg-slate-50 rounded-md text-black ${isHotelTab ? "block" : "hidden"}`}>
                <p className=' cursor-pointer hover:underline hover:font-semibold hover:text-primary'>Hotel Master</p>
                <p className=' cursor-pointer hover:underline hover:font-semibold hover:text-primary'>Hotel Details</p>
                <p className=' cursor-pointer hover:underline hover:font-semibold hover:text-primary'>Hotel Promo Management</p>
              </div>
            </div>
            <div>
            <div onClick={handleBlogTab} className='flex justify-between items-center cursor-pointer'>
                <p  className=' cursor-pointer hover:text-primary'>Blog</p>
                <IoIosArrowDown className={`${isBlogTab ?"rotate-360" :"rotate-180"}`}/>
              </div>
              <div className={`pl-4 my-2 py-2 text-para bg-slate-50 rounded-md text-black ${isBlogTab ? "block" : "hidden"}`}>
                <p className=' cursor-pointer hover:underline hover:font-semibold hover:text-primary'>Blog Master</p>
                <p className=' cursor-pointer hover:underline hover:font-semibold hover:text-primary'>Blog Details Page</p>
                <p className=' cursor-pointer hover:underline hover:font-semibold hover:text-primary'>Blog Promo Management</p>
              </div>
            </div>
            <div>
              <p className=' cursor-pointer hover:text-primary'>Travel Guide</p>
            </div>
            <div>
              <p className=' cursor-pointer hover:text-primary'>Deals Page</p>
            </div>
            <div>
              <p className=' cursor-pointer hover:text-primary'>Logout</p>
            </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
