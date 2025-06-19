import { button } from "framer-motion/client";
import MoreAboutMeText from "../UserProfile/MoreAboutMeText";
import { motion } from "framer-motion";

function CustomButton({ isActive, onToggle, buttonLabel, text }) {
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
        { buttonLabel }
      </motion.button>

      <MoreAboutMeText 
        isActive={isActive}
        text={ text }
      />
    </motion.div>
  );
}
export default CustomButton;