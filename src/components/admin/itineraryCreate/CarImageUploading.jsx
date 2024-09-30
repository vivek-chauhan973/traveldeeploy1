import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const CarImageUploading =({ itinerary, setImageDot }) =>{
  const [files, setFiles] = useState([]);
  const [previews, setPreviews] = useState([]);
  const [previews1, setPreviews1] = useState([]);
  const [titles, setTitles] = useState([]);
  const [alts, setAlts] = useState([]);
  const [isUpdating, setIsUpdating] = useState(false);
  const [selectedImageIds, setSelectedImageIds] = useState([]);
  const [hasFetchedImages, setHasFetchedImages] = useState(false);
  const [existingImagesCount, setExistingImagesCount] = useState(0);
  const [hasChanges, setHasChanges] = useState(false);
  const [imageData, setImageData] = useState([]);
  const [selectedIcons, setSelectedIcons] = useState([]);

  
  // Function to fetch existing images
  
  const fetchImages = useCallback(async () => {
    try {
      const res = await fetch(`/api/cars/package/image-upload/${itinerary?._id}`);

      const data = await res.json();
      if (data.data.length > 0) {
        const images = data.data;
        setSelectedImageIds(images.map((image) => image._id));
        setTitles(images.map((image) => image.title));
        setAlts(images.map((image) => image.alt));
        setExistingImagesCount(images.length);
        setFiles(images?.[0]?.$each);
        setIsUpdating(true);
      }
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  }, [itinerary]);

  const fetchImage=async()=> {
    try {
      const res = await fetch("/api/icon/icon1");
      const data = await res.json();
      setImageData(data?.data || []);
    } catch (error) {
      console.error("Error fetching image:", error);
    }
  }
  useEffect(() => {
    fetchImage();
  }, [itinerary]);

  useEffect(() => {
    setPreviews(itinerary?.uploads || []);
  }, [itinerary]);
  useEffect(() => {
    if (previews.length >= 4) {
      setHasFetchedImages(true);
      setImageDot(true);
    }
    //  if(files.length>=4){
    //   setHasFetchedImages(true)
    //  }
  }, [previews]);
  useEffect(() => {
    fetchImages();
  }, [itinerary, fetchImages]);

  //handle Image size resultion 

  // const validateImageResolution = (file) => {
  //   return new Promise((resolve, reject) => {
  //     const img = new Image();
  //     img.src = URL.createObjectURL(file);
  //     img.onload = () => {
  //       const { width, height } = img;
  //       // console.log("with--> ",width);
  //       // console.log("height----> ",height);
  //       if (width == 50 && height == 50) {
  //         resolve();
  //       } else {
  //         reject(new Error('Image resolution must be at least 1920x1080'));
  //       }
  //     };
  //     img.onerror = () => reject(new Error('Invalid image file'));
  //   });
  // };


  // Function to handle file input change

  const handleChange = async(e, index) => {
    const newFiles = [...files];
    const file=e.target.files[0]
    newFiles[index]=file ;
    if (file) {
      try {
        // await validateImageResolution(file);
        setFiles(newFiles);
        const newPreviews = [...previews];
        const newPreviews1 = [...previews1];
        newPreviews[index] = URL.createObjectURL(e.target.files[0]);
        newPreviews1[index] = URL.createObjectURL(e.target.files[0]);
        setPreviews1(newPreviews1);
        setPreviews(newPreviews);
        setHasChanges(true);// Clear error message if validation passes
        // Proceed with file upload
      } catch (error) {
        alert("size must be within provided resolution")// Show error message if validation fails
      }
    }
  
  };
  const handleTitleChange = (e, index) => {
    const newTitles = [...titles];
    newTitles[index] = e.target.value;
    setTitles(newTitles);
    setHasChanges(true);
  };
  const handleAltChange = (e, index) => {
    const newAlts = [...alts];
    newAlts[index] = e.target.value;
    setAlts(newAlts);
    setHasChanges(true);
  };

  const handleUpload = async () => {
    const hasFilesToUpload = files.filter((file) => file !== null).length > 0;
    const totalFilesCount = files.length;

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
      const res = await fetch(`/api/cars/package/image-upload/${itinerary?._id}`, {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        alert(`Files ${isUpdating ? "updated" : "uploaded"} successfully`);
        setFiles([]);
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
      setHasChanges(true);
    } else {
      alert("Maximum 4 images can be uploaded.");
    }
  };
  const handleChangeIcon = (item) => {
    const obj = { name: item?.title, icon: item?.path };
    const exists = selectedIcons.find((icon) => icon.name === obj.name);
    let newIcons;
    if (exists) {
      newIcons = selectedIcons.filter((icon) => icon.name !== obj.name);
    } else {
      newIcons = [...selectedIcons, obj];
    }
    setSelectedIcons(newIcons);
  };
  const handleSaveIcon = async () => {
    try {
      const res = await fetch(`/api/cars/package/icon/${itinerary?._id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(selectedIcons),
      });
      alert("Icon succefully saved ");
    } catch (error) {
      console.log("something went wrong");
    }
  };
  return (
    <>
      <div className="grid xl:grid-cols-2 bg-white p-5 rounded-md">
        <div className="my-5 ">
          <div className="">
            {previews.map((preview, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row pb-3 mb-5 items-center xl:pl-10 space-y-4 md:space-y-0 border-b-2 border-gray-50"
              >
                <input
                  type="file"
                  onChange={(e) => handleChange(e, index)}
                  className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-black/20 file:text-black/50 hover:file:bg-black/75 hover:file:text-white cursor-pointer w-full md:w-auto"
                />
                <div className="mx-4 w-full md:w-auto">
                  {preview && (
                    <Image
                      className="w-full md:w-36 shadow-md"
                      src={preview}
                      alt="Preview"
                      width="220"
                      height="120"
                    />
                  )}
                  <div className="mt-2">
                    <p>Title</p>
                    <input
                      className="border px-2 py-1 rounded-lg w-full md:w-36"
                      type="text"
                      value={titles[index] || ""}
                      onChange={(e) => handleTitleChange(e, index)}
                    />
                  </div>
                  <div className="mt-2">
                    <p>Alt</p>
                    <input
                      className="border px-2 py-1 rounded-lg w-full md:w-36"
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
                className={`bg-[#2A2C41] text-white px-3 py-2 rounded-[17px] w-full md:w-auto ${
                  hasFetchedImages
                    ? "disabled:opacity-50 cursor-not-allowed"
                    : ""
                }`}
                onClick={addNewImageSection}
                disabled={hasFetchedImages}
              >
                Add New Image
              </button>
            )}
            {files.length >= 4 && (
              <button
                className="bg-gray-300 text-gray-600 px-3 py-2 rounded-[17px] w-full md:w-auto cursor-not-allowed"
                disabled
              >
                Maximum 4 images uploaded
              </button>
            )}
            <div className="mt-4">
              <button
                className={`bg-[#2A2C41] text-white px-3 py-2 rounded-[17px] w-full md:w-auto ${
                  !hasChanges && !isUpdating
                    ? "disabled:opacity-50 cursor-not-allowed"
                    : ""
                }`}
                onClick={handleUpload}
                disabled={!hasChanges && !isUpdating}
              >
                {isUpdating ? "Update Images" : "Upload Images"}
              </button>
            </div>
          </div>
        </div>
        {/* <div className="my-5 border-t xl:border-t-0 xl:border-l xl:px-5 px-2 xl:py-0 py-5">
          <p className="text-base font-semibold">Select Icon</p>
          {imageData?.map((item) => {
            const isChecked = selectedIcons.some(
              (icon) => icon.name === item?.title
            );
            return (
              <div className="m-5" key={item?.title}>
                <input
                  id={`checked-${item?.title}`}
                  type="checkbox"
                  onChange={() => handleChangeIcon(item)}
                  className="h-4 w-4 accent-black mr-3"
                  checked={isChecked}
                />
                <label htmlFor={`checked-${item?.title}`} className="text-base">
                  {item?.title}
                </label>
              </div>
            );
          })}
          <button
            onClick={handleSaveIcon}
            className="px-5 py-1 bg-navyblack text-white rounded-full xl:ml-5 "
          >
            Save
          </button>
        </div> */}
      </div>
    </>
  );
}

export default CarImageUploading
