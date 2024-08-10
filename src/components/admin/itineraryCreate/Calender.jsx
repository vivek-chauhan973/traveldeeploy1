import React from 'react';

const Calender = ({ itinerary, setActiveTab }) => {
    
    
    const handleSubmitNext = (e) => {
        e.preventDefault();
        setActiveTab("Tab4");
      };

    return (
        <>
            <div className="bg-white rounded p-3">
                <div>
                    <p className="font-semibold text-base mb-2">Calender</p>
                </div>  
                <div className="border p-4 rounded mb-2 overflow-scroll">
                    <div className=" sm:flex items-center md:mb-4 mb-2">
                        <label htmlFor="ratingValue" className=" font-semibold w-28 text-para">Rating Value :</label>
                        <input type="text" id="ratingValue" className='  border w-full  rounded-md h-8 px-2 focus:border-primary outline-none text-para'
                            placeholder="Enter Rating Value " />
                    </div>
                    <div className=" sm:flex items-center mb-2">
                        <label htmlFor="ratingCount" className=" font-semibold w-28 text-para">Rating Count :</label>
                        <input type="text" id="ratingCount" className='  border w-full  rounded-md h-8 px-2 focus:border-primary outline-none text-para'
                            placeholder="Enter Rating Count " />
                    </div>
                    <div className=" sm:flex items-center mb-2">
                        <label htmlFor="price" className=" font-semibold w-28 text-para">Price Valid Until :</label>
                        <input type="text" id="price" className='  border w-full  rounded-md h-8 px-2 focus:border-primary outline-none text-para'
                               placeholder="Enter Price "/>
                    </div>
                    <div className=" sm:flex items-center md:mb-4 mb-2">
                        <label htmlFor="startDate" className=" font-semibold w-28 text-para">Start Date :</label>
                        <input type="date" id="startDate" className='  border w-full  rounded-md h-8 px-2 focus:border-primary outline-none text-para'
                               placeholder="Enter Start Date"/>
                    </div>
                    <div className=" sm:flex items-center md:mb-4 mb-2">
                        <label htmlFor="endDate" className=" font-semibold w-28 text-para">End Date :</label>
                        <input type="Date" id="endDate" className='  border w-full  rounded-md h-8 px-2 focus:border-primary outline-none text-para'
                               placeholder="Enter End Date "/>
                    </div>
                    <div className=" sm:flex items-center">
                        <label htmlFor="svg" className=" font-semibold w-28 text-para">SVG Icon :</label>
                        <select id="svg" className='  border w-full  rounded-md h-8 px-2 focus:border-primary outline-none text-para'>
                            <option vlaue="">Select One</option>
                            <option vlaue="A">A</option>
                            <option vlaue="B">B</option>
                            <option vlaue="C">C</option>
                            <option vlaue="D">D</option>
                            <option vlaue="E">E</option>
                        </select>
                    </div>
                </div>
                <button onClick={handleSubmitNext} className="w-full rounded py-2 bg-black text-white">
                     Save
                </button>      
            </div>
        </>
    )
}

export default Calender;
