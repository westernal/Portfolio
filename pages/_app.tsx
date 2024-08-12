import Layout from "../components/Layout/layout";
import { montserrat, orbitron } from "../fonts/fonts";
import "../styles/style.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={`${montserrat.variable} ${orbitron.variable}`}>
      <Layout>
        <>
          <Analytics />
          <Component {...pageProps} />
        </>
      </Layout>
    </div>
  );
}

export default MyApp;
