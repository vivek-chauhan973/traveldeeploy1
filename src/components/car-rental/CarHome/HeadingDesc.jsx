import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong, faCube } from "@fortawesome/free-solid-svg-icons";
const fetchHeading1=async ()=>{
  const data = await fetch("/api/cars/carhome/heading1")
  return await data.json();
}
const fetchHeading2=async ()=>{
  const data = await fetch("/api/cars/carhome/heading2")
  return await data.json();
}
const HeadingDesc = () => {
  const [heading1,setHeading1]=useState("");
  const [description1,setDescription1]=useState("");
  const [heading2,setHeading2]=useState("");
  const [description2,setDescription2]=useState("");

  useEffect(()=>{
    fetchHeading1().then(res=>{
      setHeading1(res?.data?.[0]?.heading1||"")
      setDescription1(res?.data?.[0]?.description1||"")
    })
    fetchHeading2().then(res=>{
      setHeading2(res?.data?.[0]?.heading2||"")
      setDescription2(res?.data?.[0]?.description2||"")
    })
  },[])
 const handleHeading1=async ()=>{
    if(!heading1 || !description1){
      return alert("Each fields are required")
    }
    const data1={heading1,description1};
    try {
      const data = await fetch("/api/cars/carhome/heading1", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data1),
      });
      console.log("seo data ----> ", data?.ok);
      if (data.ok) {
        alert("Data add succesfully");
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      console.log("something went wrong");
    }
 }
 const handleHeading2=async ()=>{
  if(!heading2 || !description2){
    return alert("Each fields are required")
  }
  const data2={heading2,description2};
  try {
    const data = await fetch("/api/cars/carhome/heading2", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data2),
    });
    console.log("seo data ----> ", data?.ok);
    if (data.ok) {
      alert("Data add succesfully");
    } else {
      alert("Something went wrong");
    }
  } catch (error) {
    console.log("something went wrong");
  }
  
 }
  return (
    <>
      <div className="flex items-center gap-5 text-primary xl:my-10 mb-5">
        <FontAwesomeIcon icon={faCube} className="text-2xl" />
        <p className="md:text-[28px] text-xl text-black">Heading Description</p>
        <FontAwesomeIcon
          icon={faArrowRightLong}
          className=" text-teal-700 text-xl"
        />
      </div>
      <div className=" grid xl:grid-cols-2 grid-cols-1 gap-5">
        <div className="bg-white  px-5 py-4 rounded-md">
          <h3 className="font-medium text-base mb-5">Heading 1</h3>
          <div>
            <h3 className=" font-semibold">Title</h3>
            <input
              className="py-0.5 mb-2 w-full border rounded h-8 px-2 focus:border-primary outline-none"
              type="text"
              value={heading1}
              onChange={(e) => setHeading1(e.target.value)}
              placeholder="Enter Title Here"
            />
          </div>
          <div>
            <label htmlFor="textarea" className="mt-3 font-semibold">
              Description
            </label>
            <textarea
              name=""
              id="textarea"
              className="mt-1 w-full border rounded h-44 px-2 focus:border-primary outline-none"
              placeholder="Enter Description Here"
              value={description1}
              onChange={(e) => setDescription1(e.target.value)}
            ></textarea>
            <div className="flex justify-end items-center">
              <button onClick={handleHeading1} className="px-5 py-1.5 bg-navyblack text-white rounded-md mt-4">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white  px-5 py-4 rounded-md">
          <h3 className="font-medium text-base mb-5">Heading 2</h3>
          <div>
            <h3 className=" font-semibold">Title</h3>
            <input
              className="py-0.5 mb-2 w-full border rounded h-8 px-2 focus:border-primary outline-none"
              type="text"
              value={heading2}
              onChange={(e) => setHeading2(e.target.value)}
              placeholder="Enter Title Here"
            />
          </div>
          <div>
            <label htmlFor="textarea2" className="mt-3 font-semibold">
              Description
            </label>
            <textarea
              name=""
              id="textarea2"
              className="mt-1 w-full border rounded h-44 px-2 focus:border-primary outline-none"
              placeholder="Enter Description Here"
              value={description2}
              onChange={(e) => setDescription2(e.target.value)}
            ></textarea>
            <div className="flex justify-end items-center">
              <button onClick={handleHeading2} className="px-5 py-1.5 bg-navyblack text-white rounded-md mt-4">
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeadingDesc;
