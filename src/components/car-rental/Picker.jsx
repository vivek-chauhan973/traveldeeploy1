import React, { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { GiByzantinTemple } from "react-icons/gi";
import { MdMosque } from "react-icons/md";
import { LiaMosqueSolid } from "react-icons/lia";
import DateTimePickerValue from "@/components/car-rental/DateTimePicker";
import dayjs from "dayjs";
import { FaArrowRightLong } from "react-icons/fa6";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import CarBookingPopup from "./CarBookingPopup";

const Picker = ({ carSelectionPopup, setCarSelectionPopup }) => {

  const [activeItem, setActiveItem] = useState(null);
  const [activeTab, setActiveTab] = useState("Tab1");
  const [isShowDateTimePicker, setShowDateTimePicker] = useState(false);
  const [localData, setLocalData] = useState({
    location: "",
    pickupDate: null,
    vehicle: "",
  });
  const [outstationData, setOutstationData] = useState({
    location: "",
    pickupDate: null,
    vehicle: "",
  });
  const [errors, setErrors] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const [selectedDate, setSelectedDate] = useState();
  const [selectedTime, setSelectedTime] = useState();
  const [showPopup, setShowPopup] = useState(false)
  console.log("selectedDate", selectedDate);
  console.log("selectedTime", selectedTime);


  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  const toggleItem = (item) => {
    setActiveItem(activeItem === item ? null : item);
  };

  const handleLocationSelect = (location) => {
    if (activeTab === "Tab1") {
      setLocalData({ ...localData, location });
    } else {
      setOutstationData({ ...outstationData, location });
    }
    setActiveItem(null); // Close the dropdown after selecting
  };

  const handleDateTimeSelect = (date) => {
    if (activeTab === "Tab1") {
      setLocalData({ ...localData, pickupDate: date });
    } else {
      setOutstationData({ ...outstationData, pickupDate: date });
    }
  };

  const handleVehicleSelect = (vehicle) => {
    if (activeTab === "Tab1") {
      setLocalData({ ...localData, vehicle });
    } else {
      setOutstationData({ ...outstationData, vehicle });
    }
    setActiveItem(null); // Close the dropdown after selecting
  };

  const validateForm = () => {
    let newErrors = {};
    const data = activeTab === "Tab1" ? localData : outstationData;

    if (!data.location) newErrors.location = "Location is required";
    if (!data.pickupDate) newErrors.pickupDate = "Pick Up Date is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSearch = () => {
    if (validateForm()) {
      if (activeTab === "Tab1") {
        // console.log('Local Data:', localData);
      } else {
        // console.log('Outstation Data:', outstationData);
      }
    }
  };

  const handleBookCar = () => {
    setShowPopup(true);
  }

  return (
    <div>
      <div className="text-xs w-28 h-5 bg-primary text-white ml-10 uppercase px-3 rounded-t-lg flex justify-center items-center">
        Rent a car
      </div>
      <div className=" w-[750px] lg:w-[840px] bg-white rounded-lg py-3 relative">
        <div className="flex items-center relative mb-2">
          <div
            onClick={() => setActiveTab("Tab1")}
            className={`p-2 ${activeTab === "Tab1"
              ? "bg-navyblack text-white"
              : "bg-primary/20 text-primary/80"
              } cursor-pointer mx-2 rounded-full`}
          >
            <p className="text-para px-3">Local</p>
          </div>
          <div
            onClick={() => setActiveTab("Tab2")}
            className={`p-2 ${activeTab === "Tab2"
              ? "bg-navyblack text-white"
              : "bg-primary/20 text-primary/80"
              } cursor-pointer mx-2 rounded-full`}
          >
            <p className="text-para px-2">OutStation</p>
          </div>
        </div>
        {/* Local */}
        <div className={`${activeTab === "Tab1" ? "block" : "hidden"}`}>
          <div className="flex gap-5 px-4">
            <div className="flex gap-3 ml-3">
              <div className="py-2">
                <p className="font-medium">Select Vehicle</p>
                <div
                  className=" border-2 flex gap-1 mt-1 rounded-lg"
                  onClick={() => setCarSelectionPopup(true)}
                >
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="px-2 py-3"
                  />
                  <input
                    type="text"
                    className="outline-none w-36 text-start py-2"
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="pt-2">
                <p className="font-medium">Select Date | Time</p>
                <div className=" border-2 flex gap-1 my-1 rounded-lg">
                  <input
                    type="date"
                    className=" outline-none mx-1  text-start py-1 border-r-2"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                  />
                  <input type="time"
                    className="mt-1 outline-none py-1 "
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                  />
                </div>
              </div>
              <div className="pt-2">
                <p className="font-medium">Choose Plan</p>
                <div className=" border-2 flex gap-1 my-1 rounded-lg">
                  <input
                    type="text"
                    className="px-1 w-28 lg:w-44 text-start py-2  border border-gray-300 rounded-md focus:ring-1 focus:ring-orange-500 focus:outline-none transition ease-in-out"
                  />
                </div>
              </div>
              <div className="mt-8">
                <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 my-1 rounded-md"
                  onClick={handleBookCar}
                >
                  Book Cars
                </button>
              </div>
              {showPopup && (
                <CarBookingPopup
                  setShowPopup={setShowPopup}
                // carPackage={carPackage}
                // carDepartureDetails={carDepartureDetails}
                />
              )}
            </div>
          </div>
        </div>
        {/* OutStation */}
        <div className={`${activeTab === "Tab2" ? "block" : "hidden"}`}>
          <div className="flex gap-4 px-4">
            <div className=" flex gap-3 ml-3">
              <div className="py-2">
                <p className="font-medium">Select Vehicle</p>
                <div
                  className="border-2 flex gap-1 my-1 rounded-lg"
                  onClick={() => setCarSelectionPopup(true)}
                >
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="px-2 py-3"
                  />
                  <input
                    type="text"
                    className=" outline-none w-36 text-start py-2"
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="py-2 ">
                <p className="font-medium">Pick-up date</p>
                <div className=" border-2 flex gap-1 my-1 rounded-lg">
                  <input
                    type="date"
                    className=" outline-none mx-1  text-start py-1 border-r-2"
                  />
                  <input type="time" className="mt-1 outline-none py-1 " />
                </div>
              </div>
              <div className="py-2 ">
                <p className="font-medium">Return date</p>
                <div className=" border-2 flex gap-1 my-1 rounded-lg">
                  <input
                    type="date"
                    className=" outline-none mx-1  text-start py-1 border-r-2"
                  />
                  <input type="time" className="mt-1 outline-none py-1 " />
                </div>
              </div>
              <div className="mt-8">
                <button onClick={handleBookCar}
                  className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 my-1 rounded-md">
                  Book Cars
                </button>
              </div>
              {showPopup && (
                <CarBookingPopup
                  setShowPopup={setShowPopup}
                // carPackage={carPackage}
                // carDepartureDetails={carDepartureDetails}
                />
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Picker;
