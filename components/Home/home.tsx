import Link from "next/link";

const HomePage = () => {
  return (
    <section className="about center active-page" id="home-page">
      <section className="info ">
        <div className="flex name">
          <span className="first-name">
            <span className="reveal">ALI</span>
          </span>
          <span className="last-name">
            <span className="reveal">NAVIDI</span>
          </span>
        </div>
        <div className="title reveal">Frontend Developer</div>
        <div className="flex reveal resume-btn">
          <Link href={"/about"}>
            <button className="btn from-top resume ">About Me</button>
          </Link>
          <a href="/Ali Navidi Resume.pdf" download={true} id="resume">
            <button className="btn from-top resume ">Resume</button>
          </a>
        </div>
      </section>
    </section>
  );
};

export default HomePage;
