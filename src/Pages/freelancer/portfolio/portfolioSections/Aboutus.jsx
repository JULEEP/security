import React from "react";
import { API_URL } from "../../../../config";

const Aboutus = ({ about }) => {
  if (!about) return null; // Handle when about is not yet loaded

  return (
    <div className="bg-white text-gray-800 min-h-screen">
      {/* Image + Text */}
      <section className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 items-center gap-20">
        {about.image && (<img
          src={
            about.image
              ? `${API_URL}/uploads/aboutImg/${about.image}`
              : "https://via.placeholder.com/800x600?text=No+Image"
          }
          alt={about.heading || "About Image"}
          className="rounded-lg w-full object-cover shadow h-96"
        />
        )}
        <div>
          <h1 className="text-xl font-thin">About Us</h1>
          <h2 className="text-6xl font-semibold mb-4">
            {about.heading || "We Always Make The Best"}
          </h2>
          <p className="text-gray-600 leading-relaxed">
            {about.description ||
              "Our team consists of developers, designers, and strategists working together to deliver high-quality web and mobile experiences."}
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          {/* Mission & Vision */}
          <div className="space-y-10">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {about.mission ||
                  "To simplify technology and deliver seamless experiences that empower people and businesses to achieve more."}
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {about.vision ||
                  "To be a leading force in tech innovation while staying committed to quality, integrity, and user-centricity."}
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-10 bg-gradient-to-br from-black to-blue-900 rounded-xl p-8 shadow-md border border-gray-200">
            {[
              { value: about.experienceYears || "0", label: "Years Experience" },
              { value: about.completedProjects || "0", label: "Projects Completed" },
              { value: about.happyClients || "0", label: "Happy Clients" },
              { value: about.teamMembers || "0", label: "Team Members" },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <h4 className="text-6xl font-semibold text-white">
                  {item.value}+
                </h4>
                <p className="mt-2 text-gray-400 text-lg tracking-wide">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Aboutus;
