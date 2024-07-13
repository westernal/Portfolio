import { Orbitron, Montserrat } from "next/font/google";

export const montserrat = Montserrat({
  variable: "--font-main",
  weight: ["400", "700"],
  display: "swap",
  subsets: ["latin"],
});

export const orbitron = Orbitron({
  variable: "--font-logo",
  weight: "400",
  display: "swap",
  subsets: ["latin"],
});
