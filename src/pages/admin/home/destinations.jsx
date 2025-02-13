import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong, faCube } from "@fortawesome/free-solid-svg-icons";
import Layout from '@/components/admin/Layout';


const fetchStates = async () => {
  const response = await fetch("/api/public/states");
  return await response.json();
}

const Destinations = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('category1');
  const [selectedOptions, setSelectedOptions] = useState({
    category1: [],
  });
  const [printValue, setPrintValue] = useState(0);
  const [options, setOptions] = useState({
    category1: [],
  });

  // Track when the component has fully hydrated on the client
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Mark that the client has hydrated

    fetchStates().then(res => {
      setOptions((prevOptions) => ({
        ...prevOptions,
        category1: res?.states,
      }));
    //   console.log("res---> ",res)
    });
  }, []);

  const maxSelections = 6; // Maximum number of options that can be selected for each category
  const filteredOptions = options[selectedCategory].filter(option => {
    return option?.name?.toLowerCase().includes(searchQuery.toLowerCase());
  });

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
      const data = await fetch("/api/home/destinationHeader", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      if (data) {
        alert("Data added successfully");
      }
    } catch (error) {
      alert("Something went wrong");
    }
  };
  // Don't render anything until the component has hydrated on the client
  if (!isClient) return null;
//   console.log("options is here----> ",selectedOptions)
  return (

      <Layout>
        <div className=''>
          <div className="flex items-center gap-5 text-primary xl:mt-5 mb-10">
            <FontAwesomeIcon icon={faCube} className="text-2xl" />
            <p className="md:text-[28px] text-xl text-black"> Select Destination States </p>
            <FontAwesomeIcon
              icon={faArrowRightLong}
              className=" text-teal-700 text-xl"
            />
          </div>
          <div className=" w-full grid xl:grid-cols-2 grid-cols-1">
            <div className='bg-white shadow-lg rounded-lg p-5'>
              <div>
                <h3 className=" font-semibold mb-1"> Select destinations states </h3>
                <select
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                  className="mb-4 p-2 w-full border rounded-md h-10 px-2 focus:border-primary outline-none"
                >
                  <option value="category1"> Section 1 </option>
                </select>
              </div>
              <div>
                <h3 className=" font-semibold mb-1"> Search State Wise destination </h3>
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
                  filteredOptions?.map((option, index) =>{
                    // console.log("option ---> ",option)
                    return (

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
                      {selectedCategory === "category1" && (
                        <span
                          className={
                            selectedOptions[selectedCategory].length >= maxSelections &&
                            !selectedOptions[selectedCategory].includes(option)
                              ? "text-gray-400 cursor-not-allowed"
                              : ""
                          }
                        >
                          {option?.name}
                        </span>
                      )}
                    </label>
                  )})
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
      </Layout>

  );
};

export default Destinations;
