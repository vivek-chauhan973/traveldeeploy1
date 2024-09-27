import dynamic from 'next/dynamic';
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import DeletePop from "../iternaryPopup/DeletePop";

import "react-quill/dist/quill.snow.css"; // Import Quill styles
const QuillNoSSRWrapper = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default function PackageFaq({ itinerary, setActiveTab, setFaqDot }) {
  // console.log("itinerary : ",itinerary);
  const [itineraryDayWiseDataArray, setItineraryDayWiseDataArray] = useState(
    []
  );
  const [deletePopup, setDeletePopu] = useState(false);
  const [editorHtml, setEditorHtml] = useState("");

  useEffect(() => {
    if (itinerary) {
      setItineraryDayWiseDataArray(itinerary?.titles?.days || []);
      if (itinerary?.titles?.days) {
        setFaqDot(true);
      }
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

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link"],
    ],
  };
  const handleEditorChange = (html) => {
    setEditorHtml(html);
    setItineraryDayWise((prevState) => ({
      ...prevState,
      information: html,
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
    setEditorHtml("");
    setItineraryValidate("");
  };

  const editItem = (index) => {
    setEditingIndex(index);
    setItineraryDayWise(itineraryDayWiseDataArray[index]);
    setEditorHtml(itineraryDayWiseDataArray[index].information);
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
      const response = await fetch(`/api/cars/package/faq/${itinerary?._id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ days: itineraryDayWiseDataArray }),
      });
      if (response.ok) {
        setFaqDot(true)
        setActiveTab("Tab11");
      }
      // console.log("currently data pass", itineraryDayWiseDataArray);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div>
        <div>
          <p className="text-base font-semibold">FAQs</p>
        </div>
        <div className="border bg-white p-3 rounded">
          <div className="justify-between gap-5">
            <div className="border p-4 rounded-md bg-white grow mb-2">
              <div>
                <label htmlFor="title" className="pb-2 font-semibold text-para">
                  Questions
                </label>
                <div className="grow flex gap-5 items-center">
                  <input
                    className="border rounded-md h-8 px-2 text-para grow focus:border-primary outline-none"
                    type="text"
                    id="title"
                    name="title"
                    value={itineraryDayWise.title}
                    onChange={handleChange}
                    placeholder="Enter the Questions"
                  />
                </div>
              </div>
              <div className="mt-5">
                <div className="w-full">
                    <QuillNoSSRWrapper
                      className="rounded h-48"
                      theme="snow"
                      value={editorHtml}
                      placeholder="Enter Your Answer"
                      onChange={handleEditorChange}
                      modules={modules}
                    />
                  </div>
                <div className="pt-12">
                  <button
                    onClick={addItem}
                    className={`bg-navyblack text-white md:w-auto w-full rounded px-10 py-1 cursor-pointer`}
                  >
                    {editingIndex !== null ? "Update" : "Add"}
                  </button>

                </div>
              </div>

              <hr className="my-3" />
              <div className="text-[15px]">
                <div>
                  <p>Questions</p>
                  {itineraryDayWiseDataArray?.map((item, index) => (
                    <div key={index}>
                      <div className="mt-1 flex justify-between gap-2 even:bg-slate-50 px-1">
                        <div>
                          <p className="capitalize flex gap-2 md:text-para text-sm">
                            <span>{index + 1}. </span>
                            {item?.title}
                          </p>
                        </div>
                        <div className="flex gap-3">
                          <FontAwesomeIcon
                            icon={faEdit}                      
                            className="font1 cursor-pointer hover:text-primary"
                            onClick={() => editItem(index)}
                          />
                          {(editingIndex !== index && deletePopup) ?
                            <DeletePop setDeletePopup={setDeletePopu} index={index} handleRemoveHighlight={removeItem} /> :
                            <FontAwesomeIcon
                              icon={faTrash}
                              className="font1 cursor-pointer hover:text-red-500"
                              onClick={() => setDeletePopu(true)}
                            />
                          }
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
            <button onClick={ItineraryFeqPost} className="w-full rounded py-2 bg-black text-white">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
