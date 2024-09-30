import category from '@/pages/admin/blog/category';
import React, { useEffect, useState } from 'react';
const fetchStates=async ()=>{
  const response=await fetch("/api/public/states");
  return await response.json();
}
const fetchCategory=async ()=>{
  const response=await fetch("/api/package-setting/category/get-categories");
  return await response.json();
}
const fetchCars=async ()=>{
  return await( await fetch("/api/cars/get")).json();
}
const fetchAllData=async ()=>{
  return await( await fetch("/api/homefooter")).json();
}
const fetchAllPackageData=async ()=>{
  return await( await fetch("/api/package/get-packages")).json();
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
  });
  const [printValue,setPrintValue]=useState(0);
const [options,setOptions]=useState({
  category1: [],
  category2: [],
  category3: [],
  category4: [],
  category5: [],
})


  const maxSelections = 4; // Maximum number of options that can be selected for each category
  const filteredOptions = options[selectedCategory].filter(option =>{
    if(selectedCategory==="category3"){
     return option?.category?.toLowerCase().includes(searchQuery.toLowerCase())
    }
    return option?.name?.toLowerCase().includes(searchQuery.toLowerCase())
    }
  );
useEffect(()=>{
  fetchStates().then(res=>{setOptions((prevOptions) => ({
    ...prevOptions,
    category1: res?.states,
    category2:res?.states
  }));})
  fetchCategory().then(res=>{
    setOptions((prevOptions) => ({
      ...prevOptions,
      category3:res?.data
    }));
  })
  fetchCars().then(res=>{
    setOptions((prevOptions) => ({
      ...prevOptions,
      category4:res?.data
    }));
  })
  fetchAllPackageData().then(res=>{
    setOptions((prevOptions) => ({
      ...prevOptions,
      category5:res.packages
    }));
  })

},[])
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
    };
    try {
      const data=await fetch("/api/homefooter",{
        method:"POST",
        headers:{
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      if(data){
        alert("data added successfully");
      }
      
    } catch (error) {
      alert("something went wrong");
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm">
      <select
        value={selectedCategory}
        onChange={handleCategoryChange}
        className="mb-4 p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <option value="category1">Category 1</option>
        <option value="category2">Category 2</option>
        <option value="category3">Category 3</option>
        <option value="category4">Category 4</option>
        <option value="category5">Category 5</option>
      </select>
      <div>
        <h2 className="text-xl font-semibold mb-4">Select Options</h2>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-2 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
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
                className="mr-2 accent-blue-500"
              />
              {(selectedCategory==="category1"||selectedCategory==="category2"||selectedCategory==="category4"||selectedCategory==="category5")&&<span className={
                selectedOptions[selectedCategory].length >= maxSelections &&
                !selectedOptions[selectedCategory].includes(option)
                  ? "text-gray-400 cursor-not-allowed"
                  : ""
              }>
                {option.name}
              </span>}
              {selectedCategory==="category3"&&<span className={
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
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Send Payload
      </button>
    </div>
  );
};

export default Searchable;
