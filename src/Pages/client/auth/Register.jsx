import React, { useState } from "react";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { API_URL } from '../../../config';


const ClientRegister = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile:"",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.email ||
      !formData.mobile ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setError("All fields are required");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setError("Password do not match");
      return;
    }
    setError("");
    setIsLoading(true);

    try {
      const response = await fetch(
        `${API_URL}/api/client/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Registration Failed");
      }
      localStorage.setItem("token", data.token);
      localStorage.setItem("clientId",data.client._id);
      navigate("/client/dashboard");
    } catch (err) {
      setError(err.message || "Something went wromg");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-[80%] md:w-[30%] bg-white shadow-lg rounded-md p-8">
        {/* Heading */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Sign Up</h1>
          <p className="text-gray-500 text-sm mt-1">
            Signup for an account to get started
          </p>
        </div>
        {error && (
          <div className="p-3 text-red-600 bg-red-100 rounded-md shadow-sm">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="flex items-center border border-gray-300 rounded-xl px-4 py-2 focus-within:ring-2 focus-within:ring-black">
            <FaUser className="text-gray-500 mr-2" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full outline-none"
            />
          </div>
          <div className="flex items-center border border-gray-300 rounded-xl px-4 py-2 focus-within:ring-2 focus-within:ring-black">
            <FaEnvelope className="text-gray-500 mr-2" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full outline-none"
            />
          </div>
          <div className="flex items-center border border-gray-300 rounded-xl px-4 py-2 focus-within:ring-2 focus-within:ring-black">
            <FaUser className="text-gray-500 mr-2" />
            <input
              type="text"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Mobile Number"
              className="w-full outline-none"
            />
          </div>

          <div className="flex items-center border border-gray-300 rounded-xl px-4 py-2 focus-within:ring-2 focus-within:ring-black">
            <FaLock className="text-gray-500 mr-2" />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="password"
              className="w-full outline-none"
            />
          </div>
          <div className="flex items-center border border-gray-300 rounded-xl px-4 py-2 focus-within:ring-2 focus-within:ring-black">
            <FaLock className="text-gray-500 mr-2" />
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              className="w-full outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black hover:bg-gray-900 text-white py-2 rounded-md font-semibold transition duration-300"
            disabled={isLoading}
          >
            {isLoading ? "Registering..." : "Register"}
          </button>
        </form>

        {/* OR */}
        <div className="flex items-center my-4">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="px-2 text-gray-500 text-sm">OR</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        {/* Social Buttons */}
        <div className="space-y-3">
          <button className="border border-gray-300 flex items-center justify-center gap-2 w-full text-black py-2 rounded-xl transition duration-300">
            <img
              src="https://developers.google.com/identity/images/g-logo.png"
              alt="Google"
              className="w-6 h-6"
            />
            Sign up with Google
          </button>
          <button className="items-center border border-gray-300 flex gap-2 w-full justify-center text-black py-2 rounded-xl transition duration-300">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="WhatsApp"
              className="w-7 h-7 rounded-full"
            />
            Sign up with WhatsApp
          </button>
        </div>

        {/* Login link */}
        <p className="mt-6 text-sm text-center text-gray-600">
          Already have an account?{" "}
          <Link
            to="/client/login"
            className="text-black font-semibold hover:underline"
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ClientRegister;
