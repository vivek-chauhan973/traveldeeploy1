import React, { useEffect, useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';
import * as XLSX from 'xlsx';
import { useAppContext } from '../context/Package/AddGuest';
const fetchFixedDepartureData=async (itinerary)=>{
    const res = await fetch('/api/package/price/departures/' + itinerary.id);
    return await res.json();
}
const FixedDeparture = ({itinerary,setActiveTab,setPriceManagementDot}) => {
  const [data, setData] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editFormData, setEditFormData] = useState({});
  const [fixedDeparture,setFixedDeparture]=useState(null);
const {pricingManagement}=useAppContext();
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const binaryStr = e.target.result;
        const workbook = XLSX.read(binaryStr, { type: 'binary' });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(sheet, {
          raw: false,
          dateNF: 'mm/dd/yyyy',
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
  useEffect(()=>{
if(itinerary?.prices){
  setData(itinerary?.prices?.departureData)
}
   
   setFixedDeparture(itinerary?.addguest);
    
  },[itinerary])
  console.log("itinary is here ------> ",);
  const handleSubmit=async ()=>{
    try {
        const res = await fetch('/api/package/price/departures/' + itinerary.id, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({departure1:fixedDeparture||pricingManagement,data}),
        });
        setActiveTab("Tab10");
    } catch (error) {
        console.log("Error submitting data", error);
    }
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="mb-4 flex justify-between items-center">
          <p className="text-xl font-semibold text-gray-700">Upload Excel File</p>
          <input 
            type="file" 
            onChange={handleFileUpload} 
            accept=".xls,.xlsx" 
            className="p-2 border rounded-lg"
          />
        </div>
        <div>
          {data?.length!==0&&<h1 className="text-2xl font-bold text-gray-800 mb-4">Fixed Departure Entries</h1>}
         { data?.length!==0&&<div className="grid bg-black text-white grid-cols-7 gap-4 text-center font-semibold rounded border-b pb-2">
            <h2>Date</h2>
            <h2>Price</h2>
            <h2>Start</h2>
            <h2>End</h2>
            <h2>Weight</h2>
            <h2>Ava</h2>
            <h2>Actions</h2>
          </div>}
          {data?.map((item, i) => (
            <div key={i} className="grid grid-cols-7 gap-4 text-center py-2 border-b">
              {editingIndex === i ? (
                <>
                  <input name="Date" value={editFormData.Date} onChange={handleInputChange} className="p-1 border text-lg rounded-md" />
                  <input name="Price" value={editFormData.Price} onChange={handleInputChange} className="p-1 border text-lg rounded-md" />
                  <input name="Start_drop_down" value={editFormData.Start_drop_down} onChange={handleInputChange} className="p-1 text-lg border rounded-md" />
                  <input name="End_drop_down" value={editFormData.End_drop_down} onChange={handleInputChange} className="p-1 text-lg border rounded-md" />
                  <input name="Weight" value={editFormData.Weight} onChange={handleInputChange} className="p-1 border text-lg rounded-md" />
                  <input name="Avilability" value={editFormData.Avilability} onChange={handleInputChange} className="p-1 border text-lg rounded-md" />
                  <button onClick={handleSave} className="text-green-500 text-lg">
                    Save
                  </button>
                </>
              ) : (
                <>
                  <h2>{item?.Date}</h2>
                  <h2>{item?.Price}</h2>
                  <h2>{item?.Start_drop_down}</h2>
                  <h2>{item?.End_drop_down}</h2>
                  <h2>{item?.Weight}</h2>
                  <h2>{item?.Avilability}</h2>
                  <div className="flex justify-center gap-2">
                    <button onClick={() => handleEdit(i)} className="text-blue-500">
                      <FaEdit className=' text-xl' />
                    </button>
                    <button onClick={() => handleDelete(i)} className="text-red-500">
                      <MdDeleteForever className=' text-2xl' />
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
      <button onClick={handleSubmit} className="bg-blue-600 text-white w-full rounded-lg py-3 mt-6 hover:bg-blue-700 transition duration-300">
        Submit All Data
      </button>
    </div>
  );
};

export default FixedDeparture;
