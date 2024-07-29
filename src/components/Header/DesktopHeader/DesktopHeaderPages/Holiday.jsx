import React from "react";
import Image from "next/image";
import {
  FunIcon ,
  LoveIcon,
  TreeIcon ,
  FlagIcon,
  PlanIcon,
  Tree1Icon,
  WinIcon,
  CatIcon
} from "@/components/icons/index"

const Holiday = () => {
  return (
    <div className="flex w-[700px] h-auto bg-gray-100 mt-4 justify-around rounded-sm">
      <div>
        <h1 className=" mt-4  text-md font-bold leading-5 text-[#29499A] flex items-center gap-2 ">
          <span>
            <Tree1Icon/>
          </span>
          THEMED EXPERINCE -Find your reason!
        </h1>
        <div className=" gap-y-4 flex flex-col mt-2">
          <p className="flex items-center gap-3">
            <span>
              <FunIcon />
            </span>
            Family fun
          </p>
          <p className="flex items-center gap-3">
            <span>
              <LoveIcon/>
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
              <TreeIcon />
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
              <WinIcon />
            </span>
            Taj Holoiday
          </p>
          <p className="flex items-center gap-3 ">
            <span>
              <PlanIcon />
            </span>
            Air Inclusive Holidays
          </p>
        </div>
      </div>
      <div className="flex flex-col mt-4 ">
        <div>
          <Image src='https://Image.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg?t=st=1719391588~exp=1719395188~hmac=f1b1ed7abd7ba1094b2427a9493899088bd50528432ba0ef28c1a9bf2a0204ec&w=996' className=" h-32 w-64 rounded-md " alt="abc" width='125' height="150" />
          <p className="font-semibold text-sm tm-1">Luxury Holiday. </p>
          <p className=" text-xs w-64">
            choose the the right tailer-mad luxuary travel vacation
          </p>
        </div>
        <div className="mt-5 pb-3">
        <Image src='https://Image.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg?t=st=1719391588~exp=1719395188~hmac=f1b1ed7abd7ba1094b2427a9493899088bd50528432ba0ef28c1a9bf2a0204ec&w=996' className=" h-32 w-64 rounded-md " width='125' height="150" alt="abc" />
          <p className="font-semibold text-sm mt-1">Luxury Holiday. </p>
          <p className=" text-xs w-64">
            choose the the right tailer-mad luxuary travel vacation
          </p>
        </div>
      </div>
    </div>
  );
};

export default Holiday;