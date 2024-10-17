import Layout from "../components/Layout/layout";
import { montserrat, orbitron } from "../fonts/fonts";
import "../styles/style.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={`${montserrat.variable} ${orbitron.variable}`}>
      <Layout>
        <>
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
          <Component {...pageProps} />
        </>
      </Layout>
    </div>
  );
}

export default MyApp;
