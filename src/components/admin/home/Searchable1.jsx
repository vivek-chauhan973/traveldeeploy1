import category from '@/pages/admin/blog/category';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong, faCube } from "@fortawesome/free-solid-svg-icons";

const fetchPromoListCategory = async () => {
  const response = await fetch(`/api/public/package-state/fetchpromocat?selectType=category`);
  const data = await response.json();
  return data;
}
const fetchCategory = async () => {
  const response = await fetch("/api/package-setting/category/get-categories");
  return await response.json();
}
const fetchCars = async () => {
  return await (await fetch("/api/cars/get")).json();
}
const fetchAllData = async () => {
  return await (await fetch("/api/homefooter")).json();
}
const fetchAllPackageData = async () => {
  return await (await fetch("/api/package/get-packages")).json();
}
const Searchable1 = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('category1');
  const [selectedOptions, setSelectedOptions] = useState({
    category1: [],
    category2: [],
    category3: [],
    category4: [],
    category5: [],
  });
  const [printValue, setPrintValue] = useState(0);
  const [options, setOptions] = useState({
    category1: [],
    category2: [],
    category3: [],
    category4: [],
    category5: [],
  })

  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    description: ''
  });
  useEffect(()=>{
    fetchPromoListCategory().then(res => {
      console.log("fetchPromoListCity response",res?.responseData);
    }
    ).catch(error => {
      console.log("Something is error");
    }
    )
  }, [])
   // State to control form visibility and button enablement
   const [isFormSubmitted, setIsFormSubmitted] = useState(false);
   const [isPayloadButtonEnabled, setIsPayloadButtonEnabled] = useState(false);

  const maxSelections = 1; // Maximum number of options that can be selected for each category
  const filteredOptions = options[selectedCategory].filter(option => {
    if (selectedCategory === "category3") {
      return option?.category?.toLowerCase().includes(searchQuery.toLowerCase())
    }
    else if(selectedCategory === "category1"||selectedCategory === "category2"){
      return option?.selectedItem?.toLowerCase().includes(searchQuery.toLowerCase())
    }
    return option?.name?.toLowerCase().includes(searchQuery.toLowerCase())
  }
  );
  useEffect(() => {
    fetchPromoListCategory().then(res => {
      setOptions((prevOptions) => ({
        ...prevOptions,
        category1: res?.responseData,
        category2: res?.responseData
      }));
    })
    fetchCategory().then(res => {
      setOptions((prevOptions) => ({
        ...prevOptions,
        category3: res?.data
      }));
    })
    fetchCars().then(res => {
      setOptions((prevOptions) => ({
        ...prevOptions,
        category4: res?.data
      }));
    })
    fetchAllPackageData().then(res => {
      setOptions((prevOptions) => ({
        ...prevOptions,
        category5: res.packages
      }));
    })

  }, [])
  const handleCheckboxChange = (option) => {
    // console.log("selected option is here ---->  ",option);
    // setPrintValue(printValue+1);
    // if(printValue%2===0){
    //   console.log("print value is change according to checkbox change and unchanged ------->  ",printValue)
    // }

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
      formData 
    };
    try {
      const data = await fetch("/api/home/homefooter", {
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
    console.log("Rikki Payload", payload);

  };

  // Handler for title,desc,subtitle field changes
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

   // Handle form submission
   const handleSubmitForm = () => {
    if (formData.title && formData.subtitle && formData.description) {
      // Hide the form after submission and enable "Send Payload" button
      setIsFormSubmitted(true);
      setIsPayloadButtonEnabled(true);
    }
  };

  return (
    <div className=''>
      <div className="flex items-center gap-5 text-primary my-10">
        <FontAwesomeIcon icon={faCube} className="text-2xl" />
        <p className="md:text-[28px] text-xl text-black">Selected One Promotion Package</p>
        <FontAwesomeIcon
          icon={faArrowRightLong}
          className=" text-teal-700 text-xl"
        />
      </div>
      <div className=" w-full grid xl:grid-cols-2 grid-cols-1 gap-5">
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
              <option value="category4">Section 4</option>
              <option value="category5">Section 5</option>
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
                   {(selectedCategory === "category1" || selectedCategory === "category2" ) && <span className={
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
                  {selectedCategory === "category3" && <span className={
                    selectedOptions[selectedCategory].length >= maxSelections &&
                      !selectedOptions[selectedCategory].includes(option)
                      ? "text-gray-400 cursor-not-allowed"
                      : ""
                  }>
                    {option.category}
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
            className={`mt-4 bg-navyblack text-white px-4 py-2 rounded md:w-auto w-full ${isPayloadButtonEnabled ? '' : 'opacity-50 cursor-not-allowed'}`}
            disabled={!isPayloadButtonEnabled}
          >
            Send Payload . . .
          </button>
        </div>
        {selectedOptions[selectedCategory].length > 0 && !isFormSubmitted && (
          <div className='bg-white shadow-lg rounded-lg p-5'>
            <div>
              <label htmlFor='subtitle' className=" font-semibold mb-1">Sub Title</label>
              <input
                id='subtitle'
                type="text"
                name="subtitle"
                placeholder="Enter Your Sub Title"
                value={formData.subtitle}
                onChange={handleFormChange}
                className="p-2 mb-4 w-full border rounded-md h-10 px-2 focus:border-primary outline-none"
              />
              <label htmlFor='title' className=" font-semibold mb-1">Title</label>
              <input
                id='title'
                type="text"
                name="title"
                placeholder="Enter Your Title"
                value={formData.title}
                onChange={handleFormChange}
                className="p-2 mb-4 w-full border rounded-md h-10 px-2 focus:border-primary outline-none"
              />
              <label htmlFor='description' className=" font-semibold mb-1">Description</label>
              <input
                id='description'
                type="text"
                name="description"
                placeholder="Enter Your Description"
                value={formData.description}
                onChange={handleFormChange}
                className="p-2 mb-4 w-full border rounded-md  px-2 h-12 focus:border-primary outline-none"
              />
              <button
                onClick={handleSubmitForm}
                className="mt-4 bg-navyblack text-white px-4 py-2 rounded md:w-auto w-full"
              >
                Submit
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Searchable1;
