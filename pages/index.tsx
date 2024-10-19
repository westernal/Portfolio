import dynamic from "next/dynamic";

const HomePage = dynamic(() => import("../components/Home/home"));
const About = dynamic(() => import("../components/About"));
const Blogs = dynamic(() => import("../components/Blogs"));
const Socials = dynamic(() => import("../components/Contact"));
const FooterInfo = dynamic(() => import("../components/FooterInfo"));
const Jobs = dynamic(() => import("../components/Jobs"));
const Projects = dynamic(() => import("../components/Projects"));
const Skills = dynamic(() => import("../components/Skills"));

const Home = () => {
  return (
    <>
      <HomePage />
      <Skills />
      <About />
      <Jobs />
      <Projects />
      <Blogs />
      <Socials />
      <FooterInfo />
    </>
  );
};

export default Home;
