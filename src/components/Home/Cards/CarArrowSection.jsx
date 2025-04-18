import "../../../app/globals.css";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const fetchPromoListCategory = async () => {
  const response = await fetch(
    `/api/public/package-state/fetchpromocat?selectType=category`
  );
  const data = await response.json();
  return data;
};

const CarArrowSection = ({ carCityPromos }) => {
  const [promoCarCategory, setPromoCarCategory] = useState([]);

  useEffect(() => {

    setPromoCarCategory(carCityPromos);

  }, [carCityPromos]);

  // console.log("promoCarCategory =======> ", promoCarCategory);

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
    <div className=" md:grid md:grid-cols-[450px,auto] ">
      {promoCarCategory?.length > 0 && (
        <div className="max-w-[450px] px-5 items-center  pt-5 md:pt-20">
          <p className="md:text-[25px] text-[22px] -mt-5 font-medium text-center flex flex-wrap capitalize">
            Searching for a specific kind of holiday getaway by car
          </p>
          <p className="text-para pt-3 line-clamp-2 mb-4 text-center">
            Explore carefully curated holiday adventures designed for road trips, tailored to your specific style and preferences.
          </p>
        </div>
      )}
      <div className="carousel-container relative ">
        {/* start is here code  */}
        <div className="carousel gap-5" ref={carouselRef}>
          {promoCarCategory?.length > 0 &&
            promoCarCategory.map((items, i) => {
              return (
                <div
                  key={i}
                  className=" h-96 w-full shrink-0 relative max-w-[290px]  rounded-lg overflow-hidden"
                >
                  <Link
                    href={`/car-rental/${items?.selectedItem?.toLowerCase()?.split(" ")?.join("-")}-car-hire`}
                  >
                    <Image
                      className="relative object-cover"
                      layout="fill"
                      src={items?.posterPath}
                      alt=""
                    />
                  </Link>
                  <Link
                    href={`/car-rental/${items?.selectedItem?.toLowerCase()?.split(" ")?.join("-")}-car-hire`}
                  >
                    <div className="box-Shadow-Style-Package absolute bottom-0 z-20 w-full  text-white bg-black bg-opacity-20 p-4">
                      <div className=''>
                        <p className="text-xl font-semibold text-white capitalize">{items.title}</p>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: items?.description,
                          }}
                          className="text-para line-clamp-2"
                        ></p>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          <div className=" bg-gradient-to-l from-white opacity-100 w-10 h-full right-0 absolute z-30 top-0"></div>
        </div>
        {/* end is here code */}
        {promoCarCategory?.length > 0 && (
        <div className=" hidden md:block relative -top-96 -translate-y-[60px] justify-between w-full">
          <div className=" absolute right-2 gap-3 flex pl-2 ">
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
        ) }
      </div>
    </div>
  );
};

export default CarArrowSection;
