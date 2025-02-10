import "../app/globals.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useState, useEffect } from "react";
import { useAppContext } from "./admin/context/Package/AddGuest";

const MAX = 200000;
const MIN = 5000;
const MAX_DAYS = 100;
const MIN_DAYS = 1;
const priceMarks = [
  { value: MIN, label: "" },
  { value: MAX, label: "" },
];

const fetchCatagory = async () => {
  const response = await fetch("/api/package-setting/category/get-categories");
  const data = await response.json();
  return data;
};

export default function SearchPageFilter({
  setClearAll,
}) {
  const [priceRange, setPriceRange] = useState([5000, 200000]);
  const [durationRange, setDurationRange] = useState([MIN_DAYS, MAX_DAYS]);
  const [packageCategory, setPackageCategory] = useState([]);
  const [categoryId, setCategoryId] = useState([]);
  const { filterApi } = useAppContext();
  
  // Track the active state of the price and duration buttons
  const [activePriceRange, setActivePriceRange] = useState(null);
  const [activeDurationRange, setActiveDurationRange] = useState(null);

  useEffect(() => {
    fetchCatagory().then((res) => setPackageCategory(res?.data || []));
  }, []);

  const filterData = {
    durationRange,
    priceRange,
    categoryId,
  };

  useEffect(() => {
    filterApi(filterData?.durationRange, filterData?.priceRange, filterData?.categoryId);
  }, [
    durationRange?.[0],
    durationRange?.[1],
    priceRange?.[0],
    priceRange?.[1],
    categoryId?.length,
  ]);

  // Updated to handle category selection
  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    setCategoryId((prev) => {
      if (prev.includes(value)) {
        return prev.filter((item) => item !== value);
      } else {
        return [...prev, value];
      }
    });
  };

  const handleSubmit = () => {
    setClearAll(false);
  };

  const handleClearAll = () => {
    setPriceRange([5000, 200000]);
    setDurationRange([1, 100]);
    setCategoryId([]);
    setClearAll(true);
    document.querySelectorAll("input[type=checkbox]").forEach((el) => (el.checked = false));
    setActivePriceRange(null);  // Reset active price range
    setActiveDurationRange(null);  // Reset active duration range
  };

  const handlePriceButtonClick = (min, max) => {
    if (activePriceRange === `${min}-${max}`) {
      setPriceRange([5000, 200000]);  // Reset to default if the same range is clicked again
      setActivePriceRange(null);  // Deactivate the button
    } else {
      setPriceRange([min, max]);
      setActivePriceRange(`${min}-${max}`);  // Set the clicked range as active
    }
  };

  const handleDurationButtonClick = (min, max) => {
    if (activeDurationRange === `${min}-${max}`) {
      setDurationRange([MIN_DAYS, MAX_DAYS]);  // Reset to default if the same range is clicked again
      setActiveDurationRange(null);  // Deactivate the button
    } else {
      setDurationRange([min, max]);
      setActiveDurationRange(`${min}-${max}`);  // Set the clicked range as active
    }
  };

  return (
    <div>
      <div className="bg-white rounded-md sticky top-2">
        <div className="md:p-5 p-2">
          <div className="flex justify-between md:pb-2 pb-1">
            <h3 className="md:text-[16px] text-[14px] font-medium">Package Prices</h3>
            <p
              onClick={handleClearAll}
              className="text-[12px] underline text-blue-800 cursor-pointer"
            >
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
              min={MIN}
              max={MAX}
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
            <div className="flex gap-3 my-3">
              <button
                className={`px-2 py-2 w-1/2 border ${activePriceRange === "5000-30000" ? "border-blue-500" : "border-slate-300"} hover:border-slate-500 text-gray-600 rounded-full`}
                onClick={() => handlePriceButtonClick(5000, 30000)}
              >
                ₹5,000 - ₹30,000
              </button>
              <button
                className={`px-2 py-2 w-1/2 border ${activePriceRange === "30000-50000" ? "border-blue-500" : "border-slate-300"} hover:border-slate-500 text-gray-600 rounded-full`}
                onClick={() => handlePriceButtonClick(30000, 50000)}
              >
                ₹30,000 - ₹50,000
              </button>
            </div>
            <div className="flex gap-3">
              <button
                className={`px-2 py-2 w-1/2 border ${activePriceRange === "20000-120000" ? "border-blue-500" : "border-slate-300"} hover:border-slate-500 text-gray-600 rounded-full`}
                onClick={() => handlePriceButtonClick(20000, 120000)}
              >
                ₹50,000 - ₹1.2L
              </button>
              <button
                className={`px-2 py-2 w-1/2 border ${activePriceRange === "120000-200000" ? "border-blue-500" : "border-slate-300"} hover:border-slate-500 text-gray-600 rounded-full`}
                onClick={() => handlePriceButtonClick(120000, MAX)}
              >
                ₹1.2L & above
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="border-t md:px-5 py-3 p-2">
            <h3 className="md:text-[16px] text-[14px] font-medium my-2">Tour Duration</h3>
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
              <div className="flex gap-3 my-3">
                <button
                  className={`px-2 py-2 w-1/2 border ${activeDurationRange === "1-3" ? "border-blue-500" : "border-slate-300"} hover:border-slate-500 text-gray-600 rounded-full`}
                  onClick={() => handleDurationButtonClick(1, 3)}
                >
                  1 - 3 days
                </button>
                <button
                  className={`px-2 py-2 w-1/2 border ${activeDurationRange === "3-15" ? "border-blue-500" : "border-slate-300"} hover:border-slate-500 text-gray-600 rounded-full`}
                  onClick={() => handleDurationButtonClick(3, 15)}
                >
                  3 - 15 days
                </button>
              </div>
              <div className="flex gap-3">
                <button
                  className={`px-2 py-2 w-1/2 border ${activeDurationRange === "15-27" ? "border-blue-500" : "border-slate-300"} hover:border-slate-500 text-gray-600 rounded-full`}
                  onClick={() => handleDurationButtonClick(15, 27)}
                >
                  15- 27 days
                </button>
                <button
                  className={`px-2 py-2 w-1/2 border ${activeDurationRange === "27-100" ? "border-blue-500" : "border-slate-300"} hover:border-slate-500 text-gray-600 rounded-full`}
                  onClick={() => handleDurationButtonClick(27, MAX_DAYS)}
                >
                  27 & above
                </button>
              </div>
            </div>
          </div>
          <div className="border-b md:mt-2 mt-1"></div>
          <div className="pr-5 py-2">
            <h3 className="md:text-[16px] text-[14px] font-medium md:my-2 my-1 px-5">Package Category</h3>
            <div className=" overflow-y-scroll max-h-[2z50px]">
              {packageCategory?.map((item) => (
                <div key={item._id} className="flex capitalize items-center gap-2 px-5 pb-2 py-2">
                  <input
                    className="cursor-pointer md:h-5 md:w-5 h-4 w-4 rounded-lg accent-navyblack"
                    type="checkbox"
                    id={`category-${item._id}`}
                    name={item?.category}
                    value={item?._id}
                    onChange={handleCheckboxChange}
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
  );
}
