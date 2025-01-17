import React, { useEffect, useState } from "react";
import { useCarPopupContext } from "../admin/context/CarPopupCalculation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

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
const CarSelectionPopup = ({ setCarSelectionPopup }) => {
  const [carData, setCarData] = useState([]);
  const [localLocation, setLocalLocation] = useState([]);
  const [localPickupPointLocation, setLocalPickupPointLocation] = useState([]);
  const [persons, setPersons] = useState(0);
  const [personCarData, setPersonCarData] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);
  const [selectedlocation, setSelectedlocation] = useState(null);
  const [selectedPickupPoint, setSelectedPickupPoint] = useState(null);

  const { getDetail } = useCarPopupContext();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  
  useEffect(() => {
    fetchCars().then((res) => {
      setCarData(res?.data || []);
    });

  }, []);
  useEffect(() => {
    if (selectedCar) {
      fetchAllLocation().then((res) => {
        setLocalLocation(res?.data || []);
      });
    }
  }, [selectedCar])

  const handleChangeLocation = (item) => {
    if (!item) {
      return
    }
    fetchAllPickupLocation(item).then(res => setLocalPickupPointLocation(res?.data || []))
    setSelectedlocation(item)
  }

  const handleChangePickupLocation = (item) => {
    if (!item) {
      return
    }
    setSelectedPickupPoint(item)

  }
  useEffect(() => {
    const data = carData?.filter(item => item?.seatingCapacity >= persons);
    setPersonCarData(data || [])
  }, [persons])

  const handleSubmit = () => {
    const formData = {
      persons,
      selectedCar: personCarData.filter(item => item._id === selectedCar),
      selectedlocation: localLocation.filter(item => item._id === selectedlocation),
      selectedPickupPoint: localPickupPointLocation.filter(item => item._id === selectedPickupPoint),
    };
    getDetail(formData)
    alert('User Data Submitted');
    setCarSelectionPopup(false);
  }
  const handleCancel = () => {
    setCarSelectionPopup(false)
  }
 
  return (
    <div className="fixed inset-0 flex items-center h-[100vh] justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div 
      className="bg-white rounded-xl shadow-lg z-50 md:w-80 w-72 h-auto max-h-[500px] md:py-5 py-2 px-5"
      >
        <div className="flex justify-between md:mb-2.5 mb-1">
          <h2 className="md:text-xl text-lg font-semibold text-center text-gray-700">
            Car Selection
          </h2>
          <FontAwesomeIcon
            icon={faCircleXmark}
            className="md:text-lg text-md mt-1 cursor-pointer"
            onClick={handleCancel}
          />
        </div>
        <div>
          <div>
            <label className="block text-gray-600 mb-0.5 text-para" htmlFor="numPersons">
              No. of Person
            </label>
            <input
              type="number"
              id="numPersons"
              className="md:mb-2.5 mb-1.5 w-full px-3 md:py-2 py-1.5 md:h-10 h-9 border border-gray-300 rounded-md focus:ring-1 focus:ring-orange-500 focus:outline-none transition ease-in-out"
              placeholder="Enter number of persons"
              value={persons}
              onChange={(e) => setPersons(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-0.5 text-para" htmlFor="vehicle">
              Select any one vehicle
            </label>
            <select
              name=""
              id="vehicle"
              className="md:mb-2.5 mb-1.5 text-para w-full px-3 md:py-2 py-1.5 md:h-10 h-9 border border-gray-300 rounded-md focus:ring-1 focus:ring-orange-500 focus:outline-none transition ease-in-out"
              onChange={(e) => setSelectedCar(e.target.value)}
            >
              <option value="">Select Car</option>
              {personCarData?.length > 0 &&
                personCarData?.map((item, i) => (
                  <option key={i} value={item?._id}>
                    {item?.vehicleType}
                  </option>
                ))}
            </select>
          </div>

          <div>
            <label
              className="block text-gray-600 mb-0.5 text-para"
              htmlFor="pickupLocation"
            >
              Pickup Location
            </label>
            <select
              name=""
              id="vehicle"
              className="md:mb-2.5 mb-1.5 text-para w-full px-3 md:py-2 py-1.5 md:h-10 h-9 border border-gray-300 rounded-md focus:ring-1 focus:ring-orange-500 focus:outline-none transition ease-in-out"
              onChange={(e) => handleChangeLocation(e.target.value)}
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
            <label className="block text-gray-600 mb-0.5 text-para" htmlFor="pickupPoint">
              Pickup Point
            </label>
            <select
              name=""
              id="vehicle"
              className="text-para w-full px-3 md:py-2 py-1.5 md:h-10 h-9 border border-gray-300 rounded-md focus:ring-1 focus:ring-orange-500 focus:outline-none transition ease-in-out"
              onChange={(e) => handleChangePickupLocation(e.target.value)}
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
        <div className=" mt-14 md:mb-0 mb-1.5 flex justify-end space-x-4">
          <button className="md:px-4 px-3 md:py-2 py-1.5 md:text-para text-sm bg-gray-400 text-gray-700 rounded-md"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button className="md:px-4 px-3 md:py-2 py-1.5 md:text-para text-sm bg-navyblack text-white rounded-md"
            onClick={handleSubmit} disabled={!selectedPickupPoint}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarSelectionPopup;