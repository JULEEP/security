import React from "react";
import WavySection from "../portfolio/WavySection";
import FaqSection from "../portfolio/Faq";
import LatestWork from "../portfolio/Latestwork";
import Profile from "../portfolio/Profile";
import Aboutus from "../portfolio/Aboutus";
import ServicesMarquee from "../portfolio/Services";

const Portfolio = () => {
  

  return (
    <div className=" text-white overflow-visible font-sans bg-white">
      {/* Profile Card */}
      <Profile/>
      <Aboutus/>
      <ServicesMarquee/>
      <WavySection/>
      <LatestWork/>
      <FaqSection/>

      
    </div>
  );
};

export default Portfolio;
