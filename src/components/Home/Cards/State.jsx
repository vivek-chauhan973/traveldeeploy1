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
                <div className="container-wrapper text-xl font-medium md:text-[25px] text-center">
                    <p>Lorem, ipsum dolor.</p>
                    <p className="md:text-md text-para font-normal">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo cupiditate nobis minus?</p>
                </div>
                <div className="container-wrapper grid grid-cols-5 gap-3 overflow-hidden">
                    <div className="flex md:flex-col md:mt-14 gap-2 py-5">
                        {data?.states?.map((title) => (
                            <div key={title._id}>
                                <div className='overflow-x-hidden'>
                                    <button className="cursor-pointer capitalize shadow-md bg-gradient-to-r from-orange-500 to-red-500 w-40 text-white md:text-[16px] md:py-2 py-1 px-[30px] rounded-md">
                                        {title.name}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="relative col-span-4 w-full overflow-auto">
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