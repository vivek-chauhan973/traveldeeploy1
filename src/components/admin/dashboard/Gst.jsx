import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const MdOutlineAddCircle = dynamic(() => import('react-icons/md').then(mod => mod.MdOutlineAddCircle));
const MdDeleteForever = dynamic(() => import('react-icons/md').then(mod => mod.MdDeleteForever));
const FaEdit = dynamic(() => import('react-icons/fa').then(mod => mod.FaEdit));
const IoIosSave = dynamic(() => import('react-icons/io').then(mod => mod.IoIosSave));
const MdCancel = dynamic(() => import('react-icons/md').then(mod => mod.MdCancel));
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Gst() {
    const [gst, setGst] = useState({ gstRate: "" });
    const [gstListData, setGstListData] = useState([]);

    const isHandleGst = (e) => {
        const { name, value } = e.target;
        setGst((prev) => ({ ...prev, [name]: value }));
    };

    const isSubmitGst = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/package-setting/gst/add-gst', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(gst),
            });
            fetchGstList();
        } catch (error) {
            console.error('Error during form submission:', error);
        }
    };

    const fetchGstList = async () => {
        try {
            const gstList = await fetch('/api/package-setting/gst/get-gst');
            const gstData = await gstList.json();
            setGstListData(gstData.data.reverse());
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchGstList();
    }, []);

    const [editGstId, setEditGstId] = useState(null);
    const [editGstValue, setEditGstValue] = useState('');

    const toggleEditGst = (gstId) => {
        setEditGstId(gstId === editGstId ? null : gstId);
        setEditGstValue('');
    };

    const saveEditGst = async (gstId) => {
        try {
            await fetch('/api/package-setting/gst/edit-gst', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ gstId, gstRate: editGstValue }),
            });
            toggleEditGst(gstId);
            fetchGstList();
        } catch (error) {
            console.error(error);
        }
    };

    const handleDeleteGst = async (gstId) => {
        try {
            const response = await fetch(`/api/package-setting/gst/delete-gst`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ gstId }),
            });
            if (response.ok) {
                fetchGstList();
            } else {
                console.error('Failed to delete GST');
            }
        } catch (error) {
            console.error(error);
        }
        toast.success("GST deleted successfully!", {
            position: "top-center",
        });
    };

    return (
        <>
            <div className="flex items-center gap-5 text-primary pb-3">
                <p className="text-[28px] text-black">GST Management</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 rounded">
                <div className="shadow-[0_0px_10px_-3px_rgba(0,0,0,0.3)] p-4 rounded-md bg-white border-l-2 border-teal-600">
                    <form onSubmit={isSubmitGst} className="flex items-end justify-between gap-5">
                        <div className="grow flex flex-col">
                            <label htmlFor="" className="pb-2 font-semibold text-para">GST Rate</label>
                            <input
                                onChange={isHandleGst}
                                className="border rounded-md h-8 px-2 text-para grow focus:border-black font-sans outline-none"
                                type="text" name="gstRate"
                                placeholder="Enter GST Rate" />
                        </div>
                        <button type="submit">
                            <MdOutlineAddCircle size={35} className="cursor-pointer hover:text-primary" />
                        </button>
                    </form>

                    <div className="text-[15px] border p-2 h-60 overflow-y-auto rounded mt-3">
                        {gstListData.map((item, index) => (
                            <div key={item._id} className="even:bg-slate-50">
                                <div className="flex justify-between px-1">
                                    <p className="capitalize flex gap-2 leading-8 text-[14px]">
                                        <span>{index + 1}</span>
                                        {editGstId === item._id ? (
                                            <input
                                                className="border ml-2 rounded-md h-8 px-2 capitalize focus:border-black font-sans outline-none"
                                                defaultValue={item.gstRate}
                                                onChange={(e) => setEditGstValue(e.target.value)}
                                            />
                                        ) : item.gstRate}
                                    </p>
                                    <div className="flex gap-2 basis-1/3">
                                        {editGstId === item._id ? (
                                            <span className="flex gap-2 px-2">
                                                {editGstValue && (
                                                    <IoIosSave
                                                        size={24}
                                                        className="mt-1 hover:text-red-500 cursor-pointer"
                                                        onClick={() => saveEditGst(item._id)}
                                                    />
                                                )}
                                                <MdCancel
                                                    size={24}
                                                    className="mt-1 hover:text-red-500 cursor-pointer"
                                                    onClick={() => toggleEditGst(item._id)}
                                                />
                                            </span>
                                        ) : (
                                            <FaEdit
                                                size={20}
                                                className="mt-1 hover:text-red-500 cursor-pointer"
                                                onClick={() => toggleEditGst(item._id)}
                                            />
                                        )}
                                        <MdDeleteForever
                                            size={24}
                                            className="mt-1 hover:text-red-500 cursor-pointer"
                                            onClick={() => handleDeleteGst(item._id)}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    );
}
