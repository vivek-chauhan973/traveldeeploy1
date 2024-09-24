import React, { useEffect, useState } from 'react';
import Head from 'next/head';

const CarSeoField = ({ itinerary,setActiveTab, setSeoDot }) => {
    const [isSEOField, setIsSEOField] = useState({
        title: '',
        description: '',
        canonicalUrl: '',
        keyword: '',
        priceValid: ''
    });

    useEffect(() => {
        const fetchSEOData = async () => {
            try {
                const response = await fetch(`/api/cars/package/package-seo/${itinerary?._id}`);
                if (response.ok) {
                    setActiveTab("Tab9")
                    setSeoDot(true);
                    const data = await response.json();
                    setIsSEOField(data || {
                        title: '',
                        description: '',
                        canonicalUrl: '',
                        keyword: '',
                        priceValid: ''
                    });
                } else {
                    throw new Error('Failed to fetch SEO data');
                }
            } catch (error) {
                console.error('Error fetching SEO data:', error);
            }
        };

        if (itinerary?._id) {
            fetchSEOData();
        }
    }, [itinerary]);

    const [validationErrors, setValidationErrors] = useState({
        title: '',
        description: '',
        keyword: '',
        priceValid: ''
    });

    const handleMetaTag = (e) => {
        const { name, value } = e.target;
        setIsSEOField(prevFields => ({
            ...prevFields,
            [name]: value
        }));
    };

    const handleSubmitSeoField = async (e) => {
        e.preventDefault();
        const { title, description, keyword , priceValid } = isSEOField;

        if (title.trim() === '') {
            setValidationErrors(prevErrors => ({
                ...prevErrors,
                title: 'Title is required'
            }));
        } else if (description.trim() === '') {
            setValidationErrors(prevErrors => ({
                ...prevErrors,
                description: 'Description is required'
            }));
        } else {
            try {
                const response = await fetch(`/api/cars/package/package-seo/${itinerary._id}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(isSEOField)
                });
                console.log("Rakesh" , isSEOField);

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                setActiveTab("Tab9");
                setSeoDot(true);
                console.log('Form submitted successfully:', data);
            } catch (error) {
                console.error('Error submitting form:', error);
            }
        }

    };

    return (
        <div>
            <Head>
                <title>SEO Form</title>
                <meta name="description" content={isSEOField.description} />
                <meta property="og:title" content={isSEOField.title} />
                <meta property="og:type" content="product"/>
                <meta property="og:description" content={isSEOField.description} />
                <meta property="og:url" content={isSEOField.canonicalUrl} />
                <meta property="og:site_name" content="bizare expedition" />
                <meta property="og:locale" content="en_IN" /> {/* Change as per requirement */}
                <meta property="og:image" content="" />
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:description" content={isSEOField.description} />
                <meta name="twitter:image" content="" />
                <link rel="canonical" href={isSEOField.canonicalUrl} />
            </Head>
            <div className="p-4">
                <form className='border rounded p-3 bg-white' onSubmit={handleSubmitSeoField}>
                    {/* Title */}
                    <div className="flex flex-col mb-2">
                        <label className="text-para font-semibold" htmlFor="title">Title:</label>
                        <input
                            id="title"
                            name="title"
                            value={isSEOField.title}
                            onChange={handleMetaTag}
                            className="h-8 px-2 rounded border text-para"
                            type="text"
                        />
                        <span className="text-xs text-red-700">{validationErrors.title}</span>
                    </div>
                    
                    {/* Description */}
                    <div className="flex flex-col mb-2">
                        <label className="text-para font-semibold" htmlFor="description">Description:</label>
                        <textarea
                            id="description"
                            name="description"
                            value={isSEOField.description}
                            onChange={handleMetaTag}
                            className="px-2 rounded border text-para"
                            rows={4}
                        />
                        <span className="text-xs text-red-700">{validationErrors.description}</span>
                    </div>

                    {/* Canonical URL */}
                    <div className="flex flex-col mb-2">
                        <label className="text-para font-semibold" htmlFor="canonicalUrl">Canonical URL:</label>
                        <input
                            id="canonicalUrl"
                            name="canonicalUrl"
                            value={isSEOField.canonicalUrl}
                            onChange={handleMetaTag}
                            className="h-8 px-2 rounded border text-para"
                            type="text"
                        />
                    </div>
                    {/* keyword */}
                    <div className="flex flex-col mb-2">
                        <label className="text-para font-semibold" htmlFor="keyword">Keyword</label>
                        <input
                            id="keyword"
                            name="keyword"
                            value={isSEOField.keyword}
                            onChange={handleMetaTag}
                            className="h-8 px-2 rounded border text-para"
                            type="text"
                        />
                    </div>
                    {/* Prce Valid Until */}
                    <div className="flex flex-col mb-2">
                        <label className="text-para font-semibold" htmlFor="priceValid">Price Valid Until : </label>
                        <input
                            id="priceValid"
                            type="date"
                            name="priceValid"
                            value={isSEOField.priceValid}
                            onChange={handleMetaTag}
                            className="h-8 px-2 rounded border text-para"
                        />                 
                    </div>
                    
                    <button
                        className="mt-2 w-full h-8 px-2 rounded bg-black text-white"
                        type="submit">
                        Save Meta Tags
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CarSeoField;
