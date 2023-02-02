import Image from "next/image";
import { jobs } from "../DataLists/jobs";

const Jobs = () => {
  return (
    <section className="jobs reveal" id="jobs">
      <h2>Recent Jobs</h2>

      {jobs.map((job) => (
        <div className="job" key={job.id}>
          <div className="job-profile">
            <div className="company-logo flex">
              <Image
                width={job.companyLogo.width}
                height={job.companyLogo.height}
                src={job.companyLogo.url}
                alt={job.company}
              />
            </div>
            <div className="job-name">
              <h3>{job.title}</h3>
              <p>
                {job.company} - {job.location}
              </p>
            </div>
          </div>
          <div className="date">
            {job.duration.from} - {job.duration.to}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Jobs;
