import { useEffect, useState } from "react";
// Fetch data from API
const fetchData1 = async (itinerary) => {
  try {
    const response = await fetch(`/api/save-data?packageId=${itinerary?._id}`);
    if (!response.ok) throw new Error("Network response was not ok");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch data error:", error);
    throw error;
  }
};

// Component for managing and submitting date and price entries
export default function SelectedDatePrice({ itinerary }) {
  const [entries, setEntries] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [price, setPrice] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [limit, setLimit] = useState('');

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      setError("");
      try {
        const res = await fetchData1(itinerary);
        setEntries(res?.data?.datePriceArray || []);
        setLimit(res?.data?.limit?.join(","));
      } catch (err) {
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    if (itinerary) {
      loadData();
    }
  }, [itinerary]);

  const handleAddEntry = () => {
    if (!selectedDate || !price || isNaN(price) || parseFloat(price) <= 0) {
      setError("Please enter a valid date and positive price");
      return;
    }

    setEntries([...entries, { date: selectedDate, price }]);
    setSelectedDate('');
    setPrice('');
    setError('');
  };

  const handleDeleteEntry = (index) => {
    setEntries(entries.filter((_, i) => i !== index));
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch(`/api/save-data?packageId=${itinerary?._id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ entries, limit }),
      });
      if (!response.ok) throw new Error('Network response was not ok');
      alert('Data saved successfully');
    } catch (error) {
      console.error("Error saving data:", error);
      setError("An error occurred while saving data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex w-full justify-center items-center mt-4">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-center text-2xl font-semibold text-gray-800 mb-6">
          Date and Price Form
        </h1>
        {loading && (
          <p className="text-center text-blue-500 mb-4">Loading...</p>
        )}
        {error && <p className="text-center text-red-500 mb-4">{error}</p>}
        <div className="space-y-4">
          {/* Date and Price Inputs */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap sm:flex-nowrap gap-4">
              <label className="flex items-center w-full sm:w-auto">
                Date:
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="ml-2 w-full sm:w-auto border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
                />
              </label>
              <label className="flex items-center w-full sm:w-auto">
                Price:
                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="ml-2 w-full sm:w-auto border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
                />
              </label>
            </div>
            {/* Add Entry Button */}
            <button
              onClick={handleAddEntry}
              className="w-full bg-green-600 text-white rounded px-4 py-2 hover:bg-green-700 transition duration-300"
            >
              Add Entry
            </button>
          </div>
          {/* Entries List */}
          <ul className="space-y-3">
            {entries.map((entry, index) => (
              <li
                key={index}
                className="flex justify-between items-center p-3 border border-gray-300 rounded bg-gray-50"
              >
                <span>
                  {entry.date}: ${entry.price}
                </span>
                <button
                  onClick={() => handleDeleteEntry(index)}
                  className="bg-red-600 text-white rounded px-3 py-1 hover:bg-red-700 transition duration-300"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
          {/* Limit Field */}
          <div className="flex items-center gap-4">
            <label className="flex items-center w-full sm:w-auto">
              Limit:
              <input
                type="text"
                value={limit}
                onChange={(e) => setLimit(e.target.value)}
                className="ml-2 w-full sm:w-auto border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
              />
            </label>
          </div>
          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full bg-blue-600 text-white rounded px-4 py-2 mt-4 hover:bg-blue-700 transition duration-300 disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Submit All Entries"}
          </button>
        </div>
       
        
      </div>
    </div>
  );
}
