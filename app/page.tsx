import { default as dynamicImport } from "next/dynamic";
import About from "../components/About/index";
import FooterInfo from "../components/FooterInfo/index";
import HomePage from "../components/Home/home";
import Skills from "../components/Skills/index";
import Jobs from "../components/Jobs/index";

const BlogsLazy = dynamicImport(() => import("../components/Blogs/index"));
const SocialsLazy = dynamicImport(() => import("../components/Contact/index"));

export const dynamic = "force-static";

const Home = () => {
  return (
    <>
      <HomePage />
      <Skills />
      {/* Experience carries the "what has he built" weight, so it comes first
          and ships in the initial payload rather than lazily. */}
      <Jobs />
      <About />
      <BlogsLazy />
      <SocialsLazy />
      <FooterInfo />
    </>
  );
};

export default Home;
