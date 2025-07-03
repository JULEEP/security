import React, { useState } from "react";
import {
  FaGoogle,
  FaWhatsapp,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaEnvelope,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
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

    if (!formData.email || !formData.password) {
      setError("Please enter email and password");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("https://new-securebackend.onrender.com/api/client/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      
      localStorage.setItem("token", data.token);
      localStorage.setItem("clientId",data.client._id);

      navigate("/client/dashboard"); 
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-[90%] md:w-[30%] bg-white shadow-lg rounded-md p-8">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Log In</h1>
          <p className="text-gray-500 text-sm mt-1">
            Enter your credentials to access your account
          </p>
        </div>

        {error && (
          <div className="p-3 text-red-600 bg-red-100 rounded-md shadow-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-center border border-gray-300 rounded-xl px-4 py-2 focus-within:ring-2 focus-within:ring-black">
            <FaEnvelope className="text-gray-500 mr-2" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full outline-none"
              autoComplete="email"
            />
          </div>
          <div className="flex items-center border border-gray-300 rounded-xl px-4 py-2 focus-within:ring-2 focus-within:ring-black">
            <FaLock className="text-gray-500 mr-2" />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full outline-none"
              autoComplete="current-password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-gray-500 focus:outline-none"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <button
            type="submit"
            className="w-full bg-black hover:bg-gray-900 text-white py-2 rounded-md font-semibold transition duration-300"
            disabled={isLoading}
          >
            {isLoading ? "Logging in..." : "Log In"}
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
          <button className="border border-gray-300 flex items-center justify-center gap-2 w-full text-black py-2 rounded-xl transition duration-300 font-medium">
            <img
              src="https://developers.google.com/identity/images/g-logo.png"
              alt="Google"
              className="w-6 h-6"
            />
            Sign up with Google
          </button>
          <button className="items-center border border-gray-300 flex gap-2 w-full justify-center text-black py-2 rounded-xl transition duration-300 font-medium">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="WhatsApp"
              className="w-7 h-7 rounded-full"
            />
            Sign up with WhatsApp
          </button>
        </div>

        {/* Signup link */}
        <p className="mt-6 text-sm text-center text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/client"
            className="text-black font-semibold hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
