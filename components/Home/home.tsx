import Link from "next/link";
import SocialIcons from "../SocialIcons";

const HomePage = () => {
  return (
    <section className="about center" id="home-page">
      <section className="info ">
        <div className="flex name">
          <span className="last-name">ALI NAVIDI</span>
        </div>
        <p className="title ">
          Frontend Developer | I Bring Lines of Code to Life
        </p>

        <div className="  resume-btn column-mobile">
          <Link href="/Ali Navidi Resume.pdf" target="_blank" id="resume">
            <button className="btn secondary-btn  from-top resume ">
              Resume
            </button>
          </Link>
          <Link href="mailto:ali_navidi24@yahoo.com?subject=Hi Ali, I Want to Hire You!">
            <button className="btn  from-top resume ">Hire Me</button>
          </Link>
        </div>

        <SocialIcons />
      </section>
    </section>
  );
};

export default HomePage;
