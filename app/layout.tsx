// app/layout.tsx
import { montserrat, orbitron } from "../fonts/fonts";
import "../styles/style.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "../components/Layout/layout";
import type { Metadata, Viewport } from "next";
import { profile } from "../data/profile";
import { jobs } from "../data/jobs";
import { skillGroups } from "../data/skills";

const title = `${profile.name} | ${profile.role}`;
const description = `${profile.name} — ${profile.role} in ${profile.location}. ${profile.headline} ${profile.yearsExperience}+ years with React, Next.js and TypeScript.`;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#101010" },
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title,
  description,
  keywords: [
    "Ali Navidi",
    "frontend developer",
    "frontend engineer",
    "frontend team lead",
    "React developer",
    "Next.js developer",
    "TypeScript",
    "remote frontend developer",
  ],
  authors: [{ name: profile.name, url: profile.siteUrl }],
  creator: profile.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    url: profile.siteUrl,
    siteName: profile.name,
    locale: "en_US",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  icons: {
    icon: [
      { url: "/Images/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/Images/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      {
        url: "/Images/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  manifest: "/manifest.json",
  verification: {
    google: "YLuaosUg6yxkQ9Gx8jXCn9wS54jjWRv6fMq_Y0Uln8c",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: profile.name,
  },
  formatDetection: {
    telephone: false,
  },
  other: {
    "msapplication-TileColor": "#101010",
  },
};

/**
 * Person schema. This is what lets Google show a proper result — role, employer,
 * profile links — when someone searches his name after reading a CV.
 */
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: profile.siteUrl,
  jobTitle: profile.role,
  email: `mailto:${profile.email}`,
  description,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Tehran",
    addressCountry: "IR",
  },
  worksFor: {
    "@type": "Organization",
    name: jobs[0]?.company,
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Noshirvani University of Technology, Babol",
  },
  knowsAbout: skillGroups.flatMap((group) => group.items),
  sameAs: [
    profile.links.github,
    profile.links.linkedin,
    profile.links.stackoverflow,
    profile.links.devto,
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // The inline script below sets `class="light"` before React hydrates, which
    // is by definition a mismatch with the server HTML — suppress it here only.
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Applies the saved (or system) theme to <html> before first paint, so a
            light-mode visitor never gets a flash of the dark palette. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem("theme");var light=s?s==="light":window.matchMedia("(prefers-color-scheme: light)").matches;if(light)document.documentElement.classList.add("light")}catch(e){}})();`,
          }}
        />
      </head>
      <body
        className={`${montserrat.variable} ${orbitron.variable} body`}
        id="root-layout"
      >
        <script
          type="application/ld+json"
          // Built from local data only — no user input reaches this string.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <ToastContainer
          position="bottom-right"
          autoClose={2000}
          style={{ marginBottom: "50px" }}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <Analytics />
        <SpeedInsights />
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
