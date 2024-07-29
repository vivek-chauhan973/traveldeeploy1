import React from "react";
import {
 LocationIcon,RoadIcon,DownArrow 
} from "@/components/icons/index"

const Speciality = ({ setOpenClose }) => {
  return (
    <div className="flex h-[90vh] flex-col sm:p-4 overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400">
      <div className="flex justify-between mt-3">
        <div
          className="flex items-center cursor-pointer "
          onClick={() => setOpenClose(false)}
        >

          <div className="rotate-90 mt-2"> <DownArrow /></div>
        
          <p className="font-semibold text-md">Speciality Tours</p>
        </div>
        <div>
          <p className="underline px-2 font-bold text-[15px] text-blue-600">
            View All Tours
          </p>
        </div>
      </div>
      <hr className="border-b mt-5 border-gray-400 w-90 overflow-hidden" />
      <div className="px-1">
        <div className="flex mt-1 gap-1">
          <span>
          <LocationIcon/>
          </span>
          <h1 className="text-blue-600 text-md font-bold">
            POPULAR AND AVAILABLE TOURS
          </h1>
        </div>
        <div className="mt-2 pl-3">
          <span className="font-semibold text-[15px]">Honeymoon Special</span>
          <span className="text-sm"> 35 Departures</span>
          <p className="text-xs">
            Inspiring beautiful journeys Scenic Routes.
          </p>
        </div>
        <div className="mt-4 pl-3">
          <span className="font-semibold text-[15px]">Road Trips</span>
          <span className="text-sm"> 35 Departures</span>
          <p className="text-xs">Embark on a journey of togetherness</p>
        </div>
        <div className="mt-4 pl-3">
          <span className="font-semibold text-[15px]">Senior Special</span>
          <span className="text-sm"> 35 Departures</span>
          <p className="text-xs">Embark on a journey of togetherness</p>
        </div>
        <div className="mt-4 pl-3">
          <span className="font-semibold text-[15px]">Short Trip</span>
          <span className="text-sm"> 35 Departures</span>
          <p className="text-xs">Embark on a journey of togetherness</p>
        </div>
        <div className="mt-4 pl-3">
          <span className="font-semibold text-[15px]">Women Special</span>
          <span className="text-sm"> 35 Departures</span>
          <p className="text-xs">Embark on a journey of togetherness</p>
        </div>
        <div className="mt-4 pl-3">
          <span className="font-semibold text-[15px]">Family Tour</span>
          <span className="text-sm"> 35 Departures</span>
          <p className="text-xs">Embark on a journey of togetherness</p>
        </div>
        <div className="mt-4 pl-3">
          <span className="font-semibold text-[15px]">Family Tour</span>
          <span className="text-sm"> 35 Departures</span>
          <p className="text-xs">Embark on a journey of togetherness</p>
        </div>
        <div className="mt-4 pl-3">
          <span className="font-semibold text-[15px]">Family Tour</span>
          <span className="text-sm"> 35 Departures</span>
          <p className="text-xs">Embark on a journey of togetherness</p>
        </div>

        <div className="mt-6 flex gap-3 px-1">
          <span>
            <RoadIcon />
          </span>
          <h1 className="text-blue-600 text-md font-bold">
            POPULAR AND AVAILABLE TOURS
          </h1>
        </div>
        <div className="mt-4 pl-3">
          <span className="font-semibold text-[15px]">Couples Only</span>
          <p className="text-xs">Exclusive tours for middle-aged couples</p>
        </div>
        <div className="mt-4 pl-3">
          <span className="font-semibold text-[15px]">Couples Only</span>
          <p className="text-xs">Exclusive tours for middle-aged couples</p>
        </div>
      </div>
    </div>
  );
};

export default Speciality;
