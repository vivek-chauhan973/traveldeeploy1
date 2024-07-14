import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import logo from "../../../public/logo.png";
import {
  MdViewList,
  MdShoppingCart,
  MdMap,
  MdLocalOffer,
  MdExitToApp,
} from "react-icons/md";
import { MdOutlineSettingsInputComposite } from "react-icons/md";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { LuPackagePlus } from "react-icons/lu";
import { BiSolidCarMechanic } from "react-icons/bi";
import { RiHotelFill } from "react-icons/ri";
import { FaFileSignature } from "react-icons/fa";
import { RiPagesLine } from "react-icons/ri";
import { AiFillSetting } from "react-icons/ai";
import { SiPagespeedinsights } from "react-icons/si";
import { IoIosArrowDown } from "react-icons/io";

const Sidebar = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(null);
  const [selectedSubMenu, setSelectedSubMenu] = useState(null);

  const sidebarTabs = useMemo(() => [
    {
      label: "Dashboard",
      icon: <SiPagespeedinsights size={20} />,
      href: "/admin"
    },
    {
      label: "Website Function",
      icon: <MdOutlineSettingsInputComposite size={20} />,
      subMenu: [
        { label: "Country-state-city", href: "/admin/website-function/country-state-city" },
        { label: "Website Schema", href: "/admin/website-function/website-schema" },
        { label: "Logo Management", href: "/admin/website-function/logo-management" },
        { label: "Color Management", href: "/admin/website-function/color-management" }
      ]
    },
    {
      label: "Home Page",
      icon: <HiOutlineClipboardDocumentList size={20} />,
      subMenu: [
        { label: "Banner", href: "#" },
        { label: "Other Management", href: "#" }
      ]
    },
    {
      label: "Header / Footer",
      icon: <MdViewList size={20} />,
      href: "/admin/header-footer"
    },
    {
      label: "Package",
      icon: <LuPackagePlus size={20} />,
      subMenu: [
        { label: "Package Master", href: "/admin/package/category" },
        { label: "Add Itinerary", href: "/admin/package/itinerary" },
        { label: "Itinerary List", href: "/admin/package/itinerary-detail-list" },
        { label: "Promo Management", href: "/admin/package/promo-management" }
      ]
    },
    {
      label: "Car Rental",
      icon: <BiSolidCarMechanic size={20} />,
      subMenu: [
        { label: "Create", href: "/admin/car-rental/create" },
        { label: "Package Master", href: "/admin/car-rental" },
        { label: "Package List", href: "/admin/car-rental/package-list" },
        { label: "Car Promo Management", href: "/admin/car-rental/promo-management" },
      ]
    },
    {
      label: "Hotels",
      icon: <RiHotelFill size={20} />,
      subMenu: [
        { label: "Hotel Master", href: "#" },
        { label: "Packages", href: "/admin/hotel/packages-list" },
        { label: "Hotel Promo Management", href: "/admin/hotel/management" }
      ]
    },
    {
      label: "Blog",
      icon: <FaFileSignature size={20} />,
      subMenu: [
        { label: "Blog Master", href: "/admin/blog/category" },
        { label: "All Post", href: "/admin/blog/all-post" },
        { label: "Create", href: "/admin/blog/post" },
        { label: "Blog Promo Management", href: "/admin/blog/management" }
      ]
    },
    {
      label: "Manage Order",
      icon: <MdShoppingCart size={20} />,
      subMenu: [
        { label: "Package Order", href: "/admin/manage-order/package" },
        { label: "Hotel Order", href: "/admin/manage-order/hotel" },
        { label: "Car Order", href: "/admin/manage-order/car" }
      ]
    },
    {
      label: "Pages ",
      icon: <RiPagesLine size={20} />,
      href: "/admin/page-create"
    },
    {
      label: "Setting",
      icon: <AiFillSetting size={20} />,
      href: "/admin/setting-site"
    },
    {
      label: "Travel Guide",
      icon: <MdMap size={20} />,
      href: "#"
    },
    {
      label: "Deals Page",
      icon: <MdLocalOffer size={20} />,
      href: "#"
    },
    {
      label: "Logout",
      icon: <MdExitToApp size={20} />,
      href: "#"
    }
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
    setSelectedSubMenu(null);
  };

  const handleSubMenuClick = (subMenuLabel, parentLabel) => {
    setSelectedSubMenu(subMenuLabel);
    setActiveTab(parentLabel); // Ensure the parent tab remains open
  };

  const renderSubMenu = (items, parentLabel) => {
    return (
      <div className={`pl-4 my-2 py-2 text-para bg-slate-50 rounded-md text-black ${activeTab === parentLabel ? "block" : "hidden"}`}>
        {items.map((item, index) => (
          <Link href={item.href} key={index}>
            <p
              onClick={() => handleSubMenuClick(item.label, parentLabel)}
              className={`text-[12px] cursor-pointer hover:underline hover:font-semibold hover:text-orange-500 ${selectedSubMenu === item.label ? 'text-green-500 ' : ''}`}
            >
              {item.label}
            </p>
          </Link>
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
                  {tab.icon.type({ size: 20 })} {/* Render icon dynamically */}
                  <p className='cursor-pointer'>{tab.label}</p>
                </div>
                <IoIosArrowDown className={`transition-transform duration-200 ${activeTab === tab.label ? 'rotate-180' : ''}`} />
              </div>
            ) : (
              <Link href={tab.href}>
                <div className={`flex items-center gap-2 ${activeTab === tab.label ? 'text-green-500 font-semibold' : ''} hover:text-orange-500`}>
                  {tab.icon.type({ size: 20 })} {/* Render icon dynamically */}
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
      </div>
    </div>
  );
};

export default Sidebar;
