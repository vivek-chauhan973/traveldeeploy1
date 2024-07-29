import { useState, useEffect } from 'react';
import Layout from "@/components/admin/Layout";
import { MdOutlineAddCircle, MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { BiSolidCarMechanic } from "react-icons/bi";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { AppProvider } from '@/components/admin/context/Package/AddGuest';
import Image from 'next/image';

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
    imageUrls: []
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

    const formData = new FormData();
    Object.keys(form).forEach((key) => {
      if (Array.isArray(form[key])) {
        form[key].forEach((value, index) => formData.append(`${key}[${index}]`, value));
      } else {
        formData.append(key, form[key]);
      }
    });

    if (selectedImages.length) {
      selectedImages.forEach((image) => {
        formData.append('images', image);
      });
    }

    await sendFormData(formData);
  };

  const sendFormData = async (formData) => {
    try {
      const method = editMode ? 'PUT' : 'POST';
      const url = editMode ? `/api/cars/${editId}` : '/api/cars';

      const response = await fetch(url, {
        method: method,
        body: formData,
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
            <HiOutlineArrowNarrowRight size={24} className="text-teal-700" />
          </div>
        </div>
        <div className="bg-white rounded-md shadow-[0_0px_10px_-3px_rgba(0,0,0,0.3)] p-2 ">
          <form onSubmit={handleSubmit}>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 items-center grid-cols-reverse'>
              <div className="h-80 w-full bg-white p-8 border rounded">
                <div className="bg-slate-200 h-56 w-full rounded">
                  {selectedImages.length > 0 && selectedImages.map((image, index) => (
                    <img key={index} src={URL.createObjectURL(image)} alt={`Selected Image ${index + 1}`} className="h-full w-full object-cover" />
                  ))}
                </div>
                <div className="mt-4">
                  <input
                    type="file"
                    multiple
                    onChange={handleFileChange}
                    className='file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100'
                  />
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
                <button
                  type="submit"
                  className="w-full mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                  {editMode ? 'Update Car' : 'Add Car'}
                </button>
              </div>
            </div>
          </form>
          <div className="mt-10">
            <p className="text-2xl font-semibold">Cars List</p>
            <div className="mt-5 grid gap-5 grid-cols-1 md:grid-cols-2">
              {cars.map((car) => (
                <div key={car._id} className="border p-4 rounded">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">{car.name}</h3>
                    <div className="flex gap-2">
                      <MdOutlineAddCircle
                        className="text-xl cursor-pointer text-green-600"
                        onClick={() => handleEdit(car)}
                      />
                      <MdDeleteForever
                        className="text-xl cursor-pointer text-red-600"
                        onClick={() => handleDelete(car._id)}
                      />
                    </div>
                  </div>
                  <p>Capacity: {car.capacity}</p>
                  <p>Seating Capacity: {car.seatingCapacity}</p>
                  <p>AC/Non-AC: {car.ac}</p>
                  <p>Vehicle Type: {car.vehicleType}</p>
                  <p>Daily Limit: {car.dailyLimit}</p>
                  <p>Rate: {car.rate}</p>
                  <p>Out Station Base Price: {car.outStationBasePrice}</p>
                  <p>Per KM Rate: {car.perKmRate}</p>
                  <p>Markup: {car.markup}</p>
                  {car.imageUrls && car.imageUrls.map((url, index) => (
                    <img
                      key={index}
                      src={url}
                      alt={`Car Image ${index + 1}`}
                      className="w-full h-auto"
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </AppProvider>
  );
}
