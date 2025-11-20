import { default as dynamicImport } from "next/dynamic";
import About from "../components/About/index";
import FooterInfo from "../components/FooterInfo/index";
import HomePage from "../components/Home/home";
import Skills from "../components/Skills/index";

const BlogsLazy = dynamicImport(() => import("../components/Blogs/index"));
const JobsLazy = dynamicImport(() => import("../components/Jobs/index"));
const SocialsLazy = dynamicImport(() => import("../components/Contact/index"));

export const dynamic = "force-static";

const Home = () => {
  return (
    <>
      <HomePage />
      <Skills />
      <About />
      <JobsLazy />
      <BlogsLazy />
      <SocialsLazy />
      <FooterInfo />
    </>
  );
};

export default Home;
