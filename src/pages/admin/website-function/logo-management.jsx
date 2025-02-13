
import Layout from "@/components/admin/Layout";
import { useState, useEffect } from "react";
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong, faCube } from "@fortawesome/free-solid-svg-icons";

export default function LogoManagement() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [title, setTitle] = useState('');
  const [alt, setAlt] = useState('');
  const [isUpdating, setIsUpdating] = useState(false);
  const [selectedImageId, setSelectedImageId] = useState(null);

  // Function to fetch existing image
  async function fetchImage() {
    try {
      const res = await fetch('/api/logo/logo1');
      const data = await res.json();
      if (data.data.length > 0) {
        const image = data.data[0];
        setSelectedImageId(image._id);
        setTitle(image.title);
        setAlt(image.alt);
        setPreview(image.path);
        setIsUpdating(true);
      }
    } catch (error) {
      console.error('Error fetching image:', error);
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
    setPreview(URL.createObjectURL(selectedFile));
  }

  // Function to handle image upload or update
  async function handleUpload() {
    if (!file && !isUpdating) {
      alert('Please select a file to upload.');
      return;
    }

    const formData = new FormData();
    if (file) {
      formData.append('file', file);
    }
    formData.append('title', title);
    formData.append('alt', alt);
    if (selectedImageId) {
      formData.append('id', selectedImageId);
    }

    try {
      const res = await fetch('/api/logo/logo1', {
        method: 'POST',
        body: formData,
      });

      if (res.ok) {
        alert(`File ${isUpdating ? 'updated' : 'uploaded'} successfully`);
        // Optionally, reset form fields or update state after successful upload
        setFile(null);
        setPreview(null);
        setTitle('');
        setAlt('');
        setIsUpdating(false);
        setSelectedImageId(null);
        fetchImage(); // Fetch updated image
      } else {
        alert(`File ${isUpdating ? 'update' : 'upload'} failed`);
      }
    } catch (error) {
      console.error(`Error ${isUpdating ? 'updating' : 'uploading'} file:`, error);
      alert(`File ${isUpdating ? 'update' : 'upload'} failed`);
    }
  }

  // Function to handle image removal
  async function handleRemove() {
    if (!selectedImageId) {
      alert('No image selected for removal.');
      return;
    }

    try {
      const res = await fetch(`/api/logo/logo1?id=${selectedImageId}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        alert('Image removed successfully');
        // Reset state after successful removal
        setFile(null);
        setPreview(null);
        setTitle('');
        setAlt('');
        setIsUpdating(false);
        setSelectedImageId(null);
        fetchImage(); // Fetch updated image list
      } else {
        alert('Failed to remove image');
      }
    } catch (error) {
      console.error('Error removing image:', error);
      alert('Failed to remove image');
    }
  }
  console.log("preview the image", preview)

  return (

      <Layout>
        <div className="flex items-center gap-5 text-primary xl:mt-5 mb-7 ">
          <FontAwesomeIcon icon={faCube} className="text-2xl" />
          <p className="md:text-[28px] text-xl text-black">Logo Management</p>
          <FontAwesomeIcon
            icon={faArrowRightLong}
            className=" text-teal-700 text-xl"
          />
        </div>
        <div className="md:my-10 my-7 bg-white px-5 py-4 rounded-md">
          <p className="md:text-[20px] text-base font-semibold">Bizare Expenditure Main Website</p>
          <div>
            <div className="flex md:flex-row flex-col md:gap-10 gap-5 md:my-10 my-5 items-center xl:pl-5">
              <input type="file" className="mb-4" onChange={handleChange} />
              <div>
                {preview && <Image className="md:w-36 w-auto h-auto shadow-md mb-4" src={preview} alt="Preview" width={150} height={200} />}
                <div>
                  <p>Title</p>
                  <input
                    className="border px-2 py-0.5 mb-2 w-full md:w-auto rounded"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div>
                  <p>Alt</p>
                  <input
                    className="border px-2 py-0.5 w-full md:w-auto rounded"
                    type="text"
                    value={alt}
                    onChange={(e) => setAlt(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="flex md:flex-row flex-col md:gap-5 gap-3">
              <button className="bg-[#0d6efd] text-white px-3 py-2 w-full md:w-auto rounded" onClick={handleUpload}>
                {isUpdating ? 'Update Image' : 'Upload Image'}
              </button>
              <button className="bg-red-600 text-white px-3 py-2 w-full md:w-auto rounded" onClick={handleRemove}>
                Remove
              </button>
            </div>
          </div>
        </div>
      </Layout>

  );
}
