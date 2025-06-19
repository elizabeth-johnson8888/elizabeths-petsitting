import { motion, AnimatePresence } from "framer-motion";

// const text = "I am a recent graduate from James Madison Unviersity with a BS in Computer Science. My family pet is a little dog named Athena, or Tina for short. She is absolutely adorable and I love taking care of her. In my free time I love listening to music, doing arts and crafts, and hanging out with my friends.";
// const words = text.split(" ");

function MoreAboutMeText({ isActive, text }) {
  const words = text.split(" ");
  // animation variants for each word
  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 }
  };

  return (
    <div className="absolute mt-30 w-156 z-10 left-0">
      <AnimatePresence>
        {isActive && (
          <motion.div
            className="flex flex-wrap"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.03
                }
              }
            }}
          >
            {words.map((word, index) => (
              <motion.span
                key={index}
                className="mr-1"
                variants={wordVariants}
              >
                {word}
              </motion.span>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default MoreAboutMeText;