import { useState } from "react";
const AboutInput = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      about: {
        ...prev.about,
        [name]: files ? files[0] : value,
      },
    }));
  };

  const about = formData.about;

  return (
    <div className="space-y-4">
      {/* Heading */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Heading
        </label>
        <input
          type="text"
          name="heading"
          value={about.heading}
          placeholder="e.g. About Us"
          onChange={handleChange}
          className="w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Description
        </label>
        <textarea
          name="description"
          value={about.description}
          placeholder="Tell us about your team, company, or story..."
          onChange={handleChange}
          rows={4}
          className="w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Mission */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Our Mission
        </label>
        <input
          type="text"
          name="mission"
          value={about.mission}
          placeholder="e.g. To build scalable web solutions..."
          onChange={handleChange}
          className="w-full p-2 border rounded-md shadow-sm"
        />
      </div>

      {/* Vision */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Our Vision
        </label>
        <input
          type="text"
          name="vision"
          value={about.vision}
          placeholder="e.g. Empower businesses with digital tools..."
          onChange={handleChange}
          className="w-full p-2 border rounded-md shadow-sm"
        />
      </div>

      {/* Image */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Image
        </label>
        <input
          type="file"
          name="image"
          onChange={handleChange}
          className="w-full"
        />
        {about.image && typeof about.image !== "string" && (
          <p className="text-xs text-gray-500 mt-1">
            Selected: {about.image.name}
          </p>
        )}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Years of Experience
          </label>
          <input
            type="number"
            name="experienceYears"
            value={about.experienceYears}
            placeholder="e.g. 5"
            onChange={handleChange}
            className="w-full p-2 border rounded-md shadow-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Projects Completed
          </label>
          <input
            type="number"
            name="completedProjects"
            value={about.completedProjects}
            placeholder="e.g. 120"
            onChange={handleChange}
            className="w-full p-2 border rounded-md shadow-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Happy Clients
          </label>
          <input
            type="number"
            name="happyClients"
            value={about.happyClients}
            placeholder="e.g. 80"
            onChange={handleChange}
            className="w-full p-2 border rounded-md shadow-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Team Members
          </label>
          <input
            type="number"
            name="teamMembers"
            value={about.teamMembers}
            placeholder="e.g. 15"
            onChange={handleChange}
            className="w-full p-2 border rounded-md shadow-sm"
          />
        </div>
      </div>
    </div>
  );
};
export default AboutInput;