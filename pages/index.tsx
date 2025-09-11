import About from "../components/About";
import Blogs from "../components/Blogs";
import Socials from "../components/Contact";
import FooterInfo from "../components/FooterInfo";
import HomePage from "../components/Home/home";
import Jobs from "../components/Jobs";
import Skills from "../components/Skills";

const Home = () => {
  return (
    <>
      <HomePage />
      <Skills />
      <About />
      <Jobs />
      {/* <Projects /> */}
      <Blogs />
      <Socials />
      <FooterInfo />
    </>
  );
};

export default Home;
