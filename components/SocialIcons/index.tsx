import Image from "next/image";
import { socialMedias } from "../../data/contacts";

const SocialIcons = ({ className = "" }: { className?: string }) => {
  return (
    <ul className={`social-icons flex ${className}`}>
      {socialMedias.map((social) => (
        <li key={social.name}>
          <a
            href={social.url}
            className="social-icon"
            target="_blank"
            rel="noreferrer"
            aria-label={social.name}
            title={social.name}
          >
            <Image
              src={social.imageUrl}
              alt=""
              width={24}
              height={24}
              loading="eager"
            />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialIcons;
