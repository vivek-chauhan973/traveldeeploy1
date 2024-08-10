import React, { useState, useEffect } from 'react';
import Head from 'next/head';

const ReviewForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    information: '',
    rating: '',
    name: '',
    selectDate: '',
  });

  const [validationErrors, setValidationErrors] = useState({});
  const [reviews, setReviews] = useState([]);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    // Fetch existing reviews
    const fetchReviews = async () => {
      try {
        const response = await fetch('/api/review');
        if (response.ok) {
          const data = await response.json();
          setReviews(data);
        } else {
          console.error('Failed to fetch reviews');
        }
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
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

    const { title, information, rating, name, selectDate } = formData;

    const errors = {};
    if (!title) errors.title = 'Title is required';
    if (!information) errors.information = 'Information is required';
    if (!rating) errors.rating = 'Rating is required';
    if (!name) errors.name = 'Name is required';
    if (!selectDate) errors.selectDate = 'Select Date is required';
    setValidationErrors(errors);

    if (Object.keys(errors).length > 0) return;

    try {
      const method = editingId ? 'PUT' : 'POST';
      const url = editingId ? `/api/review?id=${editingId}` : '/api/review';
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          information,
          rating: Number(rating),
          name,
          selectDate,
        }),
      });

      if (response.ok) {
        const result = await response.json();
        if (editingId) {
          setReviews((prevReviews) =>
            prevReviews.map((review) => (review._id === editingId ? result : review))
          );
        } else {
          setReviews((prevReviews) => [...prevReviews, result]);
        }
        setFormData({
          title: '',
          information: '',
          rating: '',
          name: '',
          selectDate: '',
        });
        setEditingId(null);
      } else {
        console.error('Failed to save review');
      }
    } catch (error) {
      console.error('Error saving review:', error);
    }
  };

  const handleEdit = (id) => {
    const review = reviews.find((review) => review._id === id);
    setFormData({
      title: review.title,
      information: review.information,
      rating: review.rating,
      name: review.name,
      selectDate: new Date(review.selectDate).toISOString().split('T')[0],
    });
    setEditingId(id);
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`/api/review?id=${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setReviews((prevReviews) => prevReviews.filter((review) => review._id !== id));
      } else {
        console.error('Failed to delete review');
      }
    } catch (error) {
      console.error('Error deleting review:', error);
    }
  };

  return (
    <div>
      <Head>
        <title>Review Form</title>
      </Head>
      <div className="p-4 rounded mb-2">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title */}
          <div className="sm:flex items-center mb-2">
            <label htmlFor="title" className="font-semibold w-28 text-para">
              Title:
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="border w-full rounded-md h-8 px-2 focus:border-primary outline-none text-para"
              placeholder="Enter Title"
            />
            {validationErrors.title && (
              <span className="text-xs text-red-700">{validationErrors.title}</span>
            )}
          </div>

          {/* Information */}
          <div className="sm:flex items-center mb-2">
            <label htmlFor="information" className="font-semibold w-28 text-para">
              Information:
            </label>
            <textarea
              id="information"
              name="information"
              value={formData.information}
              onChange={handleChange}
              className="border w-full rounded-md px-2 py-1 focus:border-primary outline-none text-para"
              placeholder="Enter Information"
            />
            {validationErrors.information && (
              <span className="text-xs text-red-700">{validationErrors.information}</span>
            )}
          </div>

          {/* Rating */}
          <div className="sm:flex items-center mb-2">
            <label htmlFor="rating" className="font-semibold w-28 text-para">
              Rating:
            </label>
            <input
              type="number"
              id="rating"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              className="border w-full rounded-md h-8 px-2 focus:border-primary outline-none text-para"
              placeholder="Enter Rating"
            />
            {validationErrors.rating && (
              <span className="text-xs text-red-700">{validationErrors.rating}</span>
            )}
          </div>

          {/* Name */}
          <div className="sm:flex items-center mb-2">
            <label htmlFor="name" className="font-semibold w-28 text-para">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border w-full rounded-md h-8 px-2 focus:border-primary outline-none text-para"
              placeholder="Enter Name"
            />
            {validationErrors.name && (
              <span className="text-xs text-red-700">{validationErrors.name}</span>
            )}
          </div>

          {/* Select Date */}
          <div className="sm:flex items-center mb-2">
            <label htmlFor="selectDate" className="font-semibold w-28 text-para">
              Select Date:
            </label>
            <input
              type="date"
              id="selectDate"
              name="selectDate"
              value={formData.selectDate}
              onChange={handleChange}
              className="border w-full rounded-md h-8 px-2 focus:border-primary outline-none text-para"
            />
            {validationErrors.selectDate && (
              <span className="text-xs text-red-700">{validationErrors.selectDate}</span>
            )}
          </div>

          <button type="submit" className="px-4 py-2 bg-primary text-white rounded-md">
            {editingId ? 'Update Review' : 'Add Review'}
          </button>
        </form>
      </div>

      <div className="p-4">
        <h2 className="text-lg font-semibold mb-4">Reviews</h2>
        <ul>
          {reviews.map((review) => (
            <li key={review._id} className="border-b py-2">
              <h3 className="font-semibold">{review.title}</h3>
              <p>{review.information}</p>
              <p>Rating: {review.rating}</p>
              <p>Name: {review.name}</p>
              <p>Date: {new Date(review.selectDate).toLocaleDateString()}</p>
              <button
                onClick={() => handleEdit(review._id)}
                className="mr-2 px-2 py-1 bg-yellow-400 text-white rounded-md"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(review._id)}
                className="px-2 py-1 bg-red-600 text-white rounded-md"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ReviewForm;
