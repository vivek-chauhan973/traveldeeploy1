import React, { useEffect, useRef, useState } from "react";
import { useAppContext } from "../context/Package/AddGuest";

const Login = ({ handleCleckbox, handleOnChange }) => {
  const { toglePopup,setPricingManagement } = useAppContext();
  const ref = useRef(null);
  const ref1 = useRef(null);
  const handleSubmit = () => {
    if (ref.current.checked) {
      // console.log( "ref11111111111",ref.current)

      handleCleckbox(true);
    }
  };
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="relative sm:w-[300px] sm:h-[400px] ">
      <div
        className={` fixed inset-0 ${
          toglePopup ? "ml-28" : ""
        }  transition-all duration-300 ease-in-out w-full h-full flex items-center justify-center bg-black/50`}
      >
        <div className="flex flex-col gap-4 w-1/3 justify-center items-center  bg-slate-400 rounded-lg  ">
          <div className="pt-5 ">
            <p className="font-bold text-xl">
              Please select Package category
            </p>
          </div>
          <div className=" flex flex-col gap-2">
            <div className="flex w-full gap-4 items-center justify-start">
              <input
                type="radio"
                value="addGuest"
                name="name"
                ref={ref1}
                className=" w-5 h-5"
                onChange={(e)=>{handleOnChange(e);setPricingManagement(e.target.value)}}
              />
              <p className=" text-10">Add Guest</p>
            </div>
            <div className="flex gap-3 items-center justify-start mt-2">
              <input
                type="radio"
                value="fixedDeparture"
                name="name"
                ref={ref1}
                className="w-5 h-5"
                onChange={(e)=>{handleOnChange(e);setPricingManagement(e.target.value)}}
              />
              <p className=" text-10">Fixed Departure</p>
            </div>
            <div className="flex gap-3 items-center justify-start mt-2 ">
              <input
                type="checkbox"
                placeholder="Password"
                name="password"
                className="w-3 h-3"
                ref={ref}
              />
              <p className=" text-[12px] font-bold">Please confirm checkbox</p>
            </div>
            <div className="text-center my-2">
              <button
                onClick={handleSubmit}
                className=" text-center bg-blue-600 text-white px-2 py-1 rounded-sm"
              >
                Ok
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
