import SocialIcons from "./socialIcons";

const About = () => {
  return (
    <div className="about" id="about">
      <h1>Ali Navidi</h1>

      <a href="https://git.io/typing-svg">
        <img
          src="https://readme-typing-svg.herokuapp.com?font=Roboto+Condensed&size=28&pause=1000&color=FFFFFF&center=true&vCenter=true&width=435&lines=Full-stack+web+developer;Software+engineering+student;Always+learning+new+things;Working+hard+to+be+better"
          alt="Typing SVG"
        />
      </a>

      <a href="/My Resume.pdf" download={true}>
        <div className="btn from-top resume">Resume</div>
      </a>
    </div>
  );
};

export default About;
