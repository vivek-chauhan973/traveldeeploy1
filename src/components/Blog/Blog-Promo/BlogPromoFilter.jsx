// import { useRouter } from "next/router";
// import "../../../../src/app/globals.css"
// import React, { useState } from "react";

// const BlogPromoFilter = () => {

//   return (
//     <>
//       <div className="bg-white rounded-md">
//         {/* Resource Type */}
//         <div className="sticky top-2 md:p-5 p-2">
//           <div className="flex justify-between">
//             <h3 className="md:text-md text-[14px] font-medium"></h3>
//             <p className="text-[12px] underline text-blue-800 cursor-pointer">Clear All</p>
//           </div>
//         </div>
//         {/* <div>
//           <div
//             className="flex capitalize items-center gap-2 pb-5 px-5">
//             <input
//               className="cursor-pointer md:h-5 md:w-5 h-4 w-4 rounded-lg accent-navyblack"
//               type="checkbox"
//               id="category1"
//               name="category1"
//               value=""
//             />
//             <label htmlFor="category1" className="cursor-pointer label-text md:text-[14px] text-[12px]">
//               BlogPost
//             </label>
//           </div>
//           <div
//             className="flex capitalize items-center gap-2 pb-5 px-5">
//             <input
//               className="cursor-pointer md:h-5 md:w-5 h-4 w-4 rounded-lg accent-navyblack"
//               type="checkbox"
//               id="category2"
//               name="category2"
//               value=""
//             />
//             <label htmlFor="category2" className="cursor-pointer label-text md:text-[14px] text-[12px]">
//               Guides
//             </label>
//           </div>
//           <div
//             className="flex capitalize items-center gap-2 px-5">
//             <input
//               className="cursor-pointer md:h-5 md:w-5 h-4 w-4 rounded-lg accent-navyblack"
//               type="checkbox"
//               id="category3"
//               name="category3"
//               value=""
//             />
//             <label htmlFor="category3" className="cursor-pointer label-text md:text-[14px] text-[12px]">
//               Articles
//             </label>
//           </div>
//         </div> */}
//         {/* Category */}
//         <div className="md:p-5 p-2">
//           <div >
//             <h3 className="md:text-md text-[14px] font-medium">Category</h3>
//           </div>
//         </div>
//         <div>
//           <div
//             className="flex capitalize items-center gap-2 pb-5 px-5">
//             <input
//               className="cursor-pointer md:h-5 md:w-5 h-4 w-4 rounded-lg accent-navyblack"
//               type="checkbox"
//               id="category1"
//               name=""
//               value=""
//             />
//             <label htmlFor="category1" className="cursor-pointer label-text md:text-[14px] text-[12px]">
//               Awosome Blog
//             </label>
//           </div>
//           <div
//             className="flex capitalize items-center gap-2 pb-5 px-5">
//             <input
//               className="cursor-pointer md:h-5 md:w-5 h-4 w-4 rounded-lg accent-navyblack"
//               type="checkbox"
//               id="category1"
//               name=""
//               value=""
//             />
//             <label htmlFor="category1" className="cursor-pointer label-text md:text-[14px] text-[12px]">
//               Fantastic Blog
//             </label>
//           </div>
//           <div
//             className="flex capitalize items-center gap-2 pb-5 px-5">
//             <input
//               className="cursor-pointer md:h-5 md:w-5 h-4 w-4 rounded-lg accent-navyblack"
//               type="checkbox"
//               id="category1"
//               name=""
//               value=""
//             />
//             <label htmlFor="category1" className="cursor-pointer label-text md:text-[14px] text-[12px]">
//               Smooth Blog
//             </label>
//           </div>
//           <div
//             className="flex capitalize items-center gap-2 pb-5 px-5">
//             <input
//               className="cursor-pointer md:h-5 md:w-5 h-4 w-4 rounded-lg accent-navyblack"
//               type="checkbox"
//               id="category1"
//               name=""
//               value=""
//             />
//             <label htmlFor="category1" className="cursor-pointer label-text md:text-[14px] text-[12px]">
//               Stylish Blog
//             </label>
//           </div>
//           <div
//             className="flex capitalize items-center gap-2 pb-5 px-5">
//             <input
//               className="cursor-pointer md:h-5 md:w-5 h-4 w-4 rounded-lg accent-navyblack"
//               type="checkbox"
//               id="category1"
//               name=""
//               value=""
//             />
//             <label htmlFor="category1" className="cursor-pointer label-text md:text-[14px] text-[12px]">
//               Fantastic Blog
//             </label>
//           </div>
//         </div>
//         <div className="flex justify-center mt-2 xl:hidden">
//           <button className="bg-black text-white px-4 py-1.5 text-xs rounded-md mb-3">Apply Filters</button>
//         </div>
//       </div>
//     </>
//   )
// }
// export default BlogPromoFilter

import "../../../app/globals.css";
import * as React from "react";
import { useState, useEffect } from "react";
const fetchCatagory = async () => {
  const response = await fetch("/api/package-setting/category/get-categories");
  const data = await response.json();
  return data;
};

export default function BlogPromoFilter() {
  const [packageCategory, setPackageCategory] = useState([]);
  const [filter, setFilter] = useState(false);
  useEffect(() => {
    fetchCatagory().then((res) => setPackageCategory(res?.data || []));
  }, []);
  const handleSubmit = () => {
    const filters = {
      priceRange,
      tourDuration,
      departureCity,
      packageCategory,
    };
    setFilter(!filter);
    onApplyFilter(filters);
    setClearAll(false);
  };

  // console.log("package data",packageCategory)
  return (
    <>
      <div>
        <div className="bg-white rounded-md sticky top-2">
          <div>
            <div className="pr-5 py-2">
              <div className="flex justify-between">
                <h3 className="md:text-md text-[14px] px-5 font-medium">
                  Categories
                </h3>
                <p className="text-[12px] underline text-blue-800 cursor-pointer">
                  Clear All
                </p>
              </div>
              <div>
                {packageCategory?.map((item) => (
                  <div
                    key={item._id}
                    className="flex capitalize items-center gap-2 px-5 pb-2 py-2 "
                  >
                    <input
                      className="cursor-pointer md:h-5 md:w-5 h-4 w-4 rounded-lg accent-navyblack"
                      type="checkbox"
                      id="category1"
                      name={item?.category}
                      value={item?._id}
                      
                    />
                    <label
                      htmlFor="category1"
                      className="cursor-pointer label-text md:text-[14px] text-[12px]"
                    >
                      {item?.category}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-2 xl:hidden">
            <button
              onClick={handleSubmit}
              className="bg-black text-white px-4 py-1.5 text-xs rounded-md mb-3"
            >
              Apply Filters
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
