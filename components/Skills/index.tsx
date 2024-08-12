import Image from "next/image";
import { skills } from "../../data/skills";
import Heading from "../shared/Heading";

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <Heading text="Skills" />
      <div className="skills-list ">
        {skills.map((item, i) => (
          <a href={item.link} className="skill-item" key={i}>
            <Image
              width={35}
              height={35}
              src={item.src}
              alt={`${item.name} logo`}
            />
            <p>{item.name}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Skills;
