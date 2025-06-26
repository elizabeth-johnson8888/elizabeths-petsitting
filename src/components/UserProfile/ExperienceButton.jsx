import MoreAboutMeText from "./MoreAboutMeText.jsx";
import { useState } from "react";

function ExperienceButton({ isActive, onToggle }) {
  return (
    <div className='flex flex-col items-center text-center'>
      <button className="button border-pink-xtra-dark rounded-full w-48" onClick={onToggle}>
        Experience
      </button>
      
      <MoreAboutMeText 
        isActive={isActive}
        text="I'm just getting started with my pet sitting business. Over the past few months, I've had the joy of caring for pets for friends and I absolutely loved it. I have experience with both dogs and cats, and I'm always open to learning how to care for other animals too. Every pet deserves love, attention, and a safe, happy environment, and I would be honored to provide that for yours!" 
      />
    </div>
  );
}

export default ExperienceButton;