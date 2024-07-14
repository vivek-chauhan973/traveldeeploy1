import "../../../app/globals.css";
import React, { useRef, useEffect } from "react";
// import '../../app/globals.css'; // Import the custom CSS file
import { IoIosArrowForward } from "react-icons/io";
import Image from 'next/image';

const ArrowSection = () => {
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
      <div className="max-w-[450px] px-5 items-center  pt-5 md:pt-20">
        <p className="md:text-[25px] text-[22px] -mt-5 font-medium text-center flex flex-wrap">
          Looking for a specific style for holiday
        </p>
        <p className="text-para pt-3 line-clamp-2 mb-4 text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. In
          consequatur adipisci aliquam rerum error odio, nam, atque nostrum
          labore harum possimus nesciunt!
        </p>
      </div>
      <div className="carousel-container relative ">
        <div className="carousel gap-5" ref={carouselRef}>
          {/* start is here code  */}

          {/* Testing */}
          <div className=" shrink-0 relative max-w-[290px] rounded-lg overflow-hidden">
            <Image
              className="relative object-cover h-96"
              src="https://images.unsplash.com/photo-1627640268913-91cfd4675b65?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <div className="absolute bottom-0 px-5 py-2">
              <p className="text-xl text-white">Self Drive</p>
              <div className=" line-clamp-2 text-para text-white rounded-md">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Atque aperiam exercitationem aliquid!
                </p>
              </div>
            </div>
          </div>
          <div className=" shrink-0 relative max-w-[290px] rounded-lg overflow-hidden">
            <Image
              className="relative object-cover h-96"
              src="https://images.unsplash.com/photo-1627640268913-91cfd4675b65?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <div className="absolute bottom-0 px-5 py-2">
              <p className="text-xl text-white">Self Drive</p>
              <div className=" line-clamp-2 text-para text-white rounded-md">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Atque aperiam exercitationem aliquid!
                </p>
              </div>
            </div>
          </div>
          <div className=" shrink-0 relative max-w-[290px] rounded-lg overflow-hidden">
            <Image
              className="relative object-cover h-96"
              src="https://images.unsplash.com/photo-1627640268913-91cfd4675b65?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <div className="absolute bottom-0 px-5 py-2">
              <p className="text-xl text-white">Self Drive</p>
              <div className=" line-clamp-2 text-para text-white rounded-md">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Atque aperiam exercitationem aliquid!
                </p>
              </div>
            </div>
          </div>
          <div className=" shrink-0 relative max-w-[290px] rounded-lg overflow-hidden">
            <Image
              className="relative object-cover h-96"
              src="https://images.unsplash.com/photo-1627640268913-91cfd4675b65?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <div className="absolute bottom-0 px-5 py-2">
              <p className="text-xl text-white">Self Drive</p>
              <div className=" line-clamp-2 text-para text-white rounded-md">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Atque aperiam exercitationem aliquid!
                </p>
              </div>
            </div>
          </div>
          <div className=" bg-gradient-to-l from-white opacity-100 w-10 h-full right-0 absolute z-30  top-0"></div>

          {/* end is here code */}
        </div>
        <div className=" hidden md:block relative -top-96 -translate-y-[60px] justify-between w-full">
          <div className=" absolute right-2 gap-3  flex pl-2 ">
            <button
              onClick={scrollPrev}
              className="rounded-full  bg-black/50 hover:bg-black p-2 text-white rotate-180"
            >
              <IoIosArrowForward size={20} />
            </button>
            <button
              onClick={scrollNext}
              className="rounded-full bg-black/50 hover:bg-black p-2 text-white"
            >
              <IoIosArrowForward size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArrowSection;
