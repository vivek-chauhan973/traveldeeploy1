import React, { useState, useEffect } from "react";
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
import { useCarPopupContext } from "../admin/context/CarPopupCalculation";

const fetcLimitedTime = async () => {
  const res = await fetch("/api/cars/package/terms-condition/LimitedTime/get");
  const data = await res.json();
  return data;
};
const fetcFlexibleTime = async () => {
  const res = await fetch("/api/cars/package/terms-condition/FlexibleTime/get");
  const data = await res.json();
  return data;
};

const fetchBookingProcess = async () => {
  const response = await fetch("/api/cars/carStatus");
  return await response.json();
};

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
  const [showPopup, setShowPopup] = useState(false);
  const [localTime, setLocalTime] = useState();
  const [flexibleTime, setFlexibleTime] = useState();
  const [activeBookingProcess, setActiveBookingProcess] = useState();

  const { setUserDate, setUserTime, setUserPlan } = useCarPopupContext();

  useEffect(() => {
    fetcLimitedTime().then((res) => {
      // console.log("response of limited time ", res);
      setLocalTime(res?.CancellationGroupData);
    });
    fetcFlexibleTime().then((res) => {
      // console.log("response of flexibleTime time ", res);
      setFlexibleTime(res?.CancellationGroupData);
    });
    fetchBookingProcess().then((res) => {
      console.log("Car booking process acticvation ==> ", res?.data?.isActive);
      setActiveBookingProcess(res?.data?.isActive);
    });
  }, []);

  // console.log("localTime", localTime);
  // console.log("flexibleTime", flexibleTime);
  // console.log("selectedDate", selectedDate);
  // console.log("selectedTime", selectedTime);

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
    if (activeBookingProcess === false) {
      setShowPopup(false);
      alert(`Something went wrong Try Next time`)
    } else {
      setShowPopup(true);
    }
  };
  const planKM = [
    { value: "80KM-8HRS", label: "80KM - 8HRS" },
    { value: "100KM-10HRS", label: "100KM - 10HRS" },
  ];

  return (
    <div>
      <div className="text-xs w-28 h-5 bg-primary text-white ml-10 uppercase px-3 rounded-t-lg flex justify-center items-center">
        Rent a car
      </div>
      <div className=" w-[750px] lg:w-[840px] bg-white rounded-lg py-3 relative">
        <div className="flex items-center relative mb-2">
          <div
            onClick={() => setActiveTab("Tab1")}
            className={`p-2 ${
              activeTab === "Tab1"
                ? "bg-navyblack text-white"
                : "bg-primary/20 text-primary/80"
            } cursor-pointer mx-2 rounded-full`}
          >
            <p className="text-para px-3">Local</p>
          </div>
          <div
            onClick={() => setActiveTab("Tab2")}
            className={`p-2 ${
              activeTab === "Tab2"
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
                <div className="border-2 flex gap-0 my-1 rounded-lg">
                  <input
                    type="date"
                    className="w-[60%] outline-none text-start py-1 border-r-2 px-1"
                    onChange={(e) => setUserDate(e.target.value)}
                  />
                  <select
                    className="text-para w-[40%] px-3 py-2 h-10 outline-none border-none"
                    onChange={(e) => setUserTime(e.target.value)}
                  >
                    <option value="">Select Time</option>
                    {localTime?.length > 0 &&
                      localTime?.map((item, i) => (
                        <option key={i} value={item?.groupName}>
                          {item?.groupName}
                        </option>
                      ))}
                  </select>
                </div>
              </div>
              <div className="pt-2">
                <p className="font-medium">
                  Choose Plan<span className="text-sm">(KM)</span>
                </p>
                <div className=" border-1 flex gap-1 my-1 rounded-lg">
                  <select
                    className=" text-para w-full px-3 py-2 h-10 border border-gray-300 rounded-md focus:ring-1 focus:ring-orange-500 focus:outline-none transition ease-in-out"
                    onChange={(e) => setUserPlan(e.target.value)}
                  >
                    <option value="" disabled>
                      Choose Your Plan
                    </option>
                    <option value="BY KMs" className="accent-navyblack">
                      BY KMs
                    </option>
                    {planKM?.length > 0 &&
                      planKM.map((item, i) => (
                        <option
                          key={`80-${i}`}
                          value={item.value}
                          className="accent-navyblack"
                        >
                          {item.label}
                        </option>
                      ))}
                  </select>
                </div>
              </div>
              <div className="mt-8">
                <button
                  className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 my-1 rounded-md"
                  onClick={handleBookCar}
                >
                  Book Cars
                </button>
              </div>
              {showPopup && <CarBookingPopup setShowPopup={setShowPopup} />}
            </div>
          </div>
        </div>
        {/* OutStation */}
        <div className={`${activeTab === "Tab2" ? "block" : "hidden"}`}>
          <div className="flex gap-3 px-4">
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
            <div className="flex gap-3">
              <div className="py-2 ">
                <p className="font-medium">Pick-up date</p>
                <div className=" border-2 flex gap-1 my-1 rounded-lg">
                  <input
                    type="date"
                    className=" outline-none text-start py-1 px-1 border-r-2"
                  />
                  <select
                    className="text-para w-20 px-1 py-2 h-10 outline-none border-none"
                    // onChange={(e) => setUserTime(e.target.value)}
                  >
                    <option value="">Select Time</option>
                    {flexibleTime?.length > 0 &&
                      flexibleTime?.map((item, i) => (
                        <option key={i} value={item?.groupName}>
                          {item?.groupName}
                        </option>
                      ))}
                  </select>
                </div>
              </div>
              <div className="py-2 ">
                <p className="font-medium">Return date</p>
                <div className=" border-2 flex gap-1 my-1 rounded-lg">
                  <input
                    type="date"
                    className=" outline-none text-start py-1 px-1 border-r-2"
                  />
                  <select
                    className="text-para w-20 px-1 py-2 h-10 outline-none border-none"
                    // onChange={(e) => setUserTime(e.target.value)}
                  >
                    <option value="">Select Time</option>
                    {flexibleTime?.length > 0 &&
                      flexibleTime?.map((item, i) => (
                        <option key={i} value={item?.groupName}>
                          {item?.groupName}
                        </option>
                      ))}
                  </select>
                </div>
              </div>
              <div className="mt-8">
                <button
                  onClick={handleBookCar}
                  className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 my-1 rounded-md"
                >
                  Book Cars
                </button>
              </div>
              {showPopup && <CarBookingPopup setShowPopup={setShowPopup} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Picker;
