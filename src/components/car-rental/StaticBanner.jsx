import Image from 'next/image';
import { useState, useEffect, useRef } from "react";
import "../../../src/app/globals.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import Link from 'next/link';

const CarCarousel = ({carCarousel}) => {

  const [bannerData, setBannerData] = useState([])
  useEffect(() => {
setBannerData(carCarousel||[])
  }, [carCarousel])
  // console.log("bannerData", bannerData);

  const [startIndex, setStartIndex] = useState(0);

  const nextSlide = () => {
    setStartIndex((startIndex) => (startIndex + 1) % bannerData.length);
  };

  const prevSlide = () => {
    setStartIndex(
      (startIndex) => (startIndex - 1 + bannerData.length) % bannerData.length
    );
  };

  const boxShadowStyle = {
    boxShadow: "inset 0px -400px 20px  rgba(0, 0, 0, 0.2)",
  };

  return (
    <>
      <div className="relative w-full">
        <BsArrowLeftCircleFill
          size={30}
          onClick={prevSlide}
          className="z-10 cursor-pointer absolute md:left-3 left-1 top-2/4 -translate-y-1/2 text-white"
        />
        <div className="relative flex justify-center items-center overflow-hidden w-full md:h-96 h-56 ">
          {bannerData?.length > 0 && bannerData?.map((item, index) => (
            <div key={index} className={`h-full w-full absolute transition-transform transform 
              ${index === startIndex ? "translate-x-0" : "translate-x-full"}`}
            >
              <div className="">
                <Image className="relative object-cover"
                  layout="fill"
                  src={item.path}
                  alt="images"
                />
                <div
                  style={boxShadowStyle}
                  className="absolute w-full h-full text-white"
                >
                  <div className='absolute bottom-10 md:left-20 left-10'>
                    <div className='md:w-3/4 w-full'>
                      <h2 className="md:text-xl text-lg font-bold">{item.title}</h2>
                      <p className="mb-2 md:text-para text-sm md:line-clamp-4 line-clamp-2">{item.description}</p>
                      <Link href={item.url}>
                        <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold md:py-2 py-1.5 md:px-4 px-3 rounded text-sm">
                          Know More
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <BsArrowRightCircleFill
          size={30}
          onClick={nextSlide}
          className="cursor-pointer absolute md:right-3 right-1 top-2/4 -translate-y-1/2 text-white"
        />
      </div>
    </>
  );
};

export default CarCarousel;
