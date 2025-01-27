import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import RichTextEditor from "./RichTextEditor";
import "react-quill/dist/quill.snow.css"; // Import Quill styles
import dynamic from "next/dynamic";

const QuillNoSSRWrapper = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const fetchAllTopic = async (name) => {
  const res = await fetch(`/api/static-page/static-page-type?name=${name}`);
  return await res.json();
};
const StaticPage = () => {
  const [itineraryDayWiseDataArray, setItineraryDayWiseDataArray] = useState(
    []
  );
  const [editorHtmlQuestion, setEditorHtmlQuestion] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [filename, setFilename] = useState([]);
  const [content, setContent] = useState("");
  const [selectedPage, setSelectedPage] = useState("");
  const [contentSummary, setContentSummary] = useState("");

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

  useEffect(() => {
    if (selectedPage) {
      fetchAllTopic(selectedPage).then((res) => {
        setItineraryDayWiseDataArray(res?.data?.topics || []);
        console.log("error is happening -----> ",res)
      });
    }
  }, [selectedPage]);
  const handleAddOrUpdate = () => {
    if (!editorHtmlQuestion || !content) {
      alert("Please fill all required fields!");
      return;
    }
    const newItem = {
      title: editorHtmlQuestion,
      description: content,
      filename,
    };
    if (editingIndex !== null) {
      // Update existing item
      const updatedArray = [...itineraryDayWiseDataArray];
      updatedArray[editingIndex] = newItem;
      setItineraryDayWiseDataArray(updatedArray);
      setEditingIndex(null);
    } else {
      // Add new item
      setItineraryDayWiseDataArray([...itineraryDayWiseDataArray, newItem]);
    }

    // Reset fields
    setEditorHtmlQuestion("");
    setContent("");
    setFilename([]);
  };
  const handleEdit = (index) => {
    const item = itineraryDayWiseDataArray[index];
    setEditorHtmlQuestion(item.title);
    setContent(item.description);
    setFilename(item.filename);
    setEditingIndex(index);
  };

  const handleAddSave = async () => {
    if (!selectedPage) {
      return alert("selected Page is required !!!");
    }
    const res = await fetch(`/api/static-page`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: selectedPage,
        topics: itineraryDayWiseDataArray,
        contentSummary
      }),
    });
    if (res?.ok) {
      alert("page data saved successfully");
    }
  };

  return (
    <div className="px-4 py-4 rounded-md bg-white shadow-md border-l-2 border-teal-600">
      <h2 className="text-base font-semibold mb-2">Create Static Pages Data</h2>
      <div className="border bg-white p-3 rounded">
        <div className="p-1 mb-12 flex md:flex-row flex-col gap-5">
          <p className="pb-2 font-semibold">Choose Static Page Type</p>
          <select
            name="staticPage"
            id="staticPage"
            className="focus:border-primary outline-none w-full md:w-40"
            onChange={(e) => setSelectedPage(e.target.value)}
            value={selectedPage}
          >
            <option value="">Select Page Type</option>
            {/* <option value="about-us">About Us</option>
            <option value="contact-us">Contact Us</option>
            <option value="privacy-policy">Privacy Policy</option>
            <option value="terms-and-conditions">Terms and Conditions</option>
            <option value="payment-policy">Payment Policy</option> */}
            <option value="jobs">Jobs</option>
            {/* <option value="refunds-and-cancellations">
              Refunds and Cancellations
            </option> */}
          </select>
        </div>
        {selectedPage && (
          <div>
            <div className="w-full">
              <h3 className=" font-semibold mb-2">Content Summary</h3>
              <QuillNoSSRWrapper
                className="rounded h-48 mb-16"
                theme="snow"
                value={contentSummary}
                onChange={setContentSummary}
                placeholder="Enter Your Answer"
                modules={modules}
              />
            </div>
            <div className=" flex flex-col justify-between gap-5">
              <div className="border p-4 rounded-md bg-white grow mb-2">
                <div className=" flex flex-col gap-2">
                  <label className="pb-2 font-semibold">Title</label>
                  <input
                    className="border rounded-md h-8 px-2 w-full md:w-auto focus:border-primary outline-none"
                    value={editorHtmlQuestion}
                    onChange={(e) => setEditorHtmlQuestion(e.target.value)}
                    placeholder="Enter the Title"
                  />
                </div>
                <div className="mt-3">
                  <label className="pb-2 font-semibold mt-4">Description</label>
                  <RichTextEditor
                    content={content}
                    onContentChange={setContent}
                    setFilename={setFilename}
                    filename={filename}
                  />
                </div>
                <button
                  onClick={handleAddOrUpdate}
                  className="bg-navyblack text-white rounded px-10 py-1 mt-4"
                >
                  {editingIndex !== null ? "Update" : "Add"}
                </button>
              </div>

              <hr className="my-3" />

              <div>
                <p>Questions Table</p>
                {itineraryDayWiseDataArray.map((item, index) => (
                  <div
                    key={index}
                    className="mt-1 flex justify-between gap-2 even:bg-slate-50 px-1"
                  >
                    <div>
                      <p className="capitalize flex gap-2 text-sm">
                        <span>{index + 1}. </span>
                        <span>{item.title}</span>
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <FontAwesomeIcon
                        icon={faEdit}
                        className="text-xs cursor-pointer hover:text-primary"
                        onClick={() => handleEdit(index)}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <button
                onClick={handleAddSave}
                className="bg-navyblack text-white rounded px-10 py-1 mt-4"
              >
                Save Page Data
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StaticPage;
