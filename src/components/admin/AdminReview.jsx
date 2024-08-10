import "../../app/globals.css";
import React, { useState } from 'react';

const AdminReview = () => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [summary, setSummary] = useState("");
    const [sdate, setSdate] = useState(null); // Date state
    const [rating, setRating] = useState(0); // Rating state

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data:", { title, author, summary, sdate, rating });

        // Reset form fields
        setTitle("");
        setAuthor("");
        setSummary("");
        setSdate(null);
        setRating(0);
    };

    // Handler for date input change
    const handleStartDateChange = (event) => {
        setSdate(event.target.value);
        console.log("Selected Date:", event.target.value);
    };

    // Handler for rating input change
    const handleRatingChange = (event) => {
        const value = parseInt(event.target.value);
        setRating(value);
        console.log(`Rating: ${value}`);
    };

    return (
        <div>
            <div className="container-wrapper w-full px-4 py-4 bg-gray-100 mx-80">
                <h1 className="text-center font-semibold text-xl">Admin Form Section</h1>
                <form onSubmit={handleSubmit}>
                    <div className="md:mx-80">
                        {/* Title input */}
                        <div className="">
                            <label htmlFor="title" className="text-black text-md font-normal md:font-semibold mb-2">Title</label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Enter title...."
                                required
                            />
                        </div>

                        {/* Date input */}
                        <div className="mt-3">
                            <label htmlFor="start-date" className="text-md font-normal md:font-semibold mb-2">Date</label>
                            <input
                                type="date"
                                id="start-date"
                                value={sdate || ''}
                                onChange={handleStartDateChange}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm py-2 px-2"
                            />
                        </div>

                        {/* Author name input */}
                        <div className="mt-3">
                            <label htmlFor="author" className="text-md font-normal md:font-semibold mb-2">Author name</label>
                            <input
                                type="text"
                                id="author"
                                placeholder="Enter Author name"
                                value={author}
                                onChange={(e) => setAuthor(e.target.value)}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>

                        {/* Rating input */}
                        <div className="mt-3">
                            <p className="text-md md:text-lg">Overall, please rate your interaction:</p>
                            <div className="flex items-center">
                                {[1, 2, 3, 4, 5].map((value) => (
                                    <label key={value} className="flex flex-col items-center">
                                        <span className={`ml-1 ${rating === value ? 'text-blue-600 font-semibold' : 'text-md'}`}>
                                            {value}
                                        </span>
                                        <input
                                            type="radio"
                                            id={`rating${value}`}
                                            name="rating"
                                            value={value}
                                            checked={rating === value}
                                            onChange={handleRatingChange}
                                            className={`form-radio ml-1 h-5 w-5 ${rating === value ? 'bg-green-600' : 'bg-white'}`}
                                        />
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Summary textarea */}
                        <div className="mt-4">
                            <label htmlFor="summary" className="block text-md font-normal md:font-semibold mb-2">Summary</label>
                            <textarea
                                id="summary"
                                value={summary}
                                onChange={(e) => setSummary(e.target.value)}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-48 resize-none"
                                required
                            />
                        </div>

                        {/* Submit button */}
                        <div className="flex items-center justify-between mt-4">
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AdminReview;
