import { socialMedias } from "../../DataLists/contacts";
import Image from "next/image";

const Socials = () => {
  return (
    <section className="socials" id="socials">
      <section className="social-icons skills-list reveal right-reveal">
        {socialMedias.map((socialMedia, index) => {
          return (
            <a
              href={socialMedia.url}
              className="social-icon"
              key={index}
              target="_blank"
            >
              <Image
                src={socialMedia.imageUrl}
                alt={socialMedia.name}
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
    </section>
  );
};

export default Socials;
