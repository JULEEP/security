import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Aarav Mehta",
    message: "This platform helped me become more productive. Highly recommended!",
    role: "Frontend Developer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sanya Kapoor",
    message: "Super smooth experience and great support from the team!",
    role: "UI/UX Designer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Rahul Singh",
    message: "The tools and flexibility offered here are unmatched. Loved it! ",
    role: "Fullstack Developer",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Priya Sharma",
    message: "I’ve grown my skills significantly since I joined. Thank you!",
    role: "Backend Engineer",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

const TestimonialsSection = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handlePrev = () => {
    setDirection(-1);
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative text-white px-4 ">
      <h2 className="text-4xl sm:text-6xl font-bold text-center mb-4">
        Testimonials
      </h2>
      <div className="w-20 h-1 bg-white/40 mx-auto rounded-full mb-8"></div>
      <p className="text-lg text-center mb-5">
        What our clients are saying ?
      </p>

      <div className="max-w-3xl mx-auto flex flex-col items-center text-center relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
            transition={{ duration: 0.5 }}
            className="w-full px-4 flex flex-col items-center text-center text-white rounded-xl p-6 relative"
          >
            {/* Quote Box */}
            <div className="bg-white px-10 py-8 w-full backdrop-blur-sm rounded-lg">
              <p className="text-lg italic text-gray-900">
                <span className="text-3xl font-bold text-blue-500">“</span>
                {testimonials[index].message}
                <span className="text-3xl font-bold text-blue-500">”</span>
              </p>

              {/* Stars */}
              <div className="flex justify-center mt-4 text-blue-500 text-2xl">
                {Array(5)
                  .fill()
                  .map((_, i) => (
                    <span key={i}>★</span>
                  ))}
              </div>
            </div>

            {/* Profile Image overlapping box */}
            <div className="w-24 h-24 rounded-full border-4 border-white overflow-hidden absolute top-36">
              <img
                src={testimonials[index].image}
                alt={testimonials[index].name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="h-16" />

            {/* Name and Role */}
            <h4 className="font-semibold text-2xl sm:text-4xl mt-4">
              {testimonials[index].name}
            </h4>
            <span className="text-base text-violet-100 mt-2">
              {testimonials[index].role}
            </span>
          </motion.div>
        </AnimatePresence>

        {/* Arrows */}
        <div className="flex items-center gap-4 mt-6 z-10">
          <button
            onClick={handlePrev}
            className="border border-white/40 hover:bg-white/10 transition rounded-md p-2"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={handleNext}
            className="border border-white/40 hover:bg-white/10 transition rounded-md p-2"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
