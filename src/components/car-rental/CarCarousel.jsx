import "../../../src/app/globals.css";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const CarCarousel = ({ carCarousel }) => {
  // console.log("carCarousel", carCarousel);
  const carouselRef = useRef(null);

  const scrollNext = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: carouselRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollPrev = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -carouselRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        // Enable mouse scroll for small devices
        carouselRef.current.style.overflowX = "scroll";
      } else {
        // Disable mouse scroll for medium and larger devices
        carouselRef.current.style.overflowX = "hidden";
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Initialize on mount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="">
      <div className="carousel-container relative">
        <div className="carousel gap-5" ref={carouselRef}>
          {carCarousel?.length > 0 &&
            carCarousel?.map((items, i) => {
              return (
                <div key={i} className="carousel-item md:w-full w-[92%] ">
                  <div className="shadow-md overflow-hidden">
                    <div className="relative">
                      <Link href={items?.url}>
                        <div className="w-full md:h-96 h-60">
                          <Image
                            className="relative  object-cover md:rounded-md rounded-lg"
                            layout="fill"
                            src={items?.path}
                            alt="images"
                          />
                          <div
                            className="absolute bg-gradient-to-r from-black to-gray pb-3 text-white md:text-xl text-lg font-semibold flex justify-start items-center w-full md:h-96 h-60 rounded-lg md:rounded-none"
                          >
                            <div className="grid md:grid-cols-2 grid-cols-1 md:h-44 h-36 md:max-h-52 max-h-44">
                              <div className="flex flex-col justify-between items-start md:ml-16 ml-5 md:mr-0 mr-5">
                                <h2 className="md:text-xl text-base font-bold">
                                  {items.title}
                                </h2>
                                <p className="mb-2 md:text-sm text-xs md:line-clamp-4 line-clamp-3">
                                  {items.description}
                                </p>
                                <Link href={items.url}>
                                  <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold md:py-2 py-1.5 md:px-4 px-3 rounded md:text-sm text-xs">
                                    Know More
                                  </button>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        {carCarousel?.length > 0 && (
          <div className=" hidden md:block absolute top-2/4 -translate-y-[40px] justify-between w-full">
            <div className=" justify-between flex px-2">
              <FontAwesomeIcon
                icon={faChevronRight}
                onClick={scrollPrev}
                className="h-5 w-5 p-2 rounded-full  bg-slate-900 hover:bg-slate-800 text-white rotate-180"
              />
              <FontAwesomeIcon
                icon={faChevronRight}
                onClick={scrollNext}
                className="h-5 w-5 p-2 rounded-full bg-black/50 hover:bg-slate-800 text-white"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CarCarousel;
