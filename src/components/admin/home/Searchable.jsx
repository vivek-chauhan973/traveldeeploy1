import React, { useState } from 'react';

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

  const options = {
    category1: ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5', 'Option 6'],
    category2: ['Option A', 'Option B', 'Option C', 'Option D'],
    category3: ['Option X', 'Option Y', 'Option Z'],
    category4: ['Option P', 'Option Q', 'Option R'],
    category5: ['Option M', 'Option N', 'Option O'],
  };

  const maxSelections = 4; // Maximum number of options that can be selected for each category

  const filteredOptions = options[selectedCategory].filter(option =>
    option.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
    setSearchQuery(''); // Reset search query when category changes
  };

  const handlePayloadSend = () => {
    const payload = {
      category: selectedCategory,
      selectedOptions: selectedOptions[selectedCategory],
    };
    console.log('Payload:', payload);
    // You can send the payload using an API call here, for example:
    // axios.post('/api/endpoint', payload);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm">
      {/* Category Dropdown */}
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

      {/* Search Bar */}
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

      {/* Checkbox List */}
      <div className="max-h-64 overflow-y-auto">
        {filteredOptions.length > 0 ? (
          filteredOptions.map((option, index) => (
            <label key={index} className="flex items-center mb-2 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedOptions[selectedCategory].includes(option)}
                onChange={() => handleCheckboxChange(option)}
                disabled={
                  selectedOptions[selectedCategory].length >= maxSelections &&
                  !selectedOptions[selectedCategory].includes(option)
                }
                className="mr-2 accent-blue-500"
              />
              <span className={
                selectedOptions[selectedCategory].length >= maxSelections &&
                !selectedOptions[selectedCategory].includes(option)
                  ? "text-gray-400 cursor-not-allowed"
                  : ""
              }>
                {option}
              </span>
            </label>
          ))
        ) : (
          <p className="text-gray-500">No options found.</p>
        )}
      </div>

      {/* Message showing limit reached */}
      {selectedOptions[selectedCategory].length >= maxSelections && (
        <p className="text-red-500 text-sm mt-2">
          You can only select up to {maxSelections} options.
        </p>
      )}

      {/* Send Payload Button */}
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
