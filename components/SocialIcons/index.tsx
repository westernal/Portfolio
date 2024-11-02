import Image from "next/image";

const SocialIcons = () => {
  return (
    <div className="header-icons flex">
      <a
        href="mailto:ali_navidi24@yahoo.com"
        className="social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          src="/Images/email.svg"
          alt="Email"
          title="Email"
          id="Email"
          width={25}
          height={25}
        />
      </a>
      <a
        href="https://github.com/westernal"
        className="social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          src="/Images/github.svg"
          alt="Github"
          title="Github"
          id="Github"
          width={25}
          height={25}
        />
      </a>
      <a
        href="https://www.linkedin.com/in/ali-navidi/"
        className="social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          src="/Images/linkedin.svg"
          alt="LinkedIn"
          title="LinkedIn"
          id="LinkedIn"
          width={25}
          height={25}
        />
      </a>
      <a
        href="https://stackoverflow.com/users/15353979/ali-navidi"
        className="social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          src="/Images/stackoverflow.svg"
          alt="StackOverflow"
          title="StackOverflow"
          id="StackOverflow"
          width={25}
          height={25}
        />
      </a>
    </div>
  );
};

export default SocialIcons;
