import React, { useState, useEffect } from 'react';
import Head from 'next/head';

const RatingForm = () => {
    const [formData, setFormData] = useState({
        ratingValue: '',
        ratingCount: '',
        startDate: '',
        endDate: '',
        author: ''
    });

    const [validationErrors, setValidationErrors] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/rating');
                if (response.ok) {
                    const data = await response.json();
                    setFormData({
                        ratingValue: data.ratingValue || '',
                        ratingCount: data.ratingCount || '',
                        startDate: data.startDate ? new Date(data.startDate).toISOString().split('T')[0] : '',
                        endDate: data.endDate ? new Date(data.endDate).toISOString().split('T')[0] : '',
                        author: data.author || ''
                    });
                } else {
                    console.error('Failed to fetch data');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { ratingValue, ratingCount, startDate, endDate, author } = formData;

        const errors = {};
        if (!ratingValue) errors.ratingValue = 'Rating Value is required';
        if (!ratingCount) errors.ratingCount = 'Rating Count is required';
        if (!startDate) errors.startDate = 'Start Date is required';
        if (!endDate) errors.endDate = 'End Date is required';
        if(!author) errors.author = 'Author is required';
        setValidationErrors(errors);

        if (Object.keys(errors).length > 0) return;

        try {
            const response = await fetch('/api/rating', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ratingValue: Number(ratingValue),
                    ratingCount: Number(ratingCount),
                    startDate,
                    endDate,
                    author
                }),
            });

            if (response.ok) {
                const result = await response.json();
                console.log('Success:', result);
                // Handle success (e.g., redirect or show a success message)
            } else {
                console.error('Failed to save data');
            }
        } catch (error) {
            console.error('Error saving data:', error);
        }
    };
    // console.log("formData ", formData);
    
    return (
        <div>
            <Head>
                <title>Rating Form</title>
            </Head>
            <div className="p-4 rounded mb-2">
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Rating Value */}
                    <div className="sm:flex items-center mb-2">
                        <label htmlFor="ratingValue" className="font-semibold w-28 text-para">
                            Rating Value:
                        </label>
                        <input
                            type="number"
                            id="ratingValue"
                            name="ratingValue"
                            value={formData.ratingValue}
                            onChange={handleChange}
                            className="border w-full rounded-md h-8 px-2 focus:border-primary outline-none text-para"
                            placeholder="Enter Rating Value"
                        />
                        {validationErrors.ratingValue && (
                            <span className="text-xs text-red-700">{validationErrors.ratingValue}</span>
                        )}
                    </div>

                    {/* Rating Count */}
                    <div className="sm:flex items-center mb-2">
                        <label htmlFor="ratingCount" className="font-semibold w-28 text-para">
                            Rating Count:
                        </label>
                        <input
                            type="number"
                            id="ratingCount"
                            name="ratingCount"
                            value={formData.ratingCount}
                            onChange={handleChange}
                            className="border w-full rounded-md h-8 px-2 focus:border-primary outline-none text-para"
                            placeholder="Enter Rating Count"
                        />
                        {validationErrors.ratingCount && (
                            <span className="text-xs text-red-700">{validationErrors.ratingCount}</span>
                        )}
                    </div>

                    {/* Start Date */}
                    <div className="sm:flex items-center mb-2">
                        <label htmlFor="startDate" className="font-semibold w-28 text-para">
                            Start Date:
                        </label>
                        <input
                            type="date"
                            id="startDate"
                            name="startDate"
                            value={formData.startDate}
                            onChange={handleChange}
                            className="border w-full rounded-md h-8 px-2 focus:border-primary outline-none text-para"
                        />
                        {validationErrors.startDate && (
                            <span className="text-xs text-red-700">{validationErrors.startDate}</span>
                        )}
                    </div>

                    {/* End Date */}
                    <div className="sm:flex items-center mb-2">
                        <label htmlFor="endDate" className="font-semibold w-28 text-para">
                            End Date:
                        </label>
                        <input
                            type="date"
                            id="endDate"
                            name="endDate"
                            value={formData.endDate}
                            onChange={handleChange}
                            className="border w-full rounded-md h-8 px-2 focus:border-primary outline-none text-para"
                        />
                        {validationErrors.endDate && (
                            <span className="text-xs text-red-700">{validationErrors.endDate}</span>
                        )}
                    </div>
                    {/* Author Name */}
                    <div className="sm:flex items-center mb-2">
                        <label htmlFor="author" className="font-semibold w-28 text-para">
                            Author :
                        </label>
                        <input
                            type="text"
                            id="author"
                            name="author"
                            value={formData.author}
                            onChange={handleChange}
                            className="border w-full rounded-md h-8 px-2 focus:border-primary outline-none text-para"
                            placeholder="Enter Author Name"
                        />
                        {validationErrors.ratingValue && (
                            <span className="text-xs text-red-700">{validationErrors.author}</span>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="w-full h-8 px-2 rounded bg-black text-white"
                    >
                        Save
                    </button>
                </form>
            </div>
        </div>
    );
};

export default RatingForm;
