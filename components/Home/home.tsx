const HomePage = () => {
  return (
    <section className="about home center active-page" id="about">
      <section className="info ">
        <div className="flex name">
          <span className="first-name">
            <span className="reveal">A</span>
            <span className="reveal">L</span>
            <span className="reveal">I</span>
          </span>
          <span className="last-name">
            <span className="reveal">N</span>
            <span className="reveal">A</span>
            <span className="reveal">V</span>
            <span className="reveal">I</span>
            <span className="reveal">D</span>
            <span className="reveal">I</span>
          </span>
        </div>
        <div className="title reveal">Frontend Developer</div>
        <div className="flex reveal resume-btn">
          <a href="/Ali Navidi Resume.pdf" download={true} id="resume">
            <button className="btn from-top resume ">Resume</button>
          </a>
        </div>
      </section>
    </section>
  );
};

export default HomePage;
