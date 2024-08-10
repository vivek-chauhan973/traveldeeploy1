import React from 'react';
import PriceHike from './PriceHike';

const Calender = ({ itinerary, setActiveTab, setCalenderDot}) => {
    
    
    const handleSubmitNext = (e) => {
        e.preventDefault();
        setActiveTab("Tab4");
        setCalenderDot(true);
      };

      console.log("itinerary show is here data ---",itinerary)

    return (
        <>
            <div className="bg-white rounded p-3">
                <div>
                    <p className="font-semibold text-base mb-2">Calender</p>
                </div>  
                <div className="border p-4 rounded mb-2 overflow-scroll">
                    <PriceHike itinerary={itinerary} />
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
