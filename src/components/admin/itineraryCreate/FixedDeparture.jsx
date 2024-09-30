import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import { useAppContext } from "../context/Package/AddGuest";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faFloppyDisk, faTrash } from "@fortawesome/free-solid-svg-icons";
const fetchFixedDepartureData = async (itinerary) => {
  const res = await fetch("/api/package/price/departures/" + itinerary.id);
  return await res.json();
};
const FixedDeparture = ({ itinerary, setActiveTab, setPriceManagementDot }) => {
  const [data, setData] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editFormData, setEditFormData] = useState({});
  const [fixedDeparture, setFixedDeparture] = useState(null);
  const { pricingManagement } = useAppContext();
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const binaryStr = e.target.result;
        const workbook = XLSX.read(binaryStr, { type: "binary" });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(sheet, {
          raw: false,
          dateNF: "mm/dd/yyyy",
        });
        setData(jsonData);
      };
      reader.readAsBinaryString(file);
    }
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditFormData(data[index]);
  };

  const handleDelete = (index) => {
    const updatedData = data.filter((_, i) => i !== index);
    setData(updatedData);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditFormData({ ...editFormData, [name]: value });
  };

  const handleSave = () => {
    const updatedData = [...data];
    updatedData[editingIndex] = editFormData;
    setData(updatedData);
    setEditingIndex(null);
    setEditFormData({});
  };
  useEffect(() => {
    if (itinerary?.prices) {
      setData(itinerary?.prices?.departureData);
    }
    //  console.log("itinerary?.addguest---> ",itinerary?.addguest)
    setFixedDeparture(itinerary?.addguest);
  }, [itinerary]);
  // console.log("itinary is here ------> ",data);
  const handleSubmit = async () => {
    try {
      const res = await fetch("/api/package/price/departures/" + itinerary.id, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          departure1: fixedDeparture || pricingManagement,
          data,
        }),
      });
      setActiveTab("Tab10");
    } catch (error) {
      console.log("Error submitting data", error);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="bg-white shadow-md rounded-lg p-5">
        <div className="mb-4 xl:flex justify-start gap-5">
          <p className="md:text-md text-md font-semibold text-gray-700">
            Upload Excel File
          </p>
          <input
            type="file"
            onChange={handleFileUpload}
            accept=".xls,.xlsx"
            className="px-2 py-1.5 border md:w-auto w-full rounded-lg"
          />
        </div>
        <div className="">
          {data?.length !== 0 && (
            <h1 className="md:text-lg text-md font-semibold text-gray-800 mb-1">
              Fixed Departure Entries
            </h1>
          )}
          <div className="overflow-x-auto">
            {data?.length !== 0 && (
              <table className="min-w-full ">
                <thead>
                  <tr className="bg-navyblack text-white text-center">
                    <th className="p-2 border">Date</th>
                    <th className="p-2 border">Price</th>
                    <th className="p-2 border">Start</th>
                    <th className="p-2 border">End</th>
                    <th className="p-2 border">Weight</th>
                    <th className="p-2 border">Availability</th>
                    <th className="p-2 border">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.map((item, i) => (
                    <tr key={i} className="text-center border-b">
                      {editingIndex === i ? (
                        <>
                          <td className="p-2 border">
                            <input
                              name="Date"
                              value={editFormData.Date}
                              onChange={handleInputChange}
                              className="p-1 border md:text-base text-sm rounded-md text-center"
                            />
                          </td>
                          <td className="p-2 border">
                            <input
                              name="Price"
                              value={editFormData.Price}
                              onChange={handleInputChange}
                              className="p-1 border md:text-base text-sm rounded-md text-center"
                            />
                          </td>
                          <td className="p-2 border">
                            <input
                              name="Start_drop_down"
                              value={editFormData.Start_drop_down}
                              onChange={handleInputChange}
                              className="p-1 md:text-base text-sm border rounded-md text-center"
                            />
                          </td>
                          <td className="p-2 border">
                            <input
                              name="End_drop_down"
                              value={editFormData.End_drop_down}
                              onChange={handleInputChange}
                              className="p-1 md:text-base text-sm border rounded-md text-center"
                            />
                          </td>
                          <td className="p-2 border">
                            <input
                              name="Weight"
                              value={editFormData.Weight}
                              onChange={handleInputChange}
                              className="p-1 border md:text-base text-sm rounded-md text-center"
                            />
                          </td>
                          <td className="p-2 border">
                            <input
                              name="Avilability"
                              value={editFormData.Avilability}
                              onChange={handleInputChange}
                              className="p-1 border md:text-base text-sm rounded-md text-center"
                            />
                          </td>
                          <td className="p-2 border">
                            <FontAwesomeIcon
                              icon={faFloppyDisk}
                              onClick={handleSave}
                              className="text-xl hover:text-primary cursor-pointer"
                            />
                          </td>
                        </>
                      ) : (
                        <>
                          <td className="px-1 py-2 border">{item?.Date}</td>
                          <td className="px-1 py-2 border">{item?.Price}</td>
                          <td className="px-1 py-2 border">
                            {item?.Start_drop_down}
                          </td>
                          <td className="px-1 py-2 border">
                            {item?.End_drop_down}
                          </td>
                          <td className="px-1 py-2 border">{item?.Weight}</td>
                          <td className="px-1 py-2 border">
                            {item?.Avilability}
                          </td>
                          <td className="px-1 py-2 border">
                            <div className="flex justify-center gap-3">
                              <FontAwesomeIcon
                                icon={faEdit}
                                onClick={() => handleEdit(i)}
                                className="hover:text-primary cursor-pointer"
                              />
                              <FontAwesomeIcon
                                icon={faTrash}
                                onClick={() => handleDelete(i)}
                                className=" hover:text-primary cursor-pointer"
                              />
                            </div>
                          </td>
                        </>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
      <button
        onClick={handleSubmit}
        className="bg-black text-white w-full rounded-lg py-3 mt-4"
      >
        Submit All Data
      </button>
    </div>
  );
};

export default FixedDeparture;
