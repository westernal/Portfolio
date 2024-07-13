import About from "../components/About";
import Blogs from "../components/Blogs";
import Socials from "../components/Contact";
import HomePage from "../components/Home/home";
import Jobs from "../components/Jobs";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

const Home = () => {
  return (
    <>
      <HomePage />
      <About />
      <Skills />
      <Jobs />
      <Projects />
      <Blogs />
      <Socials />
    </>
  );
};

export default Home;
