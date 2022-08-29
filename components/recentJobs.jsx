import Image from "next/image";

const Jobs = () => {
  return (
    <div className="jobs reveal" id="jobs">
      <h2>Recent Jobs</h2>

      <div className="job">
        <div className="job-profile">
          <Image
            width={100}
            height={100}
            src="/Images/logo.svg"
            alt="oben origin"
          />
          <div className="job-name">
            <h3>Front-End Developer</h3>
            <p>Oben Origin co. - Tehran, Iran</p>
          </div>
        </div>
        <div className="date">01/2020 - 11/2021</div>
      </div>
      <div className="job">
        <div className="job-profile">
          <Image
            width={100}
            height={100}
            src="/Images/restarone.svg"
            alt="oben origin"
          />
          <div className="job-name">
            <h3>Web Developer</h3>
            <p>Restarone Solutions Inc. - Toronto, Canada</p>
          </div>
        </div>
        <div className="date">09/2022 - Now</div>
      </div>
    </div>
  );
};

export default Jobs;
