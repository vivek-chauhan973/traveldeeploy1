import { useState, useEffect } from "react";
import Image from 'next/image';

const CarDetailHeroSection = ({ carPackage }) => {

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
        </>
    )
}
export default CarDetailHeroSection;



