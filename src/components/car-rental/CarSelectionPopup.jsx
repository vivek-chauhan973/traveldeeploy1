import React, { useEffect } from 'react';

const CarSelectionPopup = () => {
    

    return (
        <div className="absolute flex items-center mt-2 justify-center z-[9999]">
            <div className="bg-white rounded-xl shadow-lg w-96 p-6  ">
                <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">
                    Car Selection
                </h2>
                <div className="space-y-4">
                    <div>
                        <label className="block text-gray-600 mb-2" htmlFor="numPersons">
                            No. of Person
                        </label>
                        <input
                            type="text"
                            id="numPersons"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition ease-in-out"
                            placeholder="Enter number of persons"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-600 mb-2" htmlFor="pickupLocation">
                            Pickup Location
                        </label>
                        <input
                            type="text"
                            id="pickupLocation"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition ease-in-out"
                            placeholder="Enter pickup location"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-600 mb-2" htmlFor="pickupPoint">
                            Pickup Point
                        </label>
                        <input
                            type="text"
                            id="pickupPoint"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition ease-in-out"
                            placeholder="Enter pickup point"
                        />
                    </div>
                </div>
                <div className="mt-6 flex justify-end space-x-4">
                    <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition ease-in-out">
                        Cancel
                    </button>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition ease-in-out">
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CarSelectionPopup;
