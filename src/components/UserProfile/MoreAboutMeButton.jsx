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
        text="I’m a recent graduate from James Madison University with a degree in Computer Science. My family pet is a little dog named Athena, but we all call her Tina. Taking care of her inspired me to start my pet sitting business because I just love animals that much. When I’m not coding or cuddling with Tina, I’m probably listening to music, getting creative with arts and crafts, or hanging out with friends." 
      />
    </motion.div>
  );
}
export default MoreAboutMeButton;