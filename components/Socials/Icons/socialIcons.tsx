import Image from "next/image";

const socialIcons = () => {
  return (
    <section className="social-icons skills-list reveal right-reveal">
      <a href="mailto:ali_navidi24@yahoo.com" className="social-icon">
        <Image
          src="/Images/email.svg"
          alt="Email"
          title="Email"
          id="Email"
          width={30}
          height={30}
        />
        <p>Email</p>
      </a>

      <a href="https://t.me/alinvd" className="social-icon">
        <Image
          src="/Images/telegram.svg"
          alt="Telegram"
          title="Telegram"
          id="Telegram"
          width={30}
          height={30}
        />
        <p>Telegram</p>
      </a>

      <a href="https://github.com/westernal" className="social-icon">
        <Image
          src="/Images/github.svg"
          alt="Github"
          title="Github"
          id="Github"
          width={30}
          height={30}
        />
        <p>Github</p>
      </a>

      <a href="https://instagram.com/aliinavidi" className="social-icon">
        <Image
          src="/Images/instagram.svg"
          alt="Instagram"
          title="Instagram"
          id="Instagram"
          width={30}
          height={30}
        />
        <p>Instagram</p>
      </a>

      <a href="https://twitter.com/westernal" className="social-icon">
        <Image
          src="/Images/twitter.svg"
          alt="Twitter"
          title="Twitter"
          id="Twitter"
          width={30}
          height={30}
        />
        <p>Twitter</p>
      </a>

      <a href="https://www.linkedin.com/in/ali-navidi/" className="social-icon">
        <Image
          src="/Images/linkedin.svg"
          alt="LinkedIn"
          title="LinkedIn"
          id="LinkedIn"
          width={30}
          height={30}
        />
        <p>LinkedIn</p>
      </a>

      <a
        href="https://stackoverflow.com/users/15353979/ali-navidi"
        className="social-icon"
      >
        <Image
          src="/Images/stack-overflow.png"
          alt="stackoverflow"
          title="StackOverflow"
          id="stackoverflow"
          width={30}
          height={30}
        />
        <p>StackOverflow</p>
      </a>

      <a href="https://dev.to/westernal" id="dev" className="social-icon">
        <Image
          src="/Images/dev-to-svgrepo-com.svg"
          alt="DEV"
          title="DEV"
          id="DEV"
          width={30}
          height={30}
        />
        <p>DEV</p>
      </a>
    </section>
  );
};

export default socialIcons;
