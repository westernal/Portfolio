"use client";

import Image from "next/image";
import { jobs } from "../../data/jobs";
import Heading from "../shared/Heading";
import { motion } from "framer-motion";

const Jobs = () => {
  return (
    <section className="section jobs" id="experience">
      <Heading
        text="Experience"
        eyebrow="Where I've worked"
        lead="Five roles across Iran, Switzerland and Canada — with what actually changed in each."
      />

      <ol className="timeline">
        {jobs.map((job, index) => (
          <motion.li
            initial={{ y: 32, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.45, delay: Math.min(index, 3) * 0.08 }}
            // Defaults only. Passing `amount`/`margin` here stopped the
            // observer firing at all and left every entry invisible.
            viewport={{ once: true }}
            className="timeline-item"
            key={job.id}
          >
            <div className="timeline-marker" aria-hidden="true">
              <Image
                width={job.companyLogo.width}
                height={job.companyLogo.height}
                src={job.companyLogo.url}
                alt=""
              />
            </div>

            <div className="timeline-body">
              <div className="timeline-head">
                <h3 className="timeline-title">
                  {job.title}
                  {job.badge && <span className="badge">{job.badge}</span>}
                </h3>
                <p className="timeline-date">
                  {job.duration.from} — {job.duration.to}
                </p>
              </div>

              <p className="timeline-company">
                {job.company} · {job.location}
              </p>

              <ul className="timeline-highlights">
                {job.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>

              <ul className="chips" aria-label={`${job.company} tech stack`}>
                {job.stack.map((tech) => (
                  <li className="chip" key={tech}>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </motion.li>
        ))}
      </ol>
    </section>
  );
};

export default Jobs;
