import About from "../components/About/about";
import Skills from "../components/Skills/skills";
import Jobs from "../components/Jobs/recentJobs";
import Socials from "../components/Socials/socials";
import Blog from "../components/Blog/blog";
import Projects from "../components/Projects/projects";
import HeadTags from "../utils/headTags";
import Header from "../components/Layout/Header/header";
import Image from "next/image";
import ShootingStars from "../components/Layout/Effects/shootingStars";

const Home = () => {
  return (
    <>
      <Header />
      <main className="home">
        <section className="background-animations">
          <div className="moon">
            <Image
              src={"/Images/32dc9e08-9167-4792-b7a1-119df97022e4.svg"}
              alt="moon"
              width={150}
              height={150}
            />
          </div>
        </section>
        <ShootingStars />
        <HeadTags />
        <About />
        <Projects />
        <Skills />
        <Jobs />
        <Blog />
        <Socials />
      </main>
    </>
  );
};

export default Home;
