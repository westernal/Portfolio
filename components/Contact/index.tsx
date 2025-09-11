"use client";

import Heading from "../shared/Heading";
import SocialIcons from "../SocialIcons";
import ContactForm from "./Form";

const Socials = () => {
  return (
    <section className="socials" id="contact">
      <div className="socials-layout">
        <div>
          <Heading text="Be in touch with me" />
          <SocialIcons />
        </div>
        <ContactForm />
      </div>
    </section>
  );
};

export default Socials;
