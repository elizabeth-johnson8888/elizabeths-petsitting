import ProfileImage from "../images/ProfileImage.jsx";
import AboutMeButtonSection from "./AboutMeButtonSection.jsx";
// About Me Section
// has profile pic, and more about me and expereince buttons
function AboutMeSection() {
  return (
    <div className="sm:max-w-6xl sm:mx-auto sm:px-4">
      <div className="sm:grid sm:grid-cols-[1fr_2fr] sm:grid-rows-1 sm:gap-8 ">
        <ProfileImage />
        <AboutMeButtonSection />
      </div>
    </div>
  );
}

export default AboutMeSection;