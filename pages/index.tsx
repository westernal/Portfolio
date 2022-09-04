import About from "../components/about";
import Skills from "../components/skills";
import Jobs from "../components/recentJobs";
import Socials from "../components/socials";
import Blog from "../components/blog";
import Projects from "../components/projects";

const Home = () => {
  return (
    <div className="home">
      <About />
      <Projects />
      <Skills />
      <Jobs />
      <Blog />
      <Socials />
    </div>
  );
};

export default Home;
