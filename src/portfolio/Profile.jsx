import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
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

  const Profile = ()=>{
    return(
        <div className="max-w-full mx-auto bg-gradient-to-br from-black to-blue-900 p-6 shadow-md border border-slate-800 flex justify-center">
        <div className="flex flex-col sm:flex-row gap-10">
          {/* Profile Picture */}
          <div className="relative">
            <img
              src={profile.image}
              alt="Profile"
              className="w-36 h-36 rounded-full object-cover border-4 border-slate-800 shadow-md"
            />
            {profile.lookingForWork && (
              <span className="absolute bottom-10 right-7 bg-green-500 text-white text-[10px] px-2 py-0.5 rounded-full shadow-sm">
                Open to work
              </span>
            )}
          </div>


          {/* Profile Details */}
          <div className="flex-1 space-y-2 text-center sm:text-left">
            <div>
              <h2 className="text-2xl font-bold text-white">{profile.name}</h2>
              <p className="text-blue-400 text-sm mt-1">
                {profile.role} • {profile.experience} experience
              </p>
              <p className="text-slate-500 text-xs mt-1"> <FontAwesomeIcon icon={faLocationDot} className="text-gray-700 text-lg mr-1" />{profile.location}</p>
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

    )
  }
  export default Profile;