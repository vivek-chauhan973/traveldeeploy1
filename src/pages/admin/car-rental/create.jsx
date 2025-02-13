import { useState, useEffect } from 'react';
import Layout from "@/components/admin/Layout";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong, faCube, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function AddCar() {
  const [cars, setCars] = useState([]);
  const [previewImage,setPreviewImage]=useState(null);
  const [form, setForm] = useState({
    misc: '',
    capacity: '',
    ac: '',
    bags: '',
    seatingCapacity: '',
    vehicleType: '',
    dailyLimit: '',
    rate: '',
    outStationBasePrice: '',
    perKmRate: '',
    markup: '',
    imageDetails: [{ url: '', title: '', alt: '' }],
    locationrate:''
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
    const files = e.target.files;
    setSelectedImages([...files]); // Store all selected files
    
    // If there's at least one file selected, update the preview
    if (files.length > 0) {
      setPreviewImage(URL.createObjectURL(files[0])); // Preview the first image
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!form.misc || !form.capacity || !form.ac || !form.seatingCapacity || !form.vehicleType || !form.dailyLimit || !form.rate || !form.outStationBasePrice || !form.perKmRate || !form.markup || !form.imageDetails[0].title || !form.imageDetails[0].alt) {
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
          misc: '',
          capacity: '',
          bags: '',
          ac: '',
          seatingCapacity: '',
          vehicleType: '',
          dailyLimit: '',
          rate: '',
          outStationBasePrice: '',
          perKmRate: '',
          markup: '',
          imageDetails: [{ url: '', title: '', alt: '' }],
          locationrate:''

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
      misc: car?.misc,
      capacity: car?.capacity,
      ac: car?.ac,
      bags: car?.bags,
      seatingCapacity: car?.seatingCapacity,
      vehicleType: car?.vehicleType,
      dailyLimit: car?.dailyLimit,
      rate: car?.rate,
      outStationBasePrice: car?.outStationBasePrice,
      perKmRate: car?.perKmRate,
      markup: car?.markup,
      imageDetails: car?.imageDetails || [{ url: '', title: '', alt: '' }],
      locationrate:car?.locationrate,

    });
    setPreviewImage(car?.imageDetails[0]?.url)
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
  
      <Layout>
        <div className="flex items-center gap-5 text-primary xl:mb-10 mb-7 xl:mt-5">
          <FontAwesomeIcon icon={faCube} className="text-2xl" />
          <p className="md:text-[28px] text-xl text-black">Add Vehicle</p>
          <FontAwesomeIcon
            icon={faArrowRightLong}
            className=" text-teal-700 text-xl"
          />
        </div>
        <div className="bg-white rounded-md shadow-[0_0px_10px_-3px_rgba(0,0,0,0.3)] p-5">
          <form onSubmit={handleSubmit}>
            <div className='grid grid-cols-1 xl:grid-cols-2 gap-5 items-center grid-cols-reverse'>
              <div className="w-full p-5 h-full border bg-white rounded mt-1">
                <div className="bg-slate-200 h-56 w-full rounded">
                  {previewImage&&(
                    <img src={previewImage} alt={form.imageDetails[0]?.alt || "car image"} className="h-full w-full object-cover" />
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
                <div className="md:w-40 w-full">
                  <div className='my-2'>
                    <label className="text-para font-semibold">Title</label>
                    <input
                      type='text'
                      name="title"
                      value={form.imageDetails[0]?.title || ''}
                      onChange={(e) => setForm((prev) => ({ ...prev, imageDetails: [{ ...prev.imageDetails[0], title: e.target.value }] }))}
                      className="border px-2 py-0.5 w-full md:w-auto rounded focus:border-primary outline-none "
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
                      className="border px-2 py-0.5 w-full md:w-auto rounded focus:border-primary outline-none"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="border py-6 px-3 rounded">
                {[
                  { label: "Vehicle Selection", name: "vehicleType", type: "select", options: ["Sedan", "Innova", "Crysta", "Tempo 12S", "Tempo 14S"] },
                  { label: "Seating Capacity", name: "seatingCapacity", type: "number" },
                  { label: "Large Bags", name: "bags", type: "number" },
                  { label: "Daily Limit KM's", name: "dailyLimit", type: "number" },
                  { label: "Base Fare/Per Day", name: "capacity", type: "number" },
                  { label: "Base price for KM's", name: "rate", type: "number" },
                  { label: "Out Station Base Price for KM", name: "outStationBasePrice", type: "number" },
                  { label: "Per KM Price", name: "perKmRate", type: "number" },
                  { label: "Markup (2%=2)", name: "markup", type: "number" },
                  { label: "AC Charge per Day", name: "ac", type: "number" },
                  { label: "Misc", name: "misc", type: "number" },
                  { label: "Location based rate percentage (2%=2)", name: "locationrate", type: "number" },
                ].map((field) => (
                  <div key={field.name} className="mt-2 flex md:flex-row flex-col md:items-center pb-2">
                    <div className="w-40">
                      <label className="text-para font-semibold" htmlFor={field.name}>{field.label} :</label>
                    </div>
                    {field.type === "select" ? (
                      <select
                        className="border md:w-auto w-full rounded-md h-8 px-2 font-sans text-para grow focus:border-primary outline-none"
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
                        className='border rounded-md h-8 px-2 font-sans text-para grow focus:border-primary outline-none'
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
            <div className="flex md:justify-end mt-4">
              <button
                type="submit"
                className="bg-navyblack md:w-auto w-full text-white rounded py-2 px-4"
              >
                {editMode ? 'Update Car' : 'Add Car'}
              </button>
            </div>
          </form>
        </div>
        <div>
          <h2 className="text-xl font-medium mt-5 mb-2 ml-2">Car List</h2>
          <div className="table-container w-full m-auto overflow-x-auto">
            <table className="w-full border-collapse border text-center text-para">
              <thead>
                <tr className="border-b bg-black text-white">
                  <th className="border-t border-l p-2 text-wrap font-semibold border-r">
                    Vehicle Selection
                  </th>
                  <th className="border-t border-l p-2 text-wrap font-semibold  border-r ">
                    Seating Capacity
                  </th>
                  <th className="border-t border-l p-2 text-wrap font-semibold border-r ">
                    Large Bags
                  </th>
                  <th className="border-t border-l p-2 text-wrap font-semibold border-r border-b">
                    Daily Limit
                  </th>
                  <th className="border-t border-l p-2 text-wrap font-semibold border-r">
                    Base Fare/Per Day
                  </th>
                  <th className="border-t border-l p-2 text-wrap font-semibold border-r ">
                    Base price
                  </th>
                  <th className="border-t border-l p-2 text-wrap font-semibold border-r">
                    Out Station
                  </th>
                  <th className="border-t border-l p-2 text-wrap font-semibold border-r ">
                    Rate
                  </th>
                  <th className="border-t border-l p-2 text-wrap font-semibold border-r ">
                    Markup (%)
                  </th>
                  <th className="border-t border-l p-2 text-wrap font-semibold border-r ">
                    AC Charge
                  </th>
                  <th className="border-t border-l p-2 text-wrap font-semibold border-r ">
                    Misc
                  </th>
                  <th className="border-t border-l p-2 text-wrap font-semibold border-r ">
                    Location Rate(%)
                  </th>
                  <th className="border-t border-l p-2 text-wrap font-semibold border-r ">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {cars?.map((car) => (
                  <tr key={car._id}>
                    <td className="border-t border-l text-left border-r px-2 py-2 border-b">
                      {car.vehicleType}
                    </td>
                    <td className="border-t border-l border-r px-2 py-2 border-b">
                      {car.seatingCapacity}
                    </td>
                    <td className="border-t border-l border-r px-2 py-2 border-b font-semibold">
                      {car.bags}  
                    </td>
                    <td className="border-t border-l border-r px-2 py-2 border-b">
                      {car.dailyLimit}
                    </td>
                    <td className="border-t border-l border-r px-2 py-2 border-b">
                      {car?.capacity?.toLocaleString('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                    </td>
                    <td className="border-t border-l border-r px-2 py-2 border-b">
                      {car?.rate?.toLocaleString('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                    </td>
                    <td className="border-t border-l border-r px-2 py-2 border-b font-semibold">
                      {car?.outStationBasePrice?.toLocaleString('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0, maximumFractionDigits: 0 })}                     
                    </td>
                    <td className="border-t border-l border-r px-2 py-2 border-b capitalize">
                      {car?.perKmRate?.toLocaleString('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0, maximumFractionDigits: 0 })}                     
                    </td>
                    <td className="border-t border-l border-r px-2 py-2 border-b capitalize">
                      {car?.markup}                     
                    </td>
                    <td className="border-t border-l border-r px-2 py-2 border-b capitalize">
                      {car?.ac?.toLocaleString('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0, maximumFractionDigits: 0 })}                     
                    </td>
                    <td className="border-t border-l border-r px-2 py-2 border-b font-semibold capitalize">
                      {car?.misc?.toLocaleString('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0, maximumFractionDigits: 0 })}                     
                    </td>
                    <td className="border-t border-l border-r px-2 py-2 border-b font-semibold capitalize">
                      {car?.locationrate}                     
                    </td>
                    <td className="border-t border-l border-r px-2 py-2 border-b capitalize">
                      <FontAwesomeIcon
                        icon={faEdit}
                        className="cursor-pointer"
                        onClick={() => handleEdit(car)}
                      />
                      <FontAwesomeIcon
                        icon={faTrash}
                        className="cursor-pointer ml-2"
                        onClick={() => handleDelete(car._id)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Layout>

  );
}


