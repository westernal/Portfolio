import Image from "next/image";

const Jobs = () => {
  return (
    <section className="jobs reveal" id="jobs">
      <h2>Recent Jobs</h2>

      <div className="job">
        <div className="job-profile">
          <div className="company-logo flex">
            <Image
              width={100}
              height={100}
              src="/Images/logo.svg"
              alt="oben origin"
            />
          </div>
          <div className="job-name">
            <h3>Front End Developer</h3>
            <p>Oben Origin co. - Tehran, Iran</p>
          </div>
        </div>
        <div className="date">01/2020 - 11/2021</div>
      </div>
      <div className="job">
        <div className="job-profile">
          <div className="company-logo flex">
            <Image
              width={55}
              height={75}
              src="/Images/Sticker-1-05 1.png"
              alt="oben origin"
            />
          </div>
          <div className="job-name">
            <h3>Front End Engineer</h3>
            <p>Restarone Solutions Inc. - Toronto, Canada</p>
          </div>
        </div>
        <div className="date">09/2022 - 12/2022</div>
      </div>
    </section>
  );
};

export default Jobs;
