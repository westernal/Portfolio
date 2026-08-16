import { profile } from "../../data/profile";

const FooterInfo = () => {
  return (
    <footer className="footer-info">
      <p>
        {profile.name} © {new Date().getFullYear()}
      </p>
      <p>
        Built with Next.js · {profile.location} ({profile.timezone})
      </p>
    </footer>
  );
};

export default FooterInfo;
