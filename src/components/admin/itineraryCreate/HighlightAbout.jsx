import React, { useEffect, useState } from "react";
import "../../../app/globals.css";
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faCirclePlus, faFloppyDisk, faSave } from "@fortawesome/free-solid-svg-icons";

import DeletePop from "../iternaryPopup/DeletePop";

const QuillNoSSRWrapper = dynamic(() => import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default function HighlightAbout({ setActiveTab, itinerary, itineraryInfo, setItineraryInfo, setHighlightDot }) {
  const [aboutValidate, setAboutValidate] = useState("");
  const [highlightValidate, setHighlightValidate] = useState("");
  const [aboutEditorHtml, setAboutEditorHtml] = useState("");
  const [isEditingAbout, setIsEditingAbout] = useState(true);
  const [deletePopup, setDeletePopu] = useState(false);

  const modules = {
    toolbar: [
      [{ 'header': '1' }, { 'header': '2' }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
      ['link'],
    ],
  };

  const handleAboutEditorChange = (html) => {
    setAboutEditorHtml(html);
  };

  const [inputHighlight, setInputHighlight] = useState('');
  const [highlightEdit, setHighlightEdit] = useState({ index: 0, edit: false });

  const handleChangeData = (text) => {
    setInputHighlight(text);
  }

  const addHighlight = () => {
    if (!inputHighlight) {
      return;
    } else {
      if (highlightEdit.edit) {
        itinerary.highlights[highlightEdit.index].text = inputHighlight;
      } else {
        itinerary.highlights = itinerary?.highlights || [];
        itinerary.highlights.push({ text: inputHighlight, edit: false });
      }
      setInputHighlight('');
      setHighlightEdit({ edit: false, index: 0 });
    }
  }

  const handleRemoveHighlight = (index) => {
    itinerary.highlights.splice(index, 1);
  };

  const handleHighlightEditChange = (text, index) => {
    itinerary.highlights[index].text = text;
  }

  const toggleEditHighlight = (index) => {
    setHighlightEdit({ index, edit: true });
    setInputHighlight(itinerary?.highlights[index].text);
  }

  const saveHighlight = (index) => {
    itinerary.highlights[index].edit = false;
  }

  const addSubmitHighlight = async () => {
    try {
      const res = await fetch('/api/package/info/' + (itinerary ? itinerary.id : itineraryInfo.id), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ highlights: itinerary.highlights, about: aboutEditorHtml })
      });
      // if(res.ok){
      //   setHighlightDot(true);
      // }
      const data = await res.json();
      setActiveTab("Tab4");
      console.log("Highlight & About data show is here", data);
      setIsEditingAbout(false); // Hide the editor after saving
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (itinerary?.about) {
      setAboutEditorHtml(itinerary.about);
      setHighlightDot(true);
    }
  }, [itinerary]);

  return (
    <div className="bg-white p-2 px-5 grow rounded-md flex flex-col gap-3">
      <div className="md:mb-0 mb-5">
        <p className="pb-2 font-semibold text-para">About</p>
        {isEditingAbout ? (
          <div className='w-full h-44'>
            <QuillNoSSRWrapper
              className='rounded h-32'
              theme="snow"
              value={aboutEditorHtml}
              onChange={handleAboutEditorChange}
              modules={modules}
            />
            <span className="text-xs text-red-700 capitalize">{aboutValidate}</span>
          </div>
        ) : (
          <div className="flex  gap-5">
            <div dangerouslySetInnerHTML={{ __html: aboutEditorHtml }}></div>
            <div className="w-20">
              <FontAwesomeIcon icon={faEdit} className=" cursor-pointer hover:text-primary" onClick={() => setIsEditingAbout(true)} />
            </div>
          </div>
        )}
      </div>
      <div>
        <label htmlFor="highlightDeparture" className="pb-2 font-semibold text-para">Highlight</label>
        <div>
          <div className='w-full mt-2 flex gap-5 items-center'>
            <input onChange={(e) => handleChangeData(e.target.value)} value={inputHighlight} className='w-full border rounded-md h-8 px-2 text-para grow focus:border-primary outline-none'
              type="text" placeholder="Enter A Highlight" />
            {highlightEdit.edit ? (
              <FontAwesomeIcon icon={faFloppyDisk} className="font1 cursor-pointer hover:text-primary" onClick={addHighlight} />
            ) : (
              <div >
                <FontAwesomeIcon icon={faCirclePlus} className="font1 cursor-pointer hover:text-primary" onClick={addHighlight} />
              </div>
            )}
          </div>
          <div className="border h-56 w-full overflow-y-auto py-2 rounded-md mt-2">
            {itinerary?.highlights?.map((item, index) => (
              <div key={index} className='flex justify-between even:bg-slate-50 md:px-5 px-2'>
                {item.edit ? (
                  <input
                    type="text"
                    value={item.text}
                    onChange={(e) => handleHighlightEditChange(e.target.value, index)}
                    className="border rounded-md h-8 px-2"
                  />
                ) : (
                  <p className='capitalize flex gap-2 leading-8'><span>{index + 1}.</span>{item.text}</p>
                )}
                <div className='md:flex gap-3 mt-3 '>
                  {item.edit ? (
                    <FontAwesomeIcon icon={faSave} className="font1 cursor-pointer hover:text-primary" onClick={() => saveHighlight(index)} />
                  ) : (
                    <>
                      <FontAwesomeIcon icon={faEdit} className=" cursor-pointer hover:text-primary" onClick={() => toggleEditHighlight(index)} />
                      {deletePopup ?
                        <DeletePop setDeletePopup={setDeletePopu} index={index} handleRemoveHighlight={handleRemoveHighlight} /> :
                        <FontAwesomeIcon icon={faTrash} className=" cursor-pointer hover:text-primary" onClick={() => setDeletePopu(true)} />
                      }
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <span className="text-xs text-red-700 capitalize">{highlightValidate}</span>
        </div>
      </div>
      <button className="bg-black text-white w-full rounded py-2" onClick={() => addSubmitHighlight()}>
        Save
      </button>
    </div>
  );
}
