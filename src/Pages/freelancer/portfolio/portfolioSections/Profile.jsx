import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { API_URL } from "../../../../config";

const Profile = ({
  name,
  position,
  experience,
  location,
  linkedin,
  github,
  twitter,
  profileImage,
  skills = []
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#0f172a] to-[#1e3a8a] flex items-center justify-center px-4 py-10">
      <div className="max-w-5xl w-full rounded-xl p-10 flex flex-col items-center gap-10 text-white">
        
        {/* Main Row */}
        <div className="flex flex-col-reverse md:flex-row items-center w-full gap-10">
          
          {/* Text Section */}
          <div className="flex-1 text-center md:text-left space-y-3">
            <p className="text-base text-blue-300">Hi ,</p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
              I'm <span className="text-blue-500 font-thin">{name}</span><br />
              a {position || "Developer"}
            </h1>
            <p className="text-lg text-blue-400">
              {experience ? `${experience}+ Years Experience` : "Experience not provided"}
            </p>
            <p className="text-sm text-white/80 flex items-center justify-center md:justify-start gap-2">
              <FontAwesomeIcon icon={faLocationDot} className="text-white" />
              {location || "Location not provided"}
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-md font-medium transition border">
                Message
              </button>
              <button className="bg-black hover:bg-orange-600 text-white px-6 py-2 rounded-md font-medium transition border">
                Experience
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-4 justify-center md:justify-start">
              {github && (
                <a href={github} target="_blank" rel="noopener noreferrer">
                  <img src="https://cdn-icons-png.flaticon.com/512/733/733553.png" alt="GitHub" className="w-6 h-6 hover:scale-110 transition" />
                </a>
              )}
              {linkedin && (
                <a href={linkedin} target="_blank" rel="noopener noreferrer">
                  <img src="https://cdn-icons-png.flaticon.com/512/145/145807.png" alt="LinkedIn" className="w-6 h-6 hover:scale-110 transition" />
                </a>
              )}
              {twitter && (
                <a href={twitter} target="_blank" rel="noopener noreferrer">
                  <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" className="w-6 h-6 hover:scale-110 transition" />
                </a>
              )}
            </div>
          </div>

          {/* Profile Picture */}
          <div className="relative w-80 h-80 rounded-full overflow-hidden shadow-md border-4 border-blue-500">
            {profileImage && (<img
              src={ `${API_URL}/uploads/profileImg/${profileImage}`}
              alt={name || "Profile"}
              className="w-full h-full object-cover"
            />)}
          </div>
        </div>

        {/* Skills Section */}
        {skills.length > 0 && (
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
        )}
      </div>
    </div>
  );
};

export default Profile;

