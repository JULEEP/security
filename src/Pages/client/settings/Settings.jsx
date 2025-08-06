import React, { useState } from "react";
import { FaSave, FaTimes, FaEdit, FaPhoneAlt, FaEnvelope, FaUser, FaBell, FaMoon, FaLock } from "react-icons/fa";

const Settings = () => {
  const [userDetails, setUserDetails] = useState({
    username: "JohnDoe",
    email: "johndoe@example.com",
    phone: "+1234567890",
    password: "******",
    notifications: true,
    darkMode: false,
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editedDetails, setEditedDetails] = useState({ ...userDetails });

  const handleInputChange = (e) => {
    setEditedDetails({ ...editedDetails, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    setEditedDetails({ ...editedDetails, [e.target.name]: e.target.checked });
  };

  const handleSaveChanges = () => {
    setUserDetails({ ...editedDetails });
    setIsEditing(false);
  };

  const handleCancelChanges = () => {
    setEditedDetails({ ...userDetails });
    setIsEditing(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-xl shadow-lg">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Account Settings</h2>

      <div className="space-y-8">
        {/* First Row */}
        <div className="grid grid-cols-2 gap-6">
          {/* Username Section */}
          <div className="bg-purple-100 p-6 rounded-lg shadow-md">
            <div className="flex items-center">
              <FaUser className="text-2xl text-blue-600" />
              <div className="ml-4">
                <h3 className="text-xl font-medium text-gray-700">Username</h3>
                <p className="text-gray-500">{isEditing ? (
                  <input
                    type="text"
                    name="username"
                    value={editedDetails.username}
                    onChange={handleInputChange}
                    className="mt-2 p-2 border border-gray-300 rounded-md w-48"
                  />
                ) : (
                  userDetails.username
                )}</p>
              </div>
            </div>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="text-blue-600 text-lg ml-4"
            >
              <FaEdit />
            </button>
          </div>

          {/* Email Section */}
          <div className="bg-purple-100 p-6 rounded-lg shadow-md">
            <div className="flex items-center">
              <FaEnvelope className="text-2xl text-blue-600" />
              <div className="ml-4">
                <h3 className="text-xl font-medium text-gray-700">Email</h3>
                <p className="text-gray-500">{isEditing ? (
                  <input
                    type="email"
                    name="email"
                    value={editedDetails.email}
                    onChange={handleInputChange}
                    className="mt-2 p-2 border border-gray-300 rounded-md w-48"
                  />
                ) : (
                  userDetails.email
                )}</p>
              </div>
            </div>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="text-blue-600 text-lg ml-4"
            >
              <FaEdit />
            </button>
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-2 gap-6">
          {/* Phone Section */}
          <div className="bg-purple-100 p-6 rounded-lg shadow-md">
            <div className="flex items-center">
              <FaPhoneAlt className="text-2xl text-blue-600" />
              <div className="ml-4">
                <h3 className="text-xl font-medium text-gray-700">Phone</h3>
                <p className="text-gray-500">{isEditing ? (
                  <input
                    type="text"
                    name="phone"
                    value={editedDetails.phone}
                    onChange={handleInputChange}
                    className="mt-2 p-2 border border-gray-300 rounded-md w-48"
                  />
                ) : (
                  userDetails.phone
                )}</p>
              </div>
            </div>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="text-blue-600 text-lg ml-4"
            >
              <FaEdit />
            </button>
          </div>

          {/* Password Section */}
          <div className="bg-purple-100 p-6 rounded-lg shadow-md">
            <div className="flex items-center">
              <FaLock className="text-2xl text-blue-600" />
              <div className="ml-4">
                <h3 className="text-xl font-medium text-gray-700">Password</h3>
                <p className="text-gray-500">{isEditing ? (
                  <input
                    type="password"
                    name="password"
                    value={editedDetails.password}
                    onChange={handleInputChange}
                    className="mt-2 p-2 border border-gray-300 rounded-md w-48"
                  />
                ) : (
                  "******"
                )}</p>
              </div>
            </div>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="text-blue-600 text-lg ml-4"
            >
              <FaEdit />
            </button>
          </div>
        </div>

        {/* Third Row */}
        <div className="grid grid-cols-2 gap-6">
          {/* Notifications Section */}
          <div className="bg-purple-100 p-6 rounded-lg shadow-md">
            <div className="flex items-center">
              <FaBell className="text-2xl text-blue-600" />
              <div className="ml-4">
                <h3 className="text-xl font-medium text-gray-700">Notifications</h3>
                <p className="text-gray-500">{isEditing ? (
                  <input
                    type="checkbox"
                    name="notifications"
                    checked={editedDetails.notifications}
                    onChange={handleCheckboxChange}
                    className="mt-2"
                  />
                ) : (
                  userDetails.notifications ? "Enabled" : "Disabled"
                )}</p>
              </div>
            </div>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="text-blue-600 text-lg ml-4"
            >
              <FaEdit />
            </button>
          </div>

          {/* Dark Mode Section */}
          <div className="bg-purple-100 p-6 rounded-lg shadow-md">
            <div className="flex items-center">
              <FaMoon className="text-2xl text-blue-600" />
              <div className="ml-4">
                <h3 className="text-xl font-medium text-gray-700">Dark Mode</h3>
                <p className="text-gray-500">{isEditing ? (
                  <input
                    type="checkbox"
                    name="darkMode"
                    checked={editedDetails.darkMode}
                    onChange={handleCheckboxChange}
                    className="mt-2"
                  />
                ) : (
                  userDetails.darkMode ? "Enabled" : "Disabled"
                )}</p>
              </div>
            </div>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="text-blue-600 text-lg ml-4"
            >
              <FaEdit />
            </button>
          </div>
        </div>

        {/* Save/Cancel Buttons */}
        {isEditing && (
          <div className="flex justify-end space-x-4 mt-8">
            <button
              onClick={handleSaveChanges}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg flex items-center gap-2"
            >
              <FaSave /> Save Changes
            </button>
            <button
              onClick={handleCancelChanges}
              className="px-6 py-2 bg-gray-400 text-white rounded-lg flex items-center gap-2"
            >
              <FaTimes /> Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Settings;
