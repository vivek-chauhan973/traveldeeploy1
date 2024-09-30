

import React from "react";
import im from "./im.webp";
import Image from "next/image";
import {
  FunIcon,
  LoveIcon,
  TreeIcon,
  FlagIcon,
  PlanIcon,
  Tree1Icon,
  WinIcon,
  CatIcon
} from "@/components/icons/index"

import {
  DownArrow
} from "@/components/icons/index"


const CustomizedHoliday = ({ setOpenClose }) => {

  return (
    <div className="ml-2   h-[90vh] w-full   overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400 ">
      <div className=" flex justify-between  mt-3">
        <div className=" flex  justify-center items-center cursor-pointer" onClick={() => setOpenClose(false)}>
          <div className=" rotate-90 mt-2">
            <DownArrow />
          </div>
          <h5 className=" font-semibold text-md">Customized Holidays</h5>
        </div>
        <div>
          <h5 className=" underline font-bold text-md px-2 text-blue-600">View All Tours</h5>
        </div>
      </div>
      <hr className="border-b mt-3 border-gray-400  w-90 overflow-hidden  " />
      <div className="pl-2">
        <h4 className=" mt-3  text-md font-bold leading-5 text-[#29499A] flex items-center gap-2 ">
          <span>
            <Tree1Icon size={20} />
          </span>
          THEMED EXPERINCE -Find your reason!
        </h4>
        <div className=" gap-y-4 flex flex-col mt-2 text-sm">
          <p className="flex items-center gap-3">
            <span>
              <FunIcon />
            </span>
            Family fun
          </p>
          <p className="flex items-center gap-3">
            <span>
              <LoveIcon />
            </span>
            Romantic Holiday
          </p>
          <p className="flex items-center gap-3">
            <span>
              <CatIcon />
            </span>
            City Breakes
          </p>
          <p className="flex items-center gap-3 ">
            <span>
              <TreeIcon size={20} />
            </span>
            gateway
          </p>
          <p className="flex items-center gap-3 ">
            <span>
              <FlagIcon />
            </span>
            Aventure stiries{" "}
          </p>
          <p className="flex items-center gap-3 ">
            <span>
              <WinIcon size={20} />
            </span>
            Taj Holoiday
          </p>
          <p className="flex items-center gap-3 ">
            <span>
              <PlanIcon size={20} />
            </span>
            Air Inclusive Holidays
          </p>
        </div>
      </div>
      <div className="flex flex-col mt-4 pl-2">
        <div>
          <Image src={im} className=" h-32 w-64 rounded-md " alt="abc" />
          <h5 className="font-semibold text-md mt-1">Luxury Holiday. </h5>
          <p className=" text-xs w-64">
            choose the the right tailer-mad luxuary travel vacation
          </p>
        </div>
        <div className="mt-5">
          <Image src={im} className=" h-32 w-64 rounded-md " alt="abc" />
          <h5 className="font-semibold text-md mt-1">Luxury Holiday. </h5>
          <p className=" text-xs w-64">
            choose the the right tailer-mad luxuary travel vacation
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomizedHoliday;
