import React from "react";
import Image from "next/image";
const HeroSection = () => {
  return (
    <div>
      <div className="">
        <div className=" container-wrapper  h-16 z-30 top-5  flex  items-center justify-between">
          <div>{/* <Image className="w-40" src="" alt="" /> */}</div>
          <div className="flex items-center justify-between gap-10">
            <div className="flex gap-5 items-center">
              <div className="py-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-8a8 8 0 1 0-16 0 8 8 0 0 0 16 0z"
                  />
                </svg>
              </div>
              <a className="transition duration-700 ease-in-out" href="">
                Destination
              </a>
              <a href="">Experience</a>
              <a href="">About</a>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className=" h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </div>
            </div>

            <div className="flex items-center gap-5 z-30">
              <p>+44 54 554 54552</p>
              <button className="border rounded-md  px-5 py-1 bg-gradient-to-tl from-primary to-yellow-500 text-white">
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-[100vh] flex items-center justify-center">
        <video
          className="absolute  inset-0 z-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
        >
          <source
            src="https://download-video.akamaized.net/v3-1/playback/76695b6b-1922-4edf-85f1-4af4da64cffd/0478892a-9c61f9c8?__token__=st=1709378509~exp=1709392909~acl=%2Fv3-1%2Fplayback%2F76695b6b-1922-4edf-85f1-4af4da64cffd%2F0478892a-9c61f9c8%2A~hmac=32b83702026affaa5b964fd1f5b743ab52e26485d1833a004dcaafd414e1a85d&r=dXMtZWFzdDE%3D"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 z-1 bg-black opacity-10"></div>

        {/*
        <!-- Text Content --> */}
        <div className="z-20 text-white text-center relative">
          <h1 className="text-[32px] font-bold">
            Lorem ipsum dolor. Explicabo, quam!
          </h1>
          <p className="mt-2">Additional text or content can go here.</p>
          <button className="border px-20 py-4 mt-3 rounded-md hover:bg-white hover:text-black transition duration-300 ease-in-out">
            Submit
          </button>
        </div>

        {/*
        <!-- scroll arrow sign --> */}
        <div className="absolute bottom-10 z-30 animate-bounce items-center flex flex-col">
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
