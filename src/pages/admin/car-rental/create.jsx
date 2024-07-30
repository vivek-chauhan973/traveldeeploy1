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
    imageDetails: [{ url: '', title: '', alt: '' }]
  });
  const [selectedImages, setSelectedImages] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    try {
      const response = await fetch('/api/cars/carapi');
      const data = await response.json();
      setCars(data.data);
    } catch (error) {
      console.error("Error fetching cars:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setSelectedImages([...e.target.files]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!form.name || !form.capacity || !form.ac || !form.seatingCapacity || !form.vehicleType || !form.dailyLimit || !form.rate || !form.outStationBasePrice || !form.perKmRate || !form.markup || !form.imageDetails[0].title || !form.imageDetails[0].alt) {
      alert('All fields are required');
      return;
    }

    const formData = new FormData();
    Object.keys(form).forEach((key) => {
      if (Array.isArray(form[key])) {
        form[key].forEach((value, index) => {
          if (typeof value === 'object' && value !== null) {
            Object.keys(value).forEach((subKey) => {
              formData.append(`${key}[${index}][${subKey}]`, value[subKey]);
            });
          } else {
            formData.append(`${key}[${index}]`, value);
          }
        });
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
      const url = editMode ? `/api/cars/carapi?id=${editId}` : '/api/cars/carapi';

      const response = await fetch(url, {
        method: method,
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        fetchCars(); // Refresh the car list
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
          imageDetails: [{ url: '', title: '', alt: '' }]
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
      imageDetails: car.imageDetails || [{ url: '', title: '', alt: '' }]
    });
    setEditMode(true);
    setEditId(car._id);
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`/api/cars/carapi?id=${id}`, {
        method: 'DELETE',
      });

      const result = await response.json();

      if (result.success) {
        fetchCars(); // Refresh the car list
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
        <div className="bg-white rounded-md shadow-[0_0px_10px_-3px_rgba(0,0,0,0.3)] p-2">
          <form onSubmit={handleSubmit}>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 items-center grid-cols-reverse'>
              <div className="w-full bg-white p-8 border rounded">
                <div className="bg-slate-200 h-56 w-full rounded">
                    {form.imageDetails[0]?.url && (
                      <img src={form.imageDetails[0]?.url} alt={form.imageDetails[0]?.alt || "Car Image"} className="h-full w-full object-cover" />
                    )}
                </div>
                <div className="mt-4">
                  <input
                    type="file"
                    multiple
                    onChange={handleFileChange}
                    className='file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100'
                  />
                </div>
                <div className="w-40">
                  <div>
                    <label className="text-para font-semibold">Title</label>
                    <input
                      type='text'
                      name="title"
                      value={form.imageDetails[0]?.title || ''}
                      onChange={(e) => setForm((prev) => ({ ...prev, imageDetails: [{ ...prev.imageDetails[0], title: e.target.value }] }))}
                      className="border rounded-md h-6 px-2 text-para grow focus:border-black font-sans outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-para font-semibold">Alt</label>
                    <input
                      type='text'
                      name="alt"
                      value={form.imageDetails[0]?.alt || ''}
                      onChange={(e) => setForm((prev) => ({ ...prev, imageDetails: [{ ...prev.imageDetails[0], alt: e.target.value }] }))}
                      className="border rounded-md h-6 px-2 text-para grow focus:border-black font-sans outline-none"
                      required
                    />
                  </div>
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
                        {field.options.map((option) => (
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
            <div className="flex justify-end mt-4">
              <button
                type="submit"
                className="bg-blue-500 text-white rounded py-2 px-4 hover:bg-blue-600 transition duration-200"
              >
                {editMode ? 'Update Car' : 'Add Car'}
              </button>
            </div>
          </form>
        </div>
        <div>
          <h2 className="text-xl font-bold mt-8 mb-4">Car List</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr>
                  <th className="border-b px-4 py-2 text-left">Name</th>
                  <th className="border-b px-4 py-2 text-left">Capacity</th>
                  <th className="border-b px-4 py-2 text-left">AC</th>
                  <th className="border-b px-4 py-2 text-left">Seating</th>
                  <th className="border-b px-4 py-2 text-left">Vehicle Type</th>
                  <th className="border-b px-4 py-2 text-left">Daily Limit</th>
                  <th className="border-b px-4 py-2 text-left">Rate</th>
                  <th className="border-b px-4 py-2 text-left">Out Station Base Price</th>
                  <th className="border-b px-4 py-2 text-left">Per KM Rate</th>
                  <th className="border-b px-4 py-2 text-left">Markup</th>
                  <th className="border-b px-4 py-2 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {cars?.map((car) => (
                  <tr key={car._id}>
                    <td className="border-b px-4 py-2">{car.name}</td>
                    <td className="border-b px-4 py-2">{car.capacity}</td>
                    <td className="border-b px-4 py-2">{car.ac}</td>
                    <td className="border-b px-4 py-2">{car.seatingCapacity}</td>
                    <td className="border-b px-4 py-2">{car.vehicleType}</td>
                    <td className="border-b px-4 py-2">{car.dailyLimit}</td>
                    <td className="border-b px-4 py-2">{car.rate}</td>
                    <td className="border-b px-4 py-2">{car.outStationBasePrice}</td>
                    <td className="border-b px-4 py-2">{car.perKmRate}</td>
                    <td className="border-b px-4 py-2">{car.markup}</td>
                    <td className="border-b px-4 py-2 flex space-x-2">
                      <button onClick={() => handleEdit(car)} className="text-blue-500 hover:text-blue-600">
                        <FaEdit />
                      </button>
                      <button onClick={() => handleDelete(car._id)} className="text-red-500 hover:text-red-600">
                        <MdDeleteForever />
                      </button>
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
