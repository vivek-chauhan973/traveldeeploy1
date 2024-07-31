// Without Expand all

import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid';

 const ItineraryDay =({promoData})=> {

  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  const sections = [
    { title: 'Hello 1', 
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum nulla soluta officia est facere,
                vel eius iis sequi neque iste ullam. et corrupti ratione cum magnam provident! 
                Eligendi maiores nulla delectus vel.` 
              },
    { title: 'Hello 2', 
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum nulla soluta officia est facere,
                vel eius iis sequi neque iste ullam. et corrupti ratione cum magnam provident! 
                Eligendi maiores nulla delectus vel.` 
              },
    { title: 'Hello 3', 
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum nulla soluta officia est facere,
                vel eius iis sequi neque iste ullam. et corrupti ratione cum magnam provident! 
                Eligendi maiores nulla delectus vel.` 
              },
  ];
  return (
      <div className="w-full md:w-3/4 m-auto ">

        <div className="text-center mb-10">
          <p className=" md:text-[22px] text-[20px] mb-2">HighLight & Inclusion</p>

          <p className="text-para  md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        
        <div className="w-full mx-auto mt-10">
          {sections.map((item, i) => (
            <div key={i} className=" mb-3">
              <div className="w-full flex justify-between items-center px-5 py-2 bg-gray-100 rounded-md hover:bg-gray-200"
               onClick={() => handleToggle(i)}>
                <p className="text-base md:font-medium font-normal">{item.title}</p>
                  {openIndex === i ? ( <ChevronUpIcon className="h-5 w-5 text-gray-600" /> ) : (
                  <ChevronDownIcon className="h-5 w-5 text-gray-600" /> )}
              </div>
              <div className={`overflow-hidden transition-max-height duration-700 ease-in-out 
                   ${ openIndex === i ? 'max-h-screen' : 'max-h-0' }`} >
                <div className="py-4 px-10 text-para">{item.content}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
  );
}
export default  ItineraryDay
