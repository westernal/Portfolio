import Link from "next/link";
import { profile } from "../../data/profile";
import { buildDateISO, buildDateLong, buildYear } from "../../functions/buildDate";

const FooterInfo = () => {
  return (
    <footer className="footer-info">
      <p>
        {profile.name} © {buildYear}
      </p>

      {/* The only sitewide link to /resume — enough for it to be crawled, and
          the place a reader looks once they've reached the end anyway. Tracked
          like the header and mobile CTAs, so `resume_opened` counts all three
          routes to the same page rather than only the one in the header. */}
      <p>
        <Link
          href="/resume"
          className="text-link"
          data-track="resume_opened"
          data-track-location="footer"
        >
          Résumé
        </Link>
      </p>

      <p>
        Built with Next.js · {profile.location} ({profile.timezone})
      </p>

      {/* A site with no date on it reads as abandoned. This one is generated at
          build time, so it is the deploy date rather than a claim. */}
      <p className="footer-updated">
        Updated <time dateTime={buildDateISO}>{buildDateLong}</time>
      </p>
    </footer>
  );
};

export default FooterInfo;
