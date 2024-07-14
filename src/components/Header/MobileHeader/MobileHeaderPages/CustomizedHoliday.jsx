import React from "react";
import { GiWillowTree } from "react-icons/gi";
import { AiOutlineFundView } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import im from "./im.webp";
import { PiCatThin } from "react-icons/pi";
import { GrNavigate } from "react-icons/gr";
import { GiCornerFlag } from "react-icons/gi";
import { FaRegChessQueen } from "react-icons/fa6";
import { IoAirplaneOutline } from "react-icons/io5";
import { IoChevronBack } from "react-icons/io5";
import Image from 'next/image'

const CustomizedHoliday = ({setOpenClose}) => {
  
  return (
    <div className="ml-2 h-[90vh] w-full  mt-2 overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400 ">
      <div className=" flex justify-between  mt-3">
        <div className=" flex gap-2 items-center cursor-pointer" onClick={()=>setOpenClose(false)}>
         <IoChevronBack className="text-2xl"/>
         <p className=" font-semibold text-xl">Customized Holidays</p>
        </div>
        <div>
          <p className=" underline font-bold text-xl text-blue-600">View All Tours</p>
        </div>
      </div>
      <hr className="border-b mt-5 border-gray-400  w-90 overflow-hidden  " />
      <div>
        <h1 className=" mt-4  text-md font-bold leading-5 text-[#29499A] flex items-center gap-2 ">
          <span>
            <GiWillowTree size={20} />
          </span>
          THEMED EXPERINCE -Find your reason!
        </h1>
        <div className=" gap-y-4 flex flex-col mt-2 text-sm">
          <p className="flex items-center gap-3">
            <span>
              <AiOutlineFundView size={20} />
            </span>
            Family fun
          </p>
          <p className="flex items-center gap-3">
            <span>
              <CiHeart size={20} />
            </span>
            Romantic Holiday
          </p>
          <p className="flex items-center gap-3">
            <span>
              <PiCatThin size={20} />
            </span>
            City Breakes
          </p>
          <p className="flex items-center gap-3 ">
            <span>
              <GrNavigate size={20} />
            </span>
            gateway
          </p>
          <p className="flex items-center gap-3 ">
            <span>
              <GiCornerFlag size={20} />
            </span>
            Aventure stiries{" "}
          </p>
          <p className="flex items-center gap-3 ">
            <span>
              <FaRegChessQueen size={20} />
            </span>
            Taj Holoiday
          </p>
          <p className="flex items-center gap-3 ">
            <span>
              <IoAirplaneOutline size={20} />
            </span>
            Air Inclusive Holidays
          </p>
        </div>
      </div>
      <div className="flex flex-col mt-4">
        <div>
          <Image src={im} className=" h-32 w-64 rounded-md " alt="abc" />
          <p className="font-semibold text-md mt-1">Luxury Holiday. </p>
          <p className=" text-xs w-64">
            choose the the right tailer-mad luxuary travel vacation
          </p>
        </div>
        <div className="mt-5">
          <Image src={im} className=" h-32 w-64 rounded-md " alt="abc" />
          <p className="font-semibold text-md mt-1">Luxury Holiday. </p>
          <p className=" text-xs w-64">
            choose the the right tailer-mad luxuary travel vacation
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomizedHoliday;
