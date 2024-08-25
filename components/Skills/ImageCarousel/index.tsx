import { motion, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";
import Image from "next/image";
import { skills } from "../../../data/skills";

export default function ImageCarousel() {
  const controls = useAnimation();

  // Duplicate the skills array to create a smooth loop
  const loopingSkills = [...skills, ...skills, ...skills, ...skills];

  useEffect(() => {
    // Start the animation when the component mounts
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        duration: 10, // Adjust duration to control speed
        repeat: Infinity,
        ease: "linear",
      },
    });
  }, [controls]);

  return (
    <div
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
        animate={controls}
        onHoverStart={() => controls.stop()} // Stop the animation on hover
        onHoverEnd={() =>
          controls.start({
            x: ["0%", "-50%"], // Restart animation when hover ends
            transition: {
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            },
          })
        }
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
