import React from "react";
import Image from "next/image";
const HeroSection = () => {
  return (
    <div>
      <div className="relative md:h-[84vh] h-[65vh] flex items-center justify-center">
        <video autoPlay muted loop
          className="absolute  inset-0 z-0 w-full h-full object-cover"
          >
          <source src="/video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 z-1 bg-black opacity-10"></div>
        <div className="z-20 text-white text-center relative  xl:w-[50vw] w-[80vw]">
          <h1 className="md:text-[32px] text-2xl leading-normal font-semibold md:font-semibold uppercase ">
            Travel is the only thing you buy that makes you richer
          </h1>
          <p className="mt-3">Additional text or content can go here.</p>
        </div>
        {/* <!-- scroll arrow sign --> */}
        <div className="absolute bottom-0 md:bottom-10 z-30 animate-bounce items-center flex flex-col">
          <p className="text-white">scroll down</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className=" h-6 w-6 mt-4 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
