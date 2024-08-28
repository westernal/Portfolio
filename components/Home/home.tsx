import Link from "next/link";

const HomePage = () => {
  return (
    <section className="about center" id="home-page">
      <section className="info ">
        <div className="flex name">
          <span className="first-name">ALI</span>
          <span className="last-name">NAVIDI</span>
        </div>
        <div className="title ">
          Frontend Developer | I Bring Lines of Code to Life
        </div>
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
      </section>
    </section>
  );
};

export default HomePage;
