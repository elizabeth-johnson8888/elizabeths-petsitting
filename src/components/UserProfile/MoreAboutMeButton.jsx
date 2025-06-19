import MoreAboutMeText from "./MoreAboutMeText.jsx";
import { useState } from "react";

function MoreAboutMeButton({ isActive, onToggle }) {
  return (
    <div className="flex flex-col items-start">
      <button
        className="button border-pink-xtra-dark rounded-full w-48 mb-2"
        onClick={onToggle}
      >
        More About Me
      </button>

      <MoreAboutMeText 
        isActive={isActive}
        text="I am a recent graduate from James Madison Unviersity with a BS in Computer Science. My family pet is a little dog named Athena, or Tina for short. She is absolutely adorable and I love taking care of her. In my free time I love listening to music, doing arts and crafts, and hanging out with my friends." 
      />
    </div>
  );
}
export default MoreAboutMeButton;