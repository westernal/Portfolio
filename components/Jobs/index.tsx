"use client";

import Image from "next/image";
import { jobs } from "../../data/jobs";
import Heading from "../shared/Heading";
import { motion } from "framer-motion";

const Jobs = () => {
  return (
    <section className="jobs" id="jobs">
      <Heading text="Work Experience" />

      <div className="job-list">
        {jobs.map((job, index) => (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`job`}
            key={job.id}
          >
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
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Jobs;
