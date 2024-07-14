import React from "react";
import { MdAttachMoney } from "react-icons/md";
import im from "./im.webp";
import Image from 'next/image'
import { IoChevronBack } from "react-icons/io5";
const Forex = ({setOpenClose}) => {
  return (
    <div>
      <div className=" flex justify-between px-2 mt-3">
        <div className=" flex gap-2 items-center cursor-pointer" onClick={()=>setOpenClose(false)}>
         <IoChevronBack className=" text-2xl"/>
         <p className=" font-semibold text-xl">Forex</p>
        </div>
        <div>
          <p className=" underline font-bold text-xl text-blue-600">View All Tours</p>
        </div>
      </div>
      <hr className="border-b mt-5 border-gray-400  w-90 overflow-hidden  " />
      <h1 className=" mt-4  text-md font-bold leading-5 text-[#29499A] flex items-center gap-2 ">
        <span>
          <MdAttachMoney size={30} />
        </span>
        Buy and Sell foreign currency
      </h1>
      <div className="pl-2 gap-y-4 flex flex-col mt-2">
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
