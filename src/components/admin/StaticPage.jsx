import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import RichTextEditor from "./RichTextEditor";

const StaticPage = () => {
  const [itineraryDayWiseDataArray, setItineraryDayWiseDataArray] = useState([]);
  const [editorHtmlQuestion, setEditorHtmlQuestion] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editId, setEditId] = useState(null);
  const [filename, setFilename] = useState([]);
  const [content, setContent] = useState("");
  const [selectedPage,setSelectedPage]=useState("");

  return (
    <>
      <div className="px-4 py-4 rounded-md bg-white shadow-[0_0px_10px_-3px_rgba(0,0,0,0.3)]  border-l-2 border-teal-600">
        <h2 className="text-base font-semibold mb-2">Create Static Pages Data</h2>
        <div>
          <div className="border bg-white p-3 rounded">
            <div className="p-1 mb-12 flex md:flex-row flex-col gap-5">
              <p className="pb-2 font-semibold text-para">
                Choose Static Page Type
              </p>
              <select name="staticPage" id="staticPage" className=" outline-none w-full md:w-40"
              onChange={(e)=>setSelectedPage(e.target.value)}
              >
                <option value="">Select Page Type</option>
                <option value="about-us">About Us</option>
                <option value="contact-us">Contact Us</option>
                <option value="privacy-policy">Privacy Policy</option>
                <option value="terms-and-conditions">Terms and conditions</option>
                <option value="payment-policy">Payment Policy</option>
                <option value="jobs">Jobs</option>
                <option value="refunds-and-cancellations">Refunds And Cancellations</option>
              </select>
            </div>
            {selectedPage&&<div className="justify-between gap-5">
              <div className="border p-4 rounded-md bg-white grow mb-2">
                <div>
                  <label className="pb-2 font-semibold text-para">
                    Questions
                  </label>
                  <div className="grow flex gap-5 items-center">
                    <input
                      className="border rounded-md h-8 px-2 text-para grow focus:border-primary outline-none"
                      type="text"
                      id="title"
                      name="title"
                      value={editorHtmlQuestion}
                      onChange={(e) => setEditorHtmlQuestion(e.target.value)}
                      placeholder="Enter the Questions"
                    />
                  </div>
                </div>
                <div className="md:mt-7 mt-5">
                  <label className="pb-2 font-semibold text-para flex md:flex-row flex-col">
                    <p>Descriptions </p>
                    <p className="font-medium text-gray-500 md:ml-10 md:text-sm text-xxs">
                      <span className="text-red-500">* </span>Please upload img
                      size 730X400px
                    </p>
                  </label>
                  <div className="w-full">
                    <RichTextEditor
                      content={content}
                      onContentChange={setContent}
                      setFilename={setFilename}
                      filename={filename}
                    />
                  </div>
                  <div className="pt-3">
                    <button
                      //   onClick={handleAddorUpdate}
                      className={`bg-navyblack text-white md:w-auto w-full rounded px-10 py-1 cursor-pointer`}
                    >
                      {editingIndex !== null ? "Update" : "Add"}
                    </button>
                  </div>
                </div>

                <hr className="my-3" />
                <div className="text-[15px]">
                  <div>
                    <p>Questions Table</p>
                    {itineraryDayWiseDataArray?.map((item, index) => (
                      <div key={index}>
                        <div className="mt-1 flex justify-between gap-2 even:bg-slate-50 px-1">
                          <div>
                            <p className="capitalize flex gap-2 md:text-para text-sm">
                              <span>{index + 1}. </span>
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: item?.title,
                                }}
                              />
                            </p>
                          </div>

                          <div className="flex gap-3">
                            <FontAwesomeIcon
                              icon={faEdit}
                              className="md:text-sm text-xs cursor-pointer hover:text-primary"
                              onClick={() => {
                                handleEdit(index, item?._id);
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
              </div>
            </div>}
            {selectedPage&&<button className={`bg-navyblack text-white  w-full rounded px-10 py-1 cursor-pointer`}>Save Static Page Data</button>}
          </div>
        </div>
      </div>
    </>
  );
};

export default StaticPage;
