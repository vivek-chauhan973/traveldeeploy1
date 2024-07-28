import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const fetchLocation = async (locationId) => {
  const response = await fetch(`/api/location/${locationId}`);
  const data = await response.json();
  return data.updatedLocation;
};

export default function LocationForm({ formType }) {
  const router = useRouter();
  const { locationId } = router.query;

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    status: 0,
  });

  const [initialFormData, setInitialFormData] = useState(formData);

  const [errors, setErrors] = useState({
    name: '',
    description: '',
    status: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      if (locationId) {
        const locationData = await fetchLocation(locationId);
        if (locationData) {
          setInitialFormData(locationData);
          setFormData(locationData);
        }
      }
    };

    fetchData();
  }, [locationId]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: "", description: "", status: "" };

    if (!formData.name.trim()) {
      newErrors.name = 'State name is required';
      isValid = false;
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Location description is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const changedValues = {};

        if (initialFormData.name !== formData.name) {
          changedValues.name = formData.name.trim();
        }
        if (initialFormData.description !== formData.description) {
          changedValues.description = formData.description.trim();
        }

        const response = await fetch(`/api/location/${locationId ? locationId : 'add'}`, {
          method: locationId ? 'PUT' : 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(changedValues),
        });

        if (response.ok) {
          router.back();
        } else {
          console.error('Failed to add/edit location');
        }
      } catch (error) {
        console.error('Error during form submission:', error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded shadow-md">
        <h1 className="text-2xl font-bold mb-4">{formType} Location</h1>
        <form className='flex flex-col items-center' onSubmit={handleSubmit}>
          <div className="mb-4 w-full">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">State:</label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={handleChange}
              value={formData.name}
              className={`w-full p-2 border border-gray-300 rounded-md ${errors.name ? 'border-red-500' : ''}`}
            />
            {errors.name && <p className="text-red-500">{errors.name}</p>}
          </div>
          <div className="mb-4 w-full">
            <label htmlFor="description" className="block text-gray-700 font-bold mb-2">Description:</label>
            <textarea
              id="description"
              name="description"
              onChange={handleChange}
              value={formData.description}
              className={`w-full p-2 border border-gray-300 rounded-md ${errors.description ? 'border-red-500' : ''}`}
            />
            {errors.description && <p className="text-red-500">{errors.description}</p>}
          </div>
          <div className="mb-4 w-full">
            {/* <Tiptap /> */}
            <p>Editor in locationform.tsx</p>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
