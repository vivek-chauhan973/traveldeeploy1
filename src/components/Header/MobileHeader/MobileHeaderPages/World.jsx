
import Image from "next/image";
import React from "react";
import image from "./im.webp";

import {
DownArrow 
 } from "@/components/icons/index"

const World = ({ setOpenClose }) => {
  return (
    <div className="pl-1 sm:pl-2 w-full h-[90vh] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400">
      <div className=" flex justify-between sm:px-2 mt-3 lg:pl-2 ">
        <div
          className=" flex  items-center cursor-pointer"
          onClick={() => setOpenClose(false)}
        >
    <div className="rotate-90 mt-2"> <DownArrow /></div>
    
          <h5 className=" font-semibold text-md">World</h5>
        </div>
        <div>
          <p className=" underline px-2 font-bold text-[15px] text-blue-600">
            View All Tours
          </p>
        </div>
      </div>
      <hr className="border-b mt-3 border-gray-400  w-90 overflow-hidden  " />

      <div className=" sm:ml-3  ">
        <span className="text-sm font-normal mt-4 px-3">
          Top Recomonded Destination
        </span>
      </div>

      <div className="flex gap-7 pl-2  mt-4 sm:p-3  overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-400">
        <div className="">
          <div className=" w-14 h-14 overflow-hidden bg-black rounded-full">
            <Image src={image} alt="abc" className="" />
          </div>
          <span className=" text-sm font-semibold text-wrap"> Europe</span>
        </div>

        <div className="">
          <div className=" w-14 h-14 overflow-hidden  bg-black rounded-full">
            <Image src={image} alt="abc" className="" />
          </div>
          <span className=" text-sm font-semibold text-wrap"> America</span>
        </div>
        <div className="">
          <div className=" w-14 h-14 overflow-hidden bg-black rounded-full">
            <Image src={image} alt="abc" className="" />
          </div>
          <span className=" text-sm font-semibold text-wrap">
            South asia
          </span>
        </div>
        <div className="">
          <div className=" w-14 h-14 overflow-hidden bg-black rounded-full">
            <Image src={image} alt="abc" className="" />
          </div>
          <span className=" text-sm font-semibold text-wrap"> Africa</span>
        </div>
        <div className="">
          <div className=" w-14 h-14 overflow-hidden bg-black rounded-full">
            <Image src={image} alt="abc" className="" />
          </div>
          <span className=" text-sm font-semibold text-wrap">Dubai</span>
        </div>
        <div className="">
          <div className=" w-14 h-14 overflow-hidden bg-black rounded-full">
            <Image src={image} alt="abc" className="" />
          </div>
          <span className=" text-sm font-semibold sm:ml-2 text-wrap">
            Austelia 
          </span>
        </div>
        <div className="">
          <div className="w-14 h-14 overflow-hidden bg-black rounded-full">
            <Image src={image} alt="abc" className="" />
          </div>
          <span className=" text-sm font-semibold sm:ml-3 text-wrap">
            Frans
          </span>
        </div>
      </div>
      {/*  after circle image*/}
      <div>
        <div className="flex flex-col mt-4 lg:pl-2  px-2">
          <div className=" flex justify-between">
            <h1 className=" font-semibold text-md">AFRICA</h1>
            <span className=" cursor-pointer">
            <DownArrow />
          </span>
          </div>
          <div className="mt-2">
            <p className=" mt-2 text-blue-600  font-semibold">All of Africa </p>
            {/* <h1 className=" mt-2 font-semibold text-md">Delhi</h1> */}
            <h1 className=" mt-2 font-semibold text-md">Egypt</h1>
          </div>
          <hr className="border-b mt-2 border-gray-400 " />
          <div className="flex gap-3 text-sm p-1 mt-2 flex-wrap ">
            <span>Alexandria </span>
            <span>DAswan</span>
            <span>Hurghada</span>
            <span>Laxour</span>
            <span>itly</span>
            <span>simla</span>
            <span>Spiti vally</span>
          </div>
          <div>
            <h5 className="font-semibold text-md">Kenya</h5>
            <hr className="border-b mt-2 border-gray-400  w-90 overflow-hidden" />
            <div className="flex gap-3 p-1 mt-2  text-sm flex-wrap ">
              <span>masai mara </span>
            </div>
          </div>
          <h5 className="font-semibold text-md">mauritius</h5>
          <hr className="border-b mt-2 border-gray-400  w-90 overflow-hidden" />
        </div>
      </div>
    </div>
  );
};

export default World;
