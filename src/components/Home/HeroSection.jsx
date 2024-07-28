import React from "react";
import Image from "next/image";
const HeroSection = () => {
  return (
    <div>

      <div className="relative md:h-[84vh] h-[65vh] flex items-center justify-center">
        <video
          className="absolute  inset-0 z-0 w-full h-full object-cover"
          autoPlay
          muted
          loop>
          <source src="/video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 z-1 bg-black opacity-10"></div>

        {/*
        <!-- Text Content --> */}
        <div className="z-20 text-white text-center relative  w-[50vw] ">
          <h1 className="   md:text-[32px]  font-semibold md:font-semibold uppercase ">
            Travel is the only thing you buy that makes you richer
          </h1>
          <p className="mt-2">Additional text or content can go here.</p>
          <button className="border px-10 md:px-20 md:py-4 py-2 mt-3 rounded-md hover:bg-white hover:text-black transition duration-300 ease-in-out">
            Submit
          </button>
        </div>

        {/*
        <!-- scroll arrow sign --> */}
        <div className="absolute bottom-5 md:bottom-10 z-30 animate-bounce items-center flex flex-col">
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
