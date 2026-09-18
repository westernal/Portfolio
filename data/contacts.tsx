import type { Social } from "../interfaces/Interfaces";
import { profile } from "./profile";

export const socialMedias: Social[] = [
  {
    name: "Email",
    url: `mailto:${profile.email}`,
    imageUrl: "/Images/email.svg",
    event: "social_email",
  },
  {
    name: "GitHub",
    url: profile.links.github,
    imageUrl: "/Images/github.svg",
    event: "social_github",
  },
  {
    name: "LinkedIn",
    url: profile.links.linkedin,
    imageUrl: "/Images/linkedin.svg",
    event: "social_linkedin",
  },
  {
    name: "Stack Overflow",
    url: profile.links.stackoverflow,
    imageUrl: "/Images/stackoverflow.svg",
    event: "social_stackoverflow",
  },
];
