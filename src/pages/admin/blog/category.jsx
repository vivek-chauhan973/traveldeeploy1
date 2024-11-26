import Layout from "@/components/admin/Layout";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { AppProvider } from "@/components/admin/context/Package/AddGuest";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCube,
  faArrowRightLong,
  faEdit,
  faCirclePlus,
  faTrash,
  faCancel,
  faSave,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const fetchCrouselData = async () => {
  const data = await fetch("/api/cars/carhome/carCrouselStatic");
  return await data.json();
};

export default function BlogMaster() {
  const [formData, setFormData] = useState({
    image: null,
    title: "",
  });
  const [crouselData, setCrouselData] = useState([]);
  const [carouselItems, setCarouselItems] = useState([]);
  const [isEditing, setIsEditing] = useState(false); // To check if we are editing an existing item
  const [editIndex, setEditIndex] = useState(null);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [uploadButtonEnabled, setUploadButtonEnabled] = useState(false);

  // Handler for title,desc,url field changes
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  useEffect(() => {
    fetchCrouselData().then((res) => {
      console.log("crousel response is here ----> ", res);
      setCrouselData(res?.data || []);
    });
  }, []);
  // Handler for file input (image)
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prevData) => ({
        ...prevData,
        image: file, // Store the image file in the formData state
      }));
    }
  };

  const handleSubmitForm = async () => {
    if (formData.image && formData.title) {
      const form = new FormData();
      form.append("file", formData.image);
      form.append("title", formData.title);

      const data = await fetch("/api/cars/carhome/carCrouselStatic", {
        method: "POST",
        body: form,
      });

      if (isEditing) {
        // Update existing item
        const updatedItems = [...carouselItems];
        updatedItems[editIndex] = formData;
        setCarouselItems(updatedItems);
        setIsEditing(false);
        setEditIndex(null);
        alert("Item updated successfully!");
      } else {
        // Add new item
        setCarouselItems((prevItems) => [...prevItems, formData]);
        alert("Item added successfully!");
      }
      // Reset form
      resetForm();
    }
  };

  const resetForm = () => {
    setFormData({
      image: null,
      title: "",
    });
    setUploadButtonEnabled(false);
    setIsEditing(false);
    setEditIndex(null);
  };

  const handleEdit = async (index) => {
    const itemToEdit = carouselItems[index];
    const res = await fetch(`/api/home/edit-crousel?id=${index}`);
    const data = await res.json();
    console.log("res ----- > ", data?.data);
    if (res?.ok) {
      setFormData((prevData) => ({
        ...prevData,
        image: data?.data?.path, // Store the image file in the formData state
      }));
    }
    setFormData(itemToEdit); // Set the form data with the selected item
    setIsEditing(true); // Enable editing mode
    setEditIndex(index); // Track the index of the item being edited
    setUploadButtonEnabled(true);
  };

  const handleDelete = async (index) => {
    const updatedItems = crouselData.filter((item) => item?._id !== index); // Filter out the item to delete
    setCrouselData(updatedItems);
    const data = await fetch(`/api/cars/carhome/carCrouselStatic?id=${index}`, {
      method: "DELETE",
    });
    if (data) {
      alert("Item deleted successfully!");
    }
  };

  return (
    <>
      <AppProvider>
        <Layout>
          <div>
            <div className="flex items-center gap-5 text-primary py-5">
              <FontAwesomeIcon icon={faCube} className="text-2xl" />
              <p className="md:text-[28px] text-xl text-black">Blog Master</p>
              <FontAwesomeIcon
                icon={faArrowRightLong}
                className=" text-teal-700 text-xl"
              />
            </div>
            {/* Blog Writer Management start*/}
            <div className="bg-white p-5 rounded-md mb-10">
              <div className="grid md:grid-cols-2 border-b-2 border-gray-100">
                <div>
                  <p className="md:text-lg text-base font-semibold">
                    Blog Writer Management
                  </p>
                  <div className="md:py-5 py-2 xl:pl-10 md:pl-2">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-black/20 file:text-black/50 hover:file:bg-black/75 hover:file:text-white cursor-pointer w-full md:w-auto"
                    />
                    {formData?.image && (
                      <div className="w-full md:w-auto flex flex-col md:my-10 my-5">
                        <Image
                          className="w-full h-full md:w-36 shadow-md rounded"
                          src={URL.createObjectURL(formData.image)}
                          alt="Preview"
                          width="220"
                          height="120"
                        />
                        <div className="mt-2">
                          <p>Title</p>
                          <input
                            className="border px-2 py-1 rounded w-full md:w-36"
                            type="text"
                          />
                        </div>
                        <div className="mt-2">
                          <p>Alt</p>
                          <input
                            className="border px-2 py-1 rounded w-full md:w-36"
                            type="text"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div>
                  <div className="md:py-5 py-2">
                    <label htmlFor="writer" className=" font-semibold mb-1">
                      Writer Name
                    </label>
                    <input
                      id="writer"
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleFormChange}
                      placeholder="Enter Your Writer Name"
                      className="p-2 mb-4 w-full border rounded-md h-10 px-2 focus:border-primary outline-none"
                      required
                    />
                    {!isFormSubmitted && (
                      <button
                        onClick={handleSubmitForm}
                        className="mt-4 bg-navyblack text-white px-4 py-2 rounded md:w-auto w-full"
                      >
                        {isEditing ? "Update" : "Upload"}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
            {/* Blog Writer Management start*/}
            {/* Listing table start */}
            <table className="bg-[#FFFBF5] shadow-md table-auto w-full border-collapse border rounded-lg  overflow-hidden p-10 ">
              <thead>
                <tr className="border rounded">
                  <th className="py-2 bg-slate-600 text-white border text-[15px] pl-2">
                    Image
                  </th>
                  <th className="py-2 bg-slate-600 text-white border text-[15px] pl-2">
                    Title
                  </th>
                  <th className="py-2 bg-slate-600 text-white border text-[15px] pl-2">
                    Edit & Remove
                  </th>
                </tr>
              </thead>
              <tbody>
                {crouselData.map((item, index) => (
                  <tr className="border-b" key={index}>
                    <td className="py-2 xl:pl-5 px-2 w-52">
                      <Image
                        className="w-40 md:h-16 h-12 object-cover rounded"
                        src={item.path}
                        alt={item.title}
                        width="1920"
                        height="1280"
                      />
                    </td>
                    <td className="py-4 px-2 border-x capitalize  text-center text-wrap">
                      {item.title}r
                    </td>
                    <td className="flex justify-center items-center gap-2 pt-7">
                      <FontAwesomeIcon
                        icon={faEdit}
                        className="font1 cursor-pointer"
                        onClick={() => handleEdit(item?._id)}
                      />
                      <FontAwesomeIcon
                        icon={faTrash}
                        className="font1 cursor-pointer"
                        onClick={() => handleDelete(item?._id)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* Listing table end */}
          </div>
        </Layout>
      </AppProvider>
    </>
  );
}
