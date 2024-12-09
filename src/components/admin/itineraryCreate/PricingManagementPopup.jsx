import React, { useEffect, useRef, useState } from "react";
import { useAppContext } from "../context/Package/AddGuest";

const Login = ({ handleCheckbox, handleOnChange, setPriceManagementDot }) => {
  const { toglePopup, setPricingManagement } = useAppContext();
  const ref = useRef(null);
  const ref1 = useRef(null);
  const handleSubmit = () => {
    if (ref.current.checked) {
      // console.log( "ref11111111111",ref.current)
      handleCheckbox(true);
    }
  };
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="relative sm:w-[300px] sm:h-[400px]">
      <div
        className={` fixed inset-0 ${toglePopup ? "md:ml-28" : ""
          }  transition-all duration-300 ease-in-out w-full h-full flex items-center md:justify-center justify-start bg-black/50 p-5`}
      >
        <div className="flex flex-col gap-4 md:w-auto w-full justify-start   bg-slate-400 rounded-lg  p-5">
          <div className="">
            <p className="font-bold md:text-lg text-base">
              Please select Package category 
            </p>
          </div>
          <div className=" flex flex-col gap-2">
            <div className="flex w-full gap-3 items-center justify-start">
              <input
                type="radio"
                value="addGuest"
                name="name"
                ref={ref1}
                className=" w-5 h-5"
                onChange={(e) => { handleOnChange(e); setPricingManagement(e.target.value) }}
              />
              <p className="">Package</p>
            </div>
            <div className="flex gap-3 items-center justify-start mt-2">
              <input
                type="radio"
                value="fixedDeparture"
                name="name"
                ref={ref1}
                className="w-5 h-5"
                onChange={(e) => { handleOnChange(e); setPricingManagement(e.target.value) }}
              />
              <p className="">Fixed Departure</p>
            </div>
            <div className="flex gap-3 items-center justify-start mt-2 ">
              <input
                id="confirm"
                type="checkbox"
                placeholder="Password"
                name="password"
                className="w-4 h-4"
                ref={ref}
              />
              <label htmlFor="confirm" className=" text-sm font-semibold cursor-pointer">Please confirm checkbox</label>
            </div>
            <div className="text-center my-2">
              <button
                onClick={handleSubmit}
                className=" text-center bg-navyblack text-white px-4 py-1.5 rounded-md cursor-pointer"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
