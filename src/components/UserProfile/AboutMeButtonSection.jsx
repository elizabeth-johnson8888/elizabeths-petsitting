import MoreAboutMeButton from "./MoreAboutMeButton.jsx";
import ExperienceButton from "./ExperienceButton.jsx";
import { useState } from "react";

// About me and Experience button holder
function AboutMeButtonSection() {
  const [active, setActive] = useState(null);

  return (
    <div className="flex flex-col justify-center gap-8 p-8 sm:p-0 sm:pr-16">
      <div>
        <h3 className="text-2xl font-bold pb-2 text-center">About Me</h3>
        <p className="regular-text">I am a recent graduate from James Madison Unviersity with a BS in Computer Science. My family pet is a little dog named Athena, or Tina for short. She is absolutely adorable and I love taking care of her. In my free time I love listening to music, doing arts and crafts, and hanging out with my friends.</p>
      </div>

      <div>
        <h3 className="text-2xl font-bold pb-2 text-center">Experience</h3>
        <p className="regular-text">I am just starting out with my business, but I have pet sat for some friends these past couple months! I realized I love pet sitting and hope to do it some more! I love dogs and cats, which I have experience watching, but I also dont mind learning how to take care of another type of animal to fill your needs! All animals deserve love and care!</p>
      </div>
      
    </div>
  //   <div className="relative flex gap-32 items-start">
  //     <div className="">
  //       <MoreAboutMeButton 
  //         isActive={active === "more"}
  //         onToggle={() => setActive(active === "more" ? null : "more")}
  //       />
  //     </div>
      
  //     <div className="">
  //       <ExperienceButton 
  //         isActive={active === "experience"}
  //         onToggle={() => setActive(active === "experience" ? null : "experience")}
  //       />
  //     </div>
  //   </div>
  );
}

export default AboutMeButtonSection;