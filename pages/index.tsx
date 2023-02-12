import About from "../components/about";
import Skills from "../components/skills";
import Jobs from "../components/recentJobs";
import Socials from "../components/Socials/socials";
import Blog from "../components/blog";
import Projects from "../components/Projects/projects";
import { useEffect } from "react";
import { Blog as BlogType } from "../Interfaces/Interfaces";

const Home = ({ posts }: { posts: BlogType[] }) => {
  function reveal() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        } else {
          entry.target.classList.remove("active");
        }
      });
    });

    var hiddenElements = document.querySelectorAll(".reveal");

    hiddenElements.forEach((element) => {
      observer.observe(element);
    });
  }

  useEffect(() => {
    reveal();
  }, []);
  return (
    <main className="home">
      <About />
      <Projects />
      <Skills />
      <Jobs />
      <Blog posts={posts} />
      <Socials />
    </main>
  );
};

export async function getServerSideProps() {
  const options = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };

  const res = await fetch(
    "https://dev.to/api/articles/latest?username=westernal&per_page=3",
    options
  );
  const posts = await res.json();

  return { props: { posts } };
}

export default Home;
