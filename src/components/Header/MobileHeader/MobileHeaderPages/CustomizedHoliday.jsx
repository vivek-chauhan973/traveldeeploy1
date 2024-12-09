

import React, { useEffect, useState } from "react";
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

const fetchCategory = async () => {
  const res = await fetch("/api/homefooter");
  return await res.json();
}
const CustomizedHoliday = ({ setOpenClose }) => {
  const [catogories, setCatagories] = useState([]);
  useEffect(() => {
    fetchCategory().then(res => { ; setCatagories(res?.data || []) });
  }, [])

  const data = catogories?.filter(item => item.category === "category3");
  // console.log("catories is here", data?.[0]?.options)

  return (
    <div className="ml-2   h-[90vh] w-full   overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400 ">
      <div className=" flex justify-between  mt-3">
        <div className=" flex  justify-center items-center cursor-pointer" onClick={() => setOpenClose(false)}>
          <div className=" rotate-90 mt-2">
            <DownArrow />
          </div>
          <h5 className=" font-semibold text-md"> Holidays</h5>
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
        <div className="flex flex-col pt-2">
          {data?.[0]?.options?.map((item, i) =>
            <a
              key={i} className='text-para font-semibold mb-2'
              href={'/speciality-tours/' + item.category + '-tour-packages'}
            >
                {item.category}
            </a>
          )}
        </div>
      </div>
      
    </div>
  );
};

export default CustomizedHoliday;
