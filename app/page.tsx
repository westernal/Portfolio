import About from "../components/About/index";
import Blogs from "../components/Blogs/index";
import Socials from "../components/Contact/index";
import FooterInfo from "../components/FooterInfo/index";
import HomePage from "../components/Home/home";
import Jobs from "../components/Jobs/index";
import Skills from "../components/Skills/index";

const Home = () => {
  return (
    <>
      <HomePage />
      <Skills />
      <About />
      <Jobs />

      <Blogs />
      <Socials />
      <FooterInfo />
    </>
  );
};

export default Home;
