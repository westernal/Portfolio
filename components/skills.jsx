import { useState } from "react";

const Skills = () => {
  const [skill, Setskill] = useState([
    "TypeScript",
    "JavaScript",
    "HTML",
    "CSS",
    "ReactJs",
    "NextJs",
    "Bootstrap",
    "NodeJs",
    "Express.js",
    "MongoDB",
    "Graphql",
    "C",
    "Java",
    "Python",
    "Git",
    "SEO",
  ]);

  return (
    <div className="skills reveal" id="skills">
      <h2>Skills</h2>
      <div className="skills-list">
        {skill.map((item, i) => (
          <p key={i}>{item}</p>
        ))}
      </div>
      <a href="#jobs" id="btn">
        <svg
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 490 490"
        >
          <g>
            <polygon
              points="428.75,0 428.75,79.89 490,19.803 490,20.261 490,250.051 490,250.053 489.014,251.016 244.996,490 0.986,251.016 
		0,250.053 0,250.051 0,20.261 0,19.803 61.25,79.892 61.25,0.003 244.995,179.906 	"
            />
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
          </g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
        </svg>
      </a>
    </div>
  );
};

export default Skills;
