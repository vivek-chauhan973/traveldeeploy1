import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Faq1 = ({ data }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (i) => {
        setOpenIndex(openIndex === i ? null : i);
    };


    return (
        <div className="w-full md:w-3/4 m-auto">

            <div className="w-full mx-auto mt-10">
                {data?.map((item, i) => (
                    <div key={i} className="mb-3">

                        <div className="w-full h-12 flex justify-between items-center px-5 py-2 bg-[#f3f3f3] rounded-md hover:bg-gray-200"
                            onClick={() => handleToggle(i)}>
                            <p className="text-base capitalize font-semibold">{item.title}</p>
                            {openIndex === i ? (
                                <FontAwesomeIcon
                                    icon={faChevronUp}
                                    className='h-3 w-3 cursor-pointer'
                                />
                            ) : (
                                <FontAwesomeIcon
                                    icon={faChevronDown}
                                    className='h-3 w-3 cursor-pointer'
                                />
                            )}
                        </div>
                        <div className={`overflow-hidden transition-max-height duration-700 ease-in-out ${openIndex === i ? 'max-h-screen' : 'max-h-0'}`}>
                            <div className="py-4 xl:px-10 px-7 text-para">
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
