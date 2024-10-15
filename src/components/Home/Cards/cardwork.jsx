import Image from 'next/image';
import { useState, useEffect, useRef } from "react";
import "../../../app/globals.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import Link from 'next/link';

const fetchCrouselData = async () => {
  const data = await fetch("/api/home/crousel");
  return await data.json();
}

const Cardwork = () => {

  const [bannerData, setBannerData] = useState([])
  useEffect(() => {
    fetchCrouselData().
      then((res) => {
        // console.log("res----->13 ", res?.data);
        setBannerData(res?.data || [])
      })
      .catch(err => console.log("err------ > ", err))
  }, [])
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


  return (
    <>
      <div className="relative w-full">
        <BsArrowLeftCircleFill
          size={30}
          onClick={prevSlide}
          className="z-10 cursor-pointer absolute md:left-5 left-1 top-2/4 -translate-y-1/2 text-white"
        />
        <div className="relative flex justify-center items-center overflow-hidden w-full md:h-96 h-56 rounded">
          {bannerData?.length > 0 && bannerData?.map((item, index) => (
            <div
              key={index}
              className={`h-full w-full absolute transition-transform transform ${index === startIndex ? "translate-x-0" : "translate-x-full"
                }`}
            >
              <Image
                src={item.path}
                alt={item.alt}
                className="object-cover"
                layout='fill'
              />
              {index === startIndex && (
                <div className="box-Shadow-Style-Package absolute bottom-0 z-10 w-full  text-white bg-black bg-opacity-20 md:p-10 p-3">
                  <div className='md:w-1/2 w-full'>
                    <h2 className="md:text-xl text-lg font-bold">{item.title}</h2>
                    <p className="mb-2 md:text-para text-sm">{item.description}</p>
                    <Link href={item.url}>
                      <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold md:py-2 py-1.5 md:px-4 px-3 rounded text-sm">
                        Know More
                      </button>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <BsArrowRightCircleFill
          size={30}
          onClick={nextSlide}
          className="cursor-pointer absolute md:right-5 right-1 top-2/4 -translate-y-1/2 text-white"
        />
      </div>
    </>
  );
};

export default Cardwork;
