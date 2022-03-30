import SocialIcons from "./socialIcons";

const About = () => {
  return (
    <div className="about" id="about">
      <h1>Ali Navidi</h1>
      <p>Frontend Developer</p>
      <SocialIcons />
      <a href="/My Resume.pdf" download={true}>
        <div className="btn from-top resume">Resume</div>
      </a>
    </div>
  );
};

export default About;
