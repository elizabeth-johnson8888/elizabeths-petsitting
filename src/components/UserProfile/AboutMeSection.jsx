import ProfileImage from "../images/ProfileImage.jsx";
import AboutMeButtonSection from "./AboutMeButtonSection.jsx";
// About Me Section
// has profile pic, and more about me and expereince buttons
function AboutMeSection() {
  return (
    <div className="grid grid-cols-[1fr_2fr] grid-rows-1 gap-32">
      <ProfileImage />
      <AboutMeButtonSection />
    </div>
  );
}

export default AboutMeSection;