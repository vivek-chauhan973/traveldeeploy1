



// // import { useState } from 'react';

// // // Custom hook to manage booking data
// // const useBookingData = () => {
// //   // Function to generate dates for 2 months from today
// //   const generateDateArray = () => {
// //     const startDate = new Date();
// //     const endDate = new Date();
// //     endDate.setMonth(startDate.getMonth() + 2);

// //     let datesArray = [];
// //     let currentDate = new Date(startDate);

// //     while (currentDate <= endDate) {
// //       const dayName = currentDate.toLocaleDateString('en-US', { weekday: 'long' });
// //       const date = currentDate.getDate();
// //       const month = currentDate.getMonth() + 1;
// //       const year = currentDate.getFullYear();
// //       const price = 0; // Default price

// //       datesArray.push({ day: dayName, date: `${date}-${month}-${year}`, price });

// //       currentDate.setDate(currentDate.getDate() + 1);
// //     }

// //     return datesArray;
// //   };

// //   const [data, setData] = useState(generateDateArray());

// //   const updatePriceForDay = (selectedDay, newPrice) => {
// //     const updatedData = data.map(item =>
// //       item.day === selectedDay ? { ...item, price: newPrice } : item
// //     );
// //     setData(updatedData);
// //     return updatedData;
// //   };

// //   return [data, updatePriceForDay];
// // };

// // // Component for booking functionality
// // const BookingComponent = () => {
// //   const [data, updatePriceForDay] = useBookingData();
// //   const [selectedDay, setSelectedDay] = useState('');
// //   const [price, setPrice] = useState('');

// //   const handleDayChange = (event) => {
// //     setSelectedDay(event.target.value);
// //   };

// //   const handlePriceChange = (event) => {
// //     setPrice(event.target.value);
// //   };

// //   const handleUpdatePrice = () => {
// //     if (selectedDay && price !== '') {
// //       const newPrice = parseFloat(price);
// //       const updatedData = updatePriceForDay(selectedDay, newPrice);
      
// //       // Find the updated item and log it to the console
// //       const updatedItem = updatedData.find(item => item.day === selectedDay);
// //       console.log(`Updated price for::::::::::: ${updatedItem.day}: ${updatedItem.price}`);
// //     }
// //   };

// //   // Get unique days
// //   const days = Array.from(new Set(data.map(item => item.day))); 

// //   return (
// //     <div>
// //       <h1>Car Booking System</h1>
// //       <select onChange={handleDayChange} value={selectedDay}>
// //         <option value="">Select Day</option>
// //         {days.map(day => (
// //           <option key={day} value={day}>{day}</option>
// //         ))}
// //       </select>

// //       <input
// //         type="number"
// //         value={price}
// //         onChange={handlePriceChange}
// //         placeholder="Enter price"
// //       />

// //       <button onClick={handleUpdatePrice}>Update Price</button>

// //       {/* Conditionally render the list based on whether a day is selected */}
// //       {selectedDay && (
// //         <ul>
// //           {data.map((item, index) => (
// //             <li
// //               key={index}
// //               style={{
// //                 backgroundColor: item.day === selectedDay ? 'lightyellow' : 'transparent',
// //                 fontWeight: item.day === selectedDay ? 'bold' : 'normal'
// //               }}
// //             >
// //               {`${item.day}, ${item.date}: $${item.price.toFixed(2)}`}
// //             </li>
// //           ))}
// //         </ul>
// //       )}
// //     </div>
// //   );
// // };

// // export default BookingComponent;






// // components/DateRangePicker.js
// import { useState } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// // import styles from './DateRangePicker.module.css';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

// const DateRangePicker = () => {
//   const [startDate, setStartDate] = useState(null);
//   const [endDate, setEndDate] = useState(null);

//   return (
//     <div className="flex gap-4">
//       <DatePicker
//         selected={startDate}
//         onChange={(date) => setStartDate(date)}
//         startDate={startDate}
//         endDate={endDate}
//         selectsStart
//         dateFormat="yyyy/MM/dd"
//         placeholderText="Start Date"
//         className={`${datePicker} border p-2 rounded`}
//       />
//       <DatePicker
//         selected={endDate}
//         onChange={(date) => setEndDate(date)}
//         startDate={startDate}
//         endDate={endDate}
//         selectsEnd
//         minDate={startDate}
//         dateFormat="yyyy/MM/dd"
//         placeholderText="End Date"
//         className={`${datePicker} border p-2 rounded`}
//       />
//     </div>
//   );
// };

// export default DateRangePicker;
