import { useRouter } from "next/router";
import "../../../../src/app/globals.css"
import React, { useState } from "react";

const PhoneFilter = () => {

  const router = useRouter()
  const handleChangeArticles = (e) => {
    if (e.target.checked) {
      router.push("/blog/articles")
    }
    else {
      router.push("/blog")
    }
  }
  const handleChangeBlogPost = (e) => {
    if (e.target.checked) {
      router.push("/blog/blog-posts")
    }
    else {
      router.push("/blog")
    }
  }
  const handleChangeGuides = (e) => {
    if (e.target.checked) {
      router.push("/blog/guides")
    }
    else {
      router.push("/blog")
    }
  }
  return (
    <>
      <div className="bg-white rounded-md">
        {/* Resource Type */}
        <div className="xl:p-5 p-4">
          <div className="flex justify-between">
            <h3 className="md:text-md text-[14px] font-medium">Resource Type</h3>
            <p className="text-[12px] underline text-blue-800 cursor-pointer">Clear All</p>
          </div>
        </div>
        <div>
          <div
            className="flex capitalize items-center gap-2 xl:pb-5 pb-3 px-5">
            <input
              className="cursor-pointer xl:h-5 xl:w-5 h-4 w-4 rounded-lg accent-navyblack"
              type="radio"
              id="category1"
              onChange={handleChangeBlogPost}
              name="radio"
              value=""
            />
            <label htmlFor="category1" className="cursor-pointer label-text md:text-[14px] text-[12px]">
              BlogPost
            </label>
          </div>
          <div
            className="flex capitalize items-center gap-2 xl:pb-5 pb-3 px-5">
            <input
              className="cursor-pointer xl:h-5 xl:w-5 h-4 w-4 rounded-lg accent-navyblack"
              type="radio"
              id="category1"
              onChange={handleChangeGuides}
              name="radio"
              value=""
            />
            <label htmlFor="category2" className="cursor-pointer label-text md:text-[14px] text-[12px]">
              Guides
            </label>
          </div>
          <div
            className="flex capitalize items-center gap-2 px-5">
            <input
              className="cursor-pointer xl:h-5 xl:w-5 h-4 w-4 rounded-lg accent-navyblack"
              type="radio"
              id="category3"
              onChange={handleChangeArticles}
              name="radio"
              value=""
            />
            <label htmlFor="category3" className="cursor-pointer label-text md:text-[14px] text-[12px]">
              Articles
            </label>
          </div>
        </div>
        {/* Category */}
        <div className="xl:p-5 p-4">
          <div >
            <h3 className="md:text-md text-[14px] font-medium">Category</h3>
          </div>
        </div>
        <div>
          <div
            className="flex capitalize items-center gap-2 xl:pb-5 pb-3 px-5">
            <input
              className="cursor-pointer xl:h-5 xl:w-5 h-4 w-4 rounded-lg accent-navyblack"
              type="checkbox"
              id="category1"
              name=""
              value=""
            />
            <label htmlFor="category1" className="cursor-pointer label-text md:text-[14px] text-[12px]">
              Awosome Blog
            </label>
          </div>
          <div
            className="flex capitalize items-center gap-2 xl:pb-5 pb-3 px-5">
            <input
              className="cursor-pointer xl:h-5 xl:w-5 h-4 w-4 rounded-lg accent-navyblack"
              type="checkbox"
              id="category1"
              name=""
              value=""
            />
            <label htmlFor="category1" className="cursor-pointer label-text md:text-[14px] text-[12px]">
              Fantastic Blog
            </label>
          </div>
          <div
            className="flex capitalize items-center gap-2 xl:pb-5 pb-3 px-5">
            <input
              className="cursor-pointer xl:h-5 xl:w-5 h-4 w-4 rounded-lg accent-navyblack"
              type="checkbox"
              id="category1"
              name=""
              value=""
            />
            <label htmlFor="category1" className="cursor-pointer label-text md:text-[14px] text-[12px]">
              Smooth Blog
            </label>
          </div>
          <div
            className="flex capitalize items-center gap-2 xl:pb-5 pb-3 px-5">
            <input
              className="cursor-pointer xl:h-5 xl:w-5 h-4 w-4 rounded-lg accent-navyblack"
              type="checkbox"
              id="category1"
              name=""
              value=""
            />
            <label htmlFor="category1" className="cursor-pointer label-text md:text-[14px] text-[12px]">
              Stylish Blog
            </label>
          </div>
          <div
            className="flex capitalize items-center gap-2 xl:pb-5 pb-3 px-5">
            <input
              className="cursor-pointer xl:h-5 xl:w-5 h-4 w-4 rounded-lg accent-navyblack"
              type="checkbox"
              id="category1"
              name=""
              value=""
            />
            <label htmlFor="category1" className="cursor-pointer label-text md:text-[14px] text-[12px]">
              Fantastic Blog
            </label>
          </div>
        </div>
        <div className="flex justify-center mt-2">
          <button className="bg-black text-white px-4 py-1.5 text-xs rounded-md mb-3">Apply Filters</button>
        </div>
      </div>
    </>
  )
}
export default PhoneFilter;
