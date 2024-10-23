import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong, faCube } from "@fortawesome/free-solid-svg-icons";

const HeadingDesc = () => {
  return (
    <>
      <div className="flex items-center gap-5 text-primary xl:mt-5 mb-5">
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
              // value={title}
              // onChange={(e) => setTitle(e.target.value)}
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
            ></textarea>
            <div className="flex justify-end items-center">
              <button className="px-5 py-1.5 bg-navyblack text-white rounded-md mt-4">
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
              // value={title}
              // onChange={(e) => setTitle(e.target.value)}
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
            ></textarea>
            <div className="flex justify-end items-center">
              <button className="px-5 py-1.5 bg-navyblack text-white rounded-md mt-4">
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
