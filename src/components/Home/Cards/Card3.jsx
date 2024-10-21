import "../../../app/globals.css";
import { IoIosArrowForward } from "react-icons/io";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Card3 = ({ statePackage }) => {

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
    <>
      <div className="carousel-container w-full xl:mt-10 md:mt-12 mt-0 relative md:py-8">
        <div className="carousel gap-5" ref={carouselRef}>
          {/* start is here code  */}
          {statePackage?.length > 0 &&
            statePackage?.slice(0,6).map((data, i) => {
              // console.log("Rakesh data of state", data);

              return (
                <div
                  key={i}
                  className=" border relative flex-shrink-0 max-w-[20rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg my-2"
                >
                  <div className="mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                    <Image
                      className="h-[10rem] object-cover"
                      width={300}
                      height={100}
                      // layout="fill"
                      src={data?.uploads?.[0]}
                      alt="ui/ux review check"
                    />
                  </div>
                  <div className="px-6 py-4">
                    <div className="flex items-center mb-3">
                      <h5 className="block font-sans text-[18px] font-semibold antialiased  leading-snug tracking-normal text-blue-gray-900">
                        {data?.name}
                      </h5>
                    </div>
                    <div className=" line-clamp-3">
                      <p
                        dangerouslySetInnerHTML={{ __html: data?.about }}
                        className="text-para line-clamp-3"
                      ></p>
                    </div>
                    <div className="items-center mt-2">
                      <div className="text-right">
                        <p className="text-base leading-snug text-green-700 font-semibold">
                          {((data?.addguest === "addGuest") && "Awesome Price")}
                          {((data?.addguest === "fixedDeparture") && (data?.fixedfixeddepartureweightedprice === 1)) && "Premium Value Deal"}
                          {((data?.addguest === "fixedDeparture") && (data?.fixedfixeddepartureweightedprice === 2)) && "Unmatched Price"}
                        </p>
                        <p className="text-[12px] leading-5">
                          Starts From{" "}
                          <span className="text-[22px] font-medium">
                            {Math.floor(data?.price).toLocaleString("en-IN", {
                              style: "currency",
                              currency: "INR",
                              minimumFractionDigits: 0,
                              maximumFractionDigits: 0,
                            })}
                          </span>
                        </p>
                        <p className="text-[10px] leading-5">
                          per person on twin sharing
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 pt-0">
                    <Link href={"/package/" + data?.pageUrl}>
                      <button
                        className="block w-full bg-navyblack py-3 rounded-md text-white"
                        type="button"
                      >
                        View details
                      </button>
                    </Link>
                  </div>
                </div>
              );
            })}
          {/* end is here code */}
        </div>
        <div className=" hidden md:block relative -top-[450px]  -translate-y-[60px] justify-between w-full">
          <div className=" absolute right-8 gap-3  flex pl-2 ">
            <FontAwesomeIcon
              icon={faChevronRight}
              onClick={scrollPrev}
              className="h-5 w-5 p-2 rounded-full  bg-black/50 hover:bg-black text-white rotate-180"
            />
            <FontAwesomeIcon
              icon={faChevronRight}
              onClick={scrollNext}
              className="h-5 w-5 p-2 rounded-full bg-black/50 hover:bg-black text-white"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card3;
