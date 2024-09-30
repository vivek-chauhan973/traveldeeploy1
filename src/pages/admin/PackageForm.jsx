import { useRouter } from "next/router";
import { useEffect, useState, useCallback } from "react";
import config from '../../utils/config';

const packageStatus = config.packageStatus;

const fetchPackage = async (packageId) => {
    const response = await fetch(`/api/package/${packageId}`, { method: 'GET' });
    const data = await response.json();
    return data.updatedPackage;
};

const fetchLocations = async () => {
    const response = await fetch(`/api/location/`, { method: 'GET' });
    const data = await response.json();
    return data.states;
};

export default function PackageForm({ formType }) {
    const router = useRouter();
    const { packageId } = router.query;

    const [formData, setFormData] = useState({
        name: '',
        price: 0,
        status: 0,
        location: ''
    });

    const [errors, setErrors] = useState({
        name: '',
        price: '',
        status: '',
        location: ''
    });

    const [locations, setLocations] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const locationList = await fetchLocations();
            setLocations(locationList);
            if (packageId) {
                const packageData = await fetchPackage(packageId);
                if (packageData) {
                    setInitialFormData(packageData);
                    setFormData(packageData);
                }
            }
        };

        fetchData();
    }, [packageId]);

    const [initialFormData, setInitialFormData] = useState();

    const handleChange = useCallback((e) => {
        const { name, value } = e.target;

        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));

        setErrors(prevErrors => ({
            ...prevErrors,
            [name]: ''
        }));
    }, []);

    const validateForm = useCallback(() => {
        let isValid = true;
        const newErrors = {
            name: "",
            price: "",
            status: "",
            location: ""
        };

        if (!formData.name.trim()) {
            newErrors.name = 'Package name is required';
            isValid = false;
        }

        if (isNaN(formData.price)) {
            newErrors.price = 'Package price is required';
            isValid = false;
        }

        if (isNaN(formData.status)) {
            newErrors.status = 'Package status is required';
            isValid = false;
        }

        if (!formData.location) {
            newErrors.location = 'Package location is required';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    }, [formData]);

    const handleSubmit = useCallback(async (e) => {
        e.preventDefault();

        if (validateForm()) {
            try {
                const changedValues = {};

                if (initialFormData?.name !== formData.name) {
                    changedValues.name = formData.name;
                }
                if (initialFormData?.price !== formData.price) {
                    changedValues.price = formData.price;
                }
                if (initialFormData?.status !== formData.status) {
                    changedValues.status = formData.status;
                }
                if (initialFormData?.location !== formData.location) {
                    changedValues.location = formData.location;
                }

                const response = await fetch(`/api/package/${packageId ? packageId : 'add-package'}`, {
                    method: packageId ? 'PUT' : 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(changedValues),
                });

                if (response.ok) {
                    router.back();
                } else {
                    console.error('Failed to add/edit package');
                }
            } catch (error) {
                console.error('Error during form submission:', error);
            }
        }
    }, [formData, initialFormData, packageId, router, validateForm]);

    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center">
            <div className="bg-white p-8 rounded shadow-md">
                <h1 className="text-2xl font-bold mb-4"> {formType} Package</h1>
                <form className='flex' onSubmit={handleSubmit}>
                    <div className="mr-4">
                        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Package Name:</label>
                        <input type="text" id="name" name="name" onChange={handleChange} value={formData.name}
                            className={`p-2 border border-gray-300 rounded-md ${errors.name ? 'border-red-500' : ''}`}
                        />
                        {errors.name && <p className="text-red-500">{errors.name}</p>}
                    </div>
                    <div className="mr-4">
                        <label htmlFor="price" className="block text-gray-700 font-bold mb-2">Package Price:</label>
                        <input type="text" id="price" name="price" onChange={handleChange} value={formData.price}
                            className={`p-2 border border-gray-300 rounded-md ${errors.price ? 'border-red-500' : ''}`}
                        />
                        {errors.price && <p className="text-red-500">{errors.price}</p>}
                    </div>
                    <div className="mr-4">
                        <label htmlFor="status" className="block text-gray-700 font-bold mb-2">Package Status:</label>
                        <select id="status" name="status" onChange={handleChange} value={formData.status}
                            className={`p-2 border border-gray-300 rounded-md ${errors.status ? 'border-red-500' : ''}`}>
                            {packageStatus.map((status) => (
                                <option key={status.key} value={status.key}>
                                    {status.value}
                                </option>
                            ))}
                        </select>
                        {errors.status && <p className="text-red-500">{errors.status}</p>}
                    </div>
                    <div className="mr-4">
                        <label htmlFor="location" className="block text-gray-700 font-bold mb-2">Package Location:</label>
                        <select id="location" name="location" onChange={handleChange} value={formData.location}
                            className={`p-2 border border-gray-300 rounded-md ${errors.location ? 'border-red-500' : ''}`}
                        >
                            <option>Select location</option>
                            {locations?.map(locationItem => (
                                <option key={locationItem.id} value={locationItem.id}>
                                    {locationItem.name}
                                </option>
                            ))}
                        </select>
                        {errors.location && <p className="text-red-500">{errors.location}</p>}
                    </div>
                    <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Submit</button>
                </form>
            </div>
        </div>
    );
}
