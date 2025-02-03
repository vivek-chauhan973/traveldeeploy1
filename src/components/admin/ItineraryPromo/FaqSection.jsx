import { useState, useEffect } from "react";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
export default function FaqSection({ onChange, faqData }) {
  const [itineraryDayWiseDataArray, setItineraryDayWiseDataArray] = useState(null);
  const [itineraryDayWise, setItineraryDayWise] = useState({
    title: "",
    information: "",
  });
  // console.log("faqData111111111111111111:",faqData)
  useEffect(() => {
    setItineraryDayWiseDataArray(faqData || [])
  }, [faqData])

  const [editingIndex, setEditingIndex] = useState(null);
  const [itineraryValidate, setItineraryValidate] = useState("");

  useEffect(() => {

    onChange(itineraryDayWiseDataArray);
  }, [itineraryDayWiseDataArray, onChange]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItineraryDayWise((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    // setItineraryDayWiseDataArray(itineraryDayWise)
  };

  const addItem = () => {
    if (!itineraryDayWise.title || !itineraryDayWise.information) {
      setItineraryValidate("Title and Information are required");
      return;
    }
    if (editingIndex !== null) {
      const updatedArray = [...itineraryDayWiseDataArray];
      updatedArray[editingIndex] = itineraryDayWise;
      setItineraryDayWiseDataArray(updatedArray);
      setEditingIndex(null);
    } else {
      setItineraryDayWiseDataArray((prev) => [...prev, itineraryDayWise]);
    }
    setItineraryDayWise({ title: "", information: "" });
    setItineraryValidate("");
  };

  const editItem = (index) => {
    setEditingIndex(index);
    setItineraryDayWise(itineraryDayWiseDataArray[index]);
  };

  const removeItem = (index) => {
    const updatedArray = itineraryDayWiseDataArray.filter((_, i) => i !== index);
    setItineraryDayWiseDataArray(updatedArray);
  };

  return (
    <div>
      <div className="justify-between gap-5">
        <div className="border p-4 rounded-md bg-white grow">
          <div>
            <label htmlFor="title" className="pb-2 font-semibold text-para">
              Title
            </label>
            <div className="grow flex gap-5 items-center">
              <input
                className="border rounded-md h-8 px-2 grow focus:border-primary outline-none md:text-para text-sm"
                type="text"
                id="title"
                name="title"
                value={itineraryDayWise.title}
                onChange={handleChange}
                placeholder="Enter the Title"
              />
            </div>
          </div>
          <div className="mt-5">
            <div className="w-full">
              <textarea
                className="rounded h-48 resize-none border px-3 py-2 w-full md:text-para text-sm"
                placeholder="Enter Your Day wise Description"
                name="information"
                value={itineraryDayWise.information}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="pt-3">
              <button
                onClick={addItem}
                className={`bg-navyblack text-white rounded md:w-auto px-10 w-full py-1`}
              >
                {editingIndex !== null ? "Update" : "Add"}
              </button>
            </div>
          </div>

          <hr className="my-3" />
          <div className="text-[15px]">
            <div>
              {itineraryDayWiseDataArray?.map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between even:bg-slate-50 ">
                    <div>
                      <p className="capitalize flex gap-2 mb-2 md:text-[15px] text-sm ">
                        <span className="text-nowrap">Day {index + 1}. </span>
                        {item.title}
                      </p>
                    </div>
                    <div className='flex gap-2'>
                      <FontAwesomeIcon
                        icon={faEdit}
                        onClick={() => editItem(index)}
                        // className={`mt-1 ${isEditing ? (editGroupId === group._id ? 'text-gray-500 cursor-not-allowed' : 'hover:text-primary cursor-pointer') : ''}`}
                        className="mt-1  hover:text-primary cursor-pointer"
                      />
                      {(editingIndex == index) ? (
                        <FontAwesomeIcon
                          icon={faTrash}
                          className="mt-1 opacity-50 cursor-not-allowed"
                        />
                      ) : (
                        <FontAwesomeIcon
                          icon={faTrash}
                          onClick={() => removeItem(index)}
                          className="mt-1  hover:text-primary cursor-pointer"
                        />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <span className="text-xs text-red-700 capitalize">
              {itineraryValidate}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
