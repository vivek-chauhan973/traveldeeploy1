import "../app/globals.css";
import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faCircleXmark,
  faAngleRight,
  faAngleLeft,
} from "@fortawesome/free-solid-svg-icons";

const Carousel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null); // New state for the selected item

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/review");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error:", error.message);
      }
    };
    fetchData();
  }, []);

  const handleReadMore = (item) => {
    setSelectedItem(item); // Set the selected item data
    setIsOpen(true); // Open the popup
  };

  const handleClose = () => {
    setIsOpen(false);
    setSelectedItem(null); // Clear the selected item data when closing
  };

  // For fixed card popup
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    // Clean up the effect
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

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
    <div className=" bg-[#E7E7E7]"> {/* bg-cyan-950 */}
      <div className="carousel-container relative container-wrapper ">
        <div className="text-center py-7">
          <h3 className="xl:text-2xl text-xl leading-8 font-medium  xl:mb-2">
            BizareXpedition<sup className="md:text-sm text-xs mr-1">TM</sup>Reviews
          </h3>
          <p className="xl:text-sm text-xs leading-8 font-medium">
          
            Let{"'"}s go, pack up, and hit the road!
          </p>
        </div>
        <div className="carousel gap-5 pb-10" ref={carouselRef}>
          {data.slice().reverse().map((item, index) => (
            <div key={index} className="bg-white min-w-80 rounded-lg mb-4">
              <div className="flex justify-between items-center px-4 mt-4">
                <div className="p-1 flex items-center gap-1">
                  <FontAwesomeIcon
                    icon={faStar}
                    className="font1 text-primary"
                  />
                  <span className="text-sm">{item.rating}</span>
                </div>
                <p className="text-sm text-gray-400 uppercase">Recommended</p>
              </div>

              <div className="px-3 py-1">
                <h1 className="text-lg capitalize font-semibold">
                  {item.title}
                </h1>
                <p className="mt-1 text-para line-clamp-3">
                  {item.information}
                </p>
                <button
                  onClick={() => handleReadMore(item)}
                  className="text-blue-500 text-para"
                >
                  read more..
                </button>
              </div>
              <hr />
              <div className="flex justify-between px-4 py-2 text-para">
                <span className="font-bold capitalize text-gray-700">
                  {item.name}
                </span>
                <span>
                  {new Date(item.selectDate).toLocaleDateString("en-US", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </span>
              </div>
            </div>
          ))}

          {isOpen && selectedItem && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
              <div className="relative bg-white rounded-lg w-11/12 md:w-1/2 lg:w-1/3">
                <div className="pr-3 pt-1 flex justify-end items-center ">
                  <button className="cursor-pointer  " onClick={handleClose}>
                    <FontAwesomeIcon
                      icon={faCircleXmark}
                      className="rewiew cursore-pointer"
                    />
                  </button>
                </div>
                <div className="bg-white min-w-80 rounded-lg">
                  <div className="flex justify-between items-center px-4">
                    <div className="p-1 flex item-center gap-1 absolute  top-3  rounded-md border-black">
                      <FontAwesomeIcon
                        icon={faStar}
                        className="font1 text-primary cursor-pointer  "
                      />
                      <span className="text-sm  ">{selectedItem.rating}</span>
                    </div>
                    {/* <p className="text-sm text-gray-400 uppercase">
                      Recommended
                    </p> */}
                  </div>

                  <div className="px-4 py-3  md:py-3">
                    <h1 className="text-lg  capitalize   font-semibold">
                      {selectedItem.title}
                    </h1>
                    <p className="mt-1 text-sm">
                      {selectedItem.information}
                    </p>
                  </div>
                  <hr />
                  <div className="flex justify-between px-4 py-2 text-para">
                    <span className="font-bold capitalize text-gray-700">
                      {selectedItem.name}
                    </span>
                    <span>
                      {new Date(selectedItem.selectDate).toLocaleDateString(
                        "en-US",
                        {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        }
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="bg-gradient-to-l from-white opacity-95 w-10 h-[60%] mt-20 -right-5 md:hidden absolute z-30 top-0"></div>
        <div className="hidden md:block absolute top-[70%] -translate-y-[60px] justify-between w-full">
          <div className="justify-between flex">
            <button
              onClick={scrollPrev}
              className="rounded-full h-10 w-10 bg-black/50 hover:bg-black p-3 text-white "
            >
              <FontAwesomeIcon icon={faAngleLeft} className="font " />
            </button>
            <button
              onClick={scrollNext}
              className="rounded-full bg-black/50 h-10  w-10 hover:bg-black p-3 text-white"
            >
              <FontAwesomeIcon icon={faAngleRight} className="font" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
