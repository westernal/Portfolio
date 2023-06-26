import { useEffect } from "react";
import Layout from "../components/Layout/layout";
import { montserrat, orbitron } from "../fonts/fonts";
import "../styles/style.css";
import type { AppProps } from "next/app";
import startAnimation from "../functions/startAnimation";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    startAnimation();
  }, [router]);
  return (
    <div className={`${montserrat.variable} ${orbitron.variable}`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;
