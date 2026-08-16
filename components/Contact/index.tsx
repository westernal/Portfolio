"use client";

import Heading from "../shared/Heading";
import SocialIcons from "../SocialIcons";
import ContactForm from "./Form";
import { mailtoHref, profile } from "../../data/profile";

const Socials = () => {
  return (
    <section className="section socials" id="contact">
      <div className="socials-layout">
        <div className="contact-intro">
          <Heading
            text="Get in touch"
            eyebrow="Next step"
            className="align-left"
          />

          {profile.availability.open && (
            <p className="availability">
              <span className="availability-dot" aria-hidden="true" />
              {profile.availability.label}
            </p>
          )}

          <p className="contact-copy">
            Hiring, or just want a second opinion on a frontend problem? Write
            to me directly — I reply to every message within a day or two.
          </p>

          <a href={mailtoHref} className="contact-email">
            {profile.email}
          </a>

          <p className="contact-meta">
            {profile.location} · {profile.timezone} — {profile.timezoneNote}
          </p>

          <SocialIcons className="contact-socials" />
        </div>

        <ContactForm />
      </div>
    </section>
  );
};

export default Socials;
