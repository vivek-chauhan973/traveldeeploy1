import Image from 'next/image'
import { useState } from "react";
import "../../../app/globals.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const Cardwork = () => {
  const data = {
    "slides": [
      {
        "src": "https://picsum.photos/seed/img1/600/400",
        "alt": "Image 1 for carousel"
      },
      {
        "src": "https://picsum.photos/seed/img2/600/400",
        "alt": "Image 2 for carousel"
      },
      {
        "src": "https://picsum.photos/seed/img3/600/400",
        "alt": "Image 3 for carousel"
      }
    ]
  };

  const [startIndex, setStartIndex] = useState(0);

  const nextSlide = () => {
    setStartIndex((startIndex) => (startIndex + 1) % data.slides.length);
  };

  const prevSlide = () => {
    setStartIndex(
      (startIndex) => (startIndex - 1 + data.slides.length) % data.slides.length
    );
  };

  return (
    <>
      <div className="relative w-full">
        <BsArrowLeftCircleFill
          size={30}
          onClick={prevSlide}
          className="z-10 cursor-pointer absolute left-5 top-2/4 -translate-y-1/2 text-white"
        />
        <div className="relative flex justify-center items-center overflow-hidden w-full h-72 rounded-lg">
          {data.slides.map((item, index) => (
            <div
              key={index}
              className={`w-full absolute transition-transform transform ${
                index === startIndex ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        <BsArrowRightCircleFill
          size={30}
          onClick={nextSlide}
          className="cursor-pointer absolute right-5 top-2/4 -translate-y-1/2 text-white"
        />
      </div>
    </>
  );
};

export default Cardwork;
