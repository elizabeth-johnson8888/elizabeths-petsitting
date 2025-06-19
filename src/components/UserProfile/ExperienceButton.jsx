import MoreAboutMeText from "./MoreAboutMeText.jsx";
import { useState } from "react";

function ExperienceButton({ isActive, onToggle }) {
  return (
    <div className='flex flex-col items-start'>
      <button className="button border-pink-xtra-dark rounded-full w-48" onClick={onToggle}>
        Experience
      </button>
      
      <MoreAboutMeText 
        isActive={isActive}
        text="I am just starting out with my business, but I have pet sat for some friends these past couple months! I realized I love pet sitting and hope to do it some more! I love dogs and cats, which I have experience watching, but I also dont mind learning how to take care of another type of animal to fill your needs! All animals deserve love and care!" 
      />
    </div>
  );
}

export default ExperienceButton;