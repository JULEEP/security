import { useState } from "react";
const ServicesInput = ({ formData, setFormData }) => {
  const [service, setService] = useState("");

  const handleAddService = () => {
    if (!service.trim()) return;
    if (!formData.services.includes(service.trim())) {
      setFormData((prev) => ({
        ...prev,
        services: [...prev.services, service.trim()],
      }));
    }
    setService("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddService();
    }
  };

  const handleRemoveService = (removeItem) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.filter((s) => s !== removeItem),
    }));
  };

  return (
    <div className="space-y-4">
      {/* Service list */}
      <div className="flex flex-wrap gap-2">
        {formData.services.map((s, index) => (
          <span
            key={index}
            className="flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
          >
            {s}
            <button
              type="button"
              onClick={() => handleRemoveService(s)}
              className="ml-2 text-blue-600 hover:text-blue-700 font-bold"
            >
              ×
            </button>
          </span>
        ))}
      </div>

      {/* Input + Add button */}
      <div className="flex gap-2">
        <input
          type="text"
          value={service}
          onChange={(e) => setService(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a service and press Enter"
          className="w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="button"
          onClick={handleAddService}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default ServicesInput;