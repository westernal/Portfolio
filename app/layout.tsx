// app/layout.tsx
import { montserrat, orbitron } from "../fonts/fonts";
import "../styles/style.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "../components/Layout/layout";
import type { Metadata, Viewport } from "next";

// Separate viewport configuration
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#161616",
};

// Metadata configuration
export const metadata: Metadata = {
  metadataBase: new URL("https://www.alinavidi.dev"),
  title: "Ali Navidi | Frontend Developer",
  description:
    "Meet Ali Navidi, a skilled frontend developer and frontend team lead specializing in React.js and Next.js.",
  keywords: ["developer", "frontend", "reactjs", "nextjs"],
  authors: [{ name: "Ali Navidi" }],
  openGraph: {
    title: "Ali Navidi | Frontend Developer",
    description:
      "Meet Ali Navidi, a skilled frontend developer and frontend team lead specializing in React.js and Next.js.",
    url: "https://www.alinavidi.dev",
    siteName: "Ali Navidi",
    images: [
      {
        url: "https://i.ibb.co/YjfxyL1/unnamed2.jpg",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ali Navidi | Frontend Developer",
    description:
      "Meet Ali Navidi, a skilled frontend developer and frontend team lead specializing in React.js and Next.js.",
    images: ["https://i.ibb.co/YjfxyL1/unnamed2.jpg"],
  },
  icons: {
    icon: [
      { url: "/images/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/images/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      {
        url: "/images/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/images/safari-pinned-tab.svg",
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
    title: "Ali Navidi",
  },
  formatDetection: {
    telephone: false,
  },
  other: {
    "msapplication-TileColor": "#da532c",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${orbitron.variable} body`}
        id="root-layout"
      >
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
