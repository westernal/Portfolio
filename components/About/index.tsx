import Heading from "../shared/Heading";
import Testimonials from "./Testimonials";
import { skillGroups } from "../../data/skills";
import { mailtoHref, profile } from "../../data/profile";

const About = () => {
  return (
    <section className="section about" id="about">
      <Heading text="About" eyebrow="Who you'd be hiring" />

      <div className="about-grid">
        <div className="about-copy">
          <p>
            I&apos;m a frontend engineer who cares about the parts people
            actually feel: how quickly a page becomes usable, whether a form
            works from the keyboard, and whether the code still makes sense to
            whoever opens it next.
          </p>
          <p>
            In {profile.yearsExperience}+ years I&apos;ve gone from intern to
            team lead. Most recently I led frontend at a Swiss AI startup —
            owning the codebase, setting the review bar, and mentoring the
            developers working in it. Today I&apos;m rebuilding the front end of
            a high-traffic insurance marketplace in Next.js.
          </p>
          <p>
            I&apos;m comfortable past the browser too — Node, Express, MongoDB,
            Docker — which mostly means I can have a useful argument with a
            backend engineer instead of just filing a ticket. I write up what I
            learn on{" "}
            <a
              href={profile.links.devto}
              target="_blank"
              rel="noreferrer"
              className="text-link"
            >
              dev.to
            </a>
            , and I built a music-first social network on evenings and weekends
            because I wanted to see if I could.
          </p>

          <div className="about-actions">
            <a href={mailtoHref} className="btn btn-primary">
              Let&apos;s talk
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost"
            >
              LinkedIn<span aria-hidden="true"> ↗</span>
            </a>
          </div>
        </div>
      </div>

      <div className="skill-groups" id="skills">
        <h3 className="subheading">Stack &amp; tooling</h3>
        <div className="skill-groups-grid">
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.title}>
              <h4>{group.title}</h4>
              <ul className="chips">
                {group.items.map((item) => (
                  <li className="chip" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <Testimonials />
    </section>
  );
};

export default About;
