import { useState, useEffect } from "react";
import Image from 'next/image';
import CustomiseTour from "@/components/ItineraryDetail/CustomiseTour";

const CarDetailHeroSection = ({ carPackage, carPrice1, setShowPopupBooking }) => {

    return (
        <>
            <div className="">
                <div className="relative overflow-hidden ">
                    <Image
                        className="xl:h-[510px] h-[350px] object-cover w-full transition-all duration-500"
                        src={carPackage?.uploads?.[0]}
                        alt="carpackagedetail"
                        width={200}
                        height={100}
                        onError={(e) => {
                            e.target.onerror = null; // Prevent infinite loop if fallback also fails
                            e.target.src = "/logo.png"; // Set fallback image if the original image fails to load
                        }}
                    />
                    <div className="box-Shadow-Style-Package hidden xl:flex justify-end gap-3 absolute right-0 z-10 w-full py-3 pr-5 uppercase text-white font-bold italic bottom-0">
                        <p className="bg-gradient-to-r from-orange-500 to-red-500 py-[2px] px-2 text-white rounded text-para font-bold  ">
                            {carPackage?.days?.length - 1}N/{" "}
                            {carPackage?.days?.length}D
                        </p>
                    </div>
                </div>
                <div className="md:hidden block">
                    <div className="w-full h-20 bg-[#FF6600] mb-3 flex justify-center items-center">
                        <h1 className="font-bold uppercase text-center text-xl">
                            {carPackage?.name} By {carPackage?.selectedVicle?.vehicleType}
                        </h1>
                    </div>
                </div>
                <div className="md:block hidden">
                    <div className="w-full h-28 bg-[#FF6600] flex flex-col justify-center items-center mb-3">
                        <h1 className="font-bold uppercase text-center text-[32px]">
                            {carPackage?.name}
                        </h1>
                        <p className="font-bold uppercase text-center text-[32px]">
                            By {carPackage?.selectedVicle?.vehicleType}
                        </p>
                    </div>
                </div>
            </div>
            <div className="container-wrapper xl:block hidden">
                <div className="flex justify-between">
                    <div>
                        <h2 className=" text-lg md:text-lg font-semibold capitalize my-2">
                            Vehicle Type : {carPackage?.selectedVicle?.vehicleType}
                        </h2>
                        {carPackage?.badges?.length > 0 && carPackage?.badges?.map((item, i) => {
                            return (
                                <button key={i}
                                    className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 capitalize rounded-full py-1 px-2 text-xxs font-semibold text-white mr-2">
                                    {item}
                                </button>
                            )
                        })}
                        <p className="md:text-md text-[16px] my-2 capitalize">Ex City : {carPackage?.startcity}</p>
                    </div>
                    <div className="flex gap-5">
                        <div className="text-right flex flex-col items-end justify-center ">
                            <p className="text-base leading-5 text-green-600 font-semibold uppercase">
                                best deal price
                            </p>

                            <p className="text-sm leading-5">
                                Without GST{" "}
                                <span className="text-lg text-graytext font-medium">
                                    {(carPrice1 || carPackage?.price)?.toLocaleString('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                                </span>
                            </p>
                            <div className="flex gap-1 items-end">
                                {carPackage?.highSave !== 0 &&
                                    <button className="capitalize text-xxs text-white bg-navyblack px-1 py-1 rounded-sm text-center">
                                        {carPackage?.highSave && carPackage.highSave !== 0
                                            ? `Save ${carPackage.highSave}%`
                                            : null}
                                    </button>
                                }
                            </div>
                        </div>
                        <div className="flex flex-col align-middle my-auto pl-2 gap-2">
                            <button
                                className={`border px-5 py-1 rounded-md ${carPrice1
                                    ? "bg-gradient-to-r from-orange-500 to-red-500"
                                    : " bg-gradient-to-r from-orange-200 to-red-200"
                                    }  text-center text-white text-para`}
                                onClick={() => setShowPopupBooking(true)}
                            >
                                Book Now
                            </button>
                            <CustomiseTour>
                                <button className=" border-primary w-full border text-primary px-5 py-2 text-para rounded-md">
                                    Customise
                                </button>
                            </CustomiseTour>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CarDetailHeroSection;



