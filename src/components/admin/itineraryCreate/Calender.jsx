import React, { useEffect, useState } from "react";

const fetchPriceHikeData=async(itinerary)=>{
  return await (await fetch(`/api/package/price-hike?packageId=${itinerary?._id}`)).json()
}

const Calendar = ({ itinerary, setActiveTab }) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [priceIncrease, setPriceIncrease] = useState("");
  const [isActive, setIsActive] = useState(true);
  const [svg, setSvg] = useState("");
  const [num, setNum] = useState(0);
  const [calenderArr, setCalenderArr] = useState([]);
  const [editIndex, setEditIndex] = useState(null); // To track which item is being edited

  useEffect(()=>{
    fetchPriceHikeData(itinerary).then(res=>{setCalenderArr(res?.response?.priceHiKe||[]);console.log("res",res?.response?.priceHiKe)});
  },[itinerary])

  const handleSubmitNext = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`/api/package/price-hike?packageId=${itinerary?._id}`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(calenderArr)
      });
      if (response.ok) {
        setActiveTab("Tab1");
      }
    } catch (error) {
      console.log("Something went wrong");
    }
  };

  const handleCheckBox = () => {
    setIsActive(num % 2 === 0);
    setNum(num + 1);
  };

  const handleAddData = () => {
    const data = { startDate, endDate, priceIncrease, isActive, svg };
    if ([startDate, endDate, priceIncrease].some((item) => item === "")) {
        return alert("Some fields are missing");
      }
    if (editIndex !== null) {
      // Editing an existing item
      const updatedArr = calenderArr.map((item, index) =>
        index === editIndex ? data : item
      );
      setCalenderArr(updatedArr);
      setEditIndex(null);
    } else {
      // Adding a new item
      setCalenderArr([...calenderArr, data]);
    }

    // Reset form fields
    setStartDate("");
    setEndDate("");
    setPriceIncrease("");
    setIsActive(false);
    setSvg("");
  };

  const handleEdit = (index) => {
    const item = calenderArr[index];
    setStartDate(item.startDate);
    setEndDate(item.endDate);
    setPriceIncrease(item.priceIncrease);
    setIsActive(item.isActive);
    setSvg(item.svg);
    setEditIndex(index); // Set the index of the item being edited
  };

  const handleDelete = (index) => {
    const updatedArr = calenderArr.filter((_, i) => i !== index);
    setCalenderArr(updatedArr);
  };
// console.log("calender array --> ",calenderArr)
  return (
    <>
      <div className="bg-white rounded p-3">
        <div>
          <p className="font-semibold text-base mb-2">Calendar</p>
        </div>
        <div className="border p-4 rounded mb-2 overflow-scroll">
          <div className="sm:flex items-center md:mb-4 mb-2">
            <label htmlFor="startDate" className="font-semibold w-32 text-para">
              Start Date:
            </label>
            <input
              type="date"
              id="startDate"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="border w-full rounded-md h-8 px-2 focus:border-primary outline-none text-para"
              placeholder="Enter Start Date"
            />
          </div>
          <div className="sm:flex items-center md:mb-4 mb-2">
            <label htmlFor="endDate" className="font-semibold w-32 text-para">
              End Date:
            </label>
            <input
              type="date"
              id="endDate"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="border w-full rounded-md h-8 px-2 focus:border-primary outline-none text-para"
              placeholder="Enter End Date"
            />
          </div>
          <div className="sm:flex items-center mb-2">
            <div className="flex items-center justify-center gap-6">
              <div className="flex items-center mb-2">
                <label htmlFor="price" className="font-semibold w-32 text-para">
                  Price Hike %:
                </label>
                <input
                  type="number"
                  id="price"
                  value={priceIncrease}
                  onChange={(e) => setPriceIncrease(e.target.value)}
                  className="border w-full rounded-md h-8 ml-7 px-2 focus:border-primary outline-none text-para"
                  placeholder="Enter Price"
                />
              </div>
              <div>
                <input
                  type="checkbox"
                  name="checkbox"
                  className="scale-150"
                  checked={isActive}
                  onChange={handleCheckBox}
                />
              </div>
            </div>
          </div>
          <div className="sm:flex items-center">
            <label htmlFor="svg" className="font-semibold w-32 text-para">
              SVG Icon:
            </label>
            <select
              id="svg"
              value={svg}
              className="border w-full rounded-md h-8 px-2 focus:border-primary outline-none text-para"
              onChange={(e) => setSvg(e.target.value)}
            >
              <option value="">Select One</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
            </select>
          </div>
          <button
            onClick={handleAddData}
            className="w-1/12 rounded py-2 mt-8 bg-black text-white"
          >
            {editIndex !== null ? "Update" : "Add"}
          </button>
        </div>
        <div>
          <div className="grid grid-cols-5 bg-black my-4 rounded-sm">
            <p className="text-white px-2 py-3">Start Date</p>
            <p className="text-white px-2 py-3">End Date</p>
            <p className="text-white px-2 py-3">Price Hike</p>
            <p className="text-white px-2 py-3">SVG</p>
            <p className="text-white px-2 py-3">Action</p>
          </div>
          {calenderArr.map((item, i) => (
            <div key={i} className="grid grid-cols-5 my-4">
              <p className="px-2 py-3">{item.startDate}</p>
              <p className="px-2 py-3">{item.endDate}</p>
              <p className="px-2 py-3">{item.priceIncrease}</p>
              <p className="px-2 py-3">{item.svg}</p>
              <div className="flex gap-5 flex-wrap">
                <button
                  onClick={() => handleEdit(i)}
                  className="bg-blue-400 px-4 py-1 rounded-sm text-white"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(i)}
                  className="bg-red-500 px-4 py-1 rounded-sm text-white"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={handleSubmitNext}
          className="w-full rounded py-2 bg-black text-white"
        >
          Save
        </button>
      </div>
    </>
  );
};

export default Calendar;
