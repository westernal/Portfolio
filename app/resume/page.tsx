import type { Metadata } from "next";
import Link from "next/link";
import FooterInfo from "../../components/FooterInfo/index";
import { jobs } from "../../data/jobs";
import { skillGroups } from "../../data/skills";
import { mailtoHref, profile } from "../../data/profile";
import { buildDateISO, buildMonth } from "../../functions/buildDate";

export const dynamic = "force-static";

const description = `The full résumé of ${profile.name}, ${profile.role} in ${profile.location} — ${profile.yearsExperience}+ years across AI, insurance and regulatory SaaS.`;

export const metadata: Metadata = {
  title: `Résumé — ${profile.name}`,
  description,
  alternates: { canonical: "/resume" },
  openGraph: {
    title: `Résumé — ${profile.name}`,
    description,
    url: `${profile.siteUrl}/resume`,
    type: "profile",
  },
};

/** github.com/westernal rather than https://github.com/westernal. */
const linkLabel = (url: string) =>
  url.replace("https://", "").replace("www.", "").replace(/\/$/, "");

const ResumePage = () => {
  const { education } = profile;

  return (
    <>
      <article className="section resume">
        <header className="resume-head">
          <h1 className="resume-name">{profile.name}</h1>
          <p className="resume-role">{profile.role}</p>

          <ul className="resume-contact">
            <li>
              <a
                href={mailtoHref}
                data-track="email_clicked"
                data-track-location="resume"
              >
                {profile.email}
              </a>
            </li>
            <li>
              <a href={profile.siteUrl}>{linkLabel(profile.siteUrl)}</a>
            </li>
            <li>
              <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
                {linkLabel(profile.links.linkedin)}
              </a>
            </li>
            <li>
              <a href={profile.links.github} target="_blank" rel="noreferrer">
                {linkLabel(profile.links.github)}
              </a>
            </li>
            <li>
              {profile.location} · {profile.timezone}
            </li>
          </ul>

          {/* A résumé with no date on it is the one thing every reader silently
              discounts. Build-time, so it stays true without being maintained. */}
          <p className="resume-updated">
            Updated <time dateTime={buildDateISO}>{buildMonth}</time>
          </p>

          {/* Hidden in print — the reader is already holding the paper version. */}
          <div className="resume-actions">
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
              data-track="resume_opened"
              data-track-location="resume-page"
            >
              Download PDF
            </a>
            <Link href="/" className="btn btn-ghost">
              Back to the site
            </Link>
          </div>
        </header>

        <section className="resume-section">
          <h2>Summary</h2>
          <p className="resume-summary">
            {profile.headline} {profile.subheadline}
          </p>
        </section>

        <section className="resume-section">
          <h2>Experience</h2>

          <ol className="resume-jobs">
            {jobs.map((job) => (
              <li className="resume-job" key={job.id}>
                <h3 className="resume-job-title">
                  {job.title}, {job.company}
                </h3>
                <p className="resume-job-meta">
                  {job.location} · {job.duration.from} — {job.duration.to}
                </p>

                <ul className="resume-highlights">
                  {job.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>

                <p className="resume-job-stack">{job.stack.join(" · ")}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="resume-section">
          <h2>Skills</h2>

          {/* A definition list rather than chips: this page gets printed and
              pasted into ATS boxes, both of which want plain comma-separated
              text far more than they want pills. */}
          <dl className="resume-skills">
            {skillGroups.map((group) => (
              <div className="resume-skill-row" key={group.title}>
                <dt>{group.title}</dt>
                <dd>{group.items.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="resume-section">
          <h2>Education</h2>

          <h3 className="resume-job-title">
            {education.degree} — {education.institution}
          </h3>
          <p className="resume-job-meta">{education.years}</p>

          <ul className="resume-highlights">
            {education.notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </section>
      </article>

      <FooterInfo />
    </>
  );
};

export default ResumePage;
