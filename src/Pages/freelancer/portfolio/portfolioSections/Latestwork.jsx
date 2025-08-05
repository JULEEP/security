import React, { useState } from "react";

const filters = ["All", "Websites", "Design", "Mockup"];

const projects = [
  {
    category: "Websites",
    image: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg",
  },
  {
    category: "Design",
    image: "https://images.pexels.com/photos/7092450/pexels-photo-7092450.jpeg",
  },
  {
    category: "Mockup",
    image: "https://images.pexels.com/photos/6693654/pexels-photo-6693654.jpeg",
  },
  {
    category: "Design",
    image: "https://images.pexels.com/photos/7092450/pexels-photo-7092450.jpeg",
  },
  {
    category: "Mockup",
    image: "https://images.pexels.com/photos/6693654/pexels-photo-6693654.jpeg",
  },
  {
    category: "Design",
    image: "https://images.pexels.com/photos/7092450/pexels-photo-7092450.jpeg",
  },
  {
    category: "Mockup",
    image: "https://images.pexels.com/photos/6693654/pexels-photo-6693654.jpeg",
  },
  {
    category: "Design",
    image: "https://images.pexels.com/photos/7092450/pexels-photo-7092450.jpeg",
  },
  {
    category: "Mockup",
    image: "https://images.pexels.com/photos/6693654/pexels-photo-6693654.jpeg",
  },
  {
    category: "Design",
    image: "https://images.pexels.com/photos/7092450/pexels-photo-7092450.jpeg",
  },
  {
    category: "Mockup",
    image: "https://images.pexels.com/photos/6693654/pexels-photo-6693654.jpeg",
  },
];

const LatestWork = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section className="text-center py-16 bg-white text-black">
      {/* Title */}
      <h2 className="text-5xl sm:text-6xl font-extrabold mb-2 text-gray-900">Latest Work</h2>

      {/* Underline */}
      <div className="flex justify-center mb-10">
        <div className="h-1 w-16 bg-blue-900 rounded relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-1 w-6 bg-blue-900 mt-1 rounded"></div>
        </div>
      </div>

      {/* Subtitle */}
      <p className="text-gray-600 text-lg mb-10 max-w-xl mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint porro temporibus distinctio.
      </p>

      {/* Filter Buttons */}
      <div className="flex justify-center flex-wrap gap-4 mb-12">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-full border-2 ${
              activeFilter === filter
                ? "bg-blue-900 text-white border-blue-900"
                : "text-blue-900 border-blue-900 hover:bg-violet-100"
            } transition`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 max-w-6xl mx-auto">
        {filteredProjects.map((project, idx) => (
          <div
            key={idx}
            className="rounded-lg overflow-hidden shadow-lg border-t-4 border-blue-900"
          >
            <img
              src={project.image}
              alt={project.category}
              className="w-full h-64 object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestWork;
