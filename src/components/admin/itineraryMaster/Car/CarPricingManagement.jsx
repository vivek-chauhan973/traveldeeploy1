import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import * as XLSX from "xlsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowRightLong,
    faCube,
    faEdit,
    faFloppyDisk,
    faTrash,
} from "@fortawesome/free-solid-svg-icons";

const fetchAllData=async ()=>{
    const res=await fetch("/api/cars/carrentalLocalPrice/localdategst", {
        method: "GET"})
    return await res.json();
}
const CarPricingManagement = () => {
    const [data, setData] = useState([]);
    const [editingIndex, setEditingIndex] = useState(null);
    const [editFormData, setEditFormData] = useState({});
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
                    dateNF: "dd-mm-yyyy",
                });

                // Format dates as dd-mm-yyyy
                const formattedData = jsonData.map((item) => ({
                    ...item,
                    Date: item.Date
                        ? new Date(item.Date).toLocaleDateString("en-GB").replace(/\//g, "-")
                        : "",
                }));
                setData(formattedData);
            };
            reader.readAsBinaryString(file);
        }
    };

    useEffect(()=>{
        fetchAllData().then(res=>{setData(res?.data?.localdatagst)});
    },[])

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
        updatedData[editingIndex] = {
            ...editFormData,
            Date: new Date(editFormData.Date)
                .toLocaleDateString("en-GB")
                .replace(/\//g, "-"),
        };
        setData(updatedData);
        setEditingIndex(null);
        setEditFormData({});
    };

    const handleSubmit = async () => {
        try {
            const res = await fetch("/api/cars/carrentalLocalPrice/localdategst", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if(res?.ok){
                fetchAllData().then(res=>setData(res?.data?.localdatagst));
                alert("data is submited");
            }

        } catch (error) {
            console.log("Error submitting data", error);
        }
    };

    return (
        <div>
            <div className="flex items-center gap-5 text-primary mb-5">
                <FontAwesomeIcon icon={faCube} className="text-2xl" />
                <p className="md:text-[28px] text-xl text-black">Car Pricing Management</p>
                <FontAwesomeIcon
                    icon={faArrowRightLong}
                    className="text-teal-700 text-xl"
                />
            </div>
            <div className="grid grid-cols-1 gap-5 rounded">
                <div className="shadow-[0_0px_10px_-3px_rgba(0,0,0,0.3)] p-4 rounded-md bg-white border-l-2 border-teal-600">
                    <div className="">
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
                        {data?.length !== 0 && (
                            <>
                                <h1 className="md:text-lg text-md font-semibold text-gray-800 mb-1">
                                    Fixed Departure Entries
                                </h1>
                                <div className="overflow-x-auto">
                                    <table className="min-w-full">
                                        <thead>
                                            <tr className="bg-navyblack text-white text-center">
                                                <th className="p-2 border">Date</th>
                                                <th className="p-2 border">Additional_Markup %</th>
                                                <th className="p-2 border">GST %</th>
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
                                                                    name="Additional_Markup"
                                                                    value={editFormData.Additional_Markup}
                                                                    onChange={handleInputChange}
                                                                    className="p-1 border md:text-base text-sm rounded-md text-center"
                                                                />
                                                            </td>
                                                            <td className="p-2 border">
                                                                <input
                                                                    name="GST"
                                                                    value={editFormData.GST}
                                                                    onChange={handleInputChange}
                                                                    className="p-1 md:text-base text-sm border rounded-md text-center"
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
                                                            <td className="px-1 py-2 border">{item.Date}</td>
                                                            <td className="px-1 py-2 border">{item.Additional_Markup}</td>
                                                            <td className="px-1 py-2 border">{item.GST}</td>
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
                                                                        className="hover:text-primary cursor-pointer"
                                                                    />
                                                                </div>
                                                            </td>
                                                        </>
                                                    )}
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </>
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

export default CarPricingManagement;
