import Image from "next/image";
import HeadTags from "./headTags";

const About = () => {
  return (
    <div className="about" id="about">
      <HeadTags />
      <h1>Ali Navidi</h1>

      <Image
        src="/Images/readme-typing-svg_herokuapp_default.svg"
        alt="Typing SVG"
        width={435}
        height={50}
      />

      <a href="/My Resume.pdf" download={true}>
        <div className="btn from-top resume">Resume</div>
      </a>
    </div>
  );
};

export default About;
