import "../../../app/globals.css";
import * as React from "react";
import { useState, useEffect } from "react";

const fetchCatagory = async () => {
  const response = await fetch("/api/package-setting/category/get-categories");
  const data = await response.json();
  return data;
};

export default function BlogPromoFilter({setSelectedCategories,selectedCategories}) {
  const [packageCategory, setPackageCategory] = useState([]);
  // State to manage selected IDs

  useEffect(() => {
    fetchCatagory().then((res) => setPackageCategory(res?.data || []));
  }, []);

  const handleCheckboxChange = (id) => {
    setSelectedCategories((prev) =>
      prev.includes(id) ? prev.filter((categoryId) => categoryId !== id) : [...prev, id]
    );
  };

  const clearAll = () => {
    setSelectedCategories([]); // Clear all selected IDs
  };

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
                <p
                  className="text-[12px] underline text-blue-800 cursor-pointer"
                  onClick={clearAll} // Clear all selected checkboxes
                >
                  Clear All
                </p>
              </div>
              <div className="max-h-[500px] overflow-y-scroll">
                {packageCategory?.map((item) => (
                  <div
                    key={item._id}
                    className="flex capitalize items-center gap-2 px-5 pb-2 py-2"
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
        </div>
      </div>
    </>
  );
}
