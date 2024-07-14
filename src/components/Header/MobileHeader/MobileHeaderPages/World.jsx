import React from "react";
import image from "./im.webp";
import { IoIosArrowDown } from "react-icons/io";
import { IoChevronBack } from "react-icons/io5";
import Image from 'next/image'

const World = ({ setOpenClose }) => {
  return (
    <div className="pl-1 sm:pl-2 w-full h-[90vh] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400">
      <div className=" flex justify-between sm:px-2 mt-3 lg:pl-2 ">
        <div
          className=" flex gap-2 items-center cursor-pointer"
          onClick={() => setOpenClose(false)}
        >
          <IoChevronBack className=" text-xl" />
          <p className=" font-semibold text-xl">World</p>
        </div>
        <div>
          <p className=" underline font-bold text-xl text-blue-600">
            View All Tours
          </p>
        </div>
      </div>
      <hr className="border-b mt-5 border-gray-400  w-90 overflow-hidden  " />

      <div className=" sm:ml-3  ">
        <span className="text-sm font-normal mt-4">
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
            South East asia
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
            Austelia New Zealand{" "}
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
        <div className="flex flex-col mt-4 lg:pl-2 ">
          <div className=" flex justify-between">
            <h1 className=" font-semibold text-md">AFRICA</h1>
            <span>
              <IoIosArrowDown className=" cursor-pointer" />
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
            <h1 className="font-semibold text-md">Kenya</h1>
            <hr className="border-b mt-2 border-gray-400  w-90 overflow-hidden" />
            <div className="flex gap-3 p-1 mt-2  text-sm flex-wrap ">
              <span>masai mara </span>
            </div>
          </div>
          <h1 className="font-semibold text-md">mauritius</h1>
          <hr className="border-b mt-2 border-gray-400  w-90 overflow-hidden" />
        </div>
      </div>
    </div>
  );
};

export default World;
