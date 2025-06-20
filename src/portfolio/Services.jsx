import React from "react";

const ServicesMarquee = () => {
  const services = [
    { icon: "fas fa-video", label: "Video Editing" },
    { icon: "fas fa-camera-retro", label: "Photography" },
    { icon: "fas fa-laptop-code", label: "Web Development" },
    { icon: "fas fa-bullhorn", label: "Marketing" },
    { icon: "fas fa-chart-line", label: "SEO Analysis" },
    { icon: "fas fa-lightbulb", label: "Creative Strategy" },
    { icon: "fas fa-headset", label: "Support" },
    { icon: "fas fa-database", label: "Data Management" },
    { icon: "fas fa-robot", label: "AI Automation" },
    { icon: "fas fa-mobile-alt", label: "App Design" },
  ];

  return (
    <div className="max-w-5xl bg-white overflow-hidden text-black py-10 mx-auto">
      <div className="flex animate-marquee gap-12 px-6 text-5xl text-blue-900">
        {services.concat(services).map((service, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center gap-2shadow-sm min-w-[120px]"
          >
            <i className={`${service.icon}  bg-slate-100 px-6 py-5 rounded-lg `} />
            <span className="text-sm text-gray-700 font-medium mt-1">
              {service.label}
            </span>
          </div>
          
        ))}
      </div>
    </div>
  );
};

export default ServicesMarquee;
