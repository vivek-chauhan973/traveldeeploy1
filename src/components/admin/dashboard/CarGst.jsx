import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightLong,
  faCirclePlus,
  faCube,
  faEdit,
  faFloppyDisk,
  faTrash,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";


const CarGst = () => {
  const [gstRate, setGstRate] = useState("");
  const [gstList, setGstList] = useState([]);
  const [editGstId, setEditGstId] = useState(null);
  const [editGstValue, setEditGstValue] = useState("");

  useEffect(() => {
    fetchGstList();
  }, []);

  const fetchGstList = async () => {
    const response = await fetch("/api/cars/package-setting/gst");
    const data = await response.json();
    setGstList(data.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("/api/cars/package-setting/gst", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "add", gstRate: Number(gstRate) }),
    });
    setGstRate("");
    fetchGstList();
  };

  const handleEdit = async (id) => {
    await fetch("/api/cars/package-setting/gst", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        action: "edit",
        gstId: id,
        gstRate: Number(editGstValue),
      }),
    });
    setEditGstId(null);
    fetchGstList();
  };

  const handleDelete = async (id) => {
    await fetch("/api/cars/package-setting/gst", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "delete", gstId: id }),
    });
    toast.success("GST deleted successfully!");
    fetchGstList();
  };

  return (
    <div>
      <div className="grid grid-cols-1 gap-5 rounded">
        <div className="shadow-[0_0px_10px_-3px_rgba(0,0,0,0.3)] p-4 rounded-md bg-white border-l-2 border-teal-600">
          <form
            onSubmit={handleSubmit}
            className="flex items-end justify-between gap-3"
          >
            <div className="grow flex flex-col">
              <label htmlFor="" className="pb-2 font-semibold text-para">
                Car GST Rate
              </label>
              <input
                value={gstRate}
                onChange={(e) => setGstRate(e.target.value)}
                type="number"
                className="border rounded-md h-8 px-2 text-para grow focus:border-black font-sans outline-none"
                placeholder="Enter GST Rate"
              />
            </div>
            <button type="submit">
              <FontAwesomeIcon
                icon={faCirclePlus}
                className="text-xl hover:text-primary cursor-pointer mb-1"
              />
            </button>
          </form>

          <div className="text-[15px] border p-2 h-60 overflow-y-auto rounded mt-3">
            {gstList.map((item) => (
              <div key={item._id} className="even:bg-slate-50">
                <div className="flex justify-between px-1">
                  <p className="capitalize flex gap-2 leading-8 text-[14px]">
                    {editGstId === item._id ? (
                      <input
                        value={editGstValue}
                        onChange={(e) => setEditGstValue(e.target.value)}
                        type="number"
                        className="border ml-2 rounded-md h-8 px-2 capitalize focus:border-black font-sans outline-none"
                      />
                    ) : (
                      item.gstRate
                    )}
                  </p>
                  <div className="flex gap-2">
                    {editGstId === item._id ? (
                      <>
                        <FontAwesomeIcon
                          icon={faFloppyDisk}
                          onClick={() => handleEdit(item._id)}
                          className=" mt-2 hover:text-primary cursor-pointer"
                        />
                        <FontAwesomeIcon
                          icon={faXmark}
                          onClick={() => setEditGstId(null)}
                          className=" mt-2 hover:text-primary cursor-pointer"
                        />
                      </>
                    ) : (
                      <>
                        <FontAwesomeIcon
                          icon={faTrash}
                          onClick={() => handleDelete(item._id)}
                          className="mt-2 hover:text-primary cursor-pointer"
                        />
                        <FontAwesomeIcon
                          icon={faEdit}
                          onClick={() => {
                            setEditGstId(item._id);
                            setEditGstValue(item.gstRate);
                          }}
                          className="mt-2 hover:text-primary cursor-pointer"
                        />
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
export default CarGst