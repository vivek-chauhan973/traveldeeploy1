import { useRouter } from "next/router";
import "../../../../src/app/globals.css";
import React, { useEffect, useState } from "react";

const fetchCatagory = async () => {
  const response = await fetch("/api/package-setting/category/get-categories");
  const data = await response.json();
  return data;
};

const PhoneFilter = ({selectedCategories,setSelectedCategories,handleCloseModal}) => {
  const router = useRouter();
  const [packageCategory, setPackageCategory] = useState([]);
  useEffect(() => {
    fetchCatagory().then((res) => setPackageCategory(res?.data || []));
  }, []);

  const handleCheckboxChange = (id) => {
    setSelectedCategories((prev) =>
      prev.includes(id) ? prev.filter((categoryId) => categoryId !== id) : [...prev, id]
    );
  };

  const clearAll = () => {
    setSelectedCategories([]);
  };
const handleFilter=()=>{
  handleCloseModal();
}


  return (
    <>
      <div className="bg-white rounded-md">
        {/* Category */}
        <div>
          <div className="pr-5 py-2">
            <div className="flex justify-between">
              <h3 className="md:text-md text-[14px] px-5 font-medium">Categories</h3>
              <p
                onClick={clearAll}
                className="text-[12px] underline text-blue-800 cursor-pointer"
              >
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
                    id={`category-${item._id}`}
                    name={item?.category}
                    value={item?._id}
                    checked={selectedCategories.includes(item._id)}
                    onChange={() => handleCheckboxChange(item._id)}
                  />
                  <label
                    htmlFor={`category-${item._id}`}
                    className="cursor-pointer label-text md:text-[14px] text-[12px]"
                  >
                    {item?.category}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-2">
          <button
            onClick={handleFilter}
            className="bg-black text-white px-4 py-1.5 text-xs rounded-md mb-3"
          >
            Apply Filters
          </button>
        </div>
      </div>
    </>
  );
};

export default PhoneFilter;
