import About from "../components/About/about";
import Skills from "../components/Skills/skills";
import Jobs from "../components/Jobs/recentJobs";
import Socials from "../components/Socials/socials";
import Blog from "../components/Blog/blog";
import Projects from "../components/Projects/projects";
import { Blog as BlogType } from "../Interfaces/Interfaces";
import HeadTags from "../components/Utils/headTags";
import NavBar from "../components/Layout/navbar";
import Image from "next/image";
import ShootingStars from "../components/Layout/Effects/shootingStars";

const Home = ({ posts }: { posts: BlogType[] }) => {
  return (
    <>
      <NavBar />
      <main className="home">
        <div className="moon">
          <Image
            src={"/Images/32dc9e08-9167-4792-b7a1-119df97022e4.svg"}
            alt="moon"
            width={150}
            height={150}
          />
        </div>
        <ShootingStars />
        <HeadTags />
        <About />
        <Projects />
        <Skills />
        <Jobs />
        <Blog posts={posts} />
        <Socials />
      </main>
    </>
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
