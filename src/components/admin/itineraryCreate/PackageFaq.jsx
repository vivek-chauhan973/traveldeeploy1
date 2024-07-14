import { useEffect, useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import DeletePop from "../iternaryPopup/DeletePop";
export default function PackageFaq({ itinerary }) {
  // console.log("itinerary : ",itinerary);
  const [itineraryDayWiseDataArray, setItineraryDayWiseDataArray] = useState(
    []
  );
  const [deletePopup,setDeletePopu]=useState(false);
  useEffect(() => {
    if (itinerary) {
        setItineraryDayWiseDataArray( itinerary?.titles?.days|| []);
    }
}, [itinerary]);
  const [itineraryDayWise, setItineraryDayWise] = useState({
    title: "",
    information: "",
  });
  const [editingIndex, setEditingIndex] = useState(null);
  const [itineraryValidate, setItineraryValidate] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItineraryDayWise((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const addItem = () => {
    if (!itineraryDayWise?.title || !itineraryDayWise?.information) {
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

  // written by code

  // console.log("package id show is here ", itinerary?._id);

  const removeItem = (index) => {
    const updatedArray = itineraryDayWiseDataArray?.filter(
      (_, i) => i !== index
    );
    setItineraryDayWiseDataArray(updatedArray);
  };

  // console.log(itineraryDayWise);

  const ItineraryFeqPost = async () => {
    try {
      const response = await fetch(`/api/package/faq/${itinerary?._id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ days: itineraryDayWiseDataArray }),
      });
      // console.log("currently data pass", itineraryDayWiseDataArray);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div>
        <div>
          <p className="text-base font-semibold">Itinerary Days Wise</p>
        </div>
        <div className="border p-3 rounded">
          <div className="justify-between gap-5">
            <div className="border p-4 rounded-md bg-white grow">
              <div>
                <label htmlFor="title" className="pb-2 font-semibold text-para">
                  Title
                </label>
                <div className="grow flex gap-5 items-center">
                  <input
                    className="border rounded-md h-8 px-2 text-para grow focus:border-primary outline-none"
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
                    className="rounded h-48 resize-none border px-3 py-2 w-full"
                    placeholder="Enter Your Day wise Description"
                    name="information"
                    value={itineraryDayWise.information}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div className="pt-12">
                  <button
                    onClick={addItem}
                    className={`bg-navyblack text-white rounded px-10 py-1`}
                  >
                    {editingIndex !== null ? "Update" : "Add"}
                  </button>
                  
                </div>
              </div>

              <hr className="my-3" />
              <div className="text-[15px]">
                <ul>
                  {itineraryDayWiseDataArray?.map((item, index) => (
                    <li key={index}>
                      <div className="flex justify-between even:bg-slate-50 px-1">
                        <div>
                          <p className="capitalize flex gap-2">
                            <span>Day {index + 1}. </span>
                            {item?.title}
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <FaEdit
                            onClick={() => editItem(index)}
                            size={20}
                            className="mt-1 hover:text-primary cursor-pointer"
                          />
                          {(editingIndex !== index && deletePopup)?
                           <DeletePop setDeletePopup={setDeletePopu} index={index} handleRemoveHighlight={removeItem}/>:<MdDeleteForever
                              onClick={() => setDeletePopu(true)}
                              size={24}
                              className="mt-1 hover:text-red-500 cursor-pointer"
                            />
                          }
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <span className="text-xs text-red-700 capitalize">
                  {itineraryValidate}
                </span>
              </div>
            </div>
            <button
                    onClick={ItineraryFeqPost}
                    className=" bg-navyblack text-white rounded px-10 py-1 w-full"
                  >
                    save
                  </button>
          </div>
        </div>
      </div>
    </div>
  );
}
