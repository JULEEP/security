import { useState } from "react";
const BasicInfoInput = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  return (
    <>
      <div className="flex w-full gap-4 mb-4">
        <div className="w-1/2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="John Doe"
            className="w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={handleChange}
          />
        </div>

        <div className="w-1/2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Position
          </label>
          <input
            type="text"
            name="position"
            value={formData.position}
            placeholder="Fullstack Developer"
            className="w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="flex w-full gap-4 mb-4">
        <div className="w-1/2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Experience
          </label>
          <input
            type="text"
            name="experience"
            value={formData.experience}
            placeholder="e.g. 2+ years"
            className="w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={handleChange}
          />
        </div>

        <div className="w-1/2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Location
          </label>
          <input
            type="text"
            name="location"
            value={formData.location}
            placeholder="e.g. Mumbai, India"
            className="w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="w-full space-y-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            LinkedIn Link
          </label>
          <input
            type="url"
            name="linkedin"
            value={formData.linkedin}
            placeholder="https://linkedin.com/in/yourname"
            className="w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            GitHub Link
          </label>
          <input
            type="url"
            name="github"
            value={formData.github}
            placeholder="https://github.com/yourname"
            className="w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Twitter Link
          </label>
          <input
            type="url"
            name="twitter"
            value={formData.twitter}
            placeholder="https://twitter.com/yourname"
            className="w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={handleChange}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm text-gray-700 font-medium mb-1">
          Profile Image
        </label>
        {/* {formData.profileImage && typeof formData.profileImage !== "string" && (
          <p className="text-xs text-gray-500 mt-1">
            Selected: {formData.profileImage.name}
          </p>
        )} */}
      </div>
    </>
  );
};

export default BasicInfoInput;