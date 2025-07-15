import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";

function Profile1({ data }) {
  const {
    name = "Shraddha",
    position = "Website Developer",
    github = "#",
    linkedin = "#",
    twitter = "#",
    profileImage = "https://source.unsplash.com/random/1572x795",
    skills = [],
  } = data || {};

  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
      <img
        src={profileImage}
        alt="Hero"
        className="absolute -top-[98px] -z-10 w-full h-auto object-cover"
      />

      <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
        {/* Left Text Section */}
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
          <h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
            Hello, <br />
            This is{" "}
            <span className=" text-pink-500">{name}</span>
            {`, I'm a Professional `}{" "}
            <span className=" text-[#16f2b3]">{position}</span>.
          </h1>

          {/* Social Links */}
          <div className="my-12 flex items-center gap-5">
            <a href={github} target="_blank" className="text-pink-500 hover:scale-125 transition" rel="noreferrer">
              <BsGithub size={30} />
            </a>
            <a href={linkedin} target="_blank" className="text-pink-500 hover:scale-125 transition" rel="noreferrer">
              <BsLinkedin size={30} />
            </a>
            <a href={twitter} target="_blank" className="text-pink-500 hover:scale-125 transition" rel="noreferrer">
              <FaTwitterSquare size={30} />
            </a>
            <a href="#" className="text-pink-500 hover:scale-125 transition">
              <FaFacebook size={30} />
            </a>
            <a href="#" className="text-pink-500 hover:scale-125 transition">
              <SiLeetcode size={30} />
            </a>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600"
            >
              <button className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-full text-white uppercase tracking-wider font-semibold flex items-center gap-1 hover:gap-3">
                <span>Contact me</span>
                <RiContactsFill size={16} />
              </button>
            </a>

            <a
              className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-white text-xs md:text-sm uppercase tracking-wider font-semibold"
              role="button"
              target="_blank"
              href="#"
            >
              <span>Get Resume</span>
              <MdDownload size={16} />
            </a>
          </div>
        </div>

        {/* Code-like Section */}
        <div className="order-1 lg:order-2 from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37]">
          <div className="flex">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
            <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
          </div>
          <div className="px-4 lg:px-8 py-5">
            <div className="flex space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-400"></div>
              <div className="h-3 w-3 rounded-full bg-orange-400"></div>
              <div className="h-3 w-3 rounded-full bg-green-200"></div>
            </div>
          </div>

          {/* Code Snippet */}
          <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
            <code className="font-mono text-xs md:text-sm lg:text-base">
              <div className="blink">
                <span className="text-pink-500">const</span> <span className="text-white">coder</span> <span className="text-pink-500">=</span>{" "}
                <span className="text-gray-400">{'{'}</span>
              </div>
              <div>
                <span className="ml-4 text-white">name:</span>{" "}
                <span className="text-gray-400">'</span>
                <span className="text-amber-300">{name}</span>
                <span className="text-gray-400">',</span>
              </div>
              <div>
                <span className="ml-4 text-white">skills:</span>{" "}
                <span className="text-gray-400">[</span>
                <span className="text-amber-300">
                  {skills.map((s, i) => `'${s}'${i < skills.length - 1 ? ", " : ""}`).join("")}
                </span>
                <span className="text-gray-400">],</span>
              </div>
              <div>
                <span className="ml-4 text-white">hardWorker:</span>{" "}
                <span className="text-orange-400">true</span>,
              </div>
              <div>
                <span className="ml-4 text-white">quickLearner:</span>{" "}
                <span className="text-orange-400">true</span>,
              </div>
              <div>
                <span className="ml-4 text-white">problemSolver:</span>{" "}
                <span className="text-orange-400">true</span>,
              </div>
              <div>
                <span className="ml-4 text-green-400">hireable:</span>{" "}
                <span className="text-orange-400">function</span> <span className="text-gray-400">() {'{'}</span>
              </div>
              <div className="ml-8">
                <span className="text-orange-400">return</span> (
              </div>
              <div className="ml-12">
                <span className="text-cyan-400">this.</span>hardWorker &&
              </div>
              <div className="ml-12">
                <span className="text-cyan-400">this.</span>problemSolver &&
              </div>
              <div className="ml-12">
                <span className="text-cyan-400">this.</span>skills.length &gt;={" "}
                <span className="text-orange-400">5</span>
              </div>
              <div className="ml-8">);</div>
              <div className="ml-4">{'}'}</div>
              <div>{'}'}</div>
            </code>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile1;
