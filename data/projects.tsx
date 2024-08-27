import { Project } from "../interfaces/Interfaces";

export const projects: Project[] = [
  {
    id: 0,
    title: "Westernal",
    myRole: {
      frontEnd: true,
      backEnd: true,
      design: true,
    },
    description:
      "Westernal is a social media based on songs. You can share posts that include part of a song, the whole song or music video with your followers and let the music talk for you! It's a website and PWA built with Next.js and TypeScript for frontend, Node.js and Express.js for backend, MongoDB for database and Cypress for testing.",
    image: {
      website: "/Images/westernal-web.png",
    },
    link: "https://www.westernal.net/ali",
    color: "#9d38fc",
  },
  {
    id: 1,
    title: "ChemAssist",
    myRole: {
      frontEnd: true,
      backEnd: false,
      design: false,
    },
    description:
      "AI Enabled IUCLID6 Submissions, Save time and effort in IUCLID submissions with ChemAssist by utilizing the power of artificial intelligence to automate data entry, It's a platform, and it also has a website for buying subscriptions, both built using Next.js and TypeScript.",
    image: {
      website: "/Images/ChemAssist.png",
    },
    link: "https://www.chemassist.ai/",
    color: "linear-gradient(45deg, #365eff, #fc6ebc)",
  },
  {
    id: 2,
    title: "Cinema",
    myRole: {
      frontEnd: true,
      backEnd: false,
      design: true,
    },
    description:
      "Cinema is a platform for watching and downloading movies. A user can login and buy subscriptions to watch the latest movies and series and learn more about cinema, actors/actresses and more. It's a website and PWA built with Next.js and TypeScript.",
    image: {
      website: "/Images/cinema-web.png",
    },
    link: "https://github.com/westernal/Cinema",
    color: "#1e2130",
  },
];
