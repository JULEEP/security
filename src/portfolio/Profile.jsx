import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const Profile = () => {
  const skills = [
    "React", "Next.js", "Node.js", "Express", "MongoDB", "PostgreSQL",
    "Tailwind CSS", "JavaScript", "TypeScript", "Redux Toolkit", "GitHub", "Jest"
  ];

  const socialLinks = {
    github: "https://github.com/shraddhasalavi",
    linkedin: "https://linkedin.com/in/shraddhasalavi",
    twitter: "https://twitter.com/shraddhasalavi",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#0f172a] to-[#1e3a8a] flex items-center justify-center px-4 py-10">
      <div className="max-w-5xl w-full rounded-xl p-10 flex flex-col items-center gap-10  text-white">
        
        {/* Main Row */}
        <div className="flex flex-col-reverse md:flex-row items-center w-full gap-10">
          {/* Text Section */}
          <div className="flex-1 text-center md:text-left space-y-3">
            <p className="text-base text-blue-300">Hi ,</p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
              I'm <span className="text-blue-500 font-thin">Shraddha</span><br />
              a Fullstack Developer
            </h1>
            <p className="text-lg text-blue-400">
              3+ Years Experience
            </p>
            <p className="text-sm text-white/80 flex items-center justify-center md:justify-start gap-2">
              <FontAwesomeIcon icon={faLocationDot} className="text-white" />
              Mumbai, India
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-md font-medium transition border">Message</button>
              <button className="bg-black hover:bg-orange-600 text-white px-6 py-2 rounded-md font-medium transition border">Experience</button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-4 justify-center md:justify-start">
              <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
                <img src="https://cdn-icons-png.flaticon.com/512/733/733553.png" alt="GitHub" className="w-6 h-6 hover:scale-110 transition" />
              </a>
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                <img src="https://cdn-icons-png.flaticon.com/512/145/145807.png" alt="LinkedIn" className="w-6 h-6 hover:scale-110 transition" />
              </a>
              <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" className="w-6 h-6 hover:scale-110 transition" />
              </a>
            </div>
          </div>

          {/* Profile Picture */}
          <div className="relative w-80 h-80 rounded-full overflow-hidden shadow-md border-4 border-blue-500">
            <img
              src="https://i.pravatar.cc/300?img=47"
              alt="Shraddha"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Skills Section */}
        <div className="w-full">
          <h2 className="text-2xl font-bold text-white mb-4 text-center md:text-left">Skills</h2>
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            {skills.map((skill, idx) => (
              <span
                key={idx}
                className="bg-white/10 border border-white/20 text-sm px-4 py-1.5 rounded-full shadow-sm hover:bg-white/20 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
