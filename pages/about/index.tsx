/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

const About = () => {
  return (
    <section className="about center active-page" id="about">
      <section className="about-card reveal ">
        <div className="about-me flex">
          <div className="about-img">
            <Image
              src={"/Images/unnamed2.jpg"}
              width={60}
              height={60}
              alt="my picture"
            />
          </div>
          <div className="about-title">
            <h1 id="name"> Ali Navidi</h1>
            <p className="titles">
              Frontend Developer - Studied Software Engineering at{" "}
              <a href="https://nit.ac.ir/" id="university">
                BNUT
              </a>
            </p>
          </div>
        </div>
        <div className="about-info">
          <p>
            With solid experience in frontend development and leadership, I'm
            the driving force behind projects that break the mold and leave
            users craving more. It's not just about meeting expectations; it's
            about blowing them away.
          </p>

          <div className="flex about-btns">
            <a href="/Ali Navidi Resume.pdf" download={true} id="resume">
              <button className="btn from-top resume">Resume</button>
            </a>
            <a href="mailto:ali_navidi24@yahoo.com">
              <button className="btn from-top resume">Email me</button>
            </a>
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;
