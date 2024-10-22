import React, { useState } from 'react';
import "../../../app/globals.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const CarItineraryFaq = () => {
    const [openIndices, setOpenIndices] = useState([]);
    const [isAllOpen, setIsAllOpen] = useState(false);
    const faq = [
        {
            title: "Rakesh Kumar Rikki",
            desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Impedit voluptate, corporis unde corrupti dolores rem accusamus neque aliquam tempore deserunt cumque explicabo quae maxime non laudantium,
                    iusto sit quam temporibus harum fuga esse odit itaque? Dolor, sequi et.`
        },
        {
            title: "Rakesh Kumar Rikki",
            desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Impedit voluptate, corporis unde corrupti dolores rem accusamus neque aliquam tempore deserunt cumque explicabo quae maxime non laudantium,
                    iusto sit quam temporibus harum fuga esse odit itaque? Dolor, sequi et.`
        },
        {
            title: "Rakesh Kumar Rikki",
            desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Impedit voluptate, corporis unde corrupti dolores rem accusamus neque aliquam tempore deserunt cumque explicabo quae maxime non laudantium,
                    iusto sit quam temporibus harum fuga esse odit itaque? Dolor, sequi et.`
        },
        {
            title: "Rakesh Kumar Rikki",
            desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Impedit voluptate, corporis unde corrupti dolores rem accusamus neque aliquam tempore deserunt cumque explicabo quae maxime non laudantium,
                    iusto sit quam temporibus harum fuga esse odit itaque? Dolor, sequi et.`
        },
    ]
    // Toggle specific section
    const handleToggle = (i) => {
        if (openIndices.includes(i)) {
            setOpenIndices(openIndices.filter(index => index !== i));
        } else {
            setOpenIndices([...openIndices, i]);
        }
    };

    // Expand all sections
    const handleExpandAll = () => {
        setOpenIndices(faq.map((_, i) => i));
        setIsAllOpen(true);
    };

    // Hide all sections
    const handleHideAll = () => {
        setOpenIndices([]);
        setIsAllOpen(false);
    };

    return (
        <div className="w-full m-auto">
            {faq?.length > 0 && (
                <div className='flex justify-end items-center'>
                    <button
                        className="underline underline-offset-[6px] text-sm px-2 py-1.5 hover:bg-slate-100 rounded-md"
                        onClick={isAllOpen ? handleHideAll : handleExpandAll}
                    >
                        {isAllOpen ? 'Hide all' : 'Expand all'}
                    </button>
                </div>
            )}
            <div className="w-full mx-auto md:mt-5 mt-3">
                {faq?.map((item, i) => (
                    <div key={i} className="mb-4">
                        <div
                            className="w-full h-12 flex justify-center items-center md:gap-0 gap-2 bg-gray-200 rounded-md hover:bg-gray-300 cursor-pointer"
                            onClick={() => handleToggle(i)}
                        >
                            <div className='flex justify-center items-center md:w-[10%] w-[15%] h-full pl-1'>
                                <div className='w-12 h-7 rounded-2xl bg-navyblack flex justify-center items-center'>
                                    <p className="md:text-xs text-xxs font-medium text-white">Day {i + 1}</p>
                                </div>
                            </div>
                            <div className='flex justify-start items-center w-[90%] h-full'>
                                <p className="text-para capitalize font-semibold text-graytext">{item.title}</p>
                            </div>
                            <div className='flex justify-center items-center md:w-[10%] w-[5%] h-full pr-1'>
                                {openIndices.includes(i) ? (
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
                        </div>
                        <div
                            className={`transition-max-height duration-500 ease-in-out overflow-hidden
                                        ${openIndices.includes(i) ? 'max-h-[1000px]' : 'max-h-0'}`}
                            style={{ maxHeight: openIndices.includes(i) ? '1000px' : '0px' }}
                        >
                            <div className="py-4  px-4 text-para">
                                <div className="relative">
                                    <div className="relative text-para md:pl-10 pl-8 border-l ml-2 border-navyblack border-dashed pb-2">
                                        {/* Circle */}
                                        <div className="-left-2 absolute bg-navyblack h-4 w-4 rounded-full"></div>
                                        <div className='package-list day'
                                        // dangerouslySetInnerHTML={{ __html: item.information }}
                                        >
                                            {item.desc}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CarItineraryFaq;