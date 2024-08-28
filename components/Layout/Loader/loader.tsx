import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const loaderVariants = {
  visible: {
    transition: {
      staggerChildren: 1,
    },
  },
  hidden: {
    y: "-100%", // Move the loader upwards off the screen
    transition: {
      duration: 0.8,
      ease: "easeInOut",
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
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

const languages = [
  "Hello",
  "Hola",
  "سلام",
  "Bonjour",
  "Ciao",
  "Hallo",
  "안녕하세요",
];

export default function Loader() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (currentIndex < languages.length - 1) {
      const timer = setTimeout(() => setCurrentIndex(currentIndex + 1), 300);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => setIsFinished(true), 500);
      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

  return (
    <motion.div
      className="loader-container"
      variants={loaderVariants}
      initial="visible"
      animate={isFinished ? "hidden" : "visible"}
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
          key={languages[currentIndex]}
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
