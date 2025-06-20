import MoreAboutMeText from "./MoreAboutMeText.jsx";
import { motion } from "framer-motion";

function MoreAboutMeButton({ isActive, onToggle }) {
  return (
    // 
    <motion.div
      className="flex flex-col items-center text-center"
      layout // 👈 This makes layout changes animate smoothly
    >
      <motion.button
        className="button border-pink-xtra-dark rounded-full w-48"
        onClick={onToggle}
        layout // 👈 Smoothly animate button’s movement too
      >
        More About Me
      </motion.button>

      <MoreAboutMeText 
        isActive={isActive}
        text="I am a recent graduate from James Madison Unviersity with a BS in Computer Science. My family pet is a little dog named Athena, or Tina for short. She is absolutely adorable and I love taking care of her. In my free time I love listening to music, doing arts and crafts, and hanging out with my friends." 
      />
    </motion.div>
  );
}
export default MoreAboutMeButton;