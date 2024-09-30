// // pages/index.js
// import React, { useState, useEffect, use } from 'react';
// import { format, eachDayOfInterval } from 'date-fns';

// const PriceRange = ({ itinerary, setTimeDot}) => {
//   // console.log("json data", itinerary);
//   const [startDate, setStartDate] = useState(null);
//   const [endDate, setEndDate] = useState(null);
//   const [price, setPrice] = useState('');
//   const [percentage, setPercentage] = useState('');
//   const [prices, setPrices] = useState([]);

//   useEffect(() => {
//     if (itinerary) {
//       fetch(`/api/package/price-range/${itinerary?._id}`)
//         .then((response) => response.json())
//         .then((data) => setPrices(data ? [data] : []))
//         .catch((error) => console.error('Error fetching price ranges:', error));
//     }
//   }, [itinerary]);

//   const handleStartDateChange = (event) => {
//     setStartDate(new Date(event.target.value));
//   };

//   const handleEndDateChange = (event) => {
//     setEndDate(new Date(event.target.value));
//   };

//   const handlePriceChange = (event) => {
//     setPrice(event.target.value);
//   };

//   const handlePercentageChange = (event) => {
//     setPercentage(event.target.value);
//   };

//   const handleSavePrice = () => {
//   //  const newRangePrice=[...prices];
//     if (startDate && endDate && price !== '') {
//       const newPriceRange = {
//         startDate,
//         endDate,
//         basePrice: parseFloat(price),
//         percentage: percentage !== '' ? parseFloat(percentage) : 0,
//         rangePrices:prices[0]?.prices
//       };

//       fetch(`/api/package/price-range/${itinerary?._id}`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(newPriceRange)
//       })
//         .then((response) => response.json())
//         .then((data) => setPrices([data]))
//         .catch((error) => console.error('Error saving price range:', error));

//       setStartDate(null);
//       setEndDate(null);
//       setPrice('');
//       setPercentage('');
//     } else {
//       alert('Please select dates and enter a price.');
//     }
//   };
// // console.log("prices : ",prices[0]?.endDate?.split('T')[0]);
//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
//       <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
//         <h1 className="text-2xl font-bold mb-6 text-center">Date Range Picker and Price Entry</h1>
//         <div className="mb-4">
//           <label htmlFor="start-date" className="block text-md font-medium text-gray-700">Start Date:</label>
//           <input
//             type="date"
//             id="start-date"
//             value={startDate ? format(startDate, 'yyyy-MM-dd') : ''}
//             onChange={handleStartDateChange}
//             className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-md py-1 px-2 text-sm"
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="end-date" className="block text-md font-medium text-gray-700">End Date:</label>
//           <input
//             type="date"
//             id="end-date"
//             value={endDate ? format(endDate, 'yyyy-MM-dd') : ''}
//             onChange={handleEndDateChange}
//             className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-md py-1 px-2"
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="price" className="block text-md font-medium text-gray-700">Base Price:</label>
//           <input
//             type="number"
//             id="price"
//             value={price}
//             onChange={handlePriceChange}
//             className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-md py-1 px-2"
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="percentage" className="block text-md font-medium text-gray-700">Percentage Increase/Decrease per 3 days (optional):</label>
//           <input
//             type="number"
//             id="percentage"
//             value={percentage}
//             onChange={handlePercentageChange}
//             className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-md py-1 px-2"
//           />
//         </div>
//         <button
//           onClick={handleSavePrice}
//           className="w-full bg-blue-500 text-md text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
//         >
//           Save Price
//         </button>
//         <hr className="my-6" />
//         <h2 className="text-xl font-semibold mb-4">Saved Prices:</h2>
//         <ul>
//           {prices.length > 0 && prices[0].prices && prices[0].prices.map((priceEntry, index) => (
//             <li key={index} className="mb-2">
//               <div className="bg-gray-100 p-4 rounded-md shadow-sm">
//                 <span className="font-medium">{format(new Date(priceEntry.date), 'yyyy-MM-dd')}</span> ({priceEntry.dayOfWeek}) : ${priceEntry.price.toFixed(2)}
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default PriceRange;
