import React, { useState, useEffect } from "react";
import { API_URL } from "../../../config";

const sections = [
  "Basic Info",
  "Skills",
  "Services",
  "Testimonials",
  "About Us",
  "FAQ",
  "Latest Work",
];
const defaultFormData = {
  name: "",
  position: "",
  experience: "",
  location: "",
  linkedin: "",
  github: "",
  twitter: "",
  profileImage:"",
  skills: [],
  services: [],
  testimonials: [],
  about: {
    heading: "",
    description: "",
    mission: "",
    vision: "",
    image: null,
    experienceYears: "",
    completedProjects: "",
    happyClients: "",
    teamMembers: "",
  },
  faq: [],
  latestWork: [],
};
const SkillsInput = ({ formData, setFormData }) => {
  const [skill, setSkill] = useState("");

  const handleAddSkill = () => {
    if (!skill.trim()) return;
    if (!formData.skills.includes(skill.trim())) {
      setFormData((prev) => ({
        ...prev,
        skills: [...prev.skills, skill.trim()],
      }));
    }
    setSkill("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddSkill();
    }
  };

  const handleRemoveSkill = (skillToRemove) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.filter((s) => s !== skillToRemove),
    }));
  };

  return (
    <div className="space-y-4">
      {/* Skills list */}
      <div className="flex flex-wrap gap-2">
        {formData.skills.map((s, index) => (
          <span
            key={index}
            className="flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
          >
            {s}
            <button
              type="button"
              onClick={() => handleRemoveSkill(s)}
              className="ml-2 text-blue-600 hover:text-red-600 font-bold"
            >
              ×
            </button>
          </span>
        ))}
      </div>

      {/* Input + Add button (NO FORM) */}
      <div className="flex gap-2">
        <input
          type="text"
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a skill and press Enter"
          className="w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="button"
          onClick={handleAddSkill}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add
        </button>
      </div>
    </div>
  );
};

const ServicesInput = ({ formData, setFormData }) => {
  const [service, setService] = useState("");

  const handleAddService = () => {
    if (!service.trim()) return;
    if (!formData.services.includes(service.trim())) {
      setFormData((prev) => ({
        ...prev,
        services: [...prev.services, service.trim()],
      }));
    }
    setService("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddService();
    }
  };

  const handleRemoveService = (removeItem) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.filter((s) => s !== removeItem),
    }));
  };

  return (
    <div className="space-y-4">
      {/* Service list */}
      <div className="flex flex-wrap gap-2">
        {formData.services.map((s, index) => (
          <span
            key={index}
            className="flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
          >
            {s}
            <button
              type="button"
              onClick={() => handleRemoveService(s)}
              className="ml-2 text-blue-600 hover:text-blue-700 font-bold"
            >
              ×
            </button>
          </span>
        ))}
      </div>

      {/* Input + Add button */}
      <div className="flex gap-2">
        <input
          type="text"
          value={service}
          onChange={(e) => setService(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a service and press Enter"
          className="w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="button"
          onClick={handleAddService}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add
        </button>
      </div>
    </div>
  );
};

const TestimonialsInput = ({ formData, setFormData }) => {
  const [testimonial, setTestimonial] = useState({
    name: "",
    position: "",
    opinion: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTestimonial((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddTestimonial = () => {
    if (
      !testimonial.name.trim() ||
      !testimonial.position.trim() ||
      !testimonial.opinion.trim()
    )
      return;

    setFormData((prev) => ({
      ...prev,
      testimonials: [...prev.testimonials, testimonial],
    }));

    // Reset input fields
    setTestimonial({ name: "", position: "", opinion: "" });
  };

  const handleRemove = (index) => {
    setFormData((prev) => ({
      ...prev,
      testimonials: prev.testimonials.filter((_, i) => i !== index),
    }));
  };

  return (
    <div className="space-y-4">
      {/* Existing Testimonials */}
      <div className="space-y-2">
        {formData.testimonials.map((t, index) => (
          <div
            key={index}
            className="p-3 border border-gray-300 rounded-md bg-gray-50 relative"
          >
            <button
              type="button"
              onClick={() => handleRemove(index)}
              className="absolute top-2 right-2 text-red-500 hover:text-red-700"
            >
              ×
            </button>
            <p className="font-semibold">
              {t.name} , {t.position}
            </p>
            <p className="text-sm text-gray-700 mt-1">{t.opinion}</p>
          </div>
        ))}
      </div>

      {/* Input Fields */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          type="text"
          name="name"
          value={testimonial.name}
          placeholder="Client Name"
          onChange={handleChange}
          className="p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="text"
          name="position"
          value={testimonial.position}
          placeholder="Position"
          onChange={handleChange}
          className="p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="text"
          name="opinion"
          value={testimonial.opinion}
          placeholder="Testimonial / Opinion"
          onChange={handleChange}
          className="p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <button
        type="button"
        onClick={handleAddTestimonial}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add Testimonial
      </button>
    </div>
  );
};

const AboutInput = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      about: {
        ...prev.about,
        [name]: files ? files[0] : value,
      },
    }));
  };

  const about = formData.about;

  return (
    <div className="space-y-4">
      {/* Heading */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Heading
        </label>
        <input
          type="text"
          name="heading"
          value={about.heading}
          placeholder="e.g. About Us"
          onChange={handleChange}
          className="w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Description
        </label>
        <textarea
          name="description"
          value={about.description}
          placeholder="Tell us about your team, company, or story..."
          onChange={handleChange}
          rows={4}
          className="w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Mission */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Our Mission
        </label>
        <input
          type="text"
          name="mission"
          value={about.mission}
          placeholder="e.g. To build scalable web solutions..."
          onChange={handleChange}
          className="w-full p-2 border rounded-md shadow-sm"
        />
      </div>

      {/* Vision */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Our Vision
        </label>
        <input
          type="text"
          name="vision"
          value={about.vision}
          placeholder="e.g. Empower businesses with digital tools..."
          onChange={handleChange}
          className="w-full p-2 border rounded-md shadow-sm"
        />
      </div>

      {/* Image */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Image
        </label>
        <input
          type="file"
          name="image"
          onChange={handleChange}
          className="w-full"
        />
        {about.image && typeof about.image !== "string" && (
          <p className="text-xs text-gray-500 mt-1">
            Selected: {about.image.name}
          </p>
        )}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Years of Experience
          </label>
          <input
            type="number"
            name="experienceYears"
            value={about.experienceYears}
            placeholder="e.g. 5"
            onChange={handleChange}
            className="w-full p-2 border rounded-md shadow-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Projects Completed
          </label>
          <input
            type="number"
            name="completedProjects"
            value={about.completedProjects}
            placeholder="e.g. 120"
            onChange={handleChange}
            className="w-full p-2 border rounded-md shadow-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Happy Clients
          </label>
          <input
            type="number"
            name="happyClients"
            value={about.happyClients}
            placeholder="e.g. 80"
            onChange={handleChange}
            className="w-full p-2 border rounded-md shadow-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Team Members
          </label>
          <input
            type="number"
            name="teamMembers"
            value={about.teamMembers}
            placeholder="e.g. 15"
            onChange={handleChange}
            className="w-full p-2 border rounded-md shadow-sm"
          />
        </div>
      </div>
    </div>
  );
};

const FAQInput = ({ formData, setFormData }) => {
  const [faq, setFaq] = useState({ question: "", answer: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFaq((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddFaq = () => {
    if (!faq.question.trim() || !faq.answer.trim()) return;

    setFormData((prev) => ({
      ...prev,
      faq: [...prev.faq, faq],
    }));

    setFaq({ question: "", answer: "" });
  };

  const handleRemoveFaq = (index) => {
    setFormData((prev) => ({
      ...prev,
      faq: prev.faq.filter((_, i) => i !== index),
    }));
  };

  return (
    <div className="space-y-4">
      {/* Render list of FAQs */}
      <div className="space-y-2">
        {formData.faq.map((f, index) => (
          <div
            key={index}
            className="p-3 border border-gray-300 rounded-md bg-gray-50 relative"
          >
            <button
              type="button"
              onClick={() => handleRemoveFaq(index)}
              className="absolute top-2 right-2 text-red-500 hover:text-red-700"
            >
              ×
            </button>
            <p className="font-semibold">Q: {f.question}</p>
            <p className="text-sm text-gray-700 mt-1">A: {f.answer}</p>
          </div>
        ))}
      </div>

      {/* Input for new FAQ */}
      <div className="grid grid-cols-1 gap-4">
        <input
          type="text"
          name="question"
          value={faq.question}
          placeholder="Enter question"
          onChange={handleChange}
          className="p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <textarea
          name="answer"
          value={faq.answer}
          placeholder="Enter answer"
          onChange={handleChange}
          rows={3}
          className="p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <button
        type="button"
        onClick={handleAddFaq}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add FAQ
      </button>
    </div>
  );
};

const LatestWorkInput = ({ formData, setFormData }) => {
  const [work, setWork] = useState({ link: "", image: null });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setWork((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleAddWork = () => {
    if (!work.link.trim() || !work.image) return;

    setFormData((prev) => ({
      ...prev,
      latestWork: [...prev.latestWork, work],
    }));

    setWork({ link: "", image: null });
  };

  const handleRemoveWork = (index) => {
    setFormData((prev) => ({
      ...prev,
      latestWork: prev.latestWork.filter((_, i) => i !== index),
    }));
  };

  return (
    <div className="space-y-4">
      {/* Existing works */}
      <div className="grid grid-cols-1 gap-4">
        {formData.latestWork.map((item, index) => (
          <div
            key={index}
            className="border p-3 rounded-md relative bg-gray-50 shadow-sm"
          >
            <button
              type="button"
              onClick={() => handleRemoveWork(index)}
              className="absolute top-2 right-2 text-red-500 hover:text-red-700"
            >
              ×
            </button>
            <p className="text-sm">
              🔗{" "}
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                {item.link}
              </a>
            </p>
            <p className="text-xs mt-2 text-gray-600">
              📷 {item.image?.name || "Image selected"}
            </p>
          </div>
        ))}
      </div>

      {/* Input fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="url"
          name="link"
          placeholder="Project link"
          value={work.link}
          onChange={handleChange}
          className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleChange}
          className="p-2"
        />
      </div>

      <button
        type="button"
        onClick={handleAddWork}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add Work
      </button>
    </div>
  );
};

const BasicInfoInput = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  return (
    <>
      <div className="flex w-full gap-4 mb-4">
        <div className="w-1/2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="John Doe"
            className="w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={handleChange}
          />
        </div>

        <div className="w-1/2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Position
          </label>
          <input
            type="text"
            name="position"
            value={formData.position}
            placeholder="Fullstack Developer"
            className="w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="flex w-full gap-4 mb-4">
        <div className="w-1/2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Experience
          </label>
          <input
            type="text"
            name="experience"
            value={formData.experience}
            placeholder="e.g. 2+ years"
            className="w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={handleChange}
          />
        </div>

        <div className="w-1/2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Location
          </label>
          <input
            type="text"
            name="location"
            value={formData.location}
            placeholder="e.g. Mumbai, India"
            className="w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="w-full space-y-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            LinkedIn Link
          </label>
          <input
            type="url"
            name="linkedin"
            value={formData.linkedin}
            placeholder="https://linkedin.com/in/yourname"
            className="w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            GitHub Link
          </label>
          <input
            type="url"
            name="github"
            value={formData.github}
            placeholder="https://github.com/yourname"
            className="w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Twitter Link
          </label>
          <input
            type="url"
            name="twitter"
            value={formData.twitter}
            placeholder="https://twitter.com/yourname"
            className="w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={handleChange}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm text-gray-700 font-medium mb-1">
          Profile Image
        </label>
        <input
          name="profileImage"
          type="file"
          className="input"
          onChange={handleChange}
        />
        {formData.profileImage && typeof formData.profileImage !== "string" && (
          <p className="text-xs text-gray-500 mt-1">
            Selected: {formData.profileImage.name}
          </p>
        )}
      </div>
    </>
  );
};

const ProfileForm = () => {
  const [selectedSection, setSelectedSection] = useState("Basic Info");
  const [formData, setFormData] = useState(defaultFormData);
  const [loading, setLoading] = useState(true);
  const [submitLoading, setSubmitLoading] = useState(false);

  const freelancerId = localStorage.getItem("freelancerId");

  useEffect(() => {
    async function fetchProfile() {
      try {
        const res = await fetch(
          `${API_URL}/api/freelancers/singlefreelancer/${freelancerId}`
        );
        const data = await res.json();
        if (data.freelancer) {
          setFormData({
            ...defaultFormData,
            ...data.freelancer,
          });
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
      } finally {
        setLoading(false);
      }
    }

    if (freelancerId) {
      fetchProfile();
    } else {
      console.error("freelancerId not found in localStorage");
      setLoading(false);
    }
  }, [freelancerId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitLoading(true);

    
    const cleanData = JSON.parse(JSON.stringify(formData));

    
    if (cleanData.profileImage && typeof cleanData.profileImage !== "string") {
      cleanData.profileImage = ""; 
    }

    if (cleanData.about?.image && typeof cleanData.about.image !== "string") {
      cleanData.about.image = "";
    }

    if (Array.isArray(cleanData.latestWork)) {
      cleanData.latestWork = cleanData.latestWork.map((item) => ({
        ...item,
        image: typeof item.image === "string" ? item.image : "",
      }));
    }

    try {
      const res = await fetch(
        `${API_URL}/api/freelancers/updatefreelancers/${freelancerId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(cleanData),
        }
      );

      const result = await res.json();

      if (res.ok) {
        alert("Profile updated successfully!");

        // 🔁 Re-fetch updated data to update the form visually
        const updatedRes = await fetch(
          `${API_URL}/api/freelancers/singlefreelancer/${freelancerId}`
        );
        const updatedData = await updatedRes.json();
        if (updatedData.freelancer) {
          setFormData({
            ...defaultFormData,
            ...updatedData.freelancer,
          });
        }

        setSelectedSection("Basic Info");
      } else {
        alert("Error updating profile: " + result.message);
      }
    } catch (error) {
      alert("Network error: " + error.message);
    } finally {
      setSubmitLoading(false);
    }
  };

  const renderFields = () => {
    switch (selectedSection) {
      case "Basic Info":
        return <BasicInfoInput formData={formData} setFormData={setFormData} />;
      case "Skills":
        return <SkillsInput formData={formData} setFormData={setFormData} />;
      case "Services":
        return <ServicesInput formData={formData} setFormData={setFormData} />;
      case "Testimonials":
        return (
          <TestimonialsInput formData={formData} setFormData={setFormData} />
        );
      case "About Us":
        return <AboutInput formData={formData} setFormData={setFormData} />;
      case "FAQ":
        return <FAQInput formData={formData} setFormData={setFormData} />;
      case "Latest Work":
        return (
          <LatestWorkInput formData={formData} setFormData={setFormData} />
        );
      default:
        return null;
    }
  };

  if (loading)
    return (
      <p className="text-center py-10 text-gray-500">Loading profile...</p>
    );

  return (
    <div className="flex max-w-6xl mx-auto shadow-lg rounded-xl bg-white">
      {/* Left Sidebar */}
      <div className="w-1/4 p-6 border-r">
        <h2 className="text-2xl font-semibold mb-4">Edit Profile</h2>
        <ul className="space-y-4">
          {sections.map((section) => (
            <li
              key={section}
              onClick={() => setSelectedSection(section)}
              className={`cursor-pointer p-2 rounded-md ${
                selectedSection === section
                  ? "bg-blue-100 text-blue-700 font-semibold"
                  : "hover:bg-gray-100"
              }`}
            >
              {section}
            </li>
          ))}
        </ul>
      </div>

      {/* Form Area */}
      <div className="w-3/4 p-8 flex flex-col justify-between">
        <form
          className="space-y-4 flex-1 flex flex-col justify-between"
          onSubmit={handleSubmit}
        >
          <h3 className="text-xl font-bold mb-4">{selectedSection}</h3>
          {renderFields()}

          {selectedSection === "Latest Work" && (
            <div className="mb-6 flex justify-end">
              <button
                type="submit"
                disabled={submitLoading}
                className="w-[25%] bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition disabled:opacity-60"
              >
                {submitLoading ? "Updating..." : "Update Profile"}
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};
export default ProfileForm;
