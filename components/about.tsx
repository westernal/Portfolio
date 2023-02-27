import Image from "next/image";
import HeadTags from "./headTags";
import NavBar from "./Layout/navbar";

const About = () => {
  return (
    <section className="about center" id="about">
      <HeadTags />
      <NavBar />
      <h1 id="name">Hi, I&apos;m Ali Navidi</h1>
      <div className="moon">
        <Image
          src={"/Images/32dc9e08-9167-4792-b7a1-119df97022e4.svg"}
          alt="moon"
          width={150}
          height={150}
        />
      </div>
      {/* <Image
        src="/Images/readme-typing-svg_herokuapp_default.svg"
        alt="Typing SVG"
        width={350}
        height={50}
      /> */}

      <p>
        I&apos;m a 22 years old frontend developer and a recently computer
        {" ("}software{")"} engineering graduate, I&apos;ve been coding since
        2018 and I have 2 years of experience in developing websites, I love to
        learn more everyday and be a better human/developer.
      </p>

      <div className="flex">
        <a href="/Ali Navidi Resume.pdf" download={true} id="resume">
          <div className="btn from-top resume">Resume</div>
        </a>
        <a href="#socials">
          <div className="btn from-top resume">Let&apos;s Talk</div>
        </a>
      </div>
    </section>
  );
};

export default About;
