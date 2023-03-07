import Image from "next/image";
import HeadTags from "./headTags";
import NavBar from "./Layout/navbar";
import ShootingStars from "./Layout/Effects/shootingStars";

const About = () => {
  return (
    <section className="about center" id="about">
      <HeadTags />
      <NavBar />
      <div className="moon">
        <Image
          src={"/Images/32dc9e08-9167-4792-b7a1-119df97022e4.svg"}
          alt="moon"
          width={150}
          height={150}
        />
      </div>
      <ShootingStars />
      <section className="about-card ">
        <div className="about-me flex">
          <div className="about-img">
            <Image
              src={"/Images/unnamed.jpg"}
              width={60}
              height={60}
              alt="my picture"
            />
          </div>
          <div className="about-title">
            <h1 id="name"> Ali Navidi</h1>
            <p className="titles">
              Frontend Developer - Studied Software Engineering at{" "}
              <a href="https://nit.ac.ir/" id="university">
                BNUT
              </a>
            </p>
          </div>
        </div>
        <div className="about-info">
          <p>
            A 22 years-old frontend developer and a recently computer {" ("}
            software{")"} engineering graduate, coding since 2018 and over 2
            years of experience in developing websites, trying my best to write
            clean code, higher up the performance and improve the user
            experience, always seeking to improve my abilities and learn new
            things.
          </p>

          <div className="flex about-btns">
            <a href="/Ali Navidi Resume.pdf" download={true} id="resume">
              <button className="btn from-top resume">Resume</button>
            </a>
            <a href="#socials">
              <button className="btn from-top resume">Let&apos;s Talk</button>
            </a>
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;
