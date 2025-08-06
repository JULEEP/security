import WavySection from "./portfolioSections/WavySection";
import FaqSection from "./portfolioSections/Faq";
import LatestWork from "./portfolioSections/Latestwork";
import Profile from "./portfolioSections/Profile";
import Aboutus from "./portfolioSections/Aboutus";
import ServicesMarquee from "./portfolioSections/Services";

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
