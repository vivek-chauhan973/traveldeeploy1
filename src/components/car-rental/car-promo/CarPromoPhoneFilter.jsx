import "../../../app/globals.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useState, useEffect } from "react";

const MAX_PRICE = 50000;
const MIN_PRICE = 0;
const MAX_DAYS = 30;
const MIN_DAYS = 1;

const priceMarks = [
  { value: MIN_PRICE, label: "" },
  { value: MAX_PRICE, label: "" },
];

// Helper function for aria label
function valuetext(value) {
  return `${value}°C`;
}

const fetchFilteredData = async (locationId, priceRange, days, category) => {
  const data = await fetch(
    `/api/cars/public/filter-packages?locationId=${locationId}&price=${priceRange}&days=${days}&category=${category}`
  );
  return await data.json();
};

// Fetch package categories
const fetchCategories = async () => {
  try {
    const categoriesList = await fetch(
      "/api/cars/package-setting/category/get-categories"
    );
    const categories = await categoriesList.json();
    console.log("Categories fetched:", categories); // Log the fetched categories
    return categories;
  } catch (err) {
    console.log("Error fetching categories:", err);
    return [];
  }
};

const CarPromoPhoneFilter = ({ cityId }) => {
  const [priceRange, setPriceRange] = useState([MIN_PRICE, MAX_PRICE]);
  const [durationRange, setDurationRange] = useState([MIN_DAYS, MAX_DAYS]);
  const [packageCategory, setPackageCategory] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    fetchCategories().then((res) => {
      console.log("Categories loaded into state:", res?.data); // Check the loaded data
      setPackageCategory(res?.data || []);
    });
  }, []);

  useEffect(() => {
    const data = { priceRange, durationRange, selectedCategories };
    fetchFilteredData(
      cityId,
      data?.priceRange,
      data?.durationRange,
      data?.selectedCategories
    ).then((res) => console.log("Filtered data:", res));
  }, [cityId, priceRange, durationRange, selectedCategories]);

  // Handlers for price range buttons
  const handlePriceButtonClick = (min, max) => {
    setPriceRange([min, max]);
  };

  // Handlers for duration range buttons
  const handleDurationButtonClick = (min, max) => {
    setDurationRange([min, max]);
  };

  // Handler for category checkbox change
  const handleCategoryChange = (categoryId) => {
    setSelectedCategories(
      (prevCategories) =>
        prevCategories.includes(categoryId)
          ? prevCategories.filter((id) => id !== categoryId) // Remove if already selected
          : [...prevCategories, categoryId] // Add if not selected
    );
  };

  return (
    <div>
      <div className="bg-white rounded-md sticky top-2">
        {/* Price Range Section */}
        <div className="md:p-5 p-2">
          <div className="flex justify-between md:pb-2 pb-1">
            <h3 className="md:text-[16px] text-[14px] font-medium">
              Package Prices
            </h3>
            <p className="text-[12px] underline text-blue-800 cursor-pointer">
              Clear All
            </p>
          </div>
          <Box>
            <Slider
              className="w-full"
              marks={priceMarks}
              step={100}
              value={priceRange}
              valueLabelDisplay="auto"
              min={MIN_PRICE}
              max={MAX_PRICE}
              onChange={(_, newValue) => setPriceRange(newValue)}
              sx={{ color: "#2A2C41" }}
            />
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <p className="md:text-para text-[12px]">
                {priceRange[0].toLocaleString("en-IN", {
                  style: "currency",
                  currency: "INR",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                })}{" "}
                -{" "}
                {priceRange[1].toLocaleString("en-IN", {
                  style: "currency",
                  currency: "INR",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                })}{" "}
                Prices
              </p>
            </Box>
          </Box>
          <div className="md:text-para text-sm font-light">
            <div className="flex md:gap-3 gap-1 my-3 md:text-sm text-xs">
              <button
                className="px-1 py-2 w-1/2 border border-slate-300 hover:border-slate-500 text-gray-600 rounded-full"
                onClick={() => handlePriceButtonClick(5000, 10000)}
              >
                ₹5,000 - ₹10,000
              </button>
              <button
                className="px-1 py-2 w-1/2 border border-slate-300 hover:border-slate-500 text-gray-600 rounded-full"
                onClick={() => handlePriceButtonClick(10000, 20000)}
              >
                ₹10,000 - ₹20,000
              </button>
            </div>
            <div className="flex md:gap-3 gap-1 md:text-sm text-xs">
              <button
                className="px-1 py-2 w-1/2 border border-slate-300 hover:border-slate-500 text-gray-600 rounded-full"
                onClick={() => handlePriceButtonClick(20000, 40000)}
              >
                ₹20,000 - ₹40,000
              </button>
              <button
                className="px-1 py-2 w-1/2 border border-slate-300 hover:border-slate-500 text-gray-600 rounded-full"
                onClick={() => handlePriceButtonClick(40000, MAX_PRICE)}
              >
                ₹40,000 & above
              </button>
            </div>
          </div>
        </div>

        {/* Tour Duration Section */}
        <div className="border-t md:px-5 py-3 p-2">
          <h3 className="md:text-[16px] text-[14px] font-medium my-2">
            Tour Duration
          </h3>
          <Box sx={{ width: "100%" }}>
            <Slider
              getAriaLabel={() => "Tour duration range"}
              value={durationRange}
              valueLabelDisplay="auto"
              min={MIN_DAYS}
              max={MAX_DAYS}
              onChange={(_, newValue) => setDurationRange(newValue)}
              sx={{ color: "#2A2C41" }}
            />
          </Box>
          <div className="flex justify-between md:mb-2 mb-2">
            <p className="md:text-[14px] text-[12px]">
              Min <span>{durationRange[0]} days</span>
            </p>
            <p className="md:text-[14px] text-[12px]">
              Max <span>{durationRange[1]} days</span>
            </p>
          </div>
          <div className="md:text-para text-sm font-light">
            <div className="flex gap-3 my-3 md:text-sm text-xs">
              <button
                className="px-2 py-2 w-1/2 border border-slate-300 hover:border-slate-500 text-gray-600 rounded-full"
                onClick={() => handleDurationButtonClick(1, 3)}
              >
                1 - 3 days
              </button>
              <button
                className="px-2 py-2 w-1/2 border border-slate-300 hover:border-slate-500 text-gray-600 rounded-full"
                onClick={() => handleDurationButtonClick(3, 8)}
              >
                3 - 8 days
              </button>
            </div>
            <div className="flex gap-3 md:text-sm text-xs">
              <button
                className="px-2 py-2 w-1/2 border border-slate-300 hover:border-slate-500 text-gray-600 rounded-full"
                onClick={() => handleDurationButtonClick(8, 15)}
              >
                8 - 15 days
              </button>
              <button
                className="px-2 py-2 w-1/2 border border-slate-300 hover:border-slate-500 text-gray-600 rounded-full"
                onClick={() => handleDurationButtonClick(15, MAX_DAYS)}
              >
                15 & above
              </button>
            </div>
          </div>
        </div>

        {/* Package Category Section */}
        <div className="border-b md:mt-2 mt-1"></div>
        <div className="">
          <h3 className="md:text-[16px] text-[14px] font-medium my-3 md:ml-3">
            Package Category
          </h3>
          <div className="overflow-scroll max-h-[200px] md:pl-5 pl-2">
            {packageCategory.length > 0 ? (
              packageCategory.map((category) => (
                <label key={category._id} className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    className="form-checkbox"
                    value={category._id}
                    onChange={() => handleCategoryChange(category._id)}
                  />
                  <span className="ml-2 text-sm">{category.category}</span>
                </label>
              ))
            ) : (
              <p className="text-gray-500 text-sm">No categories available.</p>
            )}
          </div>
        </div>
        <div className="flex justify-center">
          <button className="bg-black text-white px-4 py-1.5 text-xs rounded-md mt-5">
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarPromoPhoneFilter;
