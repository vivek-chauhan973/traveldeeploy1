import "../../../app/globals.css";
import { IoIosArrowForward } from "react-icons/io";
import React, { useRef, useEffect } from "react";
import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Card3 = () => {
  const stateCardData = [
    {
      img: "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80",
      title: "Wooden House, Florida",
      description: "Enter a freshly updated and thoughtfully furnished peaceful home surrounded by ancient trees, stone walls."
    },
    {
      img: "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80",
      title: "Wooden House, Florida",
      description: "Enter a freshly updated and thoughtfully furnished peaceful home surrounded by ancient trees, stone walls."
    },
    {
      img: "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80",
      title: "Wooden House, Florida",
      description: "Enter a freshly updated and thoughtfully furnished peaceful home surrounded by ancient trees, stone walls."
    },
    {
      img: "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80",
      title: "Wooden House, Florida",
      description: "Enter a freshly updated and thoughtfully furnished peaceful home surrounded by ancient trees, stone walls."
    },
  ]
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
      <div className="carousel-container w-full mt-5 relative py-8 ">
        <div className="carousel gap-5" ref={carouselRef}>
          {/* start is here code  */}
          {stateCardData?.length > 0 && stateCardData?.map((data, i) => {
            return (
              <div key={i} className="relative   flex-shrink-0 max-w-[20rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg my-2">
                <div className=" mx-4 mt-4    overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                  <Image
                    className="" width={300} height={100}
                    // layout="fill"
                    src={data.img}
                    alt="ui/ux review check"
                  />
                </div>
                <div className="px-6 py-4">
                  <div className="flex items-center mb-3">
                    <h5 className="block font-sans text-[18px] font-semibold antialiased  leading-snug tracking-normal text-blue-gray-900">
                      {data.title}
                    </h5>
                  </div>
                  <div className=" line-clamp-3">
                    <p className=" block font-sans text-[15px] antialiased font-light leading-relaxed text-gray-700">
                      {data.description}
                    </p>
                  </div>
                  <div className="items-center mt-2">
                    <div className="text-right">
                      <p className="text-[14px] leading-5 text-cyan-400 font-semibold">
                        SUPER DEAL PRICE
                      </p>
                      <p className="text-[12px] leading-5">
                        Starts From{" "}
                        <span className="text-[22px] font-medium">₹ 3,50,000</span>
                      </p>
                      <p className="text-[10px] leading-5">
                        per person on twin sharing
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-4 pt-0">
                  <button
                    className="block w-full bg-navyblack py-3 rounded-md text-white"
                    type="button"
                  >
                    View details
                  </button>
                </div>
              </div>
            )
          })}
          {/* end is here code */}
        </div>
        <div className=" hidden md:block relative -top-[470px]  -translate-y-[60px] justify-between w-full">
          <div className=" absolute right-8 gap-3  flex pl-2 ">
            <FontAwesomeIcon
              icon={faChevronRight} onClick={scrollPrev}
              className="h-5 w-5 p-2 rounded-full  bg-black/50 hover:bg-black text-white rotate-180"
            />
            <FontAwesomeIcon
              icon={faChevronRight} onClick={scrollNext}
              className="h-5 w-5 p-2 rounded-full bg-black/50 hover:bg-black text-white"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card3;
