import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const [formData,setFormData] = useState({
    name:'',
    email:'',
    mobile:'',
    password:'',
    confirmPassword:''
  })
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  // Basic frontend validation
  if (!formData.name || !formData.email || !formData.mobile || !formData.password || !formData.confirmPassword) {
    setError('All fields are required.');
    return;
  }

  if (formData.password !== formData.confirmPassword) {
    setError('Passwords do not match.');
    return;
  }

  setError('');
  setIsLoading(true);

  try {
    const response = await fetch('https://new-securebackend.onrender.com/api/freelancers/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Registration failed');
    }

    // Success: Redirect to dashboard
    navigate('/dashboard');
  } catch (err) {
    setError(err.message || 'Something went wrong');
  } finally {
    setIsLoading(false);
  }
};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-10">
      <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-2xl overflow-hidden max-w-4xl w-full">
        {/* Form Section */}
        <div className="w-full md:w-1/2 p-8 space-y-6">
          <h1 className="text-4xl font-bold text-blue-600 text-center mb-4">Security</h1>
          <h2 className="text-xl font-bold text-center text-gray-800">Admin Registration</h2>

          {error && (
            <div className="p-3 text-red-600 bg-red-100 rounded-md shadow-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="block w-full p-3 mt-1 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-600"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="block w-full p-3 mt-1 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-600"
                placeholder="you@domain.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Mobile Number</label>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className="block w-full p-3 mt-1 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-600"
                placeholder="9876543210"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="block w-full p-3 mt-1 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-600"
                placeholder="********"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="block w-full p-3 mt-1 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-600"
                placeholder="********"
              />
            </div>

            <button
              type="submit"
              className={`w-full p-3 text-white bg-teal-600 rounded-md hover:bg-teal-700 transition duration-200 transform ${
                isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'
              }`}
              disabled={isLoading}
            >
              {isLoading ? 'Registering...' : 'Register'}
            </button>
          </form>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center p-4 md:p-0">
          <img
            src="https://static.vecteezy.com/system/resources/previews/006/584/841/original/illustration-graphic-cartoon-character-of-cyber-security-vector.jpg"
            alt="Registration Illustration"
            className="object-cover w-full h-auto rounded-lg md:rounded-none"
          />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
