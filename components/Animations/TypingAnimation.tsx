import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TypingAnimation = ({ text }: { text: string }) => {
  const [displayedText, setDisplayedText] = useState<string>("");

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(index));
      index++;
      if (index === text.length) clearInterval(timer);
    }, 25); // Adjusted to make it faster

    return () => clearInterval(timer);
  }, [text]);

  return (
    <motion.p
      animate={{ opacity: [0, 1], y: [20, 0] }}
      transition={{ duration: 0.1 }} // Faster transition
    >
      {displayedText}
    </motion.p>
  );
};

export default TypingAnimation;
