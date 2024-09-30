import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const fetchPriceHikeData = async (itinerary) => {
  return await (await fetch(`/api/cars/package/price-hike?packageId=${itinerary?._id}`)).json()
}

const CarCalender = ({ itinerary, setActiveTab }) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [priceIncrease, setPriceIncrease] = useState("");
  const [isActive, setIsActive] = useState(true);
  const [svg, setSvg] = useState("");
  const [num, setNum] = useState(0);
  const [calenderArr, setCalenderArr] = useState([]);
  const [editIndex, setEditIndex] = useState(null); // To track which item is being edited

  useEffect(() => {
    fetchPriceHikeData(itinerary).then(res => { setCalenderArr(res?.response?.priceHiKe || []); });
  }, [itinerary])

  const handleSubmitNext = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`/api/cars/package/price-hike?packageId=${itinerary?._id}`, {
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
        <div className="border p-4 rounded mb-5">
          <div className="sm:flex items-center md:mb-4 mb-2">
            <label htmlFor="startDate" className="font-semibold w-36 text-para">
              Start Date :
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
            <label htmlFor="endDate" className="font-semibold w-36 text-para">
              End Date :
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
                <label htmlFor="price" className="font-semibold w-36 text-para">
                  Price Hike % :
                </label>
                <input
                  type="number"
                  id="price"
                  value={priceIncrease}
                  onChange={(e) => setPriceIncrease(e.target.value)}
                  className="border w-full rounded-md h-8 ml-9 px-2 focus:border-primary outline-none text-para"
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
            <label htmlFor="svg" className="font-semibold w-36 text-para">
              SVG Icon :
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
            className="w-1/12 rounded py-1.5 mt-8 bg-black text-white"
          >
            {editIndex !== null ? "Update" : "Add"}
          </button>
        </div>       
        <div >
          {calenderArr.length !== 0 &&
            <table className="w-full border-collapse border border-gray-300 text-center text-para">
              <thead >
                <tr className="border-b bg-black text-white">
                  <th className="border border-gray-300 font-normal px-3 py-1 text-xs uppercase tracking-wider">Start Date</th>
                  <th className="border border-gray-300 font-normal px-3 py-1 text-xs uppercase tracking-wider">End Date</th>
                  <th className="border border-gray-300 font-normal px-3 py-1 text-xs uppercase tracking-wider">Price Hike</th>
                  <th className="border border-gray-300 font-normal px-3 py-1 text-xs uppercase tracking-wider">SVG</th>
                  <th className="border border-gray-300 font-normal px-3 py-1 text-xs uppercase tracking-wider">Action</th>
                </tr>
              </thead>
              <tbody className="bg-gray-100">
                {calenderArr.map((item, i) => (
                  <tr key={i} className="border-b">
                    <td className="border-l border-r px-2 py-2 overflow-hidden border-gray-300">
                      <p className=" font-medium">{item?.startDate}</p>
                    </td>
                    <td className="border-l border-r px-2 py-2 overflow-hidden border-gray-300">
                      <p className=" font-medium">{item?.endDate}</p>
                    </td>
                    <td className="border-l border-r px-2 py-2 overflow-hidden border-gray-300">
                      <p className=" font-medium">{item?.priceIncrease}</p>
                    </td>
                    <td className=" border-l border-r px-2 py-2 overflow-hidden border-gray-300">
                    <p className="">{item?.svg}</p>
                    </td>
                    <td className="flex justify-center items-center gap-4 border-l border-r px-2 py-2 overflow-hidden border-gray-300">
                      <FontAwesomeIcon
                        icon={faEdit}
                        className="font1 cursor-pointer hover:text-primary"
                        onClick={() => handleEdit(i)}
                      />
                      <FontAwesomeIcon
                        icon={faTrash}
                        className="font1 cursor-pointer hover:text-primary"
                        onClick={() => handleDelete(i)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          }
        </div>
        <button
          onClick={handleSubmitNext}
          className="w-full rounded py-2 mt-4 bg-black text-white"
        >
          Save
        </button>
      </div>
    </>
  );
};

export default CarCalender;
