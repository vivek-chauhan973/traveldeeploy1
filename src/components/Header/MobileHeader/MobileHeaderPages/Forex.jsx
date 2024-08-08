
import React from "react";
import Image from "next/image";

import im from "./im.webp";
import {
DownArrow ,DollerIcon
} from "@/components/icons/index"


const Forex = ({setOpenClose}) => {
  return (
    <div>
      <div className=" flex justify-between px-2 mt-3">
        <div className=" flex  items-center cursor-pointer" onClick={()=>setOpenClose(false)}>
        <div className="rotate-90 mt-2"> <DownArrow /></div>
         <h4 className=" font-semibold text-md">Forex</h4>
        </div>
        <div>
          <p className=" underline font-bold text-[15px] text-blue-600">View All Tours</p>
        </div>
      </div>
      <hr className="border-b mt-3 border-gray-400  w-90 overflow-hidden  " />
      <h5 className=" mt-2  text-md font-bold leading-5 text-[#29499A] flex items-center ">
        <span className=" mt-2 ml-2">
        <DollerIcon/>
        </span>
        Buy and Sell foreign currency
      </h5>
      <div className="pl-2  gap-y-4 flex flex-col mt-2">
        <p className="flex items-center gap-3">
          <span>
            <Image src={im} alt="abc" className=" w-14 h-14 rounded-full" />
          </span>
          Us Doller $
        </p>
        <p className="flex items-center gap-3">
          <span>
            <Image src={im} alt="abc" className=" w-14 h-14 rounded-full" />
          </span>
          AED -UAE Dirhham $
        </p>
        <p className="flex items-center gap-3 font-3xl">
          <span>
            <Image src={im} alt="abc" className=" w-14 h-14 rounded-full" />
          </span>
          EUR -Euro $
        </p>
        <p className="mt-2 italic">and more...</p>
      </div>
    </div>
  );
};

export default Forex;
