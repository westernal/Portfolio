import { Project } from "../Interfaces/Interfaces";

export const projects: Project[] = [
  {
    id: 0,
    title: "Westernal",
    myRole: {
      frontEnd: true,
      backEnd: true,
      designer: true,
    },
    description:
      "Westernal is a social media based on songs, you can share posts that includes part of a song, the whole song or music videos with your followers and let the music talk for you! I made it using Next.js for frontend, Node.js and Express.js for backend, MongoDB for database and Cypress for testing.",
    image: {
      mobile: "/Images/mobile.png",
    },
    link: {
      website: "https://www.westernal.net/",
      documentation:
        "https://dev.to/westernal/introducing-westernal-a-social-media-based-on-songs-1pa9",
      gitHub: "https://github.com/westernal/social-media-frontend",
    },
    color: "#9d38fc",
  },
  {
    id: 1,
    title: "Cinema",
    myRole: {
      frontEnd: true,
      backEnd: false,
      designer: true,
    },
    description:
      "Cinema is a platform for watching and downloading movies. I made it using Next.js.",
    image: {
      mobile:
        "/Images/5279C0FE-F244-4B54-B9C6-BB18F7D07078_iphone13blue_portrait.png",
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
      designer: true,
    },
    description:
      "Sartel is a website selling mobile phones and accessories. I made it using Next.js and TypeScript.",
    image: {
      mobile:
        "/Images/DB43DA89_2874_487D_A50A_CBE7E281960F_iphone13starlight_portrait.png",
    },
    link: {
      website: "https://sari-sartel.com/",
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
      designer: true,
    },
    description: "An admin dashboard made by Next.js.",
    image: {
      mobile:
        "/Images/A05D135D-6A5D-4210-AFB3-C35D4F73284F_iphone13red_portrait.png",
    },
    link: {
      website: "https://dashoard.vercel.app/",
      gitHub: "https://github.com/westernal/Dashboard",
    },
    color: "linear-gradient(45deg, #365eff, #fc6ebc)",
  },
];
