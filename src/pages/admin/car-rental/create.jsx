import { useState, useEffect } from 'react';
import Layout from "@/components/admin/Layout";
import { MdOutlineAddCircle, MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { BiSolidCarMechanic } from "react-icons/bi";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { AppProvider } from '@/components/admin/context/Package/AddGuest';
import Image from 'next/image'
export default function AddCar() {
  const [cars, setCars] = useState([]);
  const [form, setForm] = useState({
    name: '',
    capacity: '',
    ac: '',
    seatingCapacity: '',
    vehicleType: '',
    dailyLimit: '',
    rate: '',
    outStationBasePrice: '',
    perKmRate: '',
    markup: '',
    imageUrls: []  // For handling multiple images
  });

  const [selectedImages, setSelectedImages] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    try {
      const response = await fetch('/api/cars/list/get');
      const data = await response.json();
      setCars(data.data);
    } catch (error) {
      console.error("Error fetching cars:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (['capacity', 'seatingCapacity', 'dailyLimit', 'rate', 'outStationBasePrice', 'perKmRate', 'markup'].includes(name)) {
      if (!/^\d*$/.test(value)) return; // Allow only digits
    }
    setForm({ ...form, [name]: value });
  };

  const handleFileChange = (e) => {
    setSelectedImages([...e.target.files]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.capacity || !form.ac || !form.seatingCapacity || !form.vehicleType || !form.dailyLimit || !form.rate || !form.outStationBasePrice || !form.perKmRate || !form.markup) {
      alert('All fields are required');
      return;
    }

    if (selectedImages.length) {
      const base64Images = await Promise.all(selectedImages.map(image => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = () => {
            resolve(reader.result.split(',')[1]);
          };
          reader.onerror = reject;
          reader.readAsDataURL(image);
        });
      }));

      const payload = {
        ...form,
        imageUrls: base64Images,
      };

      await sendFormData(payload);
    } else {
      await sendFormData(form);
    }
  };

  const sendFormData = async (formData) => {
    try {
      const method = editMode ? 'PUT' : 'POST';
      const url = editMode ? `/api/cars/${editId}` : '/api/cars';

      const response = await fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        fetchCars();
        setForm({
          name: '',
          capacity: '',
          ac: '',
          seatingCapacity: '',
          vehicleType: '',
          dailyLimit: '',
          rate: '',
          outStationBasePrice: '',
          perKmRate: '',
          markup: '',
          imageUrls: []
        });
        setSelectedImages([]);
        setEditMode(false);
        setEditId(null);
      } else {
        console.error("Error submitting form:", result.error);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleEdit = (car) => {
    setForm({
      name: car.name,
      capacity: car.capacity,
      ac: car.ac,
      seatingCapacity: car.seatingCapacity,
      vehicleType: car.vehicleType,
      dailyLimit: car.dailyLimit,
      rate: car.rate,
      outStationBasePrice: car.outStationBasePrice,
      perKmRate: car.perKmRate,
      markup: car.markup,
      imageUrls: car.imageUrls
    });
    setEditMode(true);
    setEditId(car._id);
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`/api/cars/${id}`, {
        method: 'DELETE',
      });

      const result = await response.json();

      if (result.success) {
        fetchCars();
      } else {
        console.error("Error deleting car:", result.error);
      }
    } catch (error) {
      console.error("Error deleting car:", error);
    }
  };

  return (
    <AppProvider>
    <Layout>
      <div>
        <div className="flex items-center gap-5 text-primary pb-3">
          <BiSolidCarMechanic size={28} className="font-semibold" />
          <p className="text-[24px] text-black">Add Car</p>
          <HiOutlineArrowNarrowRight size={24} className=" text-teal-700" />
        </div>
      </div>
      <div className="bg-white rounded-md shadow-[0_0px_10px_-3px_rgba(0,0,0,0.3)] p-2 ">
        <form className="" onSubmit={handleSubmit}>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5 items-center grid-cols-reverse'>
            <div className="h-80 w-full bg-white p-8 border rounded">
              <div className="bg-slate-200 h-56 w-full rounded">
                {selectedImages.length > 0 && selectedImages.map((image, index) => (
                  <Image key={index} src={URL.createObjectURL(image)} alt={`Selected Image ${index + 1}`} className="h-full w-full object-cover " />
                ))}
              </div>
              <div className="mt-4">
                <input type="file" multiple onChange={handleFileChange} className='file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100' />
              </div>
            </div>
            <div className="border p-2 rounded">
              {[
                { label: "Car Name", name: "name", type: "text" },
                { label: "Seating Capacity", name: "seatingCapacity", type: "number" },
                { label: "Ac /Non Ac", name: "ac", type: "select", options: ["AC", "Non AC"] },
                { label: "Vehicle Type", name: "vehicleType", type: "select", options: ["Sedan", "SUV", "Hatchback"] },
                { label: "Daily Limit", name: "dailyLimit", type: "number" },
                { label: "Rate", name: "rate", type: "number" },
                { label: "Base price for KM's", name: "capacity", type: "number" },
                { label: "Out Station Base Price for KM", name: "outStationBasePrice", type: "number" },
                { label: "Per KM Rate", name: "perKmRate", type: "number" },
                { label: "Markup", name: "markup", type: "number" },
              ].map((field) => (
                <div key={field.name} className="mt-2 flex items-center pb-2">
                  <div className="w-40">
                    <label className="text-para font-semibold" htmlFor={field.name}>{field.label}:</label>
                  </div>
                  {field.type === "select" ? (
                    <select
                      className="border rounded-md h-8 px-2 text-para grow focus:border-black font-sans outline-none"
                      name={field.name}
                      value={form[field.name]}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select {field.label}</option>
                      {field.options.map(option => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  ) : (
                    <input
                      className="border rounded-md h-8 px-2 text-para grow focus:border-black font-sans outline-none"
                      type={field.type}
                      name={field.name}
                      value={form[field.name]}
                      onChange={handleInputChange}
                      required
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
          <button className="px-10 py-1 w-full bg-black text-white rounded mt-5" type="submit">
            {editMode ? 'Update Car' : 'Add Car'}
          </button>
        </form>
      </div>
      <div className="border p-2 rounded bg-white mt-20 shadow-[0_0px_10px_-3px_rgba(0,0,0,0.3)]">
        <div>
          <p className="font-semibold text-[15px]">Car Create List</p>
        </div>
        {cars?.map((car, index) => (
          <div key={car._id} className="grid grid-cols-4 grid-flow-col even:bg-slate-100 py-3">
            <div className="place-self-center">
              <p>{index + 1}</p>
            </div>
            <div className="place-self-center">
              {car.name}
            </div>
            <div className="place-self-center">
              {new Date(car.createdAt).toLocaleDateString()}
            </div>
            <div className='place-self-center flex gap-2 items-center'>
              <FaEdit size={20} className='mt-1 hover:text-red-500 cursor-pointer' onClick={() => handleEdit(car)} />
              <MdDeleteForever size={24} className='mt-1 hover:text-red-500 cursor-pointer' onClick={() => handleDelete(car._id)} />
            </div>
          </div>
        ))}
      </div>
    </Layout>
    </AppProvider>
  );
}
