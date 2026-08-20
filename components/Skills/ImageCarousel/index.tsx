import Image from "next/image";
import { skills } from "../../../data/skills";

/**
 * The marquee is a CSS animation on a plain server component.
 *
 * It used to be a framer-motion `animate` prop, which pulled the whole library
 * into the initial payload for one linear translate — 70KB of JavaScript and a
 * pair of long tasks during hydration, for something the compositor can do on
 * its own thread.
 */
export default function ImageCarousel() {
  /**
   * Four copies, animated to -50%: the halfway point is two identical copies
   * in, so the loop restarts on a pixel-identical frame. Spacing lives in the
   * item's margin rather than a flex `gap` — a gap would make the two halves
   * differ by one gap width and put a visible stutter in the seam.
   */
  const loopingSkills = [...skills, ...skills, ...skills, ...skills];

  return (
    <div className="skills-marquee">
      <div className="skills-track">
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
      </div>
    </div>
  );
}
