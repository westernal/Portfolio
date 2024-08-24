import { motion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { skills } from "../../../data/skills";

export default function ImageCarousel() {
  const carouselRef = useRef<any>();

  // Duplicate the skills array to create a smooth loop
  const loopingSkills = [...skills, ...skills];

  return (
    <div
      ref={carouselRef}
      style={{
        overflow: "hidden",
        width: "100%",
        display: "flex",
      }}
    >
      <motion.div
        style={{
          display: "flex",
          whiteSpace: "nowrap",
        }}
        animate={{
          x: ["0%", "-50%"], // Move from 0% to -50% of the total width
        }}
        transition={{
          duration: 5, // Adjust duration to control speed
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {loopingSkills.map((item, i) => (
          <a
            href={item.link}
            className="skill-item"
            key={i}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              width={35}
              height={35}
              src={item.src}
              alt={`${item.name} logo`}
            />
            <p>{item.name}</p>
          </a>
        ))}
      </motion.div>
    </div>
  );
}
