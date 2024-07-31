import React, { useState, useEffect, useCallback } from "react";
import Image from 'next/image';

export default function ImageUploading({ itinerary }) {
  const [files, setFiles] = useState([]);
  const [previews, setPreviews] = useState([]);
  const [titles, setTitles] = useState([]);
  const [alts, setAlts] = useState([]);
  const [isUpdating, setIsUpdating] = useState(false);
  const [selectedImageIds, setSelectedImageIds] = useState([]);
  const [hasFetchedImages, setHasFetchedImages] = useState(false); 
  const [existingImagesCount, setExistingImagesCount] = useState(0);
  const [hasChanges, setHasChanges] = useState(false); 

  // Function to fetch existing images
  const fetchImages = useCallback(async () => {
    try {
      const res = await fetch(`/api/package/image-upload/${itinerary?._id}`);
      const data = await res.json();
      if (data.data.length > 0) {
        const images = data.data;
        setSelectedImageIds(images.map((image) => image._id));
        setTitles(images.map((image) => image.title));
        setAlts(images.map((image) => image.alt));
        setPreviews(images.map((image) => image.path));
        setExistingImagesCount(images.length);
        setIsUpdating(true);
        setHasFetchedImages(true);
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
    setHasChanges(true);
  };

  // Function to handle title change
  const handleTitleChange = (e, index) => {
    const newTitles = [...titles];
    newTitles[index] = e.target.value;
    setTitles(newTitles);
    setHasChanges(true);
  };

  // Function to handle alt text change
  const handleAltChange = (e, index) => {
    const newAlts = [...alts];
    newAlts[index] = e.target.value;
    setAlts(newAlts);
    setHasChanges(true);
  };

  // Function to handle image upload or update
  const handleUpload = async () => {
    const hasFilesToUpload = files.filter((file) => file !== null).length > 0;
    const totalFilesCount = files.length + existingImagesCount;

    if (isUpdating && !hasFilesToUpload && !hasChanges) {
      alert("No changes detected for update.");
      return;
    }

    if (hasFilesToUpload && totalFilesCount < 3) {
      alert("Please select at least 3 files to upload.");
      return;
    }

    const formData = new FormData();
    files.forEach((file, index) => {
      if (file) {
        formData.append("files", file);
        formData.append(`titles[${index}]`, titles[index] || "");
        formData.append(`alts[${index}]`, alts[index] || "");
        if (selectedImageIds[index]) {
          formData.append("ids[]", selectedImageIds[index]);
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
        setFiles([]);
        setPreviews([]);
        setTitles([]);
        setAlts([]);
        setIsUpdating(false);
        setSelectedImageIds([]);
        setHasChanges(false);
        fetchImages();
      } else {
        alert(`Files ${isUpdating ? "update" : "upload"} failed`);
      }
    } catch (error) {
      console.error(`Error ${isUpdating ? "updating" : "uploading"} files:`, error);
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
      setHasChanges(true);
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
              <input
                type="file"
                onChange={(e) => handleChange(e, index)}
                className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-black/20 file:text-black/50 hover:file:bg-black/75 hover:file:text-white cursor-pointer"
              />
              <div className="ml-4">
                {preview && (
                  <Image
                    className="w-36 shadow-md"
                    src={preview}
                    alt="Preview"
                    width="220"
                    height="120"
                  />
                )}
                <div>
                  <p>Title</p>
                  <input
                    className="border px-2 rounded-lg"
                    type="text"
                    value={titles[index] || ""}
                    onChange={(e) => handleTitleChange(e, index)}
                  />
                </div>
                <div>
                  <p>Alt</p>
                  <input
                    className="border px-2 rounded-lg"
                    type="text"
                    value={alts[index] || ""}
                    onChange={(e) => handleAltChange(e, index)}
                  />
                </div>
              </div>
            </div>
          ))}
          {files.length < 4 && (
            <button
              className={`bg-[#2A2C41] text-white px-3 py-2 rounded-[17px] ${hasFetchedImages ? 'disabled:opacity-50 cursor-not-allowed' : ''}`}
              onClick={addNewImageSection}
              disabled={hasFetchedImages}
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
              className={`bg-[#2A2C41] text-white px-3 py-2 rounded-[17px] ${!hasChanges && !isUpdating ? 'disabled:opacity-50 cursor-not-allowed' : ''}`}
              onClick={handleUpload}
              disabled={!hasChanges && !isUpdating}
            >
              {isUpdating ? "Update Images" : "Upload Images"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}