import { montserrat, orbitron } from "../fonts/fonts";
import "../styles/style.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={`${montserrat.variable} ${orbitron.variable}`}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
