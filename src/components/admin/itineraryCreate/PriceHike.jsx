
import { useState, useEffect } from 'react';

const insertDates = async () => {
  const today = new Date();
  const futureDate = new Date();
  futureDate.setMonth(today.getMonth() + 2);

  let currentDate = today;

  while (currentDate <= futureDate) {
    try {
      await fetch('/api/package/price-hike', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ date: currentDate }),
      });
    } catch (error) {
      console.error('Error inserting date:', error);
    }
    currentDate.setDate(currentDate.getDate() + 1);
  }
};

const UpdatePrices = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    insertDates();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch('/api/package/price-hike', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          startDate,
          endDate,
          price,
        }),
      });
    } catch (error) {
      console.error('Error updating prices:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Start Date:
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          required
        />
      </label>
      <label>
        End Date:
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          required
        />
      </label>
      <label>
        Price:
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </label>
      <button type="submit">Update Prices</button>
    </form>
  );
};

export default UpdatePrices;
