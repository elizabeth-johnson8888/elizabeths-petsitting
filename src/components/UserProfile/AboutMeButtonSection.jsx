import MoreAboutMeButton from "./MoreAboutMeButton.jsx";
import ExperienceButton from "./ExperienceButton.jsx";

// About me and Experience button holder
function AboutMeButtonSection() {
  return (
    <div className="flex ml-16">
      <MoreAboutMeButton />
      <ExperienceButton />
    </div>
  );
}

export default AboutMeButtonSection;