import About from "../components/about";
import Skills from "../components/skills";
import Jobs from "../components/recentJobs";
import Socials from "../components/Socials/socials";
import Blog from "../components/blog";
import Projects from "../components/Projects/projects";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    function reveal() {
      var reveals = document.querySelectorAll(".reveal");

      for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 50;

        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }
    }

    window.addEventListener("scroll", reveal);
  }, []);
  return (
    <main className="home">
      <About />
      <Projects />
      <Skills />
      <Jobs />
      <Blog />
      <Socials />
    </main>
  );
};

export default Home;
