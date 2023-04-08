import { Job } from "../interfaces/Interfaces";

export const jobs: Job[] = [
  {
    id: 0,
    title: "Frontend Developer",
    company: "Oben Origin co.",
    location: "Tehran, Iran",
    duration: { from: "01/2020", to: "11/2021" },
    companyLogo: { url: "/Images/logo.svg", width: 100, height: 100 },
  },
  {
    id: 1,
    title: "Frontend Engineer",
    company: "Restarone Solutions Inc.",
    location: "Toronto, Canada",
    duration: { from: "09/2022", to: "12/2022" },
    companyLogo: { url: "/Images/Sticker-1-05 1.png", width: 55, height: 75 },
  },
];
