import Image from "next/image";
import HeadTags from "./headTags";

const About = () => {
  return (
    <section className="about" id="about">
      <HeadTags />
      <h1>Ali Navidi</h1>
      <div className="moon">
        <Image
          src={"/Images/32dc9e08-9167-4792-b7a1-119df97022e4.svg"}
          alt="moon"
          width={150}
          height={150}
        />
      </div>
      <Image
        src="/Images/readme-typing-svg_herokuapp_default.svg"
        alt="Typing SVG"
        width={400}
        height={50}
      />

      <a href="/Ali Navidi Resume.pdf" download={true}>
        <div className="btn from-top resume">Resume</div>
      </a>
    </section>
  );
};

export default About;
