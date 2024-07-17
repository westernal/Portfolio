/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Heading from "../shared/Heading";
import Testimonials from "./Testimonials";

const About = () => {
  return (
    <section className="about about-page center active-page" id="about">
      <section className="about-card reveal ">
        <div className="about-me">
          <Heading text="About Me" style={{ color: "white" }} />
        </div>
        <div className="about-info">
          <div className="about-img">
            <Image
              src={"/Images/IMG_5179.png"}
              width={300}
              height={350}
              alt="my picture"
            />
          </div>
          <p>
            Hello! I'm Ali Navidi, a frontend developer with over three years of
            experience. I specialize in React.js and Next.js, leveraging my
            background in Computer Engineering to create efficient, scalable web
            applications.
          </p>

          <p>
            In my career, I've had the opportunity to lead teams through complex
            projects, ensuring we deliver top-notch solutions that meet and
            exceed client expectations. I thrive on problem-solving and
            optimizing performance to provide exceptional user experiences.
          </p>

          <p>
            Thank you for visiting my website! If you're interested in
            discussing potential opportunities or collaborations, feel free to
            reach out. Let's connect and create something extraordinary
            together!
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
