import { useEffect, useState } from "react";
import "../../../app/globals.css";
import dynamic from "next/dynamic";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import "react-quill/dist/quill.snow.css"; // Import Quill styles
import DeletePop from "../iternaryPopup/DeletePop";

// Dynamic import for Quill.js as it needs to be loaded on the client-side
const QuillNoSSRWrapper = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default function ItineraryText_Faq({
  setActiveTab,
  itinerary,
  setItenaryDot,
}) {
  const [itineraryText, setItineraryText] = useState(
    itinerary?.dayWiseInformation || " "
  );
  const [deletePopup, setDeletePopu] = useState(false);
  const [itineraryValidate, setItineraryValidate] = useState(null);
  const [editorHtml, setEditorHtml] = useState("");
  const [itineraryDayWiseDataArray, setItineraryDayWiseDataArray] =
    useState(null);
  const [itineraryDayWise, setItineraryDayWise] = useState({
    title: "",
    information: "",
  });
  const [editingIndex, setEditingIndex] = useState(null);

  const handleItineraryValidate = (value) => {
    setItineraryText(value);
    if (!value) {
      setItineraryValidate("Itinerary is required");
    } else {
      setItineraryValidate("");
    }
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

  useEffect(() => {
    if (itinerary) {
      setItineraryText(itinerary.dayWiseInformation || "");
      setItineraryDayWiseDataArray(itinerary.days || []);

      if (itinerary?.dayWiseInformation) {
        setItenaryDot(true);
      }
    }
  }, [itinerary]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItineraryDayWise((prevState) => ({
      ...prevState,
      [name]: value,
    }));
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
      setItineraryDayWiseDataArray((prev) => [
        ...(prev || []),
        itineraryDayWise,
      ]);
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

  const removeItem = (index) => {
    const updatedArray = itineraryDayWiseDataArray.filter(
      (_, i) => i !== index
    );
    setItineraryDayWiseDataArray(updatedArray);
  };

  const ItineraryTextPost = async () => {
    if (!itineraryText) {
      setItineraryValidate("Itinerary is required");
      return;
    }
    try {
      const res = await fetch(
        "/api/package/" +
          (itinerary ? `day-wise/${itinerary?._id}` : "add-package"),
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            days: itineraryDayWiseDataArray,
            information: itineraryText,
          }),
        }
      );
      if (res.ok) {
        setActiveTab("Tab5");
        setItenaryDot(true);
        console.log("Itenary Faq successfully saved");
      } else {
        console.error("Failed to save itinerary");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div>
        <div>
          <div className="mb-5 flex flex-col">
            <label htmlFor="itineraryText" className="font-semibold text-base">
              Day Wise Information
            </label>
            <textarea
              value={itineraryText}
              onChange={(e) => handleItineraryValidate(e.target.value)}
              className="resize-none w-full h-30 outline-none border rounded-md px-3 py-2"
              placeholder="Days Wise Information"
              rows={5}
            ></textarea>
            <div>
              <span className="text-xs text-red-700 capitalize">
                {itineraryValidate}
              </span>
            </div>
          </div>
        </div>

        <div>
          <div>
            <p className="text-base font-semibold">Itinerary Days Wise</p>
          </div>
          <div className="border p-3 rounded">
            <div className="justify-between gap-5">
              <div className="border p-4 rounded-md bg-white grow">
                <div>
                  <label
                    htmlFor="title"
                    className="pb-2 font-semibold text-para"
                  >
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
                    <QuillNoSSRWrapper
                      className="rounded h-48"
                      theme="snow"
                      value={editorHtml}
                      placeholder="Enter Your Day wise Description"
                      onChange={handleEditorChange}
                      modules={modules}
                    />
                  </div>
                  <div className="md:pt-12 ">
                    <button
                      onClick={addItem}
                      className={`bg-navyblack text-white md:w-auto w-full rounded px-10 py-1`}
                    >
                      {editingIndex !== null ? "Update" : "Add"}
                    </button>
                  </div>
                </div>

                <hr className="my-3" />
                <div className="">
                  <div>
                    {itineraryDayWiseDataArray?.map((item, index) => (
                      <div key={index}>
                        <div className="flex justify-between even:bg-slate-50 md:px-1">
                          <div>
                            <p className="capitalize flex gap-2 md:text-para text-sm">
                              <span>Day {index + 1}. </span>
                              {item?.title}
                            </p>
                          </div>
                          <div className="flex gap-2">
                            <FontAwesomeIcon
                              icon={faEdit}
                              onClick={() => editItem(index)}
                              className="font1 hover:text-primary cursor-pointer"
                            />
                            {editingIndex !== index && deletePopup ? (
                              <DeletePop
                                setDeletePopup={setDeletePopu}
                                index={index}
                                handleRemoveHighlight={removeItem}
                              />
                            ) : (
                              <FontAwesomeIcon
                                icon={faTrash}
                                onClick={() => setDeletePopu(true)}
                                className="font1 hover:text-primary cursor-pointer"
                              />
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-2">
        <button
          onClick={ItineraryTextPost}
          className="bg-black text-white w-full rounded py-2"
        >
          Save
        </button>
      </div>
    </>
  );
}
