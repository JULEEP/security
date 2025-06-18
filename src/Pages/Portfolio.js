import React from "react";

const Portfolio = () => {
  const profile = {
    name: "Shraddha Salvi",
    role: "Fullstack Developer",
    experience: "3 years",
    location: "Mumbai, India",
    lookingForWork: true,
    image: "https://i.pravatar.cc/150?img=47",
    socialLinks: {
      twitter: "#",
      github: "#",
      linkedin: "#",
    },
    skills: ["React", "Node.js", "MongoDB", "Express", "Tailwind", "Next.js"],
    story: `In 3+ years, I’ve delivered fullstack web applications using the MERN stack,
    collaborated with startups, and led frontend revamps with scalable UI/UX.`,
    projects: [
      {
        name: "Contest Tracker",
        desc: "Tracks upcoming contests from LeetCode, Codeforces, etc.",
      },
      {
        name: "Cilliblof",
        desc: "Full-featured blog site with markdown editor and SEO",
      },
      {
        name: "HireSphere",
        desc: "Hiring dashboard for companies with applicant tracking",
      },

      {
        name: "Cilliblof",
        desc: "A blog platform with markdown editor and SEO features.",
      },
      {
        name: "Contest Tracker",
        desc: "Track coding contests from Codeforces, LeetCode, and CodeChef.",
      },
      {
        name: "Spotify Clone",
        desc: "A music player app with Now Playing view and dynamic theming.",
      },
      {
        name: "iNotebook",
        desc: "A fullstack notes app with authentication and CRUD features.",
      },
      {
        name: "HireSphere",
        desc: "A job portal built with MERN stack for hiring and applying.",
      },
      {
        name: "knowShare",
        desc: "A knowledge sharing app for posting and browsing technical content.",
      },
    ],
    experienceList: [
      {
        role: "Frontend Intern",
        company: "TESON LLP",
        duration: "Feb 2025 – Apr 2025",
        details:
          "Built internal dashboards and improved UI performance by 30%.",
      },
      {
        role: "Freelance Developer",
        company: "Various Clients",
        duration: "2023 – Present",
        details:
          "Delivered 10+ fullstack apps for clients from various domains.",
      },
    ],
    testimonials: [
      {
        client: "Amit Verma",
        company: "GrowthLoop",
        feedback:
          "Shraddha delivered our web dashboard 2 weeks early and exceeded expectations.",
      },
      {
        client: "Priya Nair",
        company: "TalentHunt",
        feedback:
          "Her attention to design and usability was impressive. Would work again.",
      },
    ],
  };

  return (
    <div className="bg-slate-950 text-white min-h-screen ">
      {/* Profile Card */}
      <div className="max-w-full mx-auto bg-slate-900 p-6 rounded-xl shadow-md border border-slate-800">
        <div className="flex flex-col sm:flex-row gap-6">
          {/* Profile Picture */}
          <div className="relative">
            <img
              src={profile.image}
              alt="Profile"
              className="w-28 h-28 rounded-full object-cover border-4 border-slate-800 shadow-md"
            />
            {profile.lookingForWork && (
              <span className="absolute bottom-20 right-4 bg-green-500 text-white text-[10px] px-2 py-0.5 rounded-full shadow-sm">
                Open to work
              </span>
            )}
          </div>

          {/* Profile Details */}
          <div className="flex-1 space-y-2 text-center sm:text-left">
            <div>
              <h2 className="text-2xl font-bold text-white">{profile.name}</h2>
              <p className="text-slate-400 text-sm">
                @{profile.name.toLowerCase().replace(/\s+/g, "_")}
              </p>
              <p className="text-blue-400 text-sm mt-1">
                {profile.role} • {profile.experience} experience
              </p>
              <p className="text-slate-500 text-xs">📍 {profile.location}</p>
            </div>

            {/* Social Media Links */}
            <div className="flex justify-center sm:justify-start gap-4 mt-3">
              <a
                href={profile.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
                  className="w-5 h-5 hover:scale-110 transition"
                />
              </a>
              <a
                href={profile.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/733/733553.png"
                  className="w-5 h-5 hover:scale-110 transition"
                />
              </a>
              <a
                href={profile.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/145/145807.png"
                  className="w-5 h-5 hover:scale-110 transition"
                />
              </a>
            </div>

            {/* Skill Tags */}
            <div className="flex flex-wrap gap-2 justify-center sm:justify-start mt-3">
              {profile.skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-slate-800 text-white text-xs px-3 py-1 rounded-full border border-slate-700"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 justify-center sm:justify-start mt-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-1.5 rounded-md">
                Message
              </button>
              <button className="bg-white hover:bg-gray-200 text-black text-sm px-4 py-1.5 rounded-md">
                Share
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto">
        {/* Left Column: Story + Experience + Skills + Testimonials */}
        <div className="space-y-8 pt-10">
          {/* Story */}
          <section className="border-b-2 border-gray-500 pb-6 px-6">
            <h3 className="text-xl font-semibold mb-2">About</h3>
            <p className="text-slate-300 leading-relaxed">{profile.story}</p>
          </section>

          {/* Experience */}
          <section className="border-b-2 border-gray-500 pb-6 px-6">
            <h3 className="text-xl font-semibold mb-4">Experience</h3>
            <div className="space-y-4">
              {profile.experienceList.map((exp, i) => (
                <div key={i} className="border-l-4 border-blue-600 pl-4">
                  <h4 className="text-lg font-medium">
                    {exp.role} at {exp.company}
                  </h4>
                  <span className="text-sm text-slate-400">{exp.duration}</span>
                  <p className="text-slate-300">{exp.details}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Testimonials */}
          <section className="px-6">
            <h3 className="text-xl font-semibold mb-4 ">Client Testimonials</h3>
            <div className="space-y-4 pr-6 pb-6">
              {profile.testimonials.map((testi, i) => (
                <div key={i} className="bg-slate-800 p-4 rounded-lg">
                  <p className="italic text-slate-200">“{testi.feedback}”</p>
                  <p className="mt-2 text-sm text-slate-400">
                    — {testi.client}, {testi.company}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column: Projects */}
        <div className="space-y-8 border-l-2 border-gray-400 px-6 pt-10">
          <section>
            <h3 className="text-xl font-semibold mb-4">Projects</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {profile.projects.map((proj, i) => (
                <div
                  key={i}
                  className="bg-slate-900 p-5 rounded-xl border border-slate-700 hover:shadow-lg transition duration-200 hover:border-blue-500"
                >
                  <h4 className="font-semibold text-lg mb-1 text-white">
                    {proj.name}
                  </h4>
                  <p className="text-slate-400 text-sm">{proj.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
