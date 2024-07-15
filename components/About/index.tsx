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
            Hello! I'm Ali Navidi, a passionate and experienced frontend
            developer with over three years of hands-on experience in the field.
            With a Bachelor of Science in Computer Engineering, I've built a
            strong foundation in software development and have honed my
            expertise in creating seamless, user-friendly interfaces.
          </p>

          <p>
            Throughout my career, I have led teams through complex projects,
            ensuring we deliver top-notch solutions that meet and exceed client
            expectations. My main skills lie in React and Next.js, where I've
            developed a deep understanding and proficiency. These frameworks
            allow me to build efficient, scalable, and high-performing web
            applications that provide exceptional user experiences.
          </p>

          <p>
            I thrive on problem-solving and enjoy the challenge of debugging and
            optimizing code to achieve the best possible performance. Leading a
            team has also given me the opportunity to mentor and inspire other
            developers, fostering a collaborative and innovative work
            environment.
          </p>

          <p>
            Thank you for visiting my website! If you're interested in
            collaborating or discussing potential opportunities, feel free to
            reach out. Let's connect and create something extraordinary
            together!
          </p>

          <div className="flex about-btns column-mobile">
            <a
              href="mailto:ali_navidi24@yahoo.com?subject=Hi Ali, I Want to Hire You!"
              style={{ display: "grid", placeItems: "center" }}
            >
              <button
                className="btn from-top resume"
                style={{ width: "200px", marginTop: "2rem" }}
              >
                Hire Me
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
