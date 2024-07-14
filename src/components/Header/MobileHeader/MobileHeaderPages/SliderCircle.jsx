import React from "react";
import image from  './im.webp'
import { IoIosArrowDown } from "react-icons/io";
//import { IoIosArrowForward } from "react-icons/io";
import { IoChevronBack } from "react-icons/io5";
import Image from 'next/image'
const SliderCircle = ({setOpenClose}) => {
  
  return (
    <div className="w-full h-[90vh] px-1 sm:px-4 overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400">
      <div className=" flex justify-between mt-3">
        <div className=" flex gap-2 items-center cursor-pointer" onClick={()=>setOpenClose(false)}>
         <IoChevronBack className=" text-2xl"/>
         <p className=" font-semibold text-xl">India</p>
        </div>
        <div>
          <p className=" underline font-bold text-xl text-blue-600">View All Tours</p>
        </div>
      </div>
      <hr className="border-b mt-5 border-gray-400  w-90 overflow-hidden  " />

      <div className=" sm:ml-3  ">
        <span className="text-sm font-normal mt-4">
          Top Recomonded Destination
        </span>
      </div>

      <div className=" flex gap-7 py-2  mt-4 sm:p-3  overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-400">
        <div className="">
          <div className=" w-14 h-14 overflow-hidden bg-black rounded-full">
            <Image src={image} alt="abc" className="" />
          </div>
          <span className=" text-sm font-semibold text-wrap"> Kashmir</span>
        </div>

        <div className="">
          <div className=" w-14 h-14 overflow-hidden bg-black rounded-full">
            <Image src={image} alt="abc" className="" />
          </div>
          <span className=" text-sm font-semibold text-wrap"> Kashmir</span>
        </div>
        <div className="">
          <div className=" w-14 h-14 overflow-hidden bg-black rounded-full">
            <Image src={image} alt="abc" className="" />
          </div>
          <span className=" text-sm font-semibold text-wrap">kashmir</span>
        </div>
        <div className="">
          <div className=" w-14 h-14 overflow-hidden bg-black rounded-full">
            <Image src={image} alt="abc" className="" />
          </div>
          <span className=" text-sm font-semibold text-wrap"> Kshmir</span>
        </div>
        <div className="">
          <div className=" w-14 h-14 overflow-hidden bg-black rounded-full">
            <Image src={image} alt="abc" className="" />
          </div>
          <span className=" text-sm font-semibold text-wrap">Rajsthan</span>
        </div>
        <div className="">
          <div className=" w-14 h-14 overflow-hidden bg-black rounded-full">
            <Image src={image} alt="abc" className="" />
          </div>
          <span className=" text-sm font-semibold ml-2 text-wrap">Sikkim </span>
        </div>
        <div className="">
          <div className="w-14 h-14 overflow-hidden bg-black rounded-full">
            <Image src={image} alt="abc" className="" />
          </div>
          <span className=" text-sm font-semibold ml-3 text-wrap">Kerla</span>
        </div>
      </div>
      {/*  after circle image*/}
      <div className="flex flex-col mt-4">
        <div className=" flex justify-between">
          <h1 className=" font-semibold text-md">NORTH INDIA</h1>
          <span>
            <IoIosArrowDown className=" cursor-pointer" />
          </span>
        </div>
        <div className="mt-2">
          <p className=" mt-2 text-blue-600 font-semibold">
            All of north india{" "}
          </p>
          <h1 className=" mt-2 font-semibold text-md">Delhi</h1>
          <h1 className=" mt-2 font-semibold text-md">Himachal pradesh</h1>
        </div>
        <hr className="border-b mt-2 border-gray-400 " />
        <div className="flex gap-3 text-sm p-1 mt-2 flex-wrap ">
          <span>Chandratal </span>
          <span>Dalhouise</span>
          <span>Dharmasala</span>
          <span>kaza</span>
          <span>manali</span>
          <span>simla</span>
          <span>Spiti vally</span>
        </div>

        <div>
          <h1 className="font-semibold text-md">Kashmir</h1>
          <hr className="border-b mt-2 border-gray-400  w-90 overflow-hidden" />
          <div className="flex gap-3 p-1 mt-2  text-sm flex-wrap ">
            <span>kargil </span>
            <span>Leh</span>
            <span>Nubra valley</span>
            <span>Pangong Tso</span>
            <span>Turtuk</span>
            <span>Jammu</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderCircle;
