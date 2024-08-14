import { useEffect, useState } from 'react';

// Fetch data from API
const fetchData1 = async (itinerary) => {
  try {
    const response = await fetch(`/api/save-data?packageId=${itinerary?._id}`);
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch data error:', error);
    throw error;
  }
};

// Component for managing and submitting date and price entries
export default function SelectedDatePrice({ itinerary }) {
  const [entries, setEntries] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [price, setPrice] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [limit,setLimit]=useState('');

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      setError('');
      try {
        const res = await fetchData1(itinerary);
        setEntries(res?.data?.datePriceArray || []);
        setLimit(res?.data?.limit?.join(","));
      } catch (err) {
        setError('Failed to fetch data');
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
      setError('Please enter a valid date and positive price');
      return;
    }

    setEntries([...entries, { date: selectedDate, price}]);
    setSelectedDate('');
    setPrice('');
    setError('');
  };

  const handleDeleteEntry = (index) => {
    setEntries(entries.filter((_, i) => i !== index));
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch(`/api/save-data?packageId=${itinerary?._id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({entries,limit}),
      });
      if (!response.ok) throw new Error('Network response was not ok');
      alert('Data saved successfully');
    } catch (error) {
      console.error('Error saving data:', error);
      setError('An error occurred while saving data');
    } finally {
      setLoading(false);
    }
  };
  console.log("limit is here :: :: ",limit);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: '20px' }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>Date and Price Form</h1>
      {loading && <p style={{ color: 'blue', textAlign: 'center' }}>Loading...</p>}
      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px' }}>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ marginRight: '10px' }}>
            Date:
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              style={{ marginLeft: '10px' }}
            />
          </label>
          <label style={{ marginRight: '10px' }}>
            Price:
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              style={{ marginLeft: '10px' }}
            />
          </label>
          <button
            onClick={handleAddEntry}
            style={{
              marginLeft: '10px',
              padding: '5px 10px',
              backgroundColor: '#28a745',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Add Entry
          </button>
        </div>
        <ul style={{ listStyleType: 'none', padding: '0' }}>
          {entries.map((entry, index) => (
            <li
              key={index}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '10px',
                padding: '10px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                backgroundColor: '#f9f9f9',
              }}
            >
              {entry.date}: ${entry.price}
              <button
                onClick={() => handleDeleteEntry(index)}
                style={{
                  backgroundColor: '#dc3545',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '4px',
                  padding: '5px 10px',
                  cursor: 'pointer',
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
{/* here is limit */}
<label className='my-3'>
            limit:
            <input
              type="text"
              value={limit}
              onChange={(e) => setLimit(e.target.value)}
              style={{ marginLeft: '10px' }}
            />
          </label>

        <button
          onClick={handleSubmit}
          disabled={loading}
          style={{
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          {loading ? 'Submitting...' : 'Submit All Entries'}
        </button>
      </div>
    </div>
  );
}
