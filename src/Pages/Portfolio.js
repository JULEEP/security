import React from "react";
import WavySection from "../portfolio/WavySection";
import FaqSection from "../portfolio/Faq";
import LatestWork from "../portfolio/Latestwork";
import Profile from "../portfolio/Profile";

const Portfolio = () => {
  

  return (
    <div className=" text-white overflow-visible">
      {/* Profile Card */}
      <Profile/>
      <WavySection/>
      <LatestWork/>
      <FaqSection/>

      
    </div>
  );
};

export default Portfolio;
