import { useState } from "react";
const FAQInput = ({ formData, setFormData }) => {
  const [faq, setFaq] = useState({ question: "", answer: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFaq((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddFaq = () => {
    if (!faq.question.trim() || !faq.answer.trim()) return;

    setFormData((prev) => ({
      ...prev,
      faq: [...prev.faq, faq],
    }));

    setFaq({ question: "", answer: "" });
  };

  const handleRemoveFaq = (index) => {
    setFormData((prev) => ({
      ...prev,
      faq: prev.faq.filter((_, i) => i !== index),
    }));
  };

  return (
    <div className="space-y-4">
      {/* Render list of FAQs */}
      <div className="space-y-2">
        {formData.faq.map((f, index) => (
          <div
            key={index}
            className="p-3 border border-gray-300 rounded-md bg-gray-50 relative"
          >
            <button
              type="button"
              onClick={() => handleRemoveFaq(index)}
              className="absolute top-2 right-2 text-red-500 hover:text-red-700"
            >
              ×
            </button>
            <p className="font-semibold">Q: {f.question}</p>
            <p className="text-sm text-gray-700 mt-1">A: {f.answer}</p>
          </div>
        ))}
      </div>

      {/* Input for new FAQ */}
      <div className="grid grid-cols-1 gap-4">
        <input
          type="text"
          name="question"
          value={faq.question}
          placeholder="Enter question"
          onChange={handleChange}
          className="p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <textarea
          name="answer"
          value={faq.answer}
          placeholder="Enter answer"
          onChange={handleChange}
          rows={3}
          className="p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <button
        type="button"
        onClick={handleAddFaq}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add FAQ
      </button>
    </div>
  );
};
export default FAQInput;