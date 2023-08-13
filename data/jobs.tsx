import { Job } from "../interfaces/Interfaces";

export const jobs: Job[] = [
  {
    id: 0,
    title: "Frontend Developer",
    company: "Oben Origin co.",
    location: "Tehran, Iran",
    duration: { from: "01/2020", to: "11/2021" },
    companyLogo: { url: "/Images/logo.svg", width: 55, height: 55 },
  },
  {
    id: 1,
    title: "Frontend Engineer",
    company: "Restarone Solutions Inc.",
    location: "Toronto, Canada",
    duration: { from: "09/2022", to: "12/2022" },
    companyLogo: { url: "/Images/Sticker-1-05 1.png", width: 55, height: 75 },
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "Silver Brain AI AG",
    location: "Zug, Switzerland",
    duration: { from: "07/2023", to: "Present" },
    companyLogo: { url: "/Images/SB-silver.svg", width: 55, height: 75 },
  },
];
