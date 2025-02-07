import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import Cookies from 'js-cookie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChartSimple,faSliders,faSort,faBook,faCar, faBlog,faHotel,faCartShopping,faFile,faGear,faRightFromBracket,faTag,faLayerGroup, faHome } from '@fortawesome/free-solid-svg-icons';

import { IoIosArrowDown } from "react-icons/io";
const Sidebar = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(null);
  const [selectedSubMenu, setSelectedSubMenu] = useState(null);
const handleLogout=async ()=>{
  localStorage.removeItem('accessToken');
  const response = await fetch('/api/account/logout', {
    method: 'POST',
  });

  if (response.ok) {
    console.log('User logged out');
    // Optionally, redirect or perform any other action after logging out
  } else {
    console.error('Failed to log out');
  }
  window.location.href = '/admin/login';
}
  const sidebarTabs = useMemo(() => [
    {
      label: "Dashboard",
      icon: () => <FontAwesomeIcon icon={faChartSimple  } />,
      href: "/admin"
    },
    {
      label: "Website Function",
      icon: () => <FontAwesomeIcon icon={   faSliders} />,
      subMenu: [
        { label: "Country-state-city", href: "/admin/website-function/country-state-city" },
        // { label: "Website Schema", href: "/admin/website-function/website-schema" },
        { label: "Logo Management", href: "/admin/website-function/logo-management" },
        // { label: "Color Management", href: "/admin/website-function/color-management" },
        { label: "Icon Management", href: "/admin/website-function/icon-management" }
      ]
    },
    {
      label: "Home Page",
      icon: () => <FontAwesomeIcon icon={faHome} />,
     
      subMenu: [
        { label: "Banner", href: "/admin/home/banner" },
        { label: "Header/Destinations", href: "/admin/home/destinations" },
        { label: "Other Management", href: "/admin/home/manage" }
      ]
    },
    {
      label: "Header / Footer",
      icon: () => <FontAwesomeIcon icon={faSort} />,
      href: "/admin/header-footer"
    },
    {
      label: "Package",
      icon: () => <FontAwesomeIcon icon={faLayerGroup} />,
      subMenu: [
        { label: "Package Master", href: "/admin/package/category" },
        { label: "Add Itinerary", href: "/admin/package/itinerary" },
        { label: "Itinerary List", href: "/admin/package/itinerary-detail-list" },
        { label: "Promo List", href: "/admin/package/itinerary-promo-list" },
        { label: "Promo Management", href: "/admin/package/promo-management" }
      ]
    },
    {
      label: "Car Rental",
      icon: () => <FontAwesomeIcon icon={faCar} />,
      subMenu: [
        { label: " Car Home", href: "/admin/car-rental/home" },
        { label: " Car Package Master", href: "/admin/car-rental" },
        { label: "Add Vehicle", href: "/admin/car-rental/create" },
        { label: "Add Car Itinerary", href: "/admin/car-rental/car-itinerary" },
        { label: " Car Package List", href: "/admin/car-rental/package-list" },
        { label: "Car Promo List", href: "/admin/car-rental/car-promo-list" },
        { label: "Car Promo Management", href: "/admin/car-rental/promo-management" },
      ]
    },
    {
      label: "Hotels",
      icon: () => <FontAwesomeIcon icon={faHotel} />,
      subMenu: [
        { label: "Hotel Master", href: "#" },
        { label: "Packages", href: "/admin/hotel/packages-list" },
        { label: "Hotel Promo Management", href: "/admin/hotel/management" }
      ]
    },
    {
      label: "Blog",
      icon: () => <FontAwesomeIcon icon={faBlog} />,
      subMenu: [
        { label: "Blog Master", href: "/admin/blog/category" },
        { label: "All Post", href: "/admin/blog/all-post" },
        { label: "Create", href: "/admin/blog/post" },
        { label: "Blog Promo Management", href: "/admin/blog/management" }
      ]
    },
    {
      label: "Manage Order",
      icon: () => <FontAwesomeIcon icon={faCartShopping} />,
      subMenu: [
        { label: "Package Order", href: "/admin/manage-order/package" },
        { label: "Hotel Order", href: "/admin/manage-order/hotel" },
        { label: "Car Order", href: "/admin/manage-order/car" }
      ]
    },
    {
      label: "Static Page",
      icon: () => <FontAwesomeIcon icon={faFile} />,
      subMenu: [
        { label: "Create Pages", href: "/admin/page-create" },
        { label: "List of Pages", href: "/admin/page-list" },
      ]
    },
    {
      label: "Setting",
      icon: () => <FontAwesomeIcon icon={faGear} />,
      href: "/admin/setting-site"
    },
    {
      label: "Travel Guide",
      icon: () => <FontAwesomeIcon icon={faBook} />,
      href: "#"
    },
    {
      label: "Deals Page",
      icon: () => <FontAwesomeIcon icon={faTag} />,
      href: "#"
    },
  ], []);

  useEffect(() => {
    // Determine the active tab and submenu based on the current URL
    sidebarTabs.forEach(tab => {
      if (tab.subMenu) {
        tab.subMenu.forEach(subMenu => {
          if (router.pathname === subMenu.href) {
            setActiveTab(tab.label);
            setSelectedSubMenu(subMenu.label);
          }
        });
      } else if (router.pathname === tab.href) {
        setActiveTab(tab.label);
      }
    });
  }, [router.pathname, sidebarTabs]);

  const handleTabToggle = (tabName) => {
    setActiveTab(prevTab => (prevTab === tabName ? null : tabName));
    console.log('Toggle Button clicked');
    setSelectedSubMenu(null);
  };

  const handleSubMenuClick = (subMenuLabel, parentLabel) => {
    setSelectedSubMenu(subMenuLabel);
    console.log('Submenu Button clicked');
    setActiveTab(parentLabel); // Ensure the parent tab remains open
  };

  const renderSubMenu = (items, parentLabel) => {
    return (
      <div className={`pl-4 my-2 py-2 text-para bg-slate-50 rounded-md text-black ${activeTab === parentLabel ? "block" : "hidden"}`}>
        {items.map((item, index) => (
          <a href={item.href} key={index}>
            <p
              onClick={() => handleSubMenuClick(item.label, parentLabel)}
              className={`text-[12px] cursor-pointer hover:underline hover:font-semibold hover:text-orange-500 ${selectedSubMenu === item.label ? 'text-green-500 ' : ''}`}
            >
              {item.label}
            </p>
          </a>
        ))}
      </div>
    );
  };

  return (
    <div className="text-[14px] text-[#f5f7fb] font-sans p-4 md:w-full">
      <div className='flex flex-col gap-5'>
        <div className="sm:flex items-center block gap-4 py-4 border-b border-b-white">
          <Image
            className="w-16 border-2 border-primary rounded-full"
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="User"
            width={320} height={400}
          />
          <span className="text-md tracking-wide leading-5 border-l mt-2 md:mt-0 md:py-1 pl-2 md:pl-4 font-bold bg-gradient-to-r from-primary via-amber-400 to-white inline-block text-transparent bg-clip-text">Shishir <br /></span>
        </div>
        {sidebarTabs.map((tab, index) => (
          <div key={index} className='relative group'>
            {tab.subMenu ? (
              <div
                onClick={() => handleTabToggle(tab.label)}
                className={`flex justify-between items-center cursor-pointer ${activeTab === tab.label ? 'text-green-500 font-semibold' : ''} group-hover:text-orange-500`}
              >
                <div className='flex items-center gap-2'>
                  <tab.icon size={20} /> {/* Use the icon component correctly */}
                  <p className='cursor-pointer'>{tab.label}</p>
                </div>
                <div>
                  <IoIosArrowDown className={`transition-transform duration-200 ${activeTab === tab.label ? 'rotate-180' : ''}`} />
                </div>
              </div>
            ) : (
              <Link href={tab.href}>
                <div className={`flex items-center gap-2 ${activeTab === tab.label ? 'text-green-500 font-semibold' : ''} hover:text-orange-500`}>
                  <tab.icon size={20} /> {/* Use the icon component correctly */}
                  <p className='cursor-pointer'>{tab.label}</p>
                </div>
              </Link>
            )}
            {tab.subMenu && (
              <div className={` left-0 w-full group-hover:block ${activeTab === tab.label ? 'block' : 'hidden'}`}>
                {renderSubMenu(tab.subMenu, tab.label)}
              </div>
            )}
          </div>
        ))}
        <div className={`flex items-center gap-2 ${activeTab === "Logout" ? 'text-green-500 font-semibold' : ''} hover:text-orange-500`} onClick={handleLogout}>
                  <FontAwesomeIcon icon={faRightFromBracket} size={20} /> {/* Use the icon component correctly */}
                  <p className='cursor-pointer'>Logout</p>
                </div>
      </div>
    </div>
  );
};

export default Sidebar;
