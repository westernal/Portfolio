import type { Skill, SkillGroup } from "../interfaces/Interfaces";

/**
 * The marquee shows logos; this shows the actual stack. Grouped so a reader
 * can find what they came for instead of scanning a wall of nouns.
 */
export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    items: ["TypeScript", "JavaScript", "HTML5", "CSS3"],
  },
  {
    title: "Frameworks & UI",
    items: [
      "React",
      "Next.js (App Router)",
      "Redux Toolkit",
      "Tailwind CSS",
      "SASS",
      "Styled Components",
    ],
  },
  {
    title: "Data & state",
    items: ["TanStack Query", "SWR", "GraphQL / Apollo", "REST", "WebSocket"],
  },
  {
    title: "Quality & tooling",
    items: ["Jest", "Cypress", "ESLint", "Webpack", "Git", "CI/CD", "Sentry"],
  },
  {
    title: "Beyond the browser",
    items: ["Node.js", "Express", "MongoDB", "Docker", "PWA", "i18n"],
  },
  {
    title: "How I work",
    items: [
      "Code review",
      "Mentoring",
      "Architecture",
      "Agile",
      "Figma hand-off",
    ],
  },
];

export const skills: Skill[] = [
  {
    name: "JavaScript",
    src: "/Images/javascript.svg",
    link: "https://www.javascript.com/",
  },
  {
    name: "HTML",
    src: "/Images/html5.svg",
    link: "https://html.com/",
  },
  {
    name: "CSS",
    src: "/Images/css3.svg",
    link: "https://en.wikipedia.org/wiki/CSS",
  },
  {
    name: "React.js",
    src: "/Images/react.svg",
    link: "https://reactjs.org/",
  },
  {
    name: "Next.js",
    src: "/Images/NextJS-Dark.svg",
    link: "https://nextjs.org/",
  },
  {
    name: "TypeScript",
    src: "/Images/typescript.svg",
    link: "https://www.typescriptlang.org/",
  },
  {
    name: "Cypress",
    src: "/Images/cypress.svg",
    link: "https://www.cypress.io/",
  },
  {
    name: "Jest",
    src: "/Images/jest.svg",
    link: "https://jestjs.io/",
  },
  {
    name: "Bootstrap",
    src: "/Images/bootstrap.svg",
    link: "https://getbootstrap.com/",
  },
  {
    name: "Tailwind",
    src: "/Images/tailwind-svgrepo-com.svg",
    link: "https://tailwindcss.com/",
  },
  {
    name: "Redux",
    src: "/Images/Redux.svg",
    link: "https://redux-toolkit.js.org/",
  },
];
