import React, { useState, useEffect, useCallback } from "react";
import Image from 'next/image'

export default function ImageUploading({ itinerary }) {
  const [files, setFiles] = useState([]);
  const [previews, setPreviews] = useState([]);
  const [titles, setTitles] = useState([]);
  const [alts, setAlts] = useState([]);
  const [isUpdating, setIsUpdating] = useState(false);
  const [selectedImageIds, setSelectedImageIds] = useState([]);
  const [hasFetchedImages, setHasFetchedImages] = useState(false); // Track if images have been fetched

  console.log("Itinerary data shown in image uploading section", itinerary);

  // Function to fetch existing images
  const fetchImages = useCallback(async () => {
    try {
      const res = await fetch(`/api/package/image-upload/${itinerary?._id}`);
      const data = await res.json();
      console.log("Data from fetchImages", data);
      if (data.data.length > 0) {
        const images = data.data;
        setSelectedImageIds(images.map((image) => image._id));
        setTitles(images.map((image) => image.title));
        setAlts(images.map((image) => image.alt));
        setPreviews(images.map((image) => image.path));
        setIsUpdating(true);
        setHasFetchedImages(true); // Set flag to true when images are fetched
      }
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  }, [itinerary]);

  // Fetch existing images on component mount or when itinerary changes
  useEffect(() => {
    fetchImages();
  }, [itinerary, fetchImages]);

  // Function to handle file input change
  const handleChange = (e, index) => {
    const newFiles = [...files];
    newFiles[index] = e.target.files[0];
    setFiles(newFiles);
    const newPreviews = [...previews];
    newPreviews[index] = URL.createObjectURL(e.target.files[0]);
    setPreviews(newPreviews);
  };

  // Function to handle title change
  const handleTitleChange = (e, index) => {
    const newTitles = [...titles];
    newTitles[index] = e.target.value;
    setTitles(newTitles);
  };

  // Function to handle alt text change
  const handleAltChange = (e, index) => {
    const newAlts = [...alts];
    newAlts[index] = e.target.value;
    setAlts(newAlts);
  };

  // Function to handle image upload or update
  const handleUpload = async () => {
    if (files.filter((file) => file !== null).length < 3) {
      alert("Please select at least 3 files to upload.");
      return;
    }

    const formData = new FormData();
    files.forEach((file, index) => {
      if (file) {
        formData.append("files", file);
        formData.append(`titles`, titles[index] || "");
        formData.append(`alts`, alts[index] || "");
        if (selectedImageIds[index]) {
          formData.append("ids", selectedImageIds[index]);
        }
      }
    });

    try {
      const res = await fetch(`/api/package/image-upload/${itinerary?._id}`, {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        alert(`Files ${isUpdating ? "updated" : "uploaded"} successfully`);
        // Optionally, reset form fields or update state after successful upload
        setFiles([]);
        setPreviews([]);
        setTitles([]);
        setAlts([]);
        setIsUpdating(false);
        setSelectedImageIds([]);
        fetchImages(); // Fetch updated images
      } else {
        alert(`Files ${isUpdating ? "update" : "upload"} failed`);
      }
    } catch (error) {
      console.error(
        `Error ${isUpdating ? "updating" : "uploading"} files:`,
        error
      );
      alert(`Files ${isUpdating ? "update" : "upload"} failed`);
    }
  };

  // Function to add new image section
  const addNewImageSection = () => {
    if (files.length < 4) {
      setFiles([...files, null]);
      setPreviews([...previews, null]);
      setTitles([...titles, ""]);
      setAlts([...alts, ""]);
    } else {
      alert("Maximum 4 images can be uploaded.");
    }
  };

  return (
    <>
      <div className="my-20 bg-white p-3 rounded-md">
        <div>
          {previews.map((preview, index) => (
            <div key={index} className="flex my-10 items-center pl-10">
              <input type="file" onChange={(e) => handleChange(e, index)} />
              <div className="ml-4">
                {preview && (
                  <Image className="w-36 shadow-md" src={preview} alt="Preview" width="220"   height="120"
/>
                )}
                <div>
                  <p>Title</p>
                  <input
                    className="border px-2"
                    type="text"
                    value={titles[index] || ""}
                    onChange={(e) => handleTitleChange(e, index)}
                  />
                </div>
                <div>
                  <p>Alt</p>
                  <input
                    className="border px-2"
                    type="text"
                    value={alts[index] || ""}
                    onChange={(e) => handleAltChange(e, index)}
                  />
                </div>
              </div>
            </div>
          ))}
          {!hasFetchedImages && files.length < 4 && (
            <button
              className="bg-[#0d6efd] text-white px-3 py-2"
              onClick={addNewImageSection}
            >
              Add New Image
            </button>
          )}
          {hasFetchedImages && files.length < 4 && (
            <button
              className="bg-[#0d6efd] text-white px-3 py-2"
              onClick={addNewImageSection}
            >
              Add New Image
            </button>
          )}
          {files.length >= 4 && (
            <button
              className="bg-gray-300 text-gray-600 px-3 py-2 cursor-not-allowed"
              disabled
            >
              Maximum 4 images uploaded
            </button>
          )}
          <div className="mt-4">
            <button
              className="bg-[#0d6efd] text-white px-3 py-2"
              onClick={handleUpload}
            >
              {isUpdating ? "Update Images" : "Upload Images"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
