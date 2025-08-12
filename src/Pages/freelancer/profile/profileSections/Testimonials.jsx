import { useState } from "react";
const TestimonialsInput = ({ formData, setFormData }) => {
  const [testimonial, setTestimonial] = useState({
    name: "",
    position: "",
    opinion: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTestimonial((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddTestimonial = () => {
    if (
      !testimonial.name.trim() ||
      !testimonial.position.trim() ||
      !testimonial.opinion.trim()
    )
      return;

    setFormData((prev) => ({
      ...prev,
      testimonials: [...prev.testimonials, testimonial],
    }));

    // Reset input fields
    setTestimonial({ name: "", position: "", opinion: "" });
  };

  const handleRemove = (index) => {
    setFormData((prev) => ({
      ...prev,
      testimonials: prev.testimonials.filter((_, i) => i !== index),
    }));
  };

  return (
    <div className="space-y-4">
      {/* Existing Testimonials */}
      <div className="space-y-2">
        {formData.testimonials.map((t, index) => (
          <div
            key={index}
            className="p-3 border border-gray-300 rounded-md bg-gray-50 relative"
          >
            <button
              type="button"
              onClick={() => handleRemove(index)}
              className="absolute top-2 right-2 text-red-500 hover:text-red-700"
            >
              ×
            </button>
            <p className="font-semibold">
              {t.name} , {t.position}
            </p>
            <p className="text-sm text-gray-700 mt-1">{t.opinion}</p>
          </div>
        ))}
      </div>

      {/* Input Fields */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          type="text"
          name="name"
          value={testimonial.name}
          placeholder="Client Name"
          onChange={handleChange}
          className="p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="text"
          name="position"
          value={testimonial.position}
          placeholder="Position"
          onChange={handleChange}
          className="p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="text"
          name="opinion"
          value={testimonial.opinion}
          placeholder="Testimonial / Opinion"
          onChange={handleChange}
          className="p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <button
        type="button"
        onClick={handleAddTestimonial}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add Testimonial
      </button>
    </div>
  );
};
export default TestimonialsInput