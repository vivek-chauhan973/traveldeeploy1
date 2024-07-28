import { useState } from 'react';
import '../../../app/globals.css';
import { useRouter } from 'next/router';
import LocationForm from '@/components/admin/LocationForm';

const Add = () => {
    const [formData, setFormData] = useState({
        name: '',
    });

    const [errors, setErrors] = useState({
        name: '',
    });

    const router = useRouter();

    const validateForm = () => {
        let isValid = true;
        const newErrors = { ...errors };

        if (!formData.name.trim()) {
            newErrors.name = 'Package name is required';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: '' });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateForm()) {
            try {
                const response = await fetch('/api/package/add-package', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });

                if (response.ok) {
                    const data = await response.json();
                    const accessToken = data.token;
                    localStorage.setItem('accessToken', accessToken);
                    // router.push('/admin/dashboard');
                } else {
                    console.error('Failed to add package');
                }
            } catch (error) {
                console.error('Error during form submission:', error);
            }
        }
    };

    const formType = 'Add';
    
    return (
        <LocationForm formType={formType} />
    );
};

export default Add;
