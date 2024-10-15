// import Image from 'next/image'
// import { useState } from "react";
// import "../../../app/globals.css";
// import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

// const Cardwork = () => {
//   const data = {
//     "slides": [
//       {
//         "src": "https://picsum.photos/seed/img1/600/400",
//         "alt": "Image 1 for carousel"
//       },
//       {
//         "src": "https://picsum.photos/seed/img2/600/400",
//         "alt": "Image 2 for carousel"
//       },
//       {
//         "src": "https://picsum.photos/seed/img3/600/400",
//         "alt": "Image 3 for carousel"
//       }
//     ]
//   };

//   const [startIndex, setStartIndex] = useState(0);

//   const nextSlide = () => {
//     setStartIndex((startIndex) => (startIndex + 1) % data.slides.length);
//   };

//   const prevSlide = () => {
//     setStartIndex(
//       (startIndex) => (startIndex - 1 + data.slides.length) % data.slides.length
//     );
//   };

//   return (
//     <>
//       <div className="relative w-full">
//         <BsArrowLeftCircleFill
//           size={30}
//           onClick={prevSlide}
//           className="z-10 cursor-pointer absolute left-5 top-2/4 -translate-y-1/2 text-white"
//         />
//         <div className="relative flex justify-center items-center overflow-hidden w-full h-96 rounded-lg">
//           {data.slides.map((item, index) => (
//             <div
//               key={index}
//               className={` md:h-full w-full h-56  absolute transition-transform transform ${index === startIndex ? "translate-x-0" : "translate-x-full"
//                 }`}
//             >
//               <Image
//                 src={item.src}
//                 alt={item.alt}
//                 className=" object-cover"
//                 layout='fill'

//               />
//             </div>
//           ))}
//         </div>
//         <BsArrowRightCircleFill
//           size={30}
//           onClick={nextSlide}
//           className="cursor-pointer absolute right-5 top-2/4 -translate-y-1/2 text-white"
//         />
//       </div>
//     </>
//   );
// };

// export default Cardwork;


import Image from 'next/image';
import { useState } from "react";
import "../../../app/globals.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const Cardwork = () => {
  const data = {
    "slides": [
      {
        "src": "https://picsum.photos/seed/img1/600/400",
        "alt": "Image 1 for carousel",
        "title": "Slide Title 1",
        "description": "This is the description for slide 1."
      },
      {
        "src": "https://picsum.photos/seed/img2/600/400",
        "alt": "Image 2 for carousel",
        "title": "Slide Title 2",
        "description": "This is the description for slide 2."
      },
      {
        "src": "https://picsum.photos/seed/img3/600/400",
        "alt": "Image 3 for carousel",
        "title": "Slide Title 3",
        "description": "This is the description for slide 3."
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
          className="z-10 cursor-pointer absolute left-5 top-2/4 -translate-y-1/2 text-white md:block hidden"
        />
        <div className="relative flex justify-center items-center overflow-hidden w-full h-96 rounded-lg">
          {data.slides.map((item, index) => (
            <div
              key={index}
              className={` md:h-full w-full h-56 absolute transition-transform transform ${index === startIndex ? "translate-x-0" : "translate-x-full"
                }`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                className="object-cover"
                layout='fill'
              />
              {index === startIndex && (
                <div className="absolute md:bottom-5 bottom-0 md:left-5 left-0 text-white bg-black bg-opacity-20 p-4">
                  <h2 className="text-xl font-bold">{item.title}</h2>
                  <p className="mb-2">{item.description}</p>
                  <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-2 px-4 rounded">
                    Know More
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
        <BsArrowRightCircleFill
          size={30}
          onClick={nextSlide}
          className="cursor-pointer absolute right-5 top-2/4 -translate-y-1/2 text-white md:block hidden"
        />
      </div>
    </>
  );
};

export default Cardwork;
