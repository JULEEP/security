import { useState } from "react";
const LatestWorkInput = ({ formData, setFormData }) => {
  const [work, setWork] = useState({ link: "", image: null });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setWork((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleAddWork = () => {
    if (!work.link.trim() || !work.image) return;

    setFormData((prev) => ({
      ...prev,
      latestWork: [...prev.latestWork, work],
    }));

    setWork({ link: "", image: null });
  };

  const handleRemoveWork = (index) => {
    setFormData((prev) => ({
      ...prev,
      latestWork: prev.latestWork.filter((_, i) => i !== index),
    }));
  };

  return (
    <div className="space-y-4">
      {/* Existing works */}
      <div className="grid grid-cols-1 gap-4">
        {formData.latestWork.map((item, index) => (
          <div
            key={index}
            className="border p-3 rounded-md relative bg-gray-50 shadow-sm"
          >
            <button
              type="button"
              onClick={() => handleRemoveWork(index)}
              className="absolute top-2 right-2 text-red-500 hover:text-red-700"
            >
              ×
            </button>
            <p className="text-sm">
              🔗{" "}
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                {item.link}
              </a>
            </p>
            <p className="text-xs mt-2 text-gray-600">
              📷 {item.image?.name || "Image selected"}
            </p>
          </div>
        ))}
      </div>

      {/* Input fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="url"
          name="link"
          placeholder="Project link"
          value={work.link}
          onChange={handleChange}
          className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleChange}
          className="p-2"
        />
      </div>

      <button
        type="button"
        onClick={handleAddWork}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add Work
      </button>
    </div>
  );
};
export default LatestWorkInput;