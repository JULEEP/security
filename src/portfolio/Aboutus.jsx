import React from "react";

const Aboutus = () => {
  return (
    <div className="bg-white text-gray-800  min-h-screen">
      {/* Image + Text */}
      <section className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 items-center gap-20">
        <img
          src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80
"
          alt="Team working"
          className="rounded-lg w-full object-cover shadow h-96"
        />
        <div>
          <h1 className="text-xl font-thin">About Us</h1>
          <h2 className="text-6xl font-semibold mb-4 ">
            We Always Make The Best
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Our team consists of developers, designers, and strategists working
            together to deliver high-quality web and mobile experiences. We
            prioritize user needs, clean code, and business value in everything
            we do.
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
                To simplify technology and deliver seamless experiences that
                empower people and businesses to achieve more.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To be a leading force in tech innovation while staying committed
                to quality, integrity, and user-centricity.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-10 bg-gradient-to-br from-black to-blue-900 rounded-xl p-8 shadow-md border border-gray-200">
            {[
              { value: "5+", label: "Years Experience" },
              { value: "50+", label: "Projects Completed" },
              { value: "30+", label: "Happy Clients" },
              { value: "10+", label: "Team Members" },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <h4 className="text-6xl font-semibold text-white">
                  {item.value}
                </h4>
                <p className="mt-2 text-gray-400 text-lg tracking-wide">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
    </div>
  );
};

export default Aboutus;
