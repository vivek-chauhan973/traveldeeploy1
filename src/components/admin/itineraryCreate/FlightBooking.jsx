import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import DeletePop from "../iternaryPopup/DeletePop";

export default function FlightBookingForm({
  itinerary,
  setActiveTab,
  setFlightDot,
}) {
  const [deletePopup, setDeletePopu] = useState(false);
  const [flightBooking, setFlightBooking] = useState({
    start: { to: "", time: "" },
    end: { to: "", time: "" },
  });
  const [flightBookingList, setFlightBookingList] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [validationErrors, setValidationErrors] = useState({
    start: { to: "", time: "" },
    end: { to: "", time: "" },
  });
  const [flightNo, setFlightNo] = useState("");
  const [selectedImg, setSelectedImg] = useState("");

  const handleFlightBooking = (e) => {
    const { name, value } = e.target;
    const [location, property] = name.split(".");
    setFlightBooking((prev) => ({
      ...prev,
      [location]: { ...prev[location], [property]: value },
    }));
  };

  const validateForm = () => {
    const { start, end } = flightBooking;
    let valid = true;
    let errors = {
      start: { to: "", time: "" },
      end: { to: "", time: "" },
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
    });
    setValidationErrors({
      start: { to: "", time: "" },
      end: { to: "", time: "" },
    });
  };

  const editFlightBooking = (index) => {
    setEditingIndex(index);
    setFlightBooking(flightBookingList[index]);
  };

  const removeFlightBooking = (index) => {
    const updatedList = flightBookingList.filter((_, i) => i !== index);
    setFlightBookingList(updatedList);
  };

  const saveFlightBooking = async () => {
    try {
      const response = await fetch(
        `/api/package/flight-create/${itinerary?._id}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            flights: flightBookingList,
            flightNo,
            selectedImg,
          }),
        }
      );
      if (response.ok) {
        setActiveTab("Tab7");
        setFlightDot(true);
        console.log("Flights saved successfully");
      } else {
        console.error("Failed to save flights");
      }
    } catch (error) {
      console.error("Error during form submission:", error);
    }
  };

  const handleSubmitNext = () => {
    if (flightBookingList.length === 0) {
      alert("At least one booking must be made");
    } else {
      saveFlightBooking();
      alert(`Flights Added`)
      // Implement your logic to switch to the next tab
      setActiveTab("Tab7");   
    }
  };

  useEffect(() => {
    const fetchedData = async (id) => {
      const response = await fetch(`/api/package/flight-create/${id}`);
      const fData = await response.json();
      if (response.ok) {
        setFlightDot("Tab8");
        setFlightDot(true);
      }
      return fData;
    };

    fetchedData(itinerary?._id).then((res) => {
      setFlightBookingList(res?.booking?.flights || []);
      setFlightNo(res?.booking?.flightNo || "");
      setSelectedImg(res?.booking?.selectedImage || "");
    });
  }, [itinerary]);

  // for toggle
  const [showFlightForm, setShowFlightForm] = useState(true);

  return (
    <>
      <div className="flex items-center gap-1">
        <button
          className={`px-3 py-1.5 rounded-full focus:outline-none ${showFlightForm ? "bg-red-500 text-white" : "bg-green-500 text-white"
            }`}
          onClick={() => setShowFlightForm(!showFlightForm)} // Toggle visibility and color
        >
          <span>{showFlightForm ? " Flight Hide" : "Flight Show"}</span>
        </button>
      </div>

      {showFlightForm && ( // Conditionally render the form
        <div className="bg-white rounded p-3 mt-2">
          <div>
            <p className="font-semibold text-base">Flight</p>
          </div>
          <div className="p-5 rounded border">
            <form>
              <div className="md:flex justify-between">
                <div className="block md:flex gap-5 items-center">
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-col">
                      <label
                        htmlFor="start.to"
                        className="text-para font-semibold"
                      >
                        To :
                      </label>
                      <input
                        name="start.to"
                        value={flightBooking.start.to}
                        onChange={handleFlightBooking}
                        className="h-8 px-2 rounded border text-para"
                        type="text"
                      />
                      {validationErrors.start.to && (
                        <span className="text-red-500 text-sm">
                          {validationErrors.start.to}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-col">
                      <label
                        htmlFor="start.time"
                        className="text-para font-semibold"
                      >
                        Start Date/Time :
                      </label>
                      <input
                        name="start.time"
                        value={flightBooking.start.time}
                        onChange={handleFlightBooking}
                        className="h-8 px-2 rounded border text-para"
                        type="text"
                      />
                      {validationErrors.start.time && (
                        <span className="text-red-500 text-sm">
                          {validationErrors.start.time}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="mt-3 flex flex-col gap-3 md:border-l md:pl-3">
                    <div className="flex flex-col">
                      <label
                        htmlFor="end.to"
                        className="text-para font-semibold"
                      >
                        From :
                      </label>
                      <input
                        name="end.to"
                        value={flightBooking.end.to}
                        onChange={handleFlightBooking}
                        className="h-8 px-2 rounded border text-para"
                        type="text"
                      />
                      {validationErrors.end.to && (
                        <span className="text-red-500 text-sm">
                          {validationErrors.end.to}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-col">
                      <label
                        htmlFor="end.time"
                        className="text-para font-semibold"
                      >
                        End Date/Time :
                      </label>
                      <input
                        name="end.time"
                        value={flightBooking.end.time}
                        onChange={handleFlightBooking}
                        className="h-8 px-2 rounded border text-para"
                        type="text"
                      />
                      {validationErrors.end.time && (
                        <span className="text-red-500 text-sm">
                          {validationErrors.end.time}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-3 flex gap-3 flex-col">
                <div className="md:flex items-center gap-4">
                  <div className="font-medium">Flight No :</div>
                  <div>
                    <input
                      type="text"
                      className="h-8 px-2 rounded border text-para md:ml-7 md:w-44 w-full pl-2"
                      onChange={(e) => setFlightNo(e.target.value)}
                      value={flightNo}
                    />
                  </div>
                </div>
                <div className="md:flex items-center gap-6">
                  <div className="font-medium">Select Image :</div>
                  <div className="">
                    <select
                      name=""
                      id=""
                      className="md:w-44 w-full outline-none border text-sm"
                      value={selectedImg}
                      onChange={(e) => setSelectedImg(e.target.value)}
                    >
                      <option className="py-1 text-sm">Select One</option>
                      <option className="py-1" value="A">
                        A
                      </option>
                      <option className="py-1" value="B">
                        B
                      </option>
                      <option className="py-1" value="C">
                        C
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="md:flex items-center gap-3">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    addFlightBooking();
                  }}
                  className="mt-4 md:w-auto w-full rounded px-4 py-2 bg-navyblack text-white"
                >
                  {editingIndex !== null ? "Update Booking" : "Add Booking"}
                </button>
              </div>
            </form>
          </div>
          <div>
            <ul className="divide-y mt-5 divide-gray-200">
              {flightBookingList.map((booking, index) => (
                <li key={index} className="p-3 flex justify-between">
                  <div>
                    <p className="md:text-para text-sm">
                      To : <span className="font-semibold">{booking.start.to}</span>
                    </p>
                    <p className="md:text-para text-sm">
                      From : <span className="font-semibold">{booking.end.to}</span>
                    </p>
                  </div>
                  <div className="flex justify-center items-center gap-3">
                    <FontAwesomeIcon
                      icon={faEdit}
                      onClick={() => editFlightBooking(index)}
                      className="md:font1 hover:text-primary cursor-pointer"
                    />
                    <FontAwesomeIcon
                      icon={faTrash}
                      onClick={() => setDeletePopu(true)}
                      className=" md:font1 hover:text-primary cursor-pointer"
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <button className="bg-black text-white w-full rounded py-2"
            onClick={handleSubmitNext}
          >
            Save
          </button>
        </div>
      )}

      {deletePopup && (
        <DeletePop
          onConfirm={() => {
            removeFlightBooking(editingIndex);
            setDeletePopu(false);
          }}
          onCancel={() => setDeletePopu(false)}
        />
      )}
    </>
  );
}
