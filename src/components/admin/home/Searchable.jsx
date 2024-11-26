import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong, faCube } from "@fortawesome/free-solid-svg-icons";

const fetchStates = async () => {
  const response = await fetch("/api/public/states");
  return await response.json();
}
const fetchCategory = async () => {
  const response = await fetch("/api/package-setting/category/get-categories");
  return await response.json();
}
const fetchCars = async () => {
  return await (await fetch("/api/cars/get")).json();
}
const fetchCities = async () => {
  const res = await fetch('/api/location/city');
  return await res.json();
}
const fetchAllData = async () => {
  return await (await fetch("/api/homefooter")).json();
}
const fetchAllPackageData = async () => {
  return await (await fetch("/api/package/get-packages")).json();
}
const fetchAllCarPackagesData = async () => {
  const response = await fetch("/api/cars/package/get-packages");
  return await response.json();
}
const fetchPromoList = async () => {
  const response = await fetch(`/api/public/package-state/fetchpromocat?selectType=state`);
  const data = await response.json();
  return data;
}
const fetchPromoListCity = async () => {
  const response = await fetch(`/api/public/package-state/fetchpromocat?selectType=city`);
  const data = await response.json();
  return data;
}
const fetchCarPromoList = async () => {
  const response = await fetch(
    `/api/public/package-state/carpromo/fetchpromocat?selectType=city`
  );
  const data = await response.json();
  return data;
};
const fetchBlogs=async (id)=>{
  return (await(await fetch(`/api/blog/getallblogs?selectType=${id}`)).json())
}
const Searchable = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('category1');
  const [selectedOptions, setSelectedOptions] = useState({
    category1: [],
    category2: [],
    category3: [],
    category4: [],
    category5: [],
    category6: [],
    category7: [],
    category8: [],
    category9: [],
  });
  const [printValue, setPrintValue] = useState(0);
  const [options, setOptions] = useState({
    category1: [],
    category2: [],
    category3: [],
    category4: [],
    category5: [],
    category6: [],
    category7: [],
    category8: [],
    category9: [],
  })


  const maxSelections = 12; // Maximum number of options that can be selected for each category
  const filteredOptions = options[selectedCategory].filter(option => {
    if (selectedCategory === "category3") {
      return option?.category?.toLowerCase().includes(searchQuery.toLowerCase())
    }
    else if(selectedCategory === "category1"||selectedCategory === "category2"||selectedCategory === "category6"){
      return option?.selectedItem?.toLowerCase().includes(searchQuery.toLowerCase())
    }
    else if(selectedCategory === "category8"||selectedCategory === "category9"){
      return option?.title?.toLowerCase().includes(searchQuery.toLowerCase())
    }
    return option?.name?.toLowerCase().includes(searchQuery.toLowerCase())
  }
  );
  useEffect(() => {
    fetchPromoList().then(res => {
      setOptions((prevOptions) => ({
        ...prevOptions,
        category1: res?.responseData
      }));
    })
    fetchPromoListCity().then(res => {
      setOptions((prevOptions) => ({
        ...prevOptions,
        category2: res?.responseData
      }));
    })
    fetchCategory().then(res => {
      setOptions((prevOptions) => ({
        ...prevOptions,
        category3: res?.data
      }));
    })
    fetchAllCarPackagesData().then(res => {
      setOptions((prevOptions) => ({
        ...prevOptions,
        category4: res?.packages
      }));
    })
    fetchAllPackageData().then(res => {
      setOptions((prevOptions) => ({
        ...prevOptions,
        category5: res.packages
      }));
    })
    fetchCities().then(res => {
      setOptions((prevOptions) => ({
        ...prevOptions,
        category7: res.result
      }));
    })
    fetchCarPromoList().then((res) => {
      setOptions((prevOptions) => ({
        ...prevOptions,
        category6: res?.responseData,
      }));
      
    });
    fetchBlogs("travel-guide").then((res) => {
      setOptions((prevOptions) => ({
        ...prevOptions,
        category8: res?.data,
      }));
      
    });
    fetchBlogs("blog").then((res) => {
      setOptions((prevOptions) => ({
        ...prevOptions,
        category9: res?.data,
      }));
      
    });

  }, [])


  const handleCheckboxChange = (option) => {
    

    if (selectedOptions[selectedCategory].includes(option)) {
      // Uncheck if already selected

      setSelectedOptions(prevSelected => ({
        ...prevSelected,
        [selectedCategory]: prevSelected[selectedCategory].filter(item => item !== option),
      }));
    } else if (selectedOptions[selectedCategory].length < maxSelections) {
      // Only allow selection if below the limit
      setSelectedOptions(prevSelected => ({
        ...prevSelected,
        [selectedCategory]: [...prevSelected[selectedCategory], option],
      }));
    }
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setSearchQuery('');
  };

  const handlePayloadSend = async () => {
    const payload = {
      category: selectedCategory,
      selectedOptions: selectedOptions[selectedCategory],
    };
    try {
      const data = await fetch("/api/homefooter", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      if (data) {
        alert("data added successfully");
      }

    } catch (error) {
      alert("something went wrong");
    }
  };

console.log("option",filteredOptions);

  return (
    <div className=''>
      <div className="flex items-center gap-5 text-primary xl:mt-5 mb-10">
        <FontAwesomeIcon icon={faCube} className="text-2xl" />
        <p className="md:text-[28px] text-xl text-black">Selected Package</p>
        <FontAwesomeIcon
          icon={faArrowRightLong}
          className=" text-teal-700 text-xl"
        />
      </div>
      <div className=" w-full grid xl:grid-cols-2 grid-cols-1">
        <div className='bg-white shadow-lg rounded-lg p-5'>
          <div>
            <h3 className=" font-semibold mb-1">Select Category</h3>
            <select
              value={selectedCategory}
              onChange={handleCategoryChange}
              className="mb-4 p-2 w-full border rounded-md h-10 px-2 focus:border-primary outline-none"
            >
              <option value="category1">Section 1</option>
              <option value="category2">Section 2</option>
              <option value="category3">Section 3</option>
              <option value="category4">Section 4(cars)</option>
              <option value="category5">Section 5</option>
              <option value="category6">Section 6 (car promo)</option>
              <option value="category7">Popular Cities</option>
              <option value="category8">Travel Guide</option>
              <option value="category9">Blogs</option>
            </select>
          </div>
          <div>
            <h3 className=" font-semibold mb-1">Select State Wise Package</h3>
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="p-2 mb-4 w-full border rounded-md h-10 px-2 focus:border-primary outline-none"
            />
          </div>
          <div className="max-h-64 overflow-y-auto">
            {filteredOptions?.length > 0 ? (
              filteredOptions?.map((option, index) => (
                <label key={index} className="flex items-center mb-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedOptions[selectedCategory].includes(option._id)}
                    onChange={() => handleCheckboxChange(option?._id)}
                    disabled={
                      selectedOptions[selectedCategory].length >= maxSelections &&
                      !selectedOptions[selectedCategory].includes(option._id)
                    }
                    className="mr-2 accent-navyblack"
                  />
                  {(selectedCategory === "category1"||selectedCategory === "category6" || selectedCategory === "category2" ) && <span className={
                    selectedOptions[selectedCategory].length >= maxSelections &&
                      !selectedOptions[selectedCategory].includes(option)
                      ? "text-gray-400 cursor-not-allowed"
                      : ""
                  }>
                    {option?.selectedItem}
                  </span>}
                  {( selectedCategory === "category4" || selectedCategory === "category5") && <span className={
                    selectedOptions[selectedCategory].length >= maxSelections &&
                      !selectedOptions[selectedCategory].includes(option)
                      ? "text-gray-400 cursor-not-allowed"
                      : ""
                  }>
                    {option.name}
                  </span>}
                  {(selectedCategory === "category7") && <span className={
                    selectedOptions[selectedCategory].length >= maxSelections &&
                      !selectedOptions[selectedCategory].includes(option)
                      ? "text-gray-400 cursor-not-allowed"
                      : ""
                  }>
                    {option.name}
                  </span>}
                  {selectedCategory === "category3" && <span className={
                    selectedOptions[selectedCategory].length >= maxSelections &&
                      !selectedOptions[selectedCategory].includes(option)
                      ? "text-gray-400 cursor-not-allowed"
                      : ""
                  }>
                    {option.category}
                  </span>}
                  {(selectedCategory === "category8"||selectedCategory === "category9" ) && <span className={
                    selectedOptions[selectedCategory].length >= maxSelections &&
                      !selectedOptions[selectedCategory].includes(option)
                      ? "text-gray-400 cursor-not-allowed"
                      : ""
                  }>
                    {option?.title}
                  </span>}
                </label>
              ))
            ) : (
              <p className="text-gray-500">No options found.</p>
            )}
          </div>
          {selectedOptions[selectedCategory].length >= maxSelections && (
            <p className="text-red-500 text-sm mt-2">
              You can only select up to {maxSelections} options.
            </p>
          )}
          <button
            onClick={handlePayloadSend}
            className="mt-4 bg-navyblack text-white px-4 py-2 rounded md:w-auto w-full"
          >
            Send Payload
          </button>
        </div>
      </div>
    </div>
  );
};

export default Searchable;
