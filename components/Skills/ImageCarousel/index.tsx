"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { skills } from "../../../data/skills";

export default function ImageCarousel() {
  const reduceMotion = useReducedMotion();

  /**
   * Four copies, animated to -50%: the halfway point is two identical copies
   * in, so the loop restarts on a pixel-identical frame. Spacing lives in the
   * item's margin rather than a flex `gap` — a gap would make the two halves
   * differ by one gap width and put a visible stutter in the seam.
   */
  const loopingSkills = [...skills, ...skills, ...skills, ...skills];

  return (
    <div className="skills-marquee">
      <motion.div
        className="skills-track"
        animate={reduceMotion ? undefined : { x: ["0%", "-50%"] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        {loopingSkills.map((item, i) => (
          <a
            href={item.link}
            className="skill-item"
            key={`${item.name}-${i}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-hidden={i >= skills.length}
            tabIndex={i >= skills.length ? -1 : undefined}
          >
            <Image width={20} height={20} src={item.src} alt="" />
            <p>{item.name}</p>
          </a>
        ))}
      </motion.div>
    </div>
  );
}
