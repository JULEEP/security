import React, { useState, useEffect } from "react";
import { API_URL } from "../../../config";
import BasicInfoInput from "./profileSections/BasicInfo";
import SkillsInput from "./profileSections/Skills";
import LatestWorkInput from "./profileSections/LatestWork";
import FAQInput from "./profileSections/Faq"
import AboutInput from "./profileSections/About"
import TestimonialsInput from "./profileSections/Testimonials"
import ServicesInput from "./profileSections/Services"

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
  
  // Handle file input (works for profileImage & about.image)
  const handleFileChange = (e, fieldPath) => {
    const file = e.target.files[0];
    if (!file) return;

    setFormData((prev) => {
      if (fieldPath === "profileImage") {
        return { ...prev, profileImage: file };
      }
      if (fieldPath === "about.image") {
        return {
          ...prev,
          about: {
            ...prev.about,
            image: file,
          },
        };
      }
      return prev;
    });
  };
  
  // Submit form using FormData
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitLoading(true);

    try {
      const formPayload = new FormData();

      // Primitive fields
      formPayload.append("name", formData.name || "");
      formPayload.append("position", formData.position || "");
      formPayload.append("experience", formData.experience || "");
      formPayload.append("location", formData.location || "");
      formPayload.append("linkedin", formData.linkedin || "");
      formPayload.append("github", formData.github || "");
      formPayload.append("twitter", formData.twitter || "");

      // Complex fields as JSON
      formPayload.append("skills", JSON.stringify(formData.skills || []));
      formPayload.append("about", JSON.stringify(formData.about || {}));
      formPayload.append("testimonials", JSON.stringify(formData.testimonials || []));
      formPayload.append("services", JSON.stringify(formData.services || []));
      formPayload.append("faq", JSON.stringify(formData.faq || []));
      formPayload.append("latestWork", JSON.stringify(formData.latestWork || []));

      // File uploads
      if (formData.profileImage instanceof File) {
        formPayload.append("image", formData.profileImage);
      }
      if (formData.about?.image instanceof File) {
        formPayload.append("aboutImage", formData.about.image);
      }
      formData.testimonials.forEach((testimonial) => {
        if (testimonial.image instanceof File) {
          formPayload.append("testimonialsImages", testimonial.image);
        }
      });
      formData.latestWork.forEach((work) => {
        if (work.image instanceof File) {
          formPayload.append("latestWorkImages", work.image);
        }
      });

      const res = await fetch(
        `${API_URL}/api/freelancers/updatefreelancers/${freelancerId}`,
        {
          method: "PUT",
          body: formPayload, // No headers for FormData
        }
      );

      const result = await res.json();

      if (res.ok) {
        alert("Profile updated successfully!");
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
        return <TestimonialsInput formData={formData} setFormData={setFormData} />;
      case "About Us":
        return <AboutInput formData={formData} setFormData={setFormData} />;
      case "FAQ":
        return <FAQInput formData={formData} setFormData={setFormData} />;
      case "Latest Work":
        return <LatestWorkInput formData={formData} setFormData={setFormData} />;
      default:
        return null;
    }
  };
  
  if (loading) {
    return <p className="text-center py-10 text-gray-500">Loading profile...</p>;
  }
  
  return (
    <div className="flex max-w-6xl mx-auto shadow-lg rounded-xl bg-white">
      {/* Sidebar */}
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

      
      <div className="w-3/4 p-8 flex flex-col justify-between">
        <form
          className="space-y-4 flex-1 flex flex-col justify-between"
          onSubmit={handleSubmit}
        >
          <h3 className="text-xl font-bold mb-4">{selectedSection}</h3>
          {renderFields()}

          {/* File inputs example */}
          {selectedSection === "About Us" && (
            <input
              type="file"
              className="w-full"
              onChange={(e) => handleFileChange(e, "about.image")}
            />
          )}

          {selectedSection === "Basic Info" && (
            <input
              type="file"
              className="w-full"
              onChange={(e) => handleFileChange(e, "profileImage")}
            />
          )}

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
