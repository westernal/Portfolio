import Image from "next/image";
import { skills, familiarSkills } from "../../DataLists/skills";

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="skills-list reveal left-reveal">
        {skills.map((item, i) => (
          <a href={item.link} className="skill-item" key={i}>
            <Image width={35} height={35} src={item.src} alt="skill" />
            <p>{item.name}</p>
          </a>
        ))}
      </div>
      <h3>Also familiar with:</h3>
      <div className="skills-list reveal right-reveal">
        {familiarSkills.map((item, i) => (
          <a href={item.link} className="skill-item" key={i}>
            <Image width={35} height={35} src={item.src} alt="skill" />
            <p> {item.name}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Skills;