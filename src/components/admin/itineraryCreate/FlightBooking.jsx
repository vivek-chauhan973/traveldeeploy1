import React, { useState, useEffect } from "react";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import DeletePop from "../iternaryPopup/DeletePop";

export default function FlightBookingForm({ itinerary, setActiveTab }) {
  const [deletePopup, setDeletePopu] = useState(false);
  const [flightBooking, setFlightBooking] = useState({
    start: { to: "", time: "" },
    end: { to: "", time: "" }
  });
  const [flightBookingList, setFlightBookingList] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [validationErrors, setValidationErrors] = useState({
    start: { to: "", time: "" },
    end: { to: "", time: "" }
  });

  const handleFlightBooking = (e) => {
    const { name, value } = e.target;
    const [location, property] = name.split(".");
    setFlightBooking((prev) => ({
      ...prev,
      [location]: { ...prev[location], [property]: value }
    }));
  };

  const validateForm = () => {
    const { start, end } = flightBooking;
    let valid = true;
    let errors = {
      start: { to: "", time: "" },
      end: { to: "", time: "" }
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
    setFlightBooking({ start: { to: "", time: "" }, end: { to: "", time: "" } });
    setValidationErrors({
      start: { to: "", time: "" },
      end: { to: "", time: "" }
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
      const response = await fetch(`/api/package/flight-create/${itinerary?._id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ flights: flightBookingList })
      });
      if (response.ok) {
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
      // Implement your logic to switch to the next tab
      // setActiveTab("Tab3");
    }
  };

  useEffect(() => {
    const fetchedData = async (id) => {
      const response = await fetch(`/api/package/flight-create/${id}`);
      const fData = await response.json();
      return fData;
    };

    // Fetch initial flight bookings if needed
    fetchedData(itinerary?._id).then((res) =>
      setFlightBookingList(res?.booking?.flights || [])
    );
  }, [itinerary]);

  return (
    <>
      <div className="flex items-center gap-1">
        <button className={`px-4 py-2 rounded-full focus:outline-none`}>
          <span>Flight</span>
        </button>
      </div>

      <div className="bg-white rounded p-3">
        <div>
          <p className="font-semibold text-base">Flight</p>
        </div>
        <div className="p-5 rounded border">
          <form onSubmit={(e) => { e.preventDefault(); addFlightBooking(); }}>
            <div className="md:flex justify-between">
              <div className="block md:flex gap-5 items-center">
                <div className="flex md:flex-col gap-3">
                  <div className="flex flex-col">
                    <label htmlFor="start.to" className="text-para font-semibold">
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
                      <span className="text-red-500 text-sm">{validationErrors.start.to}</span>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="start.time" className="text-para font-semibold">
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
                      <span className="text-red-500 text-sm">{validationErrors.start.time}</span>
                    )}
                  </div>
                </div>
                <div className="flex md:flex-col gap-3 md:border-l md:pl-3">
                  <div className="flex flex-col">
                    <label htmlFor="end.to" className="text-para font-semibold">
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
                      <span className="text-red-500 text-sm">{validationErrors.end.to}</span>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="end.time" className="text-para font-semibold">
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
                      <span className="text-red-500 text-sm">{validationErrors.end.time}</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="my-3">
              <button type="submit" className="bg-navyblack text-white rounded px-10 py-1">
                {editingIndex !== null ? 'Update Booking' : 'Add Booking'}
              </button>
            </div>
          </form>
          <hr className="my-10 mb-5" />
          <div className="text-[14px]">
            <ul>
              {flightBookingList.map((item, index) => (
                <li key={index}>
                  <div className='flex justify-between even:bg-slate-50 px-5'>
                    <div className="flex justify-between gap-5 items-center">
                      <p className='capitalize flex gap-2 leading-8'>
                        <span>{index + 1}.</span>
                        <span>To: {item.start.to} {item.start.time}</span>
                        <span> | </span>
                        <span>From: {item.end.to} {item.end.time}</span>
                      </p>
                    </div>
                    <div className='flex gap-2'>
                      <FaEdit
                        size={20}
                        className='mt-1 hover:text-red-500 cursor-pointer'
                        onClick={() => editFlightBooking(index)}
                      />
                      {deletePopup ? (
                        <DeletePop setDeletePopup={setDeletePopu} index={index} handleRemoveHighlight={removeFlightBooking} />
                      ) : (
                        <MdDeleteForever
                          size={24}
                          className='mt-1 hover:text-red-500 cursor-pointer'
                          onClick={() => setDeletePopu(true)}
                        />
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <button onClick={handleSubmitNext} className="w-full rounded py-2 bg-black text-white">
        Save
      </button>
    </>
  );
}
