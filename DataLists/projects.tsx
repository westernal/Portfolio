import { Project } from "../Interfaces/Interfaces";

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
      "Westernal is a social media based on songs, you can share posts that includes part of a song, the whole song or music videos with your followers and let the music talk for you! It's a website and PWA built with Next.js for frontend, Node.js and Express.js for backend, MongoDB for database and Cypress for testing.",
    image: {
      website: "/Images/westernal-web.png",
    },
    link: {
      website: "https://www.westernal.net/",
      documentation: "https://github.com/westernal/Westernal-Frontend#readme",
      gitHub: "https://github.com/westernal/Westernal-Frontend",
    },
    color: "#9d38fc",
  },
  {
    id: 1,
    title: "Cinema",
    myRole: {
      frontEnd: true,
      backEnd: false,
      design: true,
    },
    description:
      "Cinema is a platform for watching and downloading movies. A user can login and buy subscriptions to watch latest movies and series and learn more about cinema, actors/actresses and more. It's a website and PWA built with Next.js and TypeScript.",
    image: {
      website: "/Images/cinema-web.png",
    },
    link: {
      gitHub: "https://github.com/westernal/Cinema",
    },
    color: "#1e2130",
  },
  {
    id: 2,
    title: "Sartel",
    myRole: {
      frontEnd: true,
      backEnd: false,
      design: true,
    },
    description:
      "Sartel is a website and PWA selling mobile phones and accessories. built with Next.js and TypeScript.",
    image: {
      website: "/Images/sartel-web.png",
    },
    link: {
      website: "https://sari-sartel-westernal.vercel.app/",
      gitHub: "https://github.com/westernal/sari-sartel",
    },
    color: "#212121",
  },
  {
    id: 3,
    title: "Dashboard",
    myRole: {
      frontEnd: true,
      backEnd: false,
      design: true,
    },
    description:
      "An admin dashboard website and PWA built with Next.js to manage website data and content.",
    image: {
      website: "/Images/dashboard-web.png",
    },
    link: {
      website: "https://dashoard.vercel.app/",
      gitHub: "https://github.com/westernal/Dashboard",
    },
    color: "linear-gradient(45deg, #365eff, #fc6ebc)",
  },
];
