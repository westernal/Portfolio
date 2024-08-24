import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const loaderVariants = {
  visible: {
    transition: {
      staggerChildren: 1, // Controls the delay between each word
    },
  },
  hidden: {
    transition: {
      staggerChildren: 0.3,
      when: "afterChildren",
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }, // Exit animation
};

const languages = [
  "Hello",
  "Hola",
  "سلام",
  "Bonjour",
  "Ciao",
  "Hallo",
  "안녕하세요",
  "こんにちは",
];

export default function Loader() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < languages.length - 1) {
      const timer = setTimeout(() => setCurrentIndex(currentIndex + 1), 300); // 1 second delay
      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

  return (
    <motion.div
      className="loader-container"
      variants={loaderVariants}
      initial="visible"
      animate="hidden"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "#111",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AnimatePresence>
        <motion.div
          key={languages[currentIndex]} // Use key to trigger exit and enter animation
          variants={textVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          style={{
            fontSize: "2.5rem",
            color: "white",
            position: "absolute",
          }}
        >
          {languages[currentIndex]}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
