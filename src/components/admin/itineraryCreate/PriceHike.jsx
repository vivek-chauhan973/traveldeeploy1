import { useState } from 'react';

// Utility function to generate dates
const generateDates = () => {
  const dates = [];
  const startDate = new Date();
  const endDate = new Date(startDate);
  endDate.setMonth(startDate.getMonth() + 2);

  let currentDate = startDate;

  while (currentDate <= endDate) {
    dates.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return dates;
};

const PriceHike = ({ packageId }) => {
  const [selectedRange, setSelectedRange] = useState({ start: null, end: null });
  const [priceIncrease, setPriceIncrease] = useState(0);
  const [isActive, setIsActive] = useState(true); // Toggle state
  const [dates, setDates] = useState(generateDates());

  const handleDateChange = (e, type) => {
    const date = new Date(e.target.value);
    setSelectedRange((prev) => ({ ...prev, [type]: date }));
  };

  const handleToggleChange = () => {
    setIsActive((prev) => !prev);
  };

  const handleApplyPriceHike = async () => {
    if (!selectedRange.start || !selectedRange.end) {
      alert('Please select a date range.');
      return;
    }

    const response = await fetch('/api/package/price-hike', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        startDate: selectedRange.start.toISOString(),
        endDate: selectedRange.end.toISOString(),
        priceIncrease,
        isActive,
        packageId // Pass the package ID
      })
    });

    if (response.ok) {
      alert('Price hike applied successfully.');
    } else {
      alert('Failed to apply price hike.');
    }
  };

  return (
    <div>
      <h2>Admin Panel</h2>
      <div>
        <label>
          Start Date:
          <input
            type="date"
            onChange={(e) => handleDateChange(e, 'start')}
          />
        </label>
        <label>
          End Date:
          <input
            type="date"
            onChange={(e) => handleDateChange(e, 'end')}
          />
        </label>
        <label>
          Price Increase:
          <input
            type="number"
            onChange={(e) => setPriceIncrease(Number(e.target.value))}
          />
        </label>
        <label>
          Enable Price Hike:
          <input
            type="checkbox"
            checked={isActive}
            onChange={handleToggleChange}
          />
        </label>
        <button onClick={handleApplyPriceHike}>Apply Price Hike</button>
      </div>
      <ul>
        {dates.map((date, index) => (
          <li key={index}>{date.toDateString()}</li>
        ))}
      </ul>
    </div>
  );
};

export default PriceHike;


