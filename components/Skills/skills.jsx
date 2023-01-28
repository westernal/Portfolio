import Image from "next/image";
import { skills, familiarSkills } from "./skillsList";

const Skills = () => {
  return (
    <section className="skills reveal" id="skills">
      <h2>Skills</h2>
      <div className="sun">
        <Image
          src="/Images/sun-shining-in-the-sky-by-Vexels.svg"
          alt="sun"
          id="sun"
          width={150}
          height={150}
        />
      </div>
      <div className="skills-list">
        {skills.map((item, i) => (
          <a href={item.link} className="skill-item" key={i}>
            <Image width={35} height={35} src={item.src} alt="skill" />
            <p>{item.name}</p>
          </a>
        ))}
      </div>
      <h3>Also familiar with:</h3>
      <div className="skills-list">
        {familiarSkills.map((item, i) => (
          <a href={item.link} className="skill-item" key={i}>
            <Image width={35} height={35} src={item.src} alt="skill" />
            <p>{item.name}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Skills;
