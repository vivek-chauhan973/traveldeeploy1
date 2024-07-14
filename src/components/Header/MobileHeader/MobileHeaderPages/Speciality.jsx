import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { PiPathBold } from "react-icons/pi";
import { IoChevronBack } from "react-icons/io5";
const Speciality = ({ setOpenClose }) => {
  return (
    <div className=" flex h-[90vh] flex-col sm:p-4 overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400  ">
      <div className=" flex justify-between mt-3">
        <div
          className=" flex gap-2 items-center cursor-pointer"
          onClick={() => setOpenClose(false)}
        >
          <IoChevronBack className=" text-2xl" />
          <p className=" font-semibold text-xl">Speciality Tours</p>
        </div>
        <div>
          <p className=" underline font-bold text-xl text-blue-600">
            View All Tours
          </p>
        </div>
      </div>
      <hr className="border-b  mt-5 border-gray-400  w-90 overflow-hidden  " />
      <div className=" px-1">
        <div className=" flex mt-1 gap-3">
          <span>
            <CiLocationOn size={30} />
          </span>
          <h1 className=" text-blue-600 font-bold">
            PAPULAR AND AVIALBLE TOURS
          </h1>
        </div>
        <div className="mt-2">
          <span className="font-semibold text-sm">Honeymoon Special</span>
          <span className=" text-sm"> (35 Departures)</span>

          <p className=" text-xs">
            Inspiring beautiful journeys & Scenic Routes.
          </p>
        </div>
        <div className="mt-4">
          <span className="font-semibold text-sm"> Road Trips</span>
          <span className=" text-sm"> (35 Departures)</span>
          <p className=" text-xs"> Embark on a journey of togetherness</p>
        </div>
        <div className="mt-4">
          <span className="font-semibold text-sm">Senior  special </span>
          <span className=" text-sm"> (35 Departures)</span>
          <p className=" text-xs"> Embark on a journey of togetherness</p>
        </div>
        <div className="mt-4">
          <span className="font-semibold text-sm">Short trip </span>
          <span className=" text-sm"> (35 Departures)</span>
          <p className=" text-xs"> Embark on a journey of togetherness</p>
        </div>
        <div className="mt-4">
          <span className="font-semibold text-sm">Womens Special</span>
          <span className=" text-sm"> (35 Departures)</span>
          <p className=" text-xs"> Embark on a journey of togetherness</p>
        </div>
        <div className="mt-4">
          <span className="font-semibold text-sm">Faimly tour </span>
          <span className=" text-sm"> (35 Departures)</span>
          <p className=" text-xs"> Embark on a journey of togetherness</p>
        </div>
        <div className="mt-4">
          <span className="font-semibold text-sm">Faimly tour </span>
          <span className=" text-sm"> (35 Departures)</span>
          <p className=" text-xs"> Embark on a journey of togetherness</p>
        </div>
        <div className="mt-4">
          <span className="font-semibold text-sm">Faimly tour </span>
          <span className=" text-sm"> (35 Departures)</span>
          <p className=" text-xs"> Embark on a journey of togetherness</p>
        </div>

        <div className="mt-6 flex gap-3">
          <span>
            <PiPathBold size={30} />
          </span>
          <h1 className=" text-blue-600 font-bold">
            PAPULAR AND AVIALBLE TOURS
          </h1>
        </div>
        <div className="mt-4">
          <span className="font-semibold text-sm">Couples Only </span>

          <p className=" text-xs"> Exclusive tours for middle aged couple</p>
        </div>
        <div className="mt-4">
          <span className="font-semibold text-sm">Couples Only </span>

          <p className=" text-xs"> Exclusive tours for middle aged couple</p>
        </div>
      </div>
    </div>
  );
};

export default Speciality;
