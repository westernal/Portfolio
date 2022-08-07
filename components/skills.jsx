import Image from "next/image";
import { useState } from "react";

const Skills = () => {
  const [skill, Setskill] = useState([
    {
      name: "TypeScript",
      src: "/Images/typescript.svg",
    },
    {
      name: "JavaScript",
      src: "/Images/javascript.svg",
    },
    {
      name: "HTML",
      src: "/Images/html5.svg",
    },
    {
      name: "CSS",
      src: "/Images/css3.svg",
    },
    {
      name: "React.js",
      src: "/Images/pngwing.com.png",
    },
    {
      name: "Next.js",
      src: "/Images/311px-Nextjs-logo.svg.png",
    },
    {
      name: "Cypress",
      src: "/Images/download-icon-cypress-1324440144114984250_512.png",
    },
    {
      name: "Remix",
      src: "/Images/remix-seeklogo.com.svg",
    },
    {
      name: "Svelte",
      src: "/Images/1200px-Svelte_Logo.svg.png",
    },
    {
      name: "Tailwind",
      src: "/Images/tailwind-svgrepo-com.svg",
    },
    {
      name: "Bootstrap",
      src: "/Images/bootstrap.svg",
    },
    {
      name: "Node.js",
      src: "/Images/node-js.svg",
    },
    {
      name: "Express.js",
      src: "/Images/express.svg",
    },
    {
      name: "MongoDB",
      src: "/Images/mongodb.svg",
    },
    {
      name: "Graphql",
      src: "/Images/graphql.svg",
    },
    {
      name: "C",
      src: "/Images/c.svg",
    },
    {
      name: "Java",
      src: "/Images/java.svg",
    },
    {
      name: "Python",
      src: "/Images/python.svg",
    },
    {
      name: "Git",
      src: "/Images/git.svg",
    },
    {
      name: "SEO",
      src: "/Images/seo.svg",
    },
  ]);

  return (
    <div className="skills" id="skills">
      <h2>Skills</h2>
      <div className="skills-list">
        {skill.map((item, i) => (
          <div className="skill-item" key={i}>
            <Image width={30} height={30} src={item.src} alt="skill" />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
