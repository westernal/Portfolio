import SocialIcons from "./socialIcons";

const About = () => {
  return (
    <div className="about" id="about">
      <h1>Ali Navidi</h1>
      <h2>Frontend Developer</h2>
      <p>
        Hi, I'm a 21-year-old Frontend developer but I have some backend
        knowledge and I'm currently studying my last year of software
        engineering.
      </p>
      <a href="/My Resume.pdf" download={true}>
        <div className="btn from-top resume">Resume</div>
      </a>
    </div>
  );
};

export default About;
