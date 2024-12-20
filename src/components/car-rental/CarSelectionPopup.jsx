import React, { useEffect, useState } from "react";
const fetchCars = async () => {
  try {
    const response = await fetch("/api/cars/carapi");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching cars:", error);
  }
};
const fetchAllLocation = async () => {
    const res = await fetch("/api/cars/carrentalLocalPrice");
    return await res.json();
  };
const fetchAllPickupLocation = async (id) => {
    const res = await fetch(`/api/cars/carrentalLocalPrice/pickupLocation?id=${id}`);
    return await res.json();
  };
const CarSelectionPopup = () => {
  const [carData, setCarData] = useState([]);
  const [localLocation,setLocalLocation]=useState([]);
  const [localPickupPointLocation,setLocalPickupPointLocation]=useState([]);


  useEffect(() => {
    fetchCars().then((res) => {
      setCarData(res?.data || []);
    });
    fetchAllLocation().then((res) => {
        setLocalLocation(res?.data || []);
        });
  }, []);

  const handleChangeLocation=(item)=>{
    if(!item){
        return
    }
    fetchAllPickupLocation(item).then(res=>setLocalPickupPointLocation(res?.data||[]))
  }

  const handleChangePickupLocation=(item)=>{

  }

  return (
    <div className="absolute flex items-center mt-2 justify-center z-[9999]">
      <div className="bg-white rounded-xl shadow-lg w-96 px-6 pb-6 pt-3 border">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">
          Car Selection
        </h2>
        <div className="space-y-4">
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
            <label className="block text-gray-600 mb-0.5" htmlFor="vehicle">
              Select any one vehicle
            </label>
            <select
              name=""
              id="vehicle"
              className=" mb-2.5 text-para w-full px-3 py-2 h-10 border border-gray-300 rounded-md focus:ring-1 focus:ring-orange-500 focus:outline-none transition ease-in-out"
            >
                <option value="">Select Car</option>
              {carData?.length > 0 &&
                carData?.map((item, i) => (
                  <option key={i} value="Sedan">
                    {item?.vehicleType}
                  </option>
                ))}
            </select>
          </div>
          
          <div>
            <label
              className="block text-gray-600 mb-0.5"
              htmlFor="pickupLocation"
            >
              Pickup Location
            </label>
            <select
              name=""
              id="vehicle"
              className=" mb-2.5 text-para w-full px-3 py-2 h-10 border border-gray-300 rounded-md focus:ring-1 focus:ring-orange-500 focus:outline-none transition ease-in-out"
              onChange={(e)=>handleChangeLocation(e.target.value)}
            >
                <option value="">Select Location</option>
              {localLocation?.length > 0 &&
                localLocation?.map((item, i) => (
                  <option key={i} value={item?._id}>
                    {item?.location}
                  </option>
                ))}
            </select>
          </div>
          <div>
            <label className="block text-gray-600 mb-0.5" htmlFor="pickupPoint">
              Pickup Point
            </label>
            <select
              name=""
              id="vehicle"
              className=" mb-2.5 text-para w-full px-3 py-2 h-10 border border-gray-300 rounded-md focus:ring-1 focus:ring-orange-500 focus:outline-none transition ease-in-out"
              onChange={(e)=>handleChangePickupLocation(e.target.value)}
            >
                <option value="">Select Pickup Point</option>
              {localPickupPointLocation?.length > 0 &&
                localPickupPointLocation?.map((item, i) => (
                  <option key={i} value={item?._id}>
                    {item?.name}
                  </option>
                ))}
            </select>
          </div>
        </div>
        <div className="mt-14 flex justify-end space-x-4">
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
