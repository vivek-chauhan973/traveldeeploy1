import { AppProvider } from "@/components/admin/context/Package/AddGuest";
import Layout from "@/components/admin/Layout";
import { useState, useEffect } from "react";
import Image from 'next/image'


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

  return (
    <AppProvider>
      <Layout>
        <p className="text-[28px] font-semibold">Logo Management</p>
        <div className="my-20 bg-white p-3 rounded-md">
          <p className="text-[20px] font-semibold">Bizare Expenditure Main Website</p>
          <div>
            <div className="flex my-10 items-center pl-10">
              <input type="file" onChange={handleChange} />
              <div>
                {preview && <Image className="w-36 shadow-md" src={preview} alt="Preview" />}
                <div>
                  <p>Title</p>
                  <input
                    className="border px-2"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div>
                  <p>Alt</p>
                  <input
                    className="border px-2"
                    type="text"
                    value={alt}
                    onChange={(e) => setAlt(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div>
              <button className="bg-[#0d6efd] text-white px-3 py-2" onClick={handleUpload}>
                {isUpdating ? 'Update Image' : 'Upload Image'}
              </button>
            </div>
          </div>
        </div>
      </Layout>
    </AppProvider>
  );
}
