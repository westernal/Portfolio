import Link from "next/link";
import { profile } from "../../data/profile";

const FooterInfo = () => {
  return (
    <footer className="footer-info">
      <p>
        {profile.name} © {new Date().getFullYear()}
      </p>

      {/* The only sitewide link to /resume — enough for it to be crawled, and
          the place a reader looks once they've reached the end anyway. */}
      <p>
        <Link href="/resume" className="text-link">
          Résumé
        </Link>
      </p>

      <p>
        Built with Next.js · {profile.location} ({profile.timezone})
      </p>
    </footer>
  );
};

export default FooterInfo;
