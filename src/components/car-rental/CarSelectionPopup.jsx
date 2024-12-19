import React, { useEffect } from 'react';

const CarSelectionPopup = () => {

    return (
        <div className="absolute flex items-center mt-2 justify-center z-[9999]">
            <div className="bg-white rounded-xl shadow-lg w-96 px-6 pb-6 pt-3 border">
                <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">
                    Car Selection
                </h2>
                <div className="space-y-4">
                    <div>
                        <label className="block text-gray-600 mb-0.5" htmlFor="vehicle">
                            Select any one vehicle
                        </label>
                        <select name="" id="vehicle"
                            className=" mb-2.5 text-para w-full px-3 py-2 h-10 border border-gray-300 rounded-md focus:ring-1 focus:ring-orange-500 focus:outline-none transition ease-in-out"

                        >
                            <option value="Sedan">Sedan</option>
                            <option value="Tyota">Tyota</option>
                            <option value="Fortuner">Fortuner</option>
                            <option value="Tempoo">Tempo (7S)</option>
                            <option value="Tempoo">Tempo (12s)</option>

                        </select>
                    </div>
                    <div>
                        <label className="block text-gray-600 mb-0.5" htmlFor="numPersons">
                            No. of Person
                        </label>
                        <input
                            type="text"
                            id="numPersons"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-orange-500 focus:outline-none transition ease-in-out"
                            placeholder="Enter number of persons"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-600 mb-0.5" htmlFor="pickupLocation">
                            Pickup Location
                        </label>
                        <input
                            type="text"
                            id="pickupLocation"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-orange-500 focus:outline-none transition ease-in-out"
                            placeholder="Enter pickup location"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-600 mb-0.5" htmlFor="pickupPoint">
                            Pickup Point
                        </label>
                        <input
                            type="text"
                            id="pickupPoint"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-orange-500 focus:outline-none transition ease-in-out"
                            placeholder="Enter pickup point"
                        />
                    </div>
                </div>
                <div className="mt-6 flex justify-end space-x-4">
                    <button className="px-4 py-2 bg-gray-400 text-gray-700 rounded-md">
                        Cancel
                    </button>
                    <button className="px-4 py-2 bg-navyblack text-white rounded-md">
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CarSelectionPopup;
