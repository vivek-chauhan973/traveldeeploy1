import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
export default function FlightBookingForm({ itinerary, setActiveTab, setFlightDot }) {
  const [flightBooking, setFlightBooking] = useState({
    start: { to: "", time: "" },
    end: { to: "", time: "" },
    flightNo: "",
    selectedImg: "",
  });
  const [flightBookingList, setFlightBookingList] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [validationErrors, setValidationErrors] = useState({
    start: { to: "", time: "" },
    end: { to: "", time: "" },
    flightNo: "",
    selectedImg: "",
  });
  const [showFlightForm, setShowFlightForm] = useState(true);

  const handleFlightBooking = (e) => {
    const { name, value } = e.target;
    if (name.includes(".")) {
      const [location, property] = name.split(".");
      setFlightBooking((prev) => ({
        ...prev,
        [location]: { ...prev[location], [property]: value },
      }));
    } else {
      setFlightBooking((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const validateForm = () => {
    const { start, end, flightNo, selectedImg } = flightBooking;
    let valid = true;
    let errors = {
      start: { to: "", time: "" },
      end: { to: "", time: "" },
      flightNo: "",
      selectedImg: "",
    };

    if (!start.to.trim()) {
      errors.start.to = "This field is required";
      valid = false;
    }
    if (!start.time.trim()) {
      errors.start.time = "This field is required";
      valid = false;
    }
    if (!end.to.trim()) {
      errors.end.to = "This field is required";
      valid = false;
    }
    if (!end.time.trim()) {
      errors.end.time = "This field is required";
      valid = false;
    }
    if (!/^[a-zA-Z0-9]{7}$/.test(flightNo)) {
      errors.flightNo = "Flight number must be exactly 7 alphanumeric characters";
      valid = false;
    }
    if (!selectedImg) {
      errors.selectedImg = "Please select an image";
      valid = false;
    }

    setValidationErrors(errors);
    return valid;
  };

  const addFlightBooking = () => {
    if (!validateForm()) return;

    if (editingIndex !== null) {
      const updatedList = [...flightBookingList];
      updatedList[editingIndex] = flightBooking;
      setFlightBookingList(updatedList);
      setEditingIndex(null);
    } else {
      setFlightBookingList((prev) => [...prev, flightBooking]);
    }

    setFlightBooking({
      start: { to: "", time: "" },
      end: { to: "", time: "" },
      flightNo: "",
      selectedImg: "",
    });
    setValidationErrors({
      start: { to: "", time: "" },
      end: { to: "", time: "" },
      flightNo: "",
      selectedImg: "",
    });
  };

  const editFlightBooking = (index) => {
    setEditingIndex(index);
    setFlightBooking(flightBookingList[index]);
  };

  const handleSubmitNext = async () => {
    if (flightBookingList.length === 0) {
      alert("At least one booking must be made");
    } 
    try {
      const response = await fetch(`/api/package/flight/${itinerary?._id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          flights: flightBookingList,
        }),
      });
      const responseData=await response.json();
      if (responseData?.status) {
        setFlightDot(true);
        setActiveTab("Tab7");
        alert(responseData?.message)
      } else {
        alert(responseData?.message)
        console.error("Failed to save flights");
      }
    } catch (error) {
      console.error("Error during form submission:", error);
    }
  };

  // const handleSubmitNext = () => {
  //   if (flightBookingList.length === 0) {
  //     alert("At least one booking must be made");
  //   } else {
  //     saveFlightBooking();
  //     setActiveTab("Tab7");
  //     alert("Flights Added");
  //   }
  // };

  useEffect(() => {
    const fetchedData = async (id) => {
      const response = await fetch(`/api/package/flight/${id}`,{method:"GET"});
      const fData = await response.json();
      if (response.ok) {
        setFlightDot(true);
      }
      return fData;
    };
if(itinerary){
  fetchedData(itinerary?._id).then((res) => {
    console.log("booking Flight List----> ",res)
    setFlightBookingList(res?.booking?.flights || []);
  });
}
   
  }, [itinerary]);

  return (
    <>
      <div className="flex items-center gap-1">
        <button
          className={`px-3 py-1.5 rounded-full focus:outline-none ${showFlightForm ? "bg-red-500 text-white" : "bg-green-500 text-white"}`}
          onClick={() => setShowFlightForm(!showFlightForm)}
        >
          <span>{showFlightForm ? "Flight Hide" : "Flight Show"}</span>
        </button>
      </div>

      {showFlightForm && (
        <div className="bg-white rounded p-3 mt-2">
          <div className="p-5 rounded border">
            <form>
              <div className="md:flex justify-between">
                <div className="block md:flex gap-5 items-center">
                  <div className="flex flex-col gap-3">
                    <label className="text-para font-semibold">From:</label>
                    <input
                      name="start.to"
                      value={flightBooking.start.to}
                      onChange={handleFlightBooking}
                      className="h-8 px-2 rounded border"
                      type="text"
                    />
                    {validationErrors.start.to && <span className="text-red-500 text-sm">{validationErrors.start.to}</span>}
                    <label className="text-para font-semibold">Start Time:</label>
                    <input
                      name="start.time"
                      value={flightBooking.start.time}
                      onChange={handleFlightBooking}
                      className="h-8 px-2 rounded border"
                      type="time"
                    />
                    {validationErrors.start.time && <span className="text-red-500 text-sm">{validationErrors.start.time}</span>}
                  </div>
                  <div className="mt-3 flex flex-col gap-3 md:border-l md:pl-3">
                    <label className="text-para font-semibold">To:</label>
                    <input
                      name="end.to"
                      value={flightBooking.end.to}
                      onChange={handleFlightBooking}
                      className="h-8 px-2 rounded border"
                      type="text"
                    />
                    {validationErrors.end.to && <span className="text-red-500 text-sm">{validationErrors.end.to}</span>}
                    <label className="text-para font-semibold">End Time:</label>
                    <input
                      name="end.time"
                      value={flightBooking.end.time}
                      onChange={handleFlightBooking}
                      className="h-8 px-2 rounded border"
                      type="time"
                    />
                    {validationErrors.end.time && <span className="text-red-500 text-sm">{validationErrors.end.time}</span>}
                  </div>
                </div>
              </div>

              <div className="mt-4 flex flex-col gap-3">
                <label className="text-para font-semibold">Flight No:</label>
                <input
                  type="text"
                  name="flightNo"
                  className="h-8 px-2 rounded border"
                  onChange={handleFlightBooking}
                  value={flightBooking.flightNo}
                />
                {validationErrors.flightNo && <span className="text-red-500 text-sm">{validationErrors.flightNo}</span>}

                <label className="text-para font-semibold">Select Image:</label>
                <select
                  name="selectedImg"
                  className="h-8 px-2 rounded border"
                  value={flightBooking.selectedImg}
                  onChange={handleFlightBooking}
                >
                  <option value="">Select One</option>
                  <option value="/assets/flight/Air_India.png">Air India</option>
                  <option value="/assets/flight/Akasa_Air.png">Akasa Air</option>
                  <option value="/assets/flight/Indigo.png">Indigo</option>
                  <option value="/assets/flight/SpiceJet.png">SpiceJet</option>
                </select>
                {validationErrors.selectedImg && <span className="text-red-500 text-sm">{validationErrors.selectedImg}</span>}
              </div>

              <button
                onClick={(e) => {
                  e.preventDefault();
                  addFlightBooking();
                }}
                className="mt-4 w-full rounded px-4 py-2 bg-navyblack text-white"
              >
                {editingIndex !== null ? "Update Booking" : "Add Booking"}
              </button>
            </form>
          </div>

          <ul className="divide-y mt-5 divide-gray-200">
            {flightBookingList.map((booking, index) => (
              <li key={index} className="p-3 flex justify-between">
                <div>
                  <p className="text-sm">From: <strong>{booking.start.to}</strong></p>
                  <p className="text-sm">To: <strong>{booking.end.to}</strong></p>
                  <p className="text-sm">Flight No: <strong>{booking.flightNo}</strong></p>
                  <p className="text-sm">Image: <img src={booking.selectedImg} alt="flight" className="h-5 inline ml-1" /></p>
                </div>
                <div className="flex items-center gap-3">
                  <FontAwesomeIcon icon={faEdit} onClick={() => editFlightBooking(index)} className="cursor-pointer" />
                  <FontAwesomeIcon icon={faTrash} onClick={() => { setEditingIndex(index); }} className="cursor-pointer" />
                </div>
              </li>
            ))}
          </ul>

          <button className="mt-4 bg-black text-white w-full rounded py-2" onClick={handleSubmitNext}>
            Save
          </button>
        </div>
      )}
    </>
  );
}
