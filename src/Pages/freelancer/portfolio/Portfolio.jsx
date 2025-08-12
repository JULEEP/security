import { useEffect, useState } from "react";
import { API_URL } from "../../../config";
import WavySection from "./portfolioSections/WavySection";
import FaqSection from "./portfolioSections/Faq";
import LatestWork from "./portfolioSections/Latestwork";
import Profile from "./portfolioSections/Profile";
import Aboutus from "./portfolioSections/Aboutus";
import ServicesMarquee from "./portfolioSections/Services";

const Portfolio = () => {
  const [freelancer, setFreelancer] = useState(null);
  const [loading, setLoading] = useState(true);
  const freelancerId = localStorage.getItem("freelancerId");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${API_URL}/api/freelancers/singlefreelancer/${freelancerId}`
        );
        const data = await res.json();
        setFreelancer(data);
      } catch (error) {
        console.error("Error fetching freelancer:", error);
      } finally {
        setLoading(false);
      }
    };
    if (freelancerId) fetchData();
  }, [freelancerId]);

  if (loading) {
    return <p className="text-center py-10">Loading portfolio...</p>;
  }

  if (!freelancer) {
    return <p className="text-center py-10">No data found</p>;
  }

  return (
    <div className="text-white overflow-visible font-sans bg-white">
      <Profile
        {...freelancer} 
      />
      <Aboutus about={freelancer.about} />
      <ServicesMarquee services={freelancer.services} />
      <WavySection skills={freelancer.skills} />
      <LatestWork works={freelancer.latestWork} />
      <FaqSection faq={freelancer.faq} />
    </div>
  );
};

export default Portfolio;
