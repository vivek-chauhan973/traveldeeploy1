import React, { useState } from 'react';
import { useRouter } from 'next/router';
import '../../app/globals.css';

export default function Signup() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const [errors, setErrors] = useState({
        username: '',
        password: '',
    });

    const router = useRouter();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: '' });
    };

    const validateForm = () => {
        let isValid = true;
        const newErrors = { ...errors };

        if (!formData.username.trim()) {
            newErrors.username = 'Username is required';
            isValid = false;
        }

        if (!formData.password.trim()) {
            newErrors.password = 'Password is required';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                const response = await fetch('/api/account/signup', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });

                if (response.ok) {
                    console.log('User registered successfully');
                    // Redirect to a success page or any other page
                    // router.push('/success');
                } else {
                    console.error('Failed to register user');
                }
            } catch (error) {
                console.error('Error during form submission:', error);
            }
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="bg-white p-8 shadow-md rounded-md">
                <h1 className="text-2xl font-bold mb-4">Signup Page</h1>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="flex flex-col">
                        <label htmlFor="username" className="mb-1">Username:</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            className={`p-2 border border-gray-300 rounded-md ${errors.username ? 'border-red-500' : ''}`}
                            onChange={handleChange}
                        />
                        {errors.username && <p className="text-red-500">{errors.username}</p>}
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="password" className="mb-1">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className={`p-2 border border-gray-300 rounded-md ${errors.password ? 'border-red-500' : ''}`}
                            onChange={handleChange}
                        />
                        {errors.password && <p className="text-red-500">{errors.password}</p>}
                    </div>

                    <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">Submit</button>
                </form>
            </div>
        </div>
    );
}
