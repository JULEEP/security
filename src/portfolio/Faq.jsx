import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqData = [
  {
    question: "What are the main features?",
    answer:
      "Our platform offers fast performance, intuitive UI, and full customization.Our platform offers fast performance, intuitive UI, and full customization.Our platform offers fast performance, intuitive UI, and full customization.",
  },
  {
    question: "Do I have to pay again after trial?",
    answer:
      "Yes, once the trial ends, you can choose a suitable plan to continue.Our platform offers fast performance, intuitive UI, and full customization.Our platform offers fast performance, intuitive UI, and full customization.",
  },
  {
    question: "How can I get started after trial?",
    answer:
      "Simply sign in and pick a plan. Your data will be preserved from trial.Our platform offers fast performance, intuitive UI, and full customization.Our platform offers fast performance, intuitive UI, and full customization.",
  },
  {
    question: "Can I be refunded if I am not satisfied?",
    answer:
      "Yes, we offer a 7-day refund policy post-subscription.Our platform offers fast performance, intuitive UI, and full customization.Our platform offers fast performance, intuitive UI, and full customization.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white py-20 px-6 text-center">
      <h2 className="text-5xl font-extrabold text-gray-900">FAQ</h2>
      <div className="relative w-24 h-1 bg-violet-600 mx-auto my-2 rounded-full" />
      <p className="text-gray-700 mb-12">
        frequently asked questions, get knowledge before hand
      </p>

      <div className="max-w-4xl mx-auto space-y-6">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className={`bg-white shadow-lg text-left transition duration-300 ${
              openIndex === index
                ? "border-2 border-violet-400"
                : "border border-gray-200"
            }`}
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center p-5 text-lg font-medium text-gray-800"
            >
              {faq.question}
              <span className="text-violet-600 text-lg">
                {openIndex === index ? <FaMinus /> : <FaPlus />}
              </span>
            </button>

            {openIndex === index && (
              <div className="px-5 pb-4 text-gray-600 transition-all duration-300 text-base">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
