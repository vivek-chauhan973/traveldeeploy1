import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid';

const Faq1 = ({ data }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (i) => {
        setOpenIndex(openIndex === i ? null : i);
    };
   

    return (
        <div className="w-full md:w-3/4 m-auto">
            
            <div className="w-full mx-auto mt-10">
            {data?.map((item,i)=>(
                <div className="mb-3">
                    <div className="w-full h-14 flex justify-between items-center px-5 py-2 bg-[#f3f3f3] rounded-md hover:bg-gray-200"
                        onClick={() => handleToggle(i)}>
                        <p className="text-[16px] capitalize md:font-medium font-semibold">{item.title}</p>
                        {openIndex === i ? (
                            <ChevronUpIcon className="h-5 w-5 text-gray-600" />
                        ) : (
                            <ChevronDownIcon className="h-5 w-5 text-gray-600" />
                        )}
                    </div>
                    <div className={`overflow-hidden transition-max-height duration-700 ease-in-out ${openIndex === i ? 'max-h-screen' : 'max-h-0'}`}>
                        <div className="py-4 px-10 text-para">
                        {item.information}
                        </div>
                    </div>
                </div>
            ))}
                
            </div>
        </div>
    );
};

export default Faq1;
