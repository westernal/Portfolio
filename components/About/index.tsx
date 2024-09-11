import Heading from "../shared/Heading";
import Testimonials from "./Testimonials";

const About = () => {
  return (
    <section className="about about-page center active-page" id="about">
      <section className="about-card ">
        <div className="about-me">
          <Heading text="About Me" className="about-heading" />
        </div>
        <div className="about-info">
          <p>
            Frontend Developer with 3+ years of experience building responsive
            web apps using Next.js and React. Led teams, optimized performance,
            and delivered scalable solutions. Also familiar with backend
            concepts, enabling better cross-functional collaboration and project
            outcomes.
          </p>

          <div className="flex about-btns column-mobile">
            <a
              href="mailto:ali_navidi24@yahoo.com?subject=Hi Ali, I Want to Hire You!"
              style={{ display: "grid", placeItems: "center" }}
            >
              <button
                className="btn secondary-btn dark-hover from-top resume"
                style={{ marginTop: "2rem" }}
              >
                Let's Connect
              </button>
            </a>
          </div>
        </div>
      </section>

      <Testimonials />
    </section>
  );
};

export default About;
