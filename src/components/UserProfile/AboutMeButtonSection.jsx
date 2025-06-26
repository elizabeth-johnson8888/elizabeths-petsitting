import MoreAboutMeButton from "./MoreAboutMeButton.jsx";
import ExperienceButton from "./ExperienceButton.jsx";
import { useState } from "react";

// About me and Experience button holder
function AboutMeButtonSection() {
  const [active, setActive] = useState(null);

  return (
    <div>
      <div className="hidden sm:flex sm:flex-col sm:justify-center sm:items-center sm:gap-8 sm:p-8 sm:p-0 sm:pr-16">
        <div>
          <h3 className="text-2xl font-bold pb-2 text-center">About Me</h3>
          <p className="regular-text text-center">I’m a recent graduate from James Madison University with a degree in Computer Science. My family pet is a little dog named Athena, but we all call her Tina. Taking care of her inspired me to start my pet sitting business because I just love animals. When I’m not coding or cuddling with Tina, I’m probably listening to music, getting creative with arts and crafts, or hanging out with friends.</p>
        </div>

        <div>
          <h3 className="text-2xl font-bold pb-2 text-center">Experience</h3>
          <p className="regular-text text-center">I'm just getting started with my pet sitting business. Over the past few months, I've had the joy of caring for pets for friends and I absolutely loved it. I have experience with both dogs and cats, and I'm always open to learning how to care for other animals too. Every pet deserves love, attention, and a safe, happy environment, and I would be honored to provide that for yours!</p>
        </div>
      </div>

      <div className="flex flex-col gap-4 items-center text-center sm:hidden">
        <h2 className="text-4xl font-bold text-center">About Me:</h2>
        <div className="">
          <MoreAboutMeButton 
            isActive={active === "more"}
            onToggle={() => setActive(active === "more" ? null : "more")}
          />
        </div>
        
        <div className="">
          <ExperienceButton 
            isActive={active === "experience"}
            onToggle={() => setActive(active === "experience" ? null : "experience")}
          />
        </div>
      </div>
    </div>

    
  );
}

export default AboutMeButtonSection;