const Projects = () => {
  return (
    <div className="jobs reveal projects" id="jobs">
      <h2>Projects</h2>
      <div className="project">
        <a href="https://github.com/westernal/Cinema">
          <img
            src="/Images/screenshot-rocks.svg"
            alt="Cinema website"
            className="web"
          />
          <img
            src="/Images/5279C0FE-F244-4B54-B9C6-BB18F7D07078_iphone13blue_portrait.png"
            alt="Cinema mobile"
            className="mobile"
          />
        </a>

        <a href="https://github.com/westernal/Dashoard">
          <img
            src="/Images/screenshot-rocks (1).svg"
            alt="Dashboard"
            className="web"
          />
          <img
            src="/Images/A05D135D-6A5D-4210-AFB3-C35D4F73284F_iphone13red_portrait.png"
            alt="Dashboard"
            className="mobile"
          />
        </a>

        <a href="https://sari-sartel.com/">
          <img
            src="/Images/screenshot-rocks (3).svg"
            alt="Sartel Website"
            className="web"
          />
          <img
            src="/Images/DB43DA89_2874_487D_A50A_CBE7E281960F_iphone13starlight_portrait.png"
            alt="Sartel mobile"
            className="mobile"
          />
        </a>

        <a href="https://social-media-westernal.vercel.app/">
          <img
            src="/Images/screenshot-rocks (2).svg"
            alt="Westernal website"
            className="web"
          />
          <img
            src="/Images/467CC025_8F4E_48F5_8912_26EADF11976A_iphone13midnight_portrait.png"
            alt="Westernal mobile"
            className="mobile"
          />
        </a>
      </div>
      <div className="flex .project-more blog-more">
        <a href="https://github.com/westernal">See More</a>
      </div>
    </div>
  );
};

export default Projects;
