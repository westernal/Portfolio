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
        <div className=" reveal resume-btn column-mobile">
          <Link href="/Ali Navidi Resume.pdf" download={true} id="resume">
            <button className="btn secondary-btn  from-top resume ">
              Resume
            </button>
          </Link>
          <Link href="mailto:ali_navidi24@yahoo.com?subject=Hi Ali, I Want to Hire You!">
            <button className="btn  from-top resume ">Hire Me</button>
          </Link>
        </div>
      </section>
    </section>
  );
};

export default HomePage;
