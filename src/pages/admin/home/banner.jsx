
import Layout from "@/components/admin/Layout";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong, faCube } from "@fortawesome/free-solid-svg-icons";
import CarouselBanner from "./CarouselBanner";

export default function Banner() {
  const [file, setFile] = useState(null);
  // const [preview, setPreview] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [selectedImageId, setSelectedImageId] = useState(null);

  // Function to fetch existing image
  async function fetchImage() {
    try {
      const res = await fetch("/api/home");
      const data = await res.json();
      if (data.data.length > 0) {
        const image = data.data[0];
        setSelectedImageId(image._id);
        setTitle(image.title);
        setDescription(image.description);
        // setPreview(image.path);
        setIsUpdating(true);
      }
    } catch (error) {
      console.error("Error fetching image:", error);
    }
  }

  // Fetch existing image on component mount
  useEffect(() => {
    fetchImage();
  }, []);

  // Function to handle file input change
  function handleChange(e) {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    // setPreview(URL.createObjectURL(selectedFile));
  }

  // Function to handle image upload or update
  async function handleUpload() {
    if (!file && !isUpdating) {
      alert("Please select a file to upload.");
      return;
    }

    const formData = new FormData();
    if (!file && !title) {
      alert("Please upload file and  write title");
      return;
    }

    if (file && title) {
      formData.append("file", file);
      formData.append("title", title);
      formData.append("description", description);
    }

    if (selectedImageId) {
      formData.append("id", selectedImageId);
    }

    try {
      const res = await fetch("/api/home", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        alert(`File ${isUpdating ? "updated" : "uploaded"} successfully`);
        // Optionally, reset form fields or update state after successful upload
        setFile(null);
        // setPreview(null);
        setTitle("");
        setDescription("");
        setIsUpdating(false);
        setSelectedImageId(null);
        fetchImage(); // Fetch updated image
      } else {
        alert(`File ${isUpdating ? "update" : "upload"} failed`);
      }
    } catch (error) {
      console.error(
        `Error ${isUpdating ? "updating" : "uploading"} file:`,
        error
      );
      alert(`File ${isUpdating ? "update" : "upload"} failed`);
    }
  }

  // Function to handle image removal
  async function handleRemove() {
    if (!selectedImageId) {
      alert("No Video selected for removal.");
      return;
    }

    try {
      const res = await fetch(`/api/home?id=${selectedImageId}`, {
        method: "DELETE",
      });

      if (res.ok) {
        alert("Video removed successfully");
        // Reset state after successful removal
        setFile(null);
        // setPreview(null);
        setTitle("");
        setDescription("")
        setIsUpdating(false);
        setSelectedImageId(null);
        fetchImage(); // Fetch updated image list
      } else {
        alert("Failed to remove Video");
      }
    } catch (error) {
      console.error("Error removing video:", error);
      alert("Failed to remove video");
    }
  }
  // console.log("preview the image", preview);
  
  return (

      <Layout>
        <div className="flex items-center gap-5 text-primary xl:mt-5 mb-10">
          <FontAwesomeIcon icon={faCube} className="text-2xl" />
          <p className="md:text-[28px] text-xl text-black">Banner Video Management</p>
          <FontAwesomeIcon
            icon={faArrowRightLong}
            className=" text-teal-700 text-xl"
          />
        </div>
        <div className="bg-white px-5 py-4 rounded-md">
          <p className="md:text-lg text-base font-semibold">
            BizareXpendition Main Website
          </p>
          <div>
            <div className="flex md:flex-row flex-col md:gap-10 gap-5 my-7 items-center xl:pl-5">
              <div className=" flex flex-1">
                <input type="file" className="mb-4 ml-3" onChange={handleChange} />
                {/* <div>
                  {preview && (
                    <Image
                      className="md:w-36 w-auto h-auto shadow-md mb-4"
                      src={preview}
                      alt="Preview"
                      width={150}
                      height={200}
                    />
                  )}
                </div> */}
              </div>
              <div className="flex-1">
                <div>
                  <h3 className=" font-semibold">Title</h3>
                  <input
                    className="py-0.5 mb-2 w-full md:w-auto border rounded h-8 px-2 focus:border-primary outline-none"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div>
                  <h3 className=" mt-3 font-semibold">Description</h3>
                  <input
                    className="py-0.5 mb-2 w-full md:w-auto border rounded h-8 px-2 focus:border-primary outline-none"
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
              </div>

            </div>
            <div className="flex md:flex-row flex-col md:gap-5 gap-3">
              <button className="bg-[#0d6efd] text-white px-3 py-2 w-full md:w-auto rounded"
                onClick={handleUpload}
              >
                {isUpdating ? "Update Image" : "Upload Image"}
              </button>
              <button className="bg-red-600 text-white px-3 py-2 w-full md:w-auto rounded"
                onClick={handleRemove}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <CarouselBanner/>
        </div>
      </Layout>

  );
}
