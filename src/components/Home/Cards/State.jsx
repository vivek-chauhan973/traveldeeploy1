import React, { useState, useEffect } from 'react'
import Card3 from './Card3'

const State = () => {

    const [data, setData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/public/states');
                const result = await response.json();
                setData(result);
            } catch (error) {

                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <div className="my-1 mt-6 md:mt-10 ">
                <div className="container-wrapper  text-center">
                    <p className='md:text-[25px] text-xl font-medium mb-1'>
                        Immerse Yourself in Trending Destinations
                    </p>
                    <p className="md:text-md text-para font-normal">
                        Delve into the most popular destinatins and create unforgettable memories.
                    </p>
                </div>
                <div className="container-wrapper grid grid-cols-5 gap-3 overflow-hidden">
                    <div className="flex xl:flex-col md:mt-14 gap-2 py-5 xl:col-auto col-span-5 xl:overflow-x-hidden overflow-x-scroll">
                        {data?.states?.map((title) => (
                            <div key={title._id}>
                                <div className=''>
                                    <button className="cursor-pointer capitalize shadow-md bg-gradient-to-r from-orange-500 to-red-500 xl:w-52 w-40 text-white md:text-[16px] text-para md:py-2 py-1.5 px-4 rounded-md">
                                        {title.name}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="relative xl:col-span-4 col-span-5 w-full overflow-auto">
                        <div className="flex gap-4 ">
                            <Card3 />
                        </div>
                        <div className=" bg-gradient-to-l from-white opacity-100 w-10 h-full right-0 absolute z-30 top-0"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default State