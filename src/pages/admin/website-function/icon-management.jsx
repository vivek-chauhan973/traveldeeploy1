import { AppProvider } from "@/components/admin/context/Package/AddGuest";
import Layout from "@/components/admin/Layout";
import Image from "next/image";
import { useState, useEffect } from "react";
import dynamic from 'next/dynamic'

const MdDeleteForever = dynamic(() => import('react-icons/md').then(mod => mod.MdDeleteForever));

export default function IconManagement() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [title, setTitle] = useState("");
  const [alt, setAlt] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [selectedImageId, setSelectedImageId] = useState(null);
  const [imageData, setImageData] = useState([]);

  // Function to fetch existing image
  async function fetchImage() {
    try {
      const res = await fetch("/api/icon/icon1");
      const data = await res.json();
      setImageData(data?.data || []);
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
    setPreview(URL.createObjectURL(selectedFile));
  }

  // Function to handle image upload or update
  async function handleUpload() {
    if (!file && !isUpdating) {
      alert("Please select a file to upload.");
      return;
    }

    const formData = new FormData();
    if (file) {
      formData.append("file", file);
    }
    formData.append("title", title);
    formData.append("alt", alt);
    if (selectedImageId) {
      formData.append("id", selectedImageId);
    }

    try {
      const res = await fetch("/api/icon/icon1", {
        method: "POST",
        body: formData,
      });
      if (res.ok) {
        setFile(null);
        setPreview(null);
        setTitle("");
        setAlt("");
        setIsUpdating(false);
        setSelectedImageId(null);
        alert(`File uploaded successfully`);
        fetchImage();
      } else {
        alert(`File upload failed`);
      }
    } catch (error) {
      console.error(`Error uploading file:`, error);
      alert(`File uploading failed`);
    }
  }

  // Function to handle image removal
  async function handleRemove(selectedImageId) {
    try {
      const res = await fetch(`/api/icon/icon1?id=${selectedImageId}`, {
        method: "DELETE",
      });

      if (res.ok) {
        const data = imageData?.filter((item) => item?._id !== selectedImageId);
        setImageData(data);
        alert("Image removed successfully");
        // Reset state after successful removal
      } else {
        alert("Failed to remove image");
      }
    } catch (error) {
      console.error("Error removing image:", error);
      alert("Failed to remove image");
    }
  }
  // console.log("preview the image", preview);
  return (
    <AppProvider>
      <Layout>
        <p className="md:text-[28px] text-xl font-semibold">Icon Management</p>
        <div className="md:my-10 my-7 bg-white px-5 py-4 rounded-md">
          <p className="md:text-[20px] text-base font-semibold">
            Bizare Expenditure Main Website
          </p>
          <div>
            <div className="flex md:flex-row flex-col md:gap-10 gap-5 md:my-10 my-5 items-center xl:pl-5">
              <input type="file" className="mb-4" onChange={handleChange} />
              <div>
                {preview && (
                  <Image
                    className="md:w-36 w-auto h-auto shadow-md mb-4"
                    src={preview}
                    alt="Preview"
                    width={150}
                    height={200}
                  />
                )}
                <div>
                  <p>Name of Icon</p>
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
              <button
                className="bg-[#0d6efd] text-white px-3 py-2 w-full md:w-auto rounded-sm"
                onClick={handleUpload}
              >
                Upload Image
              </button>
            </div>
          </div>
          <div className="mt-10">
            <table className="w-full border-collapse border border-gray-300 text-center text-para">
              <thead >
                <tr className="border-b bg-black text-white">
                  <th className="border border-gray-300 font-normal px-3 py-1 text-xs uppercase tracking-wider">Icon</th>
                  <th className="border border-gray-300 font-normal px-3 py-1 text-xs uppercase tracking-wider">Name</th>
                  <th className="border border-gray-300 font-normal px-3 py-1 text-xs uppercase tracking-wider">Action</th>
                </tr>
              </thead>
              <tbody className="bg-gray-100">
                {imageData?.map((item) => (
                  <tr key={item?._id} className="border-b">
                    <td className="flex justify-center items-center  border-l border-r px-2 py-2 overflow-hidden border-gray-300">
                      <Image
                        className=" shadow-md"
                        src={item?.path}
                        alt="Preview"
                        width={32}
                        height={32}
                      />
                    </td>
                    <td className=" border-l border-r px-2 py-2 capitalize overflow-hidden border-gray-300">
                      <p className="text-lg font-semibold capitalize">{item?.title}</p>
                    </td>
                    <td className="flex justify-center items-center  border-l border-r px-2 py-2 overflow-hidden border-gray-300">
                      <MdDeleteForever
                        onClick={() => handleRemove(item?._id)}
                        size={36}
                        className="hover:text-red-500 cursor-pointer"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

          </div>
        </div>
      </Layout>
    </AppProvider>
  );
}
