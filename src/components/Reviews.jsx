import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

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
    if (!title) errors.title = 'Required';
    if (!information) errors.information = 'Required';
    if (!rating) errors.rating = 'Required';
    if (!name) errors.name = 'Required';
    if (!selectDate) errors.selectDate = 'Required';
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
      {/* <div className="border-l-2 border-teal-700 p-2 bg-white/30 backdrop-blur-lg rounded-lg shadow-md mt-5"> */}
      <div className="border-2 border-slate-300 p-4 rounded m-4">
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
              <span className="text-xs text-red-400 font-medium ml-1">{validationErrors.title}</span>
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
              <span className="text-xs text-red-400 font-medium ml-1">{validationErrors.information}</span>
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
              <span className="text-xs text-red-400 font-medium ml-1">{validationErrors.rating}</span>
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
              <span className="text-xs text-red-400 font-medium ml-1">{validationErrors.name}</span>
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
              <span className="text-xs text-red-400 font-medium ml-1">{validationErrors.selectDate}</span>
            )}
          </div>

          <div className='flex justify-end items-center'>
            <button type="submit" className="px-2 py-1.5 text-sm bg-navyblack text-white rounded-md">
              {editingId ? 'Update Review' : 'Add Review'}
            </button>
          </div>
        </form>
      </div>
      {/* Reviews Table */}
      <div className=" px-4 pb-4">
        <h2 className="text-base font-semibold">Reviews</h2>
        <div className="overflow-scroll bg-white rounded px-4 py-2">
          <table className="w-full border rounded">
            <thead>
              <tr className='border-b'>
                <th className=" p-2 text-left">Title</th>
                <th className=" p-2 text-left">Rating</th>
                <th className=" p-2 text-left">Name</th>
                <th className=" p-2 text-left"></th>
              </tr>
            </thead>
            <tbody>
              {reviews.map((review) => (
                <tr key={review._id} className="border-b">
                  <td className="p-2 text-nowrap">{review.title}</td>
                  <td className="py-2 pl-5 pr-2">{review.rating}</td>
                  <td className="p-2 capitalize text-nowrap">{review.name}</td>
                  <td className="p-2">
                    <div className="flex justify-end items-center gap-3">
                      <FontAwesomeIcon
                        icon={faEdit}
                        className="font1 cursor-pointer"
                        onClick={() => handleEdit(review._id)}
                      />
                      <FontAwesomeIcon
                        icon={faTrash}
                        className="font1 cursor-pointer"
                        onClick={() => handleDelete(review._id)}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default ReviewForm;
