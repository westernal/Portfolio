import type { Social } from "../interfaces/Interfaces";
import { profile } from "./profile";

export const socialMedias: Social[] = [
  {
    name: "Email",
    url: `mailto:${profile.email}`,
    imageUrl: "/Images/email.svg",
  },
  {
    name: "GitHub",
    url: profile.links.github,
    imageUrl: "/Images/github.svg",
  },
  {
    name: "LinkedIn",
    url: profile.links.linkedin,
    imageUrl: "/Images/linkedin.svg",
  },
  {
    name: "Stack Overflow",
    url: profile.links.stackoverflow,
    imageUrl: "/Images/stackoverflow.svg",
  },
];
