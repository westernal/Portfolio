/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

const TypingAnimation = ({ text }: { text: string }) => {
  const [displayedText, setDisplayedText] = useState("");

  const animateText = useCallback(() => {
    let index = 0;
    return () => {
      setDisplayedText(text.slice(0, index + 1));
      index++;
    };
  }, [text]);

  useEffect(() => {
    setDisplayedText("");
    const animate = animateText();
    const intervalId = setInterval(() => {
      animate();
      if (displayedText.length === text.length) {
        clearInterval(intervalId);
      }
    }, 25);

    return () => clearInterval(intervalId);
  }, [text, animateText]);

  return (
    <motion.p
      animate={{ opacity: [0, 1], y: [20, 0] }}
      transition={{ duration: 0.3 }}
    >
      {displayedText}
    </motion.p>
  );
};

export default TypingAnimation;
