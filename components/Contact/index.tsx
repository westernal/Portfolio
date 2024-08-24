import { socialMedias } from "../../data/contacts";
import Image from "next/image";
import Heading from "../shared/Heading";

const Socials = () => {
  return (
    <section className="socials" id="contact">
      <div className="socials-layout">
        <Heading text="Be in touch with me" />
        <section className="social-icons skills-list contacts-list">
          {socialMedias.map((socialMedia, index) => {
            return (
              <a
                href={socialMedia.url}
                className="social-icon"
                key={index}
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src={socialMedia.imageUrl}
                  alt={`${socialMedia.name} logo`}
                  title={socialMedia.name}
                  id={socialMedia.name}
                  width={30}
                  height={30}
                />
                <p>{socialMedia.name}</p>
              </a>
            );
          })}
        </section>
      </div>
    </section>
  );
};

export default Socials;
